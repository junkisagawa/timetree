<template>

  <div class="myPage">

     <b-navbar fixed="top" toggleable="md" type="dark" variant="info" style="background-color:#5596e6!important">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">ポータルTOP</el-menu-item>
      <el-menu-item index="2" disabled>データ様向け</el-menu-item>
      <el-submenu index="3">
        <template slot="title">アカウント</template>
        <el-menu-item index="2-1">{{userId}}</el-menu-item>
        <el-menu-item index="2-2"><a href="/">ログアウト</a></el-menu-item>
      </el-submenu>
      </el-menu>
 
    </b-navbar>

    <div class=hello>
      <div class=title-contents>
        <div class="top-title">保険</div>
        <div id="bank-logo"><component v-bind:is="currentBank"></component></div>
      </div>
      <img class="img" :src="topImage" width="100%" />
      <div class="category">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><a href="#section1" v-smooth-scroll="{ duration: 1000, offset: -50 }">生命保険</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#section2" v-smooth-scroll="{ duration: 1000, offset: -50 }">学資保険</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#section3" v-smooth-scroll="{ duration: 1000, offset: -50 }">がん保険</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
 
      <div id="section1">
        <h2 style="text-decoration: underline;">お客様におすすめの生命保険</h2>    
        <el-table
          ref='multipleTable'
          :data='lifeInssuranceData'
          border>
          <el-table-column v-for='(item) in insuranceFieldInfo'
            :key='item.key'
            :label='item.label'
            :prop='item.key'
            :width='item.width'>
          </el-table-column>
        </el-table>
      </div>

      <div id="section2">
        <h2 style="text-decoration: underline;">お客様におすすめの学資保険</h2>    
        <el-table
          ref='multipleTable'
          :data='studyInssuranceData'
          border>
          <el-table-column v-for='(item) in insuranceFieldInfo'
            :key='item.key'
            :label='item.label'
            :prop='item.key'
            :width='item.width'>
          </el-table-column>
        </el-table>
      </div>
      
      <div id="section3">
        <h2 style="text-decoration: underline;">お客様におすすめのがん保険</h2>    
        <el-table
          ref='multipleTable'
          :data='cancerInsuranceData'
          border>
          <el-table-column v-for='(item) in insuranceFieldInfo'
            :key='item.key'
            :label='item.label'
            :prop='item.key'
            :width='item.width'>
          </el-table-column>
        </el-table>
        <el-button id="announce-delete" type="primary"
        @click="updateCancerInsurance()">Update</el-button>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import TopImage from "@/assets/family.png";
import store from '../store/index.js';

const headers = { 'Content-Type': 'application/json; charset=utf-8'} //TODO: get key when authorize
let url = '/api/cancer'
let image1 = require('@/assets/logo.png')



//ここからMainページの指定
export default {
  name: 'MainPage',
  
data () {
    return {
      name: "佐川",
      topImage: TopImage,
      tabIndex: 0,
      activeIndex: '1',
      //announcemtn list
      currentBank: store.state.bankType,
      insuranceFieldInfo: [
        {
          key: 'INSURANCE_NAME',
          label: '保険名',
          width: 300
        },
        {
          key: 'MONTHLY_COST',
          label: '月々のお支払い学',
          width: 200
        },
        {
          key: 'DETAILE',
          label: '保険の内容',
          width: 400
        }
      ],
      loading: false,
      lifeInssuranceData:[
        {"INSURANCE_NAME":"生命保険お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"お得なスーパーパックです"},
        {"INSURANCE_NAME":"ずっと生命保険パックハイパー","MONTHLY_COST":"5,000","DETAILE":"もっとお得なハイパーパックです"},
        {"INSURANCE_NAME":"生命保険まるっとパックウルトラ","MONTHLY_COST":"10,000","DETAILE":"もーっとお得なウルトラパックです"}
      ],
      studyInssuranceData:[
        {"INSURANCE_NAME":"学資保険パックスーパー","MONTHLY_COST":"3,000","DETAILE":"お得なスーパーパックです"},
        {"INSURANCE_NAME":"学資保険お試しパックハイパー","MONTHLY_COST":"5,000","DETAILE":"もっとお得なハイパーパックです"},
        {"INSURANCE_NAME":"学資保険お試しパックウルトラ","MONTHLY_COST":"10,000","DETAILE":"もーっとお得なウルトラパックです"}
      ],
      cancerInsuranceData:[
         {"INSURANCE_NAME":"がん保険サンプル","MONTHLY_COST":"3,000","DETAILE":"ローカル情報"},
      ]
    }
  },
  methods: {
  updateCancerInsurance(){
      let params = {bank:store.state.bankType};
      console.log('Get cancer insurance');
      console.log(this.currentBank)
      // show loading
      // this.loading = true;
      axios.get(url, {params: params, headers: headers})
      .then(res => {
        let self = this;
        console.log('get cancer:', res.data);
        if(res.data.length !== 0){
          let array = res.data.data; 
          array.forEach(function (value, index, array) {
            self.cancerInsuranceData.push(value)
          });
          console.log("data はこれ" + res.data.data)
        } else {
          console.log("エラー")
        }
        console.log(cancerInsuranceData)
      })

    },
  beforeRouteEnter: function (to, from, next) {
    console.log("ふふふ").bind(this)
    this.updateCancerInsurance();
  },
  created: function () {
    this.updateCancerInsurance();
  }
  },
  components: {
    mizuko: {
      template: "<img class='img' src='/static/image/mizuko.png' width='100%' />"
    },
    tfbc: {
      template: "<img class='img' src='/static/image/tfbc.png' width='100%' />"
    },
    hfj: {
      template: "<img class='img' src='/static/image/hfj.png' width='100%' />"
    }
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
  watch: {
    changeBankState () {
      this.currentBank = bankLogo
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
  margin: 3em;
}
.category{
  margin-top:3em;
}
.section1{
  margin-top: 3em;
}
.top-title{
  width:69%;
  display: inline-block; 
  vertical-align: top;
  font-size:3em;
}
#bank-logo{
  display: inline-block;
  vertical-align: top;
  width:30%;
}

#section1{
  margin-top: 5em;
}
#section2{
  margin-top: 5em;
}
#section3{
  margin-top: 5em;
}
.el-button{
  margin-top:1em;
}
.title-contents{
  border-bottom: medium double #545c64;
  margin-bottom: 3em;
}
</style>
