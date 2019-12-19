<template>
  <div class="hello">
    <div class=top-description>
      <h1>保険</h1>
      <img class="img" :src="topImage" width="100%" />
      <div class="category">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><a href="#canser" v-smooth-scroll="{ duration: 1000, offset: -50 }">homepage</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="section1">
    <h2 style="text-decoration: underline;">お客様におすすめのがん保険</h2>
      <el-table
        ref='multipleTable'
        :data='inssuranceData'
        border>
        <el-table-column v-for='(item) in insuranceFieldInfo'
          :key='item.key'
          :label='item.label'
          :prop='item.key'
          :width='item.width'>
        </el-table-column>
      </el-table>
    </div>
    <b-container>
      <b-tabs pills id="annoucement-tabs"
      v-model="tabIndex">
      <!-- ANNOUNCEMENT LIST -->
      <!-- <b-container v-loading="screenLoading"> -->
      <b-tab
      title="Announcement List">
      <b-container class="border-top border-left border-right border-bottom">
        <b-row>
          <announcement-list ref="annoucementList"></announcement-list>
        </b-row>
      </b-container>
    </b-tab>

    <!-- WEATHER INFORMATION -->
    <b-tab
    title="Weather Info">
    <b-container class="border-top border-left border-right border-bottom">
      <b-row>
        <weather-info></weather-info>
      </b-row>
    </b-container>
  </b-tab>
</b-tabs>
</b-container>
  </div>
</template>

<script>
import axios from 'axios'
import TopImage from "@/assets/family.png";
const headers = { 'Content-Type': 'application/json; charset=utf-8' , 'x-api-key': 'Wey48_Q0W5Dg5zRt'} //TODO: get key when authorize
let url = '/announcement'
let image1 = require('@/assets/logo.png')
export default {
  name: 'MainPage',
  
data () {
    return {
      name: "佐川あああああ",
      topImage: TopImage,
      tabIndex: 0,
      activeIndex: '1',
      //announcemtn list
      insuranceFieldInfo: [
        {
          key: 'INSURANCE_NAME',
          label: 'time',
          width: 200
        },
        {
          key: 'MONTHLY_COST',
          label: 'repeat',
          width: 100
        },
        {
          key: 'DETAILE',
          label: 'message',
          width: 200
        }
      ],
      loading: false,
      inssuranceData:[
        {"INSURANCE_NAME":"お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"お試しです"},
        {"INSURANCE_NAME":"お試しパックハイパー","MONTHLY_COST":"5,000","DETAILE":"お試しです"},
        {"INSURANCE_NAME":"お試しパックウルトラ","MONTHLY_COST":"10,000","DETAILE":"お試しです"}
      ]
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  padding-bottom: 1em;
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
.table {
  border: 1px var(--color-light-gray) solid;
  width: 50%;
  margin-top:2em;
}
.logo {
 width:80%;
 margin:3em;
 
}
.hello{
  height: 100em;
  margin: 3em;
}
.category{
  margin-top:3em;
}
.section1{
  margin-top: 3em;
}
</style>
