<template>
  <div id="login">
    <div id="announcement-form">
      <b-form>
        <div id="login-info">
          <label id="err">{{err}}</label>
          <el-input placeholder="ユーザー名" required v-model="name"></el-input>
          <el-input placeholder="パスワード" required v-model="password"></el-input>
          <el-button type="success" @click="didTappedLoginButton()" :disabled="!isFormWritten">ログイン</el-button>
          <!-- 
            :disabled="!name/pass"と--@click="submitAnnouncement()を追加
            --> 
        </div>
      </b-form>
    </div><!--// #announcement-form -->
  </div>
</template>

<script>
import store from '../store/index.js'
import axios from 'axios'
const headers = { 'Content-Type': 'application/json; charset=utf-8'} //TODO: get key when authorize

export default {
  name: 'LOGIN',
  data () {
    return {
      name: '',
      password: '',
      err: 'Node.js研修第二回ポータルにログインする'
    }
  },
  methods: {
    didTappedLoginButton () {
      console.log("ログイン処理")
      axios.post('/api/login',
        {
          name: this.name, password:this.password
      })
      .then(res => {
        console.log('Login Start');
        if (res.flag) {
        this.$store.commit('setUserId','this.name')
        this.$router.push('/main')
        } else {
          this.err = 'ユーザー名/Passwordが間違っています'
        }
      })
      .catch(error => {
        console.log('get cancer:', error);
        //this.openModal('warning', 'cannot load info.' + error)
        // this.loading = false;
        this.err = "名前/Passwordが間違っています"
      })
    }
  },
  computed: {
      userId () {
          return store.state.userId
      },
      isFormWritten () {
        if (
        this.name !== "" && this.password !==""
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
  .el-input{
    padding:0.5em 0;
  }
  #login-info{
    width: 70%;
    position: absolute;
    padding: 20px;
    top:  0;
    bottom:  0;
    left:  0;
    right:  0;
    margin:  auto;     
  }
  .el-button{
    width:100%;
    margin: 1em 0;
  }
</style>