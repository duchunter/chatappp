<template lang="html">
  <div class="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
      <!-- Start of Chat -->
      <div class="chat" id="chat1">
          <!-- Header -->
          <Header />
          <!-- Header end -->

          <!-- Body -->
          <div class="content" id="content">
              <div class="container">
                  <div class="col-md-12">
                      <div class="date">
                          <hr>
                          <span>Today</span>
                          <hr>
                      </div>

                      <div class="message">
                          <img class="avatar-md" src="/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
                          <div class="text-main">
                              <div class="text-group">
                                  <div class="text">
                                      <p>We've got some killer ideas kicking about already.</p>
                                  </div>
                              </div>
                              <span>09:46 AM</span>
                          </div>
                      </div>

                      <div class="message me">
                          <div class="text-main">
                              <div class="text-group me">
                                  <div class="text me">
                                      <p>Well done all. See you all at 2 for the kick-off meeting.</p>
                                  </div>
                              </div>
                              <span>10:21 PM</span>
                          </div>
                      </div>

                      <div class="message">
                          <img class="avatar-md" src="/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
                          <div class="text-main">
                              <div class="text-group">
                                  <div class="text">
                                      <div class="attachment">
                                          <button class="btn attach"><i class="material-icons md-18">insert_drive_file</i></button>
                                          <div class="file">
                                              <h5><a href="#">Tenacy Agreement.pdf</a></h5>
                                              <span>24kb Document</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <span>11:07 PM</span>
                          </div>
                      </div>

                      <div class="message">
                          <img class="avatar-md" src="/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar">
                          <div class="text-main">
                              <div class="text-group">
                                  <div class="text typing">
                                      <div class="wave">
                                          <span class="dot"></span>
                                          <span class="dot"></span>
                                          <span class="dot"></span>
                                      </div>
                                  </div>
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
                          <textarea class="form-control" placeholder="Start typing for reply..." rows="1"></textarea>
                          <button class="btn emoticons"><i class="material-icons">insert_emoticon</i></button>
                          <button type="submit" class="btn send"><i class="material-icons">send</i></button>
                      </form>
                      <label>
                        <input type="file">
                        <span class="btn attach d-sm-block d-none"><i class="material-icons">attach_file</i></span>
                      </label>
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
  }
}
</script>

<style lang="css" scoped>
</style>
