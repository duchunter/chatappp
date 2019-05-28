<template lang="html">
  <div
    id="kickmember"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div class="requests">
        <div class="title">
          <h1>Kick a member</h1>
          <button
            type="button"
            class="btn"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="material-icons">close</i>
          </button>
        </div>
        <div class="content">
          <form>
            <div class="form-group">
              <label for="username">Username:</label>
              <input
                id="username"
                type="text"
                class="form-control"
                placeholder="Enter user name"
                v-model="username"
                required
              >
            </div>
            <button
              @click="kickMember"
              class="btn button w-100"
            >
              Kick from group
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import socket from '~/plugins/socket';

  export default {
    data() {
      return {
        username: ''
      }
    },
    computed: {
      userInfo() {return this.$store.state.userInfo}
    },
    methods: {
      kickMember(e) {
        e.preventDefault();
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
