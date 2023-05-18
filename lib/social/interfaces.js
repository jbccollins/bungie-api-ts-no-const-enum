export let PlatformFriendType;
(function (PlatformFriendType) {
  PlatformFriendType[(PlatformFriendType['Unknown'] = 0)] = 'Unknown';
  PlatformFriendType[(PlatformFriendType['Xbox'] = 1)] = 'Xbox';
  PlatformFriendType[(PlatformFriendType['PSN'] = 2)] = 'PSN';
  PlatformFriendType[(PlatformFriendType['Steam'] = 3)] = 'Steam';
  PlatformFriendType[(PlatformFriendType['Egs'] = 4)] = 'Egs';
})(PlatformFriendType || (PlatformFriendType = {}));
export let PresenceStatus;
(function (PresenceStatus) {
  PresenceStatus[(PresenceStatus['OfflineOrUnknown'] = 0)] = 'OfflineOrUnknown';
  PresenceStatus[(PresenceStatus['Online'] = 1)] = 'Online';
})(PresenceStatus || (PresenceStatus = {}));
export let PresenceOnlineStateFlags;
(function (PresenceOnlineStateFlags) {
  PresenceOnlineStateFlags[(PresenceOnlineStateFlags['None'] = 0)] = 'None';
  PresenceOnlineStateFlags[(PresenceOnlineStateFlags['Destiny1'] = 1)] = 'Destiny1';
  PresenceOnlineStateFlags[(PresenceOnlineStateFlags['Destiny2'] = 2)] = 'Destiny2';
})(PresenceOnlineStateFlags || (PresenceOnlineStateFlags = {}));
export let FriendRelationshipState;
(function (FriendRelationshipState) {
  FriendRelationshipState[(FriendRelationshipState['Unknown'] = 0)] = 'Unknown';
  FriendRelationshipState[(FriendRelationshipState['Friend'] = 1)] = 'Friend';
  FriendRelationshipState[(FriendRelationshipState['IncomingRequest'] = 2)] = 'IncomingRequest';
  FriendRelationshipState[(FriendRelationshipState['OutgoingRequest'] = 3)] = 'OutgoingRequest';
})(FriendRelationshipState || (FriendRelationshipState = {}));
