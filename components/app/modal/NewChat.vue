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
              <label for="participant">Recipient:</label>
              <input
                id="participant"
                type="text"
                class="form-control"
                placeholder="Add recipient..."
                required
              >
              <div
                id="recipient"
                class="user"
              >
                <img
                  class="avatar-sm"
                  src="/img/avatars/avatar.jpg"
                  alt="avatar"
                >
                <h5>Test</h5>
                <button class="btn">
                  <i class="material-icons">close</i>
                </button>
              </div>
            </div>
            <div class="form-group">
              <label for="topic">Topic:</label>
              <input
                id="topic"
                type="text"
                class="form-control"
                placeholder="What's the topic?"
                required
              >
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                class="text-control"
                placeholder="Send your welcome message..."
              >Hmm, are you friendly?</textarea>
            </div>
            <button
              type="submit"
              class="btn button w-100"
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
export default {

}
</script>

<style lang="css" scoped>
</style>
