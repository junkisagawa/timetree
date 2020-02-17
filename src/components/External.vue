<template>
  <div class="external">
     <div v-if=key class="main-contents md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-30 md-medium-size-40 md-small-size-60 md-xsmall-size-80">
        <md-card>
          <md-card-media>
            <img src="../assets/timetree_logo.png" alt="Timetree" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">
              Timetree<br>~共有カレンダー~
            </div>
            <div class="md-subhead">
              オリコとTimetreeを連携することで、<br>お得な情報をTimetreeでお知らせ！
            </div>
          </md-card-header>
            <md-card-actions md-alignment="space-between">
              <div style="margin: 10px auto;">
                <md-button v-on:click="authRequest" class="md-raised md-primary">
                  連携する
                </md-button>
              </div>
            </md-card-actions>
        </md-card>
        <md-card>
          <md-card-media>
            <img src="../assets/synchrolife.png" alt="Timetree" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">
              シンクロライフ<br>〜グルメSNS〜
            </div>
            <div class="md-subhead">
              シンクロライフ加盟飲食店でオリコカードで決済するとポイントGET！
            </div>
          </md-card-header>
            <md-card-actions md-alignment="space-between">
              <div  style="margin: 10px auto;">
                <md-button v-on:click="authRequest" class="md-raised md-primary">
                  連携する
                </md-button>
              </div>
            </md-card-actions>
        </md-card>
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
name: "External",
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
    window:onload = function() {
      let key = getParam('key')
    },
  },
  computed: {
      userId () {
          return store.state.userId
      },
      bankLogo () {
          console.log(store.state.bankType)
          return store.state.bankType
      }
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.md-card{
  margin-top:1em;
}
.md-card-media img {
  width: 80%;
  margin-top:5px;
}
</style>
