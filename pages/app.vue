<template>
  <main>
    <div
      v-loading="isLoading"
      class="layout"
    >
      <!-- Start of Navigation -->
      <Navigation />
      <!-- End of Navigation -->

      <!-- Start of Sidebar -->
      <Sidebar />
      <!-- End of Sidebar -->

      <!-- Start of Add Friends -->
      <NewFriend />
      <!-- End of Add Friends -->

      <!-- Start of Create Chat -->
      <NewChat />
      <!-- End of Create Chat -->

      <AddMember />

      <ChangeGroupName />

      <KickMember />

      <div class="main">
        <div
          id="nav-tabContent"
          class="tab-content"
        >
          <!-- List of chat window goes here -->
          <Babble
            v-for="group in groups"
            :key="group._id"
            :group="group._id"
            :info="group"
          />

          <Request
            v-for="noti in notifications.filter(noti => noti.type === 1)"
            :key="noti._id"
            :info="noti"
          />
        </div>
      </div>
    </div>
    <!-- Layout -->
  </main>
</template>

<script>
import Navigation from '~/components/app/Navigation';
import Sidebar from '~/components/app/sidebar';

import NewFriend from '~/components/app/modal/NewFriend';
import NewChat from '~/components/app/modal/NewChat';
import ChangeGroupName from '~/components/app/modal/ChangeGroupName';
import AddMember from '~/components/app/modal/AddMember';
import KickMember from '~/components/app/modal/KickMember';

import Babble from '~/components/app/chat/Babble';
import Request from '~/components/app/chat/Request';

import socket from '~/plugins/socket';

export default {
  components: {
    Navigation,
    Sidebar,
    NewFriend,
    NewChat,
    ChangeGroupName,
    AddMember,
    KickMember,
    Babble,
    Request
  },

  head () {
    return {
      // title: 'Landing',
      link: [
        { rel: 'stylesheet', href: '/css/lib/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/swipe.min.css' },
      ],
      script: [
        // { src: '/js/jquery-3.3.1.slim.min.js', body: true },
        // { src: '/js/vendor/popper.min.js', body: true },
        // { src: '/js/swipe.min.js', body: true },
        // { src: '/js/bootstrap.min.js', body: true }
      ]
    }
  },

  data() {
    return {
      isLoading: true
    }
  },

  computed: {
    groups() {return this.$store.state.groups;},
    friends() {return this.$store.state.friends;},
    notifications() {return this.$store.state.notifications;},
  },

  mounted() {
    this.isLoading = true;
    const username = this.$cookies.get('username');
    if (!username) {
      this.$router.push('/');
      return;
    }

    socket.emit('user-connected', { username }, (data) => {
      let { username, name, avatar, friends, notifications, groups } = data;
      this.$store.commit('SET_ALL_INFO', {
        friends,
        groups,
        notifications,
        userInfo: { username, name, avatar }
      });
      this.isLoading = false;
    });

    socket.on('chat-message', message => {
      this.$store.commit('ADD_NEW_MESSAGE', message);
    });

    socket.on('friend-online', username => {
      this.$store.commit('UPDATE_FRIEND_STATUS', { username, active: true });
    });

    socket.on('friend-offline', username => {
      this.$store.commit('UPDATE_FRIEND_STATUS', { username, active: false });
    });

    socket.on('friend-update-profile', info => {
      this.$store.commit('UPDATE_FRIEND_PROFILE', info);
    });

    socket.on('notification', noti => {
      this.$store.commit('ADD_NOTIFICATION', noti);
      if (noti.type === 2) {
        this.$store.commit('REMOVE_GROUP', noti.extra_data);
      }
    });

    socket.on('update-friend-list', friends => {
      this.$store.commit('SET_FRIENDS', friends);
    });

    socket.on('new-group-chat', group => {
      this.$store.commit('ADD_GROUP', group);
    });

    socket.on('update-group-chat', group => {
      this.$store.commit('UPDATE_GROUP', group);
    });

    socket.on('added-to-group', group => {
      this.$store.commit('ADD_GROUP', group);
    });

    socket.on('disconnect', () => {
      const username = this.$cookies.get('username');
      if (username) {
        this.$message.error('You are disconnected, please check your connection');
      }
    });
  }
}
</script>

<style>

</style>
