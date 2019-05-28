<template lang="html">
  <div
    id="settings"
    class="tab-pane fade"
  >
    <div class="settings">
      <!-- Info -->
      <div class="profile">
        <img
          class="avatar-xl"
          :src="!userInfo.avatar || userInfo.avatar === 'default' ? '/img/avatars/avatar.png' : userInfo.avatar"
          alt="avatar"
        >
        <h1>
          {{ userInfo.name }}
        </h1>
        <span>
          {{ userInfo.username }}
        </span>
      </div>
      <!-- Info end -->

      <!-- Menu -->
      <div
        id="accordionSettings"
        class="categories"
      >
        <h1>Settings</h1>
        <!-- Start of My Account -->
        <Account />
        <!-- End of My Account -->

        <!-- Start of Appearance Settings -->
        <Appearance />
        <!-- End of Appearance Settings -->

        <!-- Start of Logout -->
        <div class="category">
          <a
            class="title collapsed"
            @click="logout"
          >
            <i class="material-icons md-30 online">power_settings_new</i>
            <div class="data">
              <h5>Power Off</h5>
              <p>Log out of your account</p>
            </div>
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
        </div>
        <!-- End of Logout -->
      </div>
      <!-- Menu end -->
    </div>
  </div>
</template>

<script>
import Account from './Account';
import Appearance from './Appearance';

import socket from '~/plugins/socket';

export default {
  components: {
    Account,
    Appearance,
  },

  computed: {
    userInfo() {return this.$store.state.userInfo}
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
</style>
