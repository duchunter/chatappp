<template lang="html">
  <div class="category">
    <a
      id="headingSix"
      href="#"
      class="title collapsed"
      data-toggle="collapse"
      data-target="#collapseSix"
      aria-expanded="true"
      aria-controls="collapseSix"
    >
      <i class="material-icons md-30 online">language</i>
      <div class="data">
        <h5>Language</h5>
        <p>Select preferred language</p>
      </div>
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
    <div
      id="collapseSix"
      class="collapse"
      aria-labelledby="headingSix"
      data-parent="#accordionSettings"
    >
      <div class="content layer">
        <div class="language">
          <label for="country">Language</label>
          <select
            id="country"
            class="custom-select"
            required
          >
            <option value="">
              Select an language...
            </option>
            <option>English, UK</option>
            <option>English, US</option>
          </select>
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
