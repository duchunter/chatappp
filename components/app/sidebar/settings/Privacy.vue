<template lang="html">
  <div class="category">
    <a
      id="headingSeven"
      href="#"
      class="title collapsed"
      data-toggle="collapse"
      data-target="#collapseSeven"
      aria-expanded="true"
      aria-controls="collapseSeven"
    >
      <i class="material-icons md-30 online">lock_outline</i>
      <div class="data">
        <h5>Privacy & Safety</h5>
        <p>Control your privacy settings</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
    <div
      id="collapseSeven"
      class="collapse"
      aria-labelledby="headingSeven"
      data-parent="#accordionSettings"
    >
      <div class="content no-layer">
        <div class="set">
          <div class="details">
            <h5>Keep Me Safe</h5>
            <p>Automatically scan and delete direct messages you receive from everyone that contain explict content.</p>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round" />
          </label>
        </div>
        <div class="set">
          <div class="details">
            <h5>My Friends Are Nice</h5>
            <p>If enabled scans direct messages from everyone unless they are listed as your friend.</p>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              checked
            >
            <span class="slider round" />
          </label>
        </div>
        <div class="set">
          <div class="details">
            <h5>Everyone can add me</h5>
            <p>If enabled anyone in or out your friends of friends list can send you a friend request.</p>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              checked
            >
            <span class="slider round" />
          </label>
        </div>
        <div class="set">
          <div class="details">
            <h5>Friends of Friends</h5>
            <p>Only your friends or your mutual friends will be able to send you a friend reuqest.</p>
          </div>
          <label class="switch">
            <input
              type="checkbox"
              checked
            >
            <span class="slider round" />
          </label>
        </div>
        <div class="set">
          <div class="details">
            <h5>Data to Improve</h5>
            <p>This settings allows us to use and process information for analytical purposes.</p>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round" />
          </label>
        </div>
        <div class="set">
          <div class="details">
            <h5>Data to Customize</h5>
            <p>This settings allows us to use your information to customize Swipe for you.</p>
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
