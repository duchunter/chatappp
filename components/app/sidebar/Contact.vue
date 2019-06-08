<template lang="html">
  <div
    id="members"
    class="tab-pane fade"
  >
    <!-- Search -->
    <div class="search">
      <form class="form-inline position-relative">
        <input
          id="people"
          v-model="search"
          type="search"
          class="form-control"
          placeholder="Search for people..."
        >
        <button
          type="button"
          class="btn btn-link loop"
        >
          <i class="material-icons">search</i>
        </button>
      </form>
      <button
        class="btn create"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <i class="material-icons">person_add</i>
      </button>
    </div>
    <!-- Search end -->

    <!-- Filter -->
    <div class="list-group sort">
      <button
        class="btn filterMembersBtn active show"
        data-toggle="list"
        data-filter="all"
      >
        All
      </button>
      <button
        class="btn filterMembersBtn"
        data-toggle="list"
        data-filter="online"
      >
        Online
      </button>
      <button
        class="btn filterMembersBtn"
        data-toggle="list"
        data-filter="offline"
      >
        Offline
      </button>
    </div>
    <!-- Filter end -->

    <!-- List -->
    <div class="contacts">
      <h1>Contacts</h1>
      <div v-if="friends.length > 0">
        <div
          id="contacts"
          class="list-group"
          role="tablist"
        >
          <a
            v-for="user in friends.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))"
            :key="user.username"
            href="#"
            class="filterMembers all contact"
            :class="user.active ? 'online' : 'offline'"
            data-toggle="list"
          >
            <img
              class="avatar-md"
              :src="!user.avatar || user.avatar === 'default' ? '/img/avatars/avatar.png' : user.avatar"
              data-toggle="tooltip"
              data-placement="top"
              :title="user.username"
            >
            <div class="status">
              <i
                class="material-icons"
                :class="user.active ? 'online' : 'offline'"
              >fiber_manual_record</i>
            </div>
            <div class="data">
              <h5>
                {{ user.name }}
              </h5>
              <p>
                {{ user.active ? 'Active' : 'Offline' }}
              </p>
            </div>
            <div class="dropdown">
              <button
                class="btn"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  class="material-icons md-30"
                  style="color: rgb(189, 186, 194)"
                >more_vert</i>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button
                  href="#discussions"
                  data-toggle="tab"
                  class="dropdown-item"
                  @click="createChat(user)"
                >
                  <i class="material-icons">chat_bubble</i>Send message
                </button>
                <!-- <button class="dropdown-item">
                  <i class="material-icons">phone_in_talk</i>Voice Call
                </button>
                <button class="dropdown-item">
                  <i class="material-icons">videocam</i>Video Call
                </button> -->
                <button
                  class="dropdown-item"
                  @click="unfriend(user.username)"
                >
                  <i class="material-icons">delete</i>Delete Contact
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>

      <p
        v-else
        style="text-align: center; margin-top: 20px"
      >
        Nothing here, start by adding some friends
      </p>
    </div>
    <!-- List end -->
  </div>
</template>

<script>
  import socket from '~/plugins/socket';

  export default {
    data() {
      return {
        search: ''
      }
    },

    computed: {
      friends() {return this.$store.state.friends;},
      userInfo() {return this.$store.state.userInfo;}
    },

    methods: {
      createChat(user) {
        const group = {
          name: `${this.userInfo.name} and ${user.name}`,
          members: [this.userInfo.username, user.username]
        };
        socket.emit('create-group-chat', group, () => {
          this.$message.success('Done');
        });
      },

      unfriend(username) {
        socket.emit('unfriend', { username }, isSuccess => {
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
