<template lang="html">
  <div
    id="addmember"
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
          <h1>Add new member</h1>
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
                placeholder="Enter user name"
                required
              >
            </div>
            <button
              class="btn button w-100"
              @click="addMember"
            >
              Add to group
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
      selectedGroup() {return this.$store.state.selectedGroup}
    },
    methods: {
      addMember(e) {
        e.preventDefault();
        const payload = {
          username: this.username,
          groupId: this.selectedGroup._id
        };
        socket.emit('add-member', payload, isSuccess => {
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
