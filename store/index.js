export const state = () => ({
  userInfo: {},
  friends: [],
  groups: [],
  notifications: [],
  selectedGroup: {}
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

  SET_SELECTED_GROUP(state, group) {
    state.selectedGroup = group;
  },

  ADD_GROUP(state, group) {
    let groups = [...state.groups];
    groups.unshift(group);
    state.groups = groups;
  },

  UPDATE_GROUP(state, group) {
    let groupIndex = 0;
    let groups = [...state.groups];
    let g = groups.find((g, index) => {
      if (g._id === group._id) {
        groupIndex = index;
        return true;
      }
      return false;
    });

    if (g) {
      groups[groupIndex] = group;
      if (!group.messages) {
        groups[groupIndex].messages = g.messages;
      }
    }

    state.groups = groups;
  },

  REMOVE_GROUP(state, groupId) {
    state.groups = state.groups.filter(group => group._id !== groupId);
  },

  SET_NOTIFICATIONS(state, payload) {
    state.notifications = payload;
  },

  ADD_NOTIFICATION(state, noti) {
    let notifications = [...state.notifications];
    notifications.unshift(noti);
    state.notifications = notifications;
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
  },

  UPDATE_FRIEND_STATUS(state, { username, active }) {
    if (username === state.userInfo.username) {
      return;
    }

    let friendIndex = 0;
    let friend = state.friends.find((user, index) => {
      if (user.username === username) {
        friendIndex = index;
        return true;
      }
      return false;
    });

    if (friend) {
      let friends = [...state.friends];
      friends[friendIndex].active = active;
      state.friends = friends;
    }
  },

  UPDATE_FRIEND_PROFILE(state, { username, name, avatar }) {
    let friendIndex = 0;
    let friend = state.friends.find((user, index) => {
      if (user.username === username) {
        friendIndex = index;
        return true;
      }
      return false;
    });

    if (friend) {
      let friends = [...state.friends];
      friends[friendIndex].name = name;
      friends[friendIndex].avatar = avatar;
      state.friends = friends;
    }
  },
};
