export let GlobalAlertLevel;
(function (GlobalAlertLevel) {
  GlobalAlertLevel[(GlobalAlertLevel['Unknown'] = 0)] = 'Unknown';
  GlobalAlertLevel[(GlobalAlertLevel['Blue'] = 1)] = 'Blue';
  GlobalAlertLevel[(GlobalAlertLevel['Yellow'] = 2)] = 'Yellow';
  GlobalAlertLevel[(GlobalAlertLevel['Red'] = 3)] = 'Red';
})(GlobalAlertLevel || (GlobalAlertLevel = {}));
export let GlobalAlertType;
(function (GlobalAlertType) {
  GlobalAlertType[(GlobalAlertType['GlobalAlert'] = 0)] = 'GlobalAlert';
  GlobalAlertType[(GlobalAlertType['StreamingAlert'] = 1)] = 'StreamingAlert';
})(GlobalAlertType || (GlobalAlertType = {}));
