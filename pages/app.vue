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
          <!-- Or you can change only 1 chat window props -->
          <!-- Start of Babble -->
          <Babble />
          <!-- End of Babble -->
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

import { SERVER } from '~/config'

import io from 'socket.io-client';

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

  mounted() {
    const username = this.$cookies.get('username');
    if (!username) {
      this.$router.push('/');
    }
    // const socket = io('http://localhost:3001');
    // socket.on('connect', function(){});
    // socket.on('disconnect', function(){});
  }
}
</script>

<style>

</style>
