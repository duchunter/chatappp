<template>
  <main>
    <div class="layout">
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
import Babble from '~/components/app/chat/Babble';

import socket from '~/plugins/socket';

export default {
  components: {
    Navigation,
    Sidebar,
    NewFriend,
    NewChat,
    Babble
  },

  head () {
    return {
      // title: 'Landing',
      link: [
        { rel: 'stylesheet', href: '/css/lib/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/swipe.min.css' },
      ],
      script: [
        { src: '/js/jquery-3.3.1.slim.min.js', body: true, defer: true },
        { src: '/js/vendor/popper.min.js', body: true, defer: true },
        { src: '/js/swipe.min.js', body: true, defer: true },
        { src: '/js/bootstrap.min.js', body: true, defer: true }
      ]
    }
  },

  computed: {
    groups() {return this.$store.state.groups;},
    friends() {return this.$store.state.friends;},
  },

  mounted() {
    const username = this.$cookies.get('username');
    if (!username) {
      this.$router.push('/');
      return;
    }

    socket.on('connect', () => {
      socket.emit('user-connected', { username }, (data) => {
        let { username, name, avatar, friends, notifications, groups } = data;
        this.$store.commit('SET_ALL_INFO', {
          friends,
          groups,
          notifications,
          userInfo: { username, name, avatar }
        })
      })
    });
    // socket.on('disconnect', function(){});
  }
}
</script>

<style>

</style>
