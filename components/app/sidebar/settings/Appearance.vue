<template lang="html">
  <div class="category">
    <a
      id="headingFive"
      href="#"
      class="title collapsed"
      data-toggle="collapse"
      data-target="#collapseFive"
      aria-expanded="true"
      aria-controls="collapseFive"
    >
      <i class="material-icons md-30 online">colorize</i>
      <div class="data">
        <h5>Appearance</h5>
        <p>Customize the look</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
    <div
      id="collapseFive"
      class="collapse"
      aria-labelledby="headingFive"
      data-parent="#accordionSettings"
    >
      <div class="content no-layer">
        <div class="set">
          <div class="details">
            <h5>Turn Off Lights</h5>
            <p>The dark mode is applied to core areas of the app that are normally displayed as light.</p>
          </div>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round mode" />
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
