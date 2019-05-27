<template lang="html">
  <div
    id="exampleModalCenter"
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
          <h1>Add your friends</h1>
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
              <label for="user">Username:</label>
              <input
                id="user"
                type="text"
                class="form-control"
                placeholder="Add recipient..."
                required
              >
              <div
                id="contact"
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
              <label for="welcome">Message:</label>
              <textarea
                id="welcome"
                class="text-control"
                placeholder="Send your welcome message..."
              >Hi Keith, I'd like to add you as a contact.</textarea>
            </div>
            <button
              type="submit"
              class="btn button w-100"
            >
              Send Friend Request
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
