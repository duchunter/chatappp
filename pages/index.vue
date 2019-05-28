<template lang="html">
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        ref="form"
        class="login-form"
        :model="model"
        :rules="rules"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="Username"
            prefix-icon="fas fa-user"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
          >
            Login
          </el-button>
        </el-form-item>
        <nuxt-link
          to="/register"
          class="forgot-password"
        >
          Don't have an account?
        </nuxt-link>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { SERVER } from '~/config'
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    let username = this.$cookies.get('username');
    if (username) {
      this.$router.push('/app');
    }
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/login.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", crossorigin: "anonymous" },
      ]
    }
  },
  methods: {
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      try {
        let response = await this.$axios.post(`${SERVER}/signin`, this.model);
        this.$cookies.set('username', response.data.username, {
          path: "/",
          maxAge: 60 * 60 * 24 * 365
        });
        this.$router.push('/app');
      } catch (e) {
        if (e.response && e.response.data) {
          this.$message.error(e.response.data.message);
        } else {
          this.$message.error(e.message);
        }
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
