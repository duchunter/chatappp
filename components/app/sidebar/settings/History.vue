<template lang="html">
  <div class="category">
    <a
      id="headingTwo"
      href="#"
      class="title collapsed"
      data-toggle="collapse"
      data-target="#collapseTwo"
      aria-expanded="true"
      aria-controls="collapseTwo"
    >
      <i class="material-icons md-30 online">mail_outline</i>
      <div class="data">
        <h5>Chats</h5>
        <p>Check your chat history</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
    <div
      id="collapseTwo"
      class="collapse"
      aria-labelledby="headingTwo"
      data-parent="#accordionSettings"
    >
      <div class="content layer">
        <div class="history">
          <p>When you clear your conversation history, the messages will be deleted from your own device.</p>
          <p>The messages won't be deleted or cleared on the devices of the people you chatted with.</p>
          <div class="custom-control custom-checkbox">
            <input
              id="same-address"
              type="checkbox"
              class="custom-control-input"
            >
            <label
              class="custom-control-label"
              for="same-address"
            >Hide will remove your chat history from the recent list.</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              id="save-info"
              type="checkbox"
              class="custom-control-input"
            >
            <label
              class="custom-control-label"
              for="save-info"
            >Delete will remove your chat history from the device.</label>
          </div>
          <button
            type="submit"
            class="btn button w-100"
          >
            Clear blah-blah
          </button>
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
