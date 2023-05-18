export let GroupType;
(function (GroupType) {
  GroupType[(GroupType['General'] = 0)] = 'General';
  GroupType[(GroupType['Clan'] = 1)] = 'Clan';
})(GroupType || (GroupType = {}));
export let ChatSecuritySetting;
(function (ChatSecuritySetting) {
  ChatSecuritySetting[(ChatSecuritySetting['Group'] = 0)] = 'Group';
  ChatSecuritySetting[(ChatSecuritySetting['Admins'] = 1)] = 'Admins';
})(ChatSecuritySetting || (ChatSecuritySetting = {}));
export let GroupHomepage;
(function (GroupHomepage) {
  GroupHomepage[(GroupHomepage['Wall'] = 0)] = 'Wall';
  GroupHomepage[(GroupHomepage['Forum'] = 1)] = 'Forum';
  GroupHomepage[(GroupHomepage['AllianceForum'] = 2)] = 'AllianceForum';
})(GroupHomepage || (GroupHomepage = {}));
export let MembershipOption;
(function (MembershipOption) {
  MembershipOption[(MembershipOption['Reviewed'] = 0)] = 'Reviewed';
  MembershipOption[(MembershipOption['Open'] = 1)] = 'Open';
  MembershipOption[(MembershipOption['Closed'] = 2)] = 'Closed';
})(MembershipOption || (MembershipOption = {}));
export let GroupPostPublicity;
(function (GroupPostPublicity) {
  GroupPostPublicity[(GroupPostPublicity['Public'] = 0)] = 'Public';
  GroupPostPublicity[(GroupPostPublicity['Alliance'] = 1)] = 'Alliance';
  GroupPostPublicity[(GroupPostPublicity['Private'] = 2)] = 'Private';
})(GroupPostPublicity || (GroupPostPublicity = {}));
export let Capabilities;
(function (Capabilities) {
  Capabilities[(Capabilities['None'] = 0)] = 'None';
  Capabilities[(Capabilities['Leaderboards'] = 1)] = 'Leaderboards';
  Capabilities[(Capabilities['Callsign'] = 2)] = 'Callsign';
  Capabilities[(Capabilities['OptionalConversations'] = 4)] = 'OptionalConversations';
  Capabilities[(Capabilities['ClanBanner'] = 8)] = 'ClanBanner';
  Capabilities[(Capabilities['D2InvestmentData'] = 16)] = 'D2InvestmentData';
  Capabilities[(Capabilities['Tags'] = 32)] = 'Tags';
  Capabilities[(Capabilities['Alliances'] = 64)] = 'Alliances';
})(Capabilities || (Capabilities = {}));
export let HostGuidedGamesPermissionLevel;
(function (HostGuidedGamesPermissionLevel) {
  HostGuidedGamesPermissionLevel[(HostGuidedGamesPermissionLevel['None'] = 0)] = 'None';
  HostGuidedGamesPermissionLevel[(HostGuidedGamesPermissionLevel['Beginner'] = 1)] = 'Beginner';
  HostGuidedGamesPermissionLevel[(HostGuidedGamesPermissionLevel['Member'] = 2)] = 'Member';
})(HostGuidedGamesPermissionLevel || (HostGuidedGamesPermissionLevel = {}));
export let RuntimeGroupMemberType;
(function (RuntimeGroupMemberType) {
  RuntimeGroupMemberType[(RuntimeGroupMemberType['None'] = 0)] = 'None';
  RuntimeGroupMemberType[(RuntimeGroupMemberType['Beginner'] = 1)] = 'Beginner';
  RuntimeGroupMemberType[(RuntimeGroupMemberType['Member'] = 2)] = 'Member';
  RuntimeGroupMemberType[(RuntimeGroupMemberType['Admin'] = 3)] = 'Admin';
  RuntimeGroupMemberType[(RuntimeGroupMemberType['ActingFounder'] = 4)] = 'ActingFounder';
  RuntimeGroupMemberType[(RuntimeGroupMemberType['Founder'] = 5)] = 'Founder';
})(RuntimeGroupMemberType || (RuntimeGroupMemberType = {}));
export let GroupAllianceStatus;
(function (GroupAllianceStatus) {
  GroupAllianceStatus[(GroupAllianceStatus['Unallied'] = 0)] = 'Unallied';
  GroupAllianceStatus[(GroupAllianceStatus['Parent'] = 1)] = 'Parent';
  GroupAllianceStatus[(GroupAllianceStatus['Child'] = 2)] = 'Child';
})(GroupAllianceStatus || (GroupAllianceStatus = {}));
export let GroupPotentialMemberStatus;
(function (GroupPotentialMemberStatus) {
  GroupPotentialMemberStatus[(GroupPotentialMemberStatus['None'] = 0)] = 'None';
  GroupPotentialMemberStatus[(GroupPotentialMemberStatus['Applicant'] = 1)] = 'Applicant';
  GroupPotentialMemberStatus[(GroupPotentialMemberStatus['Invitee'] = 2)] = 'Invitee';
})(GroupPotentialMemberStatus || (GroupPotentialMemberStatus = {}));
export let GroupDateRange;
(function (GroupDateRange) {
  GroupDateRange[(GroupDateRange['All'] = 0)] = 'All';
  GroupDateRange[(GroupDateRange['PastDay'] = 1)] = 'PastDay';
  GroupDateRange[(GroupDateRange['PastWeek'] = 2)] = 'PastWeek';
  GroupDateRange[(GroupDateRange['PastMonth'] = 3)] = 'PastMonth';
  GroupDateRange[(GroupDateRange['PastYear'] = 4)] = 'PastYear';
})(GroupDateRange || (GroupDateRange = {}));
export let GroupsForMemberFilter;
(function (GroupsForMemberFilter) {
  GroupsForMemberFilter[(GroupsForMemberFilter['All'] = 0)] = 'All';
  GroupsForMemberFilter[(GroupsForMemberFilter['Founded'] = 1)] = 'Founded';
  GroupsForMemberFilter[(GroupsForMemberFilter['NonFounded'] = 2)] = 'NonFounded';
})(GroupsForMemberFilter || (GroupsForMemberFilter = {}));
export let GroupSortBy;
(function (GroupSortBy) {
  GroupSortBy[(GroupSortBy['Name'] = 0)] = 'Name';
  GroupSortBy[(GroupSortBy['Date'] = 1)] = 'Date';
  GroupSortBy[(GroupSortBy['Popularity'] = 2)] = 'Popularity';
  GroupSortBy[(GroupSortBy['Id'] = 3)] = 'Id';
})(GroupSortBy || (GroupSortBy = {}));
export let IgnoreLength;
(function (IgnoreLength) {
  IgnoreLength[(IgnoreLength['None'] = 0)] = 'None';
  IgnoreLength[(IgnoreLength['Week'] = 1)] = 'Week';
  IgnoreLength[(IgnoreLength['TwoWeeks'] = 2)] = 'TwoWeeks';
  IgnoreLength[(IgnoreLength['ThreeWeeks'] = 3)] = 'ThreeWeeks';
  IgnoreLength[(IgnoreLength['Month'] = 4)] = 'Month';
  IgnoreLength[(IgnoreLength['ThreeMonths'] = 5)] = 'ThreeMonths';
  IgnoreLength[(IgnoreLength['SixMonths'] = 6)] = 'SixMonths';
  IgnoreLength[(IgnoreLength['Year'] = 7)] = 'Year';
  IgnoreLength[(IgnoreLength['Forever'] = 8)] = 'Forever';
  IgnoreLength[(IgnoreLength['ThreeMinutes'] = 9)] = 'ThreeMinutes';
  IgnoreLength[(IgnoreLength['Hour'] = 10)] = 'Hour';
  IgnoreLength[(IgnoreLength['ThirtyDays'] = 11)] = 'ThirtyDays';
})(IgnoreLength || (IgnoreLength = {}));
export let GroupApplicationResolveState;
(function (GroupApplicationResolveState) {
  GroupApplicationResolveState[(GroupApplicationResolveState['Unresolved'] = 0)] = 'Unresolved';
  GroupApplicationResolveState[(GroupApplicationResolveState['Accepted'] = 1)] = 'Accepted';
  GroupApplicationResolveState[(GroupApplicationResolveState['Denied'] = 2)] = 'Denied';
  GroupApplicationResolveState[(GroupApplicationResolveState['Rescinded'] = 3)] = 'Rescinded';
})(GroupApplicationResolveState || (GroupApplicationResolveState = {}));
