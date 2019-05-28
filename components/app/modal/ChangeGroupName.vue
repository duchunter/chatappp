<template lang="html">
  <div
    id="changegroupname"
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
          <h1>Change group name</h1>
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
              <label for="username">Group name:</label>
              <input
                id="username"
                type="text"
                class="form-control"
                placeholder="Enter new group name"
                v-model="name"
                required
              >
            </div>
            <button
              @click="changeName"
              class="btn button w-100"
            >
              Submit
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
        name: ''
      }
    },
    computed: {
      selectedGroup() {return this.$store.state.selectedGroup}
    },
    methods: {
      changeName(e) {
        e.preventDefault();
        const payload = {
          group: {
            ...this.selectedGroup,
            id: this.selectedGroup._id,
            name: this.name
          }
        };
        socket.emit('update-group-chat-info', payload, isSuccess => {
          if (isSuccess) {
            this.$message.success('Done');
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
