<template lang="html">
  <div class="category">
    <a
      id="headingFour"
      href="#"
      class="title collapsed"
      data-toggle="collapse"
      data-target="#collapseFour"
      aria-expanded="true"
      aria-controls="collapseFour"
    >
      <i class="material-icons md-30 online">sync</i>
      <div class="data">
        <h5>Connections</h5>
        <p>Sync your social accounts</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
    <div
      id="collapseFour"
      class="collapse"
      aria-labelledby="headingFour"
      data-parent="#accordionSettings"
    >
      <div class="content">
        <div class="app">
          <img
            src="/img/integrations/slack.svg"
            alt="app"
          >
          <div class="permissions">
            <h5>Slack</h5>
            <p>Read, Write, Comment</p>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              checked
            >
            <span class="slider round" />
          </label>
        </div>
        <div class="app">
          <img
            src="/img/integrations/dropbox.svg"
            alt="app"
          >
          <div class="permissions">
            <h5>Dropbox</h5>
            <p>Read, Write, Upload</p>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              checked
            >
            <span class="slider round" />
          </label>
        </div>
        <div class="app">
          <img
            src="/img/integrations/drive.svg"
            alt="app"
          >
          <div class="permissions">
            <h5>Google Drive</h5>
            <p>No permissions set</p>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round" />
          </label>
        </div>
        <div class="app">
          <img
            src="/img/integrations/trello.svg"
            alt="app"
          >
          <div class="permissions">
            <h5>Trello</h5>
            <p>No permissions set</p>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round" />
          </label>
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
