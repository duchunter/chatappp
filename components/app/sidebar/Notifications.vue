<template lang="html">
  <div
    id="notifications"
    class="tab-pane fade"
  >
    <!-- List -->
    <div class="notifications">
      <h1>Notifications</h1>
      <div
        id="alerts"
        class="list-group"
        role="tablist"
      >
        <a
          v-for="noti in notifications"
          :key="noti._id"
          href="#"
          class="filterNotifications all latest notification"
          data-toggle="list"
        >
          <!--<img-->
          <!--class="avatar-md"-->
          <!--src="/img/avatars/avatar.jpg"-->
          <!--data-toggle="tooltip"-->
          <!--data-placement="top"-->
          <!--title="Janette"-->
          <!--alt="avatar"-->
          <!--&gt;-->
          <div class="data">
            <p>{{ noti.content }}</p>
            <span>
              {{ new Date(noti.created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </span>
          </div>
        </a>
      </div>
    </div>
    <!-- List end -->
  </div>
</template>

<script>
export default {
  computed: {
    notifications() {
      return this.$store.state.notifications;
    }
  }
}
</script>

<style lang="css" scoped>

</style>
