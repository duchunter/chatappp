export const state = () => ({
  userInfo: {},
  friends: [],
  groups: [],
  notifications: []
});

export const mutations = {
  SET_ALL_INFO(state, { userInfo, friends, groups, notifications }) {
    state.userInfo = userInfo;
    state.friends = friends;
    state.groups = groups;
    state.notifications = notifications;
  },

  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  },

  SET_FRIENDS(state, payload) {
    state.friends = payload;
  },

  SET_GROUPS(state, payload) {
    state.groups = payload;
  },

  SET_NOTIFICATIONS(state, payload) {
    state.notifications = payload;
  }
};
