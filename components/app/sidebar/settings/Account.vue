<template lang="html">
  <div class="category">
    <a
      id="headingOne"
      href="#"
      class="title collapsed"
      data-toggle="collapse"
      data-target="#collapseOne"
      aria-expanded="true"
      aria-controls="collapseOne"
    >
      <i class="material-icons md-30 online">person_outline</i>
      <div class="data">
        <h5>My Account</h5>
        <p>Update your profile details</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
    <div
      id="collapseOne"
      class="collapse"
      aria-labelledby="headingOne"
      data-parent="#accordionSettings"
    >
      <div class="content">
        <div class="upload">
          <div class="data">
            <img
              id="user-avatar"
              class="avatar-xl"
              :src="avatar || (userInfo.avatar && userInfo.avatar != 'default' ? userInfo.avatar : '/img/avatars/avatar.png')"
              alt="image"
            >
            <label>
              <input id="avatar-upload" type="file" @change="uploadFile">
              <span class="btn button">Upload avatar</span>
            </label>
          </div>
          <p>For best results, use an image at least 256px by 256px in either .jpg or .png format!</p>
        </div>
        <form>
          <div class="field">
            <label for="name">Name <span>*</span></label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Enter your name"
              v-model="name"
              required
            >
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Enter a new password"
              v-model="password"
            >
          </div>
          <div class="field">
            <label for="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
              type="password"
              class="form-control"
              placeholder="Confirm your password"
              v-model="confirmPassword"
            >
          </div>
          <button
            @click="submitChanges"
            type="submit"
            class="btn button w-100"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import socket from '~/plugins/socket';
  export default {
    data() {
      return {
        avatar: null,
        name: null,
        password: '',
        confirmPassword: ''
      }
    },

    computed: {
      userInfo() {return this.$store.state.userInfo}
    },

    methods: {
      uploadFile(e) {
        if (process.client) {
          let file = document.querySelector('input[type=file]').files[0];
          let reader  = new FileReader();
          if (file) {
            reader.readAsDataURL(file);
            reader.addEventListener("load", () => {
              this.avatar = reader.result;
            }, false);
          }
        }
      },

      submitChanges(e) {
        e.preventDefault();
        if (this.password !== this.confirmPassword) {
          this.$message.error('Passwords must be the same');
          return;
        }

        const changes = {
          username: this.userInfo.username,
          avatar: this.avatar || this.userInfo.avatar,
          name: this.name || this.userInfo.name,
          password: this.password
        }

        socket.emit('update-user-info', { info: changes }, isSuccess => {
          if (isSuccess) {
            delete changes.password;
            this.$store.commit('SET_USER_INFO', changes);
            this.$message.success('Profile updated');
          } else {
            this.$message.error('Something went wrong');
          }
        });
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
