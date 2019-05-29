<template lang="html">
  <div
    :id="`group${group}`"
    class="babble tab-pane fade"
    role="tabpanel"
    aria-labelledby="list-chat-list"
  >
    <!-- Start of Chat -->
    <div class="chat">
      <!-- Header -->
      <Header :info="info" />
      <!-- Header end -->

      <!-- Body -->
      <div
        :id="'content-chat-' + group"
        ref="content_chat"
        class="content"
        style="overflow: auto"
      >
        <div class="container">
          <div class="col-md-12">
            <div
              v-for="message in [...info.messages].reverse().filter(msg => msg)"
              :key="message._id"
            >
              <div
                v-if="message.sender !== userInfo.username"
                class="message"
              >
                <img
                  class="avatar-md"
                  :src="getAvatar(message.sender)"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="message.sender"
                >
                <div class="text-main">
                  <span>
                    {{ getSender(message.sender).name }}
                  </span>
                  <div class="text-group">
                    <div class="text">
                      <p>
                        {{ message.content }}
                      </p>
                    </div>
                  </div>
                  <span>
                    {{ $moment(message.created).format('h:mm A') }}
                  </span>
                </div>
              </div>

              <div
                v-else
                class="message me"
              >
                <div class="text-main">
                  <div class="text-group me">
                    <div class="text me">
                      <p>
                        {{ message.content }}
                      </p>
                    </div>
                  </div>
                  <span>
                    {{ $moment(message.created).format('h:mm A') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Body end -->

      <!-- Input -->
      <div class="container">
        <div class="col-md-12">
          <div class="bottom">
            <form class="position-relative w-100">
              <textarea
                v-model="chatMessage"
                class="form-control"
                placeholder="Start typing for reply..."
                rows="1"
                @keyup.enter="submit"
              />
              <button
                type="submit"
                class="btn send"
                @click="submit"
              >
                <i class="material-icons">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- Input end -->
    </div>
    <!-- End of Chat -->
  </div>
</template>

<script>
import Header from './Header';

import socket from '~/plugins/socket';

export default {
  components: {
    Header
  },

  props: ['group', 'info'],

  data() {
    return {
      chatMessage: ''
    }
  },

  computed: {
    friends() {return this.$store.state.friends;},
    userInfo() {return this.$store.state.userInfo;}
  },

  mounted() {
    this.scrollToEnd();
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'ADD_NEW_MESSAGE') {
        setTimeout(this.scrollToEnd, 100);
      }
    })
  },

  methods: {
    submit(e) {
      e.preventDefault();
      let message = {
        created: Date.now(),
        group_id: this.group,
        sender: this.userInfo.username,
        content: this.chatMessage,
      };

      this.chatMessage = '';
      socket.emit('chat-text', { message });
    },

    scrollToEnd() {
      if (this.$el && this.$el.querySelector) {
        let container = this.$el.querySelector(`#content-chat-${this.group}`);
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }
    },

    getSender(username) {
      return this.friends.find(user => user.username === username);
    },

    getAvatar(username) {
      let user = this.getSender(username);
      return !user.avatar || user.avatar === 'default' ? '/img/avatars/avatar.png' : user.avatar
    }
  }
}
</script>

<style lang="css" scoped>
</style>
