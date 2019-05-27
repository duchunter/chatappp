<template lang="html">
  <div
    :id="`group${group}`"
    class="babble tab-pane fade active show"
    role="tabpanel"
    aria-labelledby="list-chat-list"
  >
    <!-- Start of Chat -->
    <div
      id="chat1"
      class="chat"
    >
      <!-- Header -->
      <Header :info="info" />
      <!-- Header end -->

      <!-- Body -->
      <div
        id="content"
        class="content"
      >
        <div class="container">
          <div class="col-md-12">
            <div
              v-for="message in info.messages"
              :key="message._id"
            >
              <div v-if="message.sender !== userInfo.username" class="message">
                <img
                  class="avatar-md"
                  src="/img/avatars/avatar.jpg"
                  data-toggle="tooltip"
                  data-placement="top"
                  :title="message.sender"
                >
                <div class="text-main">
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

              <div v-else class="message me">
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
                class="form-control"
                placeholder="Start typing for reply..."
                rows="1"
                v-model="message"
                @keyup.enter="submit"
              />
              <button class="btn emoticons">
                <i class="material-icons">insert_emoticon</i>
              </button>
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

    <!-- Start of Call -->
    <Call />
    <!-- End of Call -->
  </div>
</template>

<script>
import Header from './Header';
import Call from './Call';

export default {
  components: {
    Header,
    Call
  },
  props: ['group', 'info'],
  data() {
    return {
      message: ''
    }
  },
  computed: {
    friends() {return this.$store.state.friends;},
    userInfo() {return this.$store.state.userInfo;},
  },
  methods: {
    submit(e) {
      e.preventDefault();
      let message = this.message;
      this.message = '';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
