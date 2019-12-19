<template>

  <div id="app">
    <b-navbar fixed="top" toggleable="md" type="dark" variant="info" style="background-color:#5596e6!important">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">ポータルTOP</el-menu-item>
    <el-menu-item index="2" disabled>データ様向け</el-menu-item>
    <el-submenu index="3">
      <template slot="title">アカウント</template>ß
      <el-menu-item index="2-1">アカウント情報</el-menu-item>
      <el-menu-item index="2-2"><a href="/"></a>ログアウト</el-menu-item>
     </el-submenu>
  </el-menu>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
}
* {
  margin: 0px;
  padding: 0px;
}

</style>
