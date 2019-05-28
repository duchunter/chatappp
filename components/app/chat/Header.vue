<template lang="html">
  <div class="top">
    <div class="container">
      <div class="col-md-12">
        <div class="inside">
          <div class="avatar-md">
            <h2 style="text-align: center; line-height: 45px;">
              {{ info.name[0] }}
            </h2>
          </div>
          <div class="status">
            <i
              class="material-icons"
              :class="isActive ? 'online' : 'offline'"
            >fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>
              <a href="#">
                {{ info.name }}
              </a>
            </h5>
            <span>
              {{ isActive ? 'Active now' : 'Offline' }}
            </span>
          </div>
          <div class="dropdown">
            <button
              class="btn"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="setSelectedGroup"
            >
              <i class="material-icons md-30">more_vert</i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button
                data-toggle="modal"
                data-target="#changegroupname"
                class="dropdown-item"
              >
                <i class="material-icons">edit</i>Change group name
              </button>
              <button
                data-toggle="modal"
                data-target="#addmember"
                class="dropdown-item"
              >
                <i class="material-icons">account_circle</i>Add member
              </button>
              <button
                data-toggle="modal"
                data-target="#kickmember"
                class="dropdown-item"
              >
                <i class="material-icons">block</i>Kick member
              </button>
              <button @click="leaveGroup" class="dropdown-item">
                <i class="material-icons">delete</i>Leave group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  computed: {
    userInfo() {return this.$store.state.userInfo},
    friends() {return this.$store.state.friends},
    isActive() {
      return this.info.members.some(username => {
        let friend = this.friends.find(user => user.username === username);
        return friend && friend.active;
      })
    }
  },
  methods: {
    setSelectedGroup(e) {
      this.$store.commit('SET_SELECTED_GROUP', this.info);
    },

    leaveGroup(e) {
      e.preventDefault();
      const payload = {
        group_id: this.info._id,
        username: this.userInfo.username
      };
      socket.emit('remove-member', payload, isSuccess => {
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
