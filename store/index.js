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
  },

  ADD_NEW_MESSAGE(state, message) {
    let groupIndex = 0;
    let group = state.groups.find((group, index) => {
      if (group._id === message.group_id) {
        groupIndex = index;
        return true;
      }
      return false;
    });
    group.messages.unshift(message);
    let groups = [...state.groups];
    groups[groupIndex] = group;
    state.groups = groups;
  }
};
