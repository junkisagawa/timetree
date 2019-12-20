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
      <div class="top-title">保険</div>
      <div id="bank-logo"><component v-bind:is="currentBank"></component></div>
      
      <img class="img" :src="topImage" width="100%" />
      <div class="category">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><a href="#section1" v-smooth-scroll="{ duration: 1000, offset: -50 }">がん保険</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">生命保険</a></el-breadcrumb-item>
          <el-breadcrumb-item>学資保険</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
 
      <div id="section1">
        <h2 style="text-decoration: underline;">お客様におすすめのがん保険</h2>
        <el-button id="announce-delete" type="primary"
        @click="updateCancerInsurance()">Update</el-button>
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
        title="生命保険">
        <b-container class="border-top border-left border-right border-bottom">
          <b-row>
    
          </b-row>
        </b-container>
        </b-tab>

      <!-- WEATHER INFORMATION -->
        <b-tab
        title="学資保険">
        <b-container class="border-top border-left border-right border-bottom">
          <b-row>
          
          </b-row>
        </b-container>
       </b-tab>
      </b-tabs>
      </b-container>
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
  updateCancerInsurance(){
      let params = {};
      console.log('Get cancer insurance');
      console.log(this.currentBank)
      // show loading
      // this.loading = true;
      axios.get(url, {params: params, headers: headers})
      .then(res => {
        console.log('get cancer:', res.data);
        if(res.data.length == 0){
          //this.openModal('warning', 'cannot load info.')
        }else{
          // this.submittedList = res.data;
          //vue.$forceUpdate();
        }
        this.loading = false;
      })
      .catch(error => {
        console.log('get cancer:', error);
        //this.openModal('warning', 'cannot load info.' + error)
        // this.loading = false;
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
  width:60%;
  display: inline-block; 
  vertical-align: top;
  margin-bottom:1em;
  font-size:3em;
}
#bank-logo{
  display: inline-block;
  vertical-align: top;
  width:30%;
}
</style>
