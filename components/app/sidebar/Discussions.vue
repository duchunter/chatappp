<template lang="html">
  <div
    id="discussions"
    class="tab-pane fade active show"
  >
    <!-- Search -->
    <div class="search">
      <form class="form-inline position-relative">
        <input
          id="conversations"
          type="search"
          class="form-control"
          placeholder="Search for conversations..."
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
        data-target="#startnewchat"
      >
        <i class="material-icons">create</i>
      </button>
    </div>
    <!-- Search end -->

    <!-- List -->
    <div class="discussions">
      <h1>Discussions</h1>
      <div
        id="chats"
        class="list-group"
        role="tablist"
      >
        <a
          v-for="group in groups"
          id="list-chat-list"
          :key="group._id"
          :href="`#group${group._id}`"
          class="filterDiscussions all read single"
          data-toggle="list"
          role="tab"
        >
          <img
            class="avatar-md"
            src="/img/avatars/avatar.jpg"
            data-toggle="tooltip"
            data-placement="top"
            title="Janette"
            alt="avatar"
          >
          <div class="status">
            <i class="material-icons online">fiber_manual_record</i>
          </div>
          <div class="data">
            <h5>
              {{ group.name }}
            </h5>
            <span>
              {{ $moment(group.messages[0].created).fromNow() }}
            </span>
            <p>
              {{ group.messages[0].content }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      groups() {return this.$store.state.groups;},
      friends() {return this.$store.state.friends;},
    }
  }
</script>

<style lang="css" scoped>

</style>
