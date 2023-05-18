export let FireteamDateRange;
(function (FireteamDateRange) {
  FireteamDateRange[(FireteamDateRange['All'] = 0)] = 'All';
  FireteamDateRange[(FireteamDateRange['Now'] = 1)] = 'Now';
  FireteamDateRange[(FireteamDateRange['TwentyFourHours'] = 2)] = 'TwentyFourHours';
  FireteamDateRange[(FireteamDateRange['FortyEightHours'] = 3)] = 'FortyEightHours';
  FireteamDateRange[(FireteamDateRange['ThisWeek'] = 4)] = 'ThisWeek';
})(FireteamDateRange || (FireteamDateRange = {}));
export let FireteamPlatform;
(function (FireteamPlatform) {
  FireteamPlatform[(FireteamPlatform['Any'] = 0)] = 'Any';
  FireteamPlatform[(FireteamPlatform['Playstation4'] = 1)] = 'Playstation4';
  FireteamPlatform[(FireteamPlatform['XboxOne'] = 2)] = 'XboxOne';
  FireteamPlatform[(FireteamPlatform['Blizzard'] = 3)] = 'Blizzard';
  FireteamPlatform[(FireteamPlatform['Steam'] = 4)] = 'Steam';
  FireteamPlatform[(FireteamPlatform['Stadia'] = 5)] = 'Stadia';
  FireteamPlatform[(FireteamPlatform['Egs'] = 6)] = 'Egs';
})(FireteamPlatform || (FireteamPlatform = {}));
export let FireteamPublicSearchOption;
(function (FireteamPublicSearchOption) {
  FireteamPublicSearchOption[(FireteamPublicSearchOption['PublicAndPrivate'] = 0)] =
    'PublicAndPrivate';
  FireteamPublicSearchOption[(FireteamPublicSearchOption['PublicOnly'] = 1)] = 'PublicOnly';
  FireteamPublicSearchOption[(FireteamPublicSearchOption['PrivateOnly'] = 2)] = 'PrivateOnly';
})(FireteamPublicSearchOption || (FireteamPublicSearchOption = {}));
export let FireteamSlotSearch;
(function (FireteamSlotSearch) {
  FireteamSlotSearch[(FireteamSlotSearch['NoSlotRestriction'] = 0)] = 'NoSlotRestriction';
  FireteamSlotSearch[(FireteamSlotSearch['HasOpenPlayerSlots'] = 1)] = 'HasOpenPlayerSlots';
  FireteamSlotSearch[(FireteamSlotSearch['HasOpenPlayerOrAltSlots'] = 2)] =
    'HasOpenPlayerOrAltSlots';
})(FireteamSlotSearch || (FireteamSlotSearch = {}));
export let FireteamPlatformInviteResult;
(function (FireteamPlatformInviteResult) {
  FireteamPlatformInviteResult[(FireteamPlatformInviteResult['None'] = 0)] = 'None';
  FireteamPlatformInviteResult[(FireteamPlatformInviteResult['Success'] = 1)] = 'Success';
  FireteamPlatformInviteResult[(FireteamPlatformInviteResult['AlreadyInFireteam'] = 2)] =
    'AlreadyInFireteam';
  FireteamPlatformInviteResult[(FireteamPlatformInviteResult['Throttled'] = 3)] = 'Throttled';
  FireteamPlatformInviteResult[(FireteamPlatformInviteResult['ServiceError'] = 4)] = 'ServiceError';
})(FireteamPlatformInviteResult || (FireteamPlatformInviteResult = {}));
