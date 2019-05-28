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
          <button
            class="btn connect d-md-block d-none"
            name="1"
          >
            <i class="material-icons md-30">phone_in_talk</i>
          </button>
          <button
            class="btn connect d-md-block d-none"
            name="1"
          >
            <i class="material-icons md-36">videocam</i>
          </button>
          <button class="btn d-md-block d-none">
            <i class="material-icons md-30">info</i>
          </button>
          <div class="dropdown">
            <button
              class="btn"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="material-icons md-30">more_vert</i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button
                class="dropdown-item connect"
                name="1"
              >
                <i class="material-icons">phone_in_talk</i>Voice Call
              </button>
              <button
                class="dropdown-item connect"
                name="1"
              >
                <i class="material-icons">videocam</i>Video Call
              </button>
              <hr>
              <button class="dropdown-item">
                <i class="material-icons">clear</i>Clear History
              </button>
              <button class="dropdown-item">
                <i class="material-icons">block</i>Block Contact
              </button>
              <button class="dropdown-item">
                <i class="material-icons">delete</i>Delete Contact
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
    friends() {return this.$store.state.friends},
    isActive() {
      return this.info.members.some(username => {
        let friend = this.friends.find(user => user.username === username);
        return friend && friend.active;
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
