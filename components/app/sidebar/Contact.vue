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
      <div
        id="contacts"
        class="list-group"
        role="tablist"
      >
        <a
          v-for="user in friends"
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
            <i class="material-icons" :class="user.active ? 'online' : 'offline'">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>
              {{user.name}}
            </h5>
            <p>
              {{user.active ? 'Active' : 'Offline'}}
            </p>
          </div>
          <div class="person-add">
            <i class="material-icons">person</i>
          </div>
        </a>
      </div>
    </div>
    <!-- List end -->
  </div>
</template>

<script>
export default {
  computed: {
    friends() {return this.$store.state.friends;},
  }
}
</script>

<style lang="css" scoped>

</style>
