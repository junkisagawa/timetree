<template>
  <div class="main">
    
    <div class=card>
      <div class="amount">
        <p class="box">請求金額: 50,000円</p>
      </div>
    </div>
    <div class="card">
      <div class="point">
        <p class="box">ポイント: 500pt</p>
      </div>
    </div>
    <div v-if=key class="main-contents md-layout md-gutter md-alignment-center">
       <div class="md-layout-item md-large-size-90 md-medium-size-90 md-small-size-90 md-xsmall-size-90">
        <img src="../assets/menu.png" alt="Timetree" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

let getParam = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  name: "MainPage",
  data () {
    return {
      key: "aaa",
      showNavigation: false,
      showSidepanel: false
      }
  },
  methods: {
    authRequest: function() {
      axios.get("/api/timetree",{headers: { "Access-Control-Allow-Origin": "*" },crossDomain: true}
      ).then(res => {
        console.log(res)
        location.href = res.data.url
      })
    },
    moveToExternal: function() {
      console.log("外部連携ページへ遷移")
      this.$router.push({ name: 'external'})
    },
    window:onload = function() {
      let key = getParam('key')
    },
  },
  computed: {
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.md-layout-item {
  margin-top: 8px;
  margin-bottom: 8px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-contents {
  margin-top: 2em;
}
.tool-bar {
  margin-bottom: 2em;
}
.md-card-media img {
  height: 100px;
  width: auto;
}
.left {
  margin: 0 0 0 auto;
}
.amount {
  position: relative;
  background: #f9d5aa;
  height: 3em;
  font-size: 2em;
  margin-top: 1em;
  width: 90%;
  margin:0 auto;
}
.amount p {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  width: 80%;
  text-align: center;
}

.point {
  position: relative;
  background: #f9d5aa;
  height: 3em;
  font-size: 2em;
  margin-top: 1em;
  width: 90%;
  margin:0 auto;
}
.point p {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  width: 80%;
  text-align: center;
}

.card {
  margin-top:1em;
}
</style>
