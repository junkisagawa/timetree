<template>
  <div id="app">

    <div class="tool-bar">
      <md-toolbar class="md-title" md-elevation="3">
        <md-button class="md-icon-button" @click="showNavigation = true">
         <md-icon>menu</md-icon>
        </md-button>
          <img src="./assets/logo.gif" style="height:30px">
          <md-button class="md-primary left" id="user-name">
            ユーザー様
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>notification_important</md-icon>
          </md-button>
      </md-toolbar>
    </div>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">メニュー</span>
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-button>
              <span class="md-list-item-text">オリコポイントを使う</span>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-button>
              <span class="md-list-item-text">ショッピングで貯める</span>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-button>
              <span class="md-list-item-text">請求金額紹介</span>
              </md-button>
            </md-list-item>

            <md-list-item>
              <md-button v-on:click="moveToExternal" style="padding:0">
                <span class="md-list-item-text">外部コンテンツ</span>
              </md-button>
            </md-list-item>
          </md-list>
    </md-drawer>
    <router-view/>
    <div class="footer">
      <img src="./assets/footer.png">
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
   data () {
    return {
      showNavigation: false,
      showSidepanel: false
      }
  },
  methods: {
    moveToExternal: function() {
      console.log("外部連携ページへ遷移")
      this.$router.push({ name: 'external'})
      this.showNavigation=false
    }
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fffbf2;
}
* {
  margin: 0px;
  padding: 0px;
}
.footer {
   width: 100%;
    text-align: center;
    position: absolute;/*←絶対位置*/
    bottom: 0; /*下に固定*/
}
.tool-bar {
  margin-bottom: 2em;
}
#user-name{
  margin-left:auto;
}


</style>
