<template lang="html">
  <div
    id="sidebar"
    class="sidebar"
  >
    <div class="container">
      <div class="col-md-12">
        <div class="tab-content">
          <!-- Start of Contacts -->
          <Contact />
          <!-- End of Contacts -->

          <!-- Start of Discussions -->
          <Discussions />
          <!-- End of Discussions -->

          <!-- Start of Notifications -->
          <Notifications />
          <!-- End of Notifications -->

          <!-- Start of Settings -->
          <Settings />
          <!-- End of Settings -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from './Contact';
import Discussions from './Discussions';
import Notifications from './Notifications';
import Settings from './settings';

export default {
  components: {
    Contact,
    Discussions,
    Notifications,
    Settings
  }
}
</script>

<style lang="css" scoped>
</style>
