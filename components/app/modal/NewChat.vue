<template lang="html">
  <div
    id="startnewchat"
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
          <h1>Start new chat</h1>
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
              <label>Topic:</label>
              <input
                v-model="topic"
                type="text"
                class="form-control"
                placeholder="What's the topic?"
                required
              >
            </div>
            <button
              class="btn button w-100"
              @click="createGroup"
            >
              Start New Chat
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
        topic: ''
      }
    },
    computed: {
      userInfo() {return this.$store.state.userInfo}
    },
    methods: {
      createGroup(e) {
        e.preventDefault();
        const group = {
          name: this.topic,
          members: [this.userInfo.username]
        };
        socket.emit('create-group-chat', group, () => {
          this.$message.success('Done');
        });
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
