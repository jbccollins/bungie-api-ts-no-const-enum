import { DefInfo, getReferencedTypes, getRef } from './util.js';
import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { OpenAPIObject, SchemaObject, ReferenceObject } from 'openapi3-ts';

export function generateHeader(doc: OpenAPIObject): string {
  const { info } = doc;
  return `/**
 * ${info.title}
 * ${info.description}
 *
 * OpenAPI spec version: ${info.version}
 * Contact: ${info.contact!.email}
 *
 * NOTE: This class is auto generated by the bungie-api-ts-no-const-enum code generator program.
 * https://github.com/jbccollins/bungie-api-ts-no-const-enum
 * Do not edit these files manually.
 */`;
}

/**
 * Add the name of a referenced type from `schema` to the list of symbols to
 * import for a given imported module file.
 */
export function addImport(
  doc: OpenAPIObject,
  schema: SchemaObject | ReferenceObject,
  componentByDef: Readonly<{ [def: string]: DefInfo }>,
  importFiles: { [filename: string]: Set<string> } // mutated
) {
  const typeRef = getReferencedTypes(schema);
  if (typeRef && componentByDef[typeRef]) {
    if (typeRef.includes('/responses/')) {
      const component = getRef(doc, typeRef);
      if (component) {
        const property = component.properties!.Response;
        if (property) {
          (importFiles['common.ts'] ??= new Set()).add('ServerResponse');
          addImport(doc, property, componentByDef, importFiles);
          return;
        }
      }
    }

    const filename = componentByDef[typeRef].filename;
    (importFiles[filename] ??= new Set()).add(componentByDef[typeRef].interfaceName);
  }
}

/**
 * Given an output filename and a list of all symbols to be imported, generate
 * the actual import lines.
 */
export function generateImports(
  filename: string,
  importFiles: Readonly<{ [filename: string]: Set<string> }>
): string {
  return _.compact(
    _.map(importFiles, (types, f) => {
      const absImport = path.resolve('generated-src', f);
      const absDest = path.resolve(filename);
      if (absImport === absDest) {
        return undefined;
      }
      let relativePath = path.relative(path.dirname(absDest), absImport).replace(/(\.d)?\.ts$/, '');
      if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
      }
      if (path.sep === '\\') relativePath = relativePath.replace(/\\/g, '/');
      return `import {
  ${[...types].sort().join(',\n  ')}
} from '${relativePath}.js';`;
    })
  )
    .sort()
    .join('\n');
}

/**
 * Print a JSDoc documentation comment with the given string as its contents.
 */
export function docComment(text: string) {
  const lines = _.flatten(
    text
      .trim()
      .split('\n')
      .map((l) => l.replace(/(.{1,80}(?:\W|$))/g, '$1\n').split('\n'))
  ).map((s: string) => s.trim());
  lines.pop();

  if (lines.length === 1) {
    return `/** ${lines} */`;
  }

  return `/**
${lines.map((line) => (line.length ? ' * ' + line : ' *')).join('\n')}
 */`;
}

/**
 * Indent the given text a certain number of levels.
 */
export function indent(text: string, indentLevel: number) {
  const lines = text.split('\n');
  return lines.map((line) => '  '.repeat(indentLevel) + line).join('\n');
}

/**
 * Write a string contents out to a file.
 */
export async function writeOutFile(filename: string, contents: string) {
  try {
    await mkdirp(path.dirname(filename));

    fs.writeFile(filename, contents, null, (error) => {
      console.log(error ? error : `Done with ${filename}!`);
    });
  } catch (e) {
    console.error(e);
  }
}
