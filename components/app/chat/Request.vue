<template lang="html">
  <div
    :id="`friend-request${info._id}`"
    class="babble tab-pane fade"
    role="tabpanel"
    aria-labelledby="list-request-list"
  >
    <div class="chat">
      <div class="content empty">
        <div class="container">
          <div class="col-md-12">
            <div class="no-messages request">
              <a href="#"><img
                class="avatar-xl"
                :src="!senderInfo.avatar || senderInfo.avatar === 'default' ? '/img/avatars/avatar.png' : senderInfo.avatar"
                data-toggle="tooltip"
                data-placement="top"
              ></a>
              <h5>{{ senderInfo.name }}({{info.extra_data}}) would like to add you as a contact.</h5>
              <div class="options">
                <button @click="acceptRequest" class="btn button">
                  <i class="material-icons">check</i>
                </button>
                <button @click="denyRequest" class="btn button">
                  <i class="material-icons">close</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import socket from '~/plugins/socket';

  export default {
    props: ['info'],
    data() {
      return {
        senderInfo: {}
      }
    },
    mounted() {
      socket.emit('get-user-info', { username: this.info.extra_data }, info => {
        this.senderInfo = info;
      })
    },
    methods: {
      acceptRequest(e) {
        e.preventDefault();
        this.handleRequest(true);
      },
      denyRequest(e) {
        e.preventDefault();
        this.handleRequest(false);
      },
      handleRequest(accepted) {
        socket.emit('handle-friend-request', { accepted, sender: this.info.extra_data }, isSuccess => {
          if (isSuccess) {
            this.$message.success('Done');
          } else {
            this.$message.error('Something went wrong');
          }
        });
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
