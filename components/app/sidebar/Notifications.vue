<template lang="html">
  <div
    id="notifications"
    class="tab-pane fade"
  >
    <!-- List -->
    <div class="notifications">
      <h1>Notifications</h1>
      <div v-if="notifications.length > 0">
        <button
          @click="clearAllNotifications"
          type="submit"
          class="btn button w-100"
          style="height: 40px; line-height: 40px; padding: 0; margin-bottom: 20px;"
        >
          Clear all
        </button>
        <div
          id="alerts"
          class="list-group"
          role="tablist"
        >
          <a
            v-for="noti in notifications"
            :key="noti._id"
            :href="noti.type === 1 ? `#friend-request${noti._id}` : `#friend-request`"
            class="filterNotifications all latest notification"
            data-toggle="list"
          >
            <!--<img-->
            <!--class="avatar-md"-->
            <!--src="/img/avatars/avatar.png"-->
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

      <p v-else style="text-align: center; margin-top: 20px">
        Nothing here
      </p>
    </div>
    <!-- List end -->
  </div>
</template>

<script>
  import socket from '~/plugins/socket';
  export default {
    computed: {
      notifications() {
        return this.$store.state.notifications;
      }
    },
    methods: {
      clearAllNotifications(e) {
        e.preventDefault();
        const ids = this.notifications.map(noti => noti._id);
        socket.emit('delete-notification', { ids }, isSuccess => {
          if (isSuccess) {
            this.$store.commit('SET_NOTIFICATIONS', []);
            this.$message.success('Done');
          } else {
            this.$message.error('Somnething went wrong');
          }
        });
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
