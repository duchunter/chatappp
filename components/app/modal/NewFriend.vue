<template lang="html">
  <div
    id="exampleModalCenter"
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
          <h1>Add your friends</h1>
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
              <label>Username:</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Add recipient..."
                required
              >
            </div>
            <button
              type="submit"
              class="btn button w-100"
              @click="sendRequest"
            >
              Send Friend Request
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

    methods: {
      sendRequest(e) {
        e.preventDefault();
        socket.emit('add-friend', { receiverUsername: this.username }, isSuccess => {
          if (isSuccess) {
            this.$message.success('Request sent');
          } else {
            this.$message.error('Something went wrong');
          }
        })
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
