<template lang="html">
  <div class="tab-pane fade" id="settings">
    <div class="settings">
        <!-- Info -->
        <div class="profile">
            <img class="avatar-xl" src="/img/avatars/avatar-male-1.jpg" alt="avatar">
            <h1><a href="#">Michael Knudsen</a></h1>
            <span>Helena, Montana</span>
            <div class="stats">
                <div class="item">
                    <h2>122</h2>
                    <h3>Fellas</h3>
                </div>
                <div class="item">
                    <h2>305</h2>
                    <h3>Chats</h3>
                </div>
                <div class="item">
                    <h2>1538</h2>
                    <h3>Posts</h3>
                </div>
            </div>
        </div>
        <!-- Info end -->

        <!-- Menu -->
        <div class="categories" id="accordionSettings">
            <h1>Settings</h1>
            <!-- Start of My Account -->
            <Account />
            <!-- End of My Account -->

            <!-- Start of Chat History -->
            <History />
            <!-- End of Chat History -->

            <!-- Start of Notifications Settings -->
            <Noti />
            <!-- End of Notifications Settings -->

            <!-- Start of Connections -->
            <Connection />
            <!-- End of Connections -->

            <!-- Start of Appearance Settings -->
            <Appearance />
            <!-- End of Appearance Settings -->

            <!-- Start of Language -->
            <Language />
            <!-- End of Language -->

            <!-- Start of Privacy & Safety -->
            <Privacy />
            <!-- End of Privacy & Safety -->

            <!-- Start of Logout -->
            <div class="category">
                <a href="sign-in.html" class="title collapsed">
                    <i class="material-icons md-30 online">power_settings_new</i>
                    <div class="data">
                        <h5>Power Off</h5>
                        <p>Log out of your account</p>
                    </div>
                    <i class="material-icons">keyboard_arrow_right</i>
                </a>
            </div>
            <!-- End of Logout -->
        </div>
        <!-- Menu end -->
    </div>
</div>
</template>

<script>
import Account from './Account';
import History from './History';
import Noti from './Noti';
import Connection from './Connection';
import Appearance from './Appearance';
import Language from './Language';
import Privacy from './Privacy';

export default {
  components: {
    Account,
    History,
    Noti,
    Connection,
    Appearance,
    Language,
    Privacy
  }
}
</script>

<style lang="css" scoped>
</style>
