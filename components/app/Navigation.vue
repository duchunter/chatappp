<template lang="html">
  <div class="navigation">
    <div class="container">
      <div class="inside">
        <div class="nav nav-tab menu">
          <a
            href="#settings"
            data-toggle="tab"
            class="btn"
          >
            <img
              class="avatar-xl"
              :src="!userInfo.avatar || userInfo.avatar === 'default' ? '/img/avatars/avatar.png' : userInfo.avatar"
              alt="avatar"
            >
          </a>
          <a
            href="#members"
            data-toggle="tab"
          ><i class="material-icons">account_circle</i></a>
          <a
            href="#discussions"
            data-toggle="tab"
            class="active"
          ><i class="material-icons active">chat_bubble_outline</i></a>
          <a
            href="#notifications"
            data-toggle="tab"
            class="f-grow1"
            style="position: relative"
          >
            <div class="new bg-red">
              <p v-if="notifications.length > 0">{{ notifications.length }}</p>
            </div>
            <i class="material-icons">notifications_none</i>
          </a>
          <button class="btn mode">
            <i class="material-icons">brightness_2</i>
          </button>
          <a
            href="#settings"
            data-toggle="tab"
          ><i class="material-icons">settings</i></a>
          <a
            class="btn power"
            @click="logout"
          ><i class="material-icons">power_settings_new</i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import socket from '~/plugins/socket';

  export default {
    computed: {
      userInfo() {return this.$store.state.userInfo},
      notifications() {return this.$store.state.notifications},
    },

    methods: {
      logout(e) {
        e.preventDefault();
        socket.emit('log-out');
        this.$cookies.set('username', null);
        this.$router.push('/');
      }
    }
}
</script>

<style lang="css" scoped>
  .new {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 20px;
    min-width: 25px;
  }

  .new p {
    padding: 5px;
    line-height: 15px;
    color: white;
  }
</style>
