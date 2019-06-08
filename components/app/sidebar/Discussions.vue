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
          v-model="search"
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
      <div v-if="groups.length > 0">
        <div
          id="chats"
          class="list-group"
          role="tablist"
        >
          <a
            v-for="group in groups.filter(group => group.name.toLowerCase().includes(search.toLowerCase()))"
            id="list-chat-list"
            :key="group._id"
            :href="`#group${group._id}`"
            class="filterDiscussions all read single"
            data-toggle="list"
            role="tab"
          >
            <div class="avatar-md">
              <h2 style="text-align: center; line-height: 45px;">
                {{ group.name[0] }}
              </h2>
            </div>
            <div class="status">
              <i
                class="material-icons"
                :class="
                  group.members.some(username => {
                    let friend = friends.find(user => user.username === username);
                    return friend && friend.active;
                  }) ? 'online' : 'offline'"
              >fiber_manual_record</i>
            </div>
            <div class="data">
              <h5>
                {{ group.name }}
              </h5>
              <span v-if="group.messages && group.messages.length > 0">
                {{ $moment(group.messages[0].created).fromNow() }}
              </span>

              <p v-if="group.messages && group.messages.length > 0">
                {{ group.messages[0].content }}
              </p>
              <p v-else>
                Start by typing something
              </p>
            </div>
          </a>
        </div>
      </div>

      <p
        v-else
        style="text-align: center; margin-top: 20px"
      >
        Nothing here, start by chatting with someone
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    computed: {
      groups() {return this.$store.state.groups;},
      friends() {return this.$store.state.friends;},
    }
  }
</script>

<style lang="css" scoped>

</style>
