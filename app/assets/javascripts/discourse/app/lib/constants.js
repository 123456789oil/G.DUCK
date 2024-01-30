// DO NOT EDIT THIS FILE!!!
// Update it by running `rake javascript:update_constants`

export const SEARCH_PRIORITIES = {
  ignore: 1,
  very_low: 2,
  low: 3,
  normal: 0,
  high: 4,
  very_high: 5,
};

export const SEARCH_PHRASE_REGEXP = '"([^"]+)"';

export const SIDEBAR_URL = {
  max_icon_length: 40,
  max_name_length: 80,
  max_value_length: 1000,
};

export const SIDEBAR_SECTION = {
  max_title_length: 30,
};

export const AUTO_GROUPS = {
  everyone: {
    id: 0,
    automatic: true,
    name: "everyone",
    display_name: "everyone",
  },
  admins: { id: 1, automatic: true, name: "admins", display_name: "admins" },
  moderators: {
    id: 2,
    automatic: true,
    name: "moderators",
    display_name: "moderators",
  },
  staff: { id: 3, automatic: true, name: "staff", display_name: "staff" },
  trust_level_0: {
    id: 10,
    automatic: true,
    name: "trust_level_0",
    display_name: "trust_level_0",
  },
  trust_level_1: {
    id: 11,
    automatic: true,
    name: "trust_level_1",
    display_name: "trust_level_1",
  },
  trust_level_2: {
    id: 12,
    automatic: true,
    name: "trust_level_2",
    display_name: "trust_level_2",
  },
  trust_level_3: {
    id: 13,
    automatic: true,
    name: "trust_level_3",
    display_name: "trust_level_3",
  },
  trust_level_4: {
    id: 14,
    automatic: true,
    name: "trust_level_4",
    display_name: "trust_level_4",
  },
};

export const MAX_NOTIFICATIONS_LIMIT_PARAMS = 60;
