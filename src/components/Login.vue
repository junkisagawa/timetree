<template>
  <div id="login">
    <b-navbar toggleable="md" type="dark" variant="danger" style="background-color:#5596e6!important">
      <b-navbar-brand>SGROL Administration tool</b-navbar-brand>
    </b-navbar>
    <div id="announcement-form">
      <label id="title-label">ログインする</label>
      <b-form>
        <div id="login-name">
          <el-input placeholder="ユーザー名" required></el-input>
          <el-input placeholder="パスワード" required></el-input>
          <el-button type="primary" @click="didTappedLoginButton()">ログイン</el-button>
          <!-- 
            :disabled="!name/pass"と--@click="submitAnnouncement()を追加
            --> 
        </div>
      </b-form>
    </div><!--// #announcement-form -->
  </div>
</template>

<script>
export default {
  name: 'LOGIN',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    didTappedLoginButton () {
      console.log("ログイン処理")
      this.$router.push('/main')
      // this.$store.dispatch(
      //   'auth/create',
      //   {
      //     'user': {
      //       email: this.email,
      //       password: this.password
      //     }
      //   }
      // )
    }
  },
  computed: {
    isValidated () {
      return Object.keys(this.fields).every(k => this.fields[k].validated) &&
        Object.keys(this.fields).every(k => this.fields[k].valid)
    },
    token () {
      return this.$store.state.auth.token
    }
  }
  // created: function () {
  //   // already logined
  //   if (this.$store.state.auth.token) {
  //     this.$router.push('/')
  //   }
  // },
  // watch: {
  //   token (newToken) {
  //     this.$router.push('/')
  //   }
  }
</script>