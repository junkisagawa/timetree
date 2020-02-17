<template>
  <div class="main">

    <div class="main-contents md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-80 md-medium-size-80 md-small-size-80
       md-xsmall-size-80">
        <div class="items">
          <p class="item">・連携リスト</p>
          <p class="item">・請求日</p>
          <p class="item">・請求金額</p>
          <p class="item">・利用可能額</p>
          <p class="item">・お知らせ</p>
        </div>
        <div id="calender">
          <span>カレンダー名: </span>
          <el-select v-model="calenderId" placeholder="Select">
              <el-option
                v-for="item in calenderDatas"
                :key="item.calenderId"
                :label="item.calenderName"
                :value="item.calenderId">
              </el-option>
          </el-select>
          <el-button type="default"
           v-on:click="submitEvent" style="margin-top:1em">決定
        </el-button>
        </div>
      </div>
   
  </div>
  </div>
</template>

<script>
import axios from "axios"
import store from '../store/index.js';

export default {
  name: "Calender",
  data () {
    return {
      calender: '',
      calenders: [],
      eventTitle: 'オリコ請求日',
      calenderId: '',
      eventStartTime:'2020-02-28T00:00:00.000Z',
      eventEndTime:'2020-02-28T00:00:00.000Z',
      calenderDatas:[{calenderName:'カレンダーを取得してください',calenderId:'No Data',calenderType:'No Data'}]
      }
  },
  methods: {
    getCalender: function() {
      this.calenderDatas = []
      axios.get("/api/timetree/calender",{headers: { "Access-Control-Allow-Origin": "*" },crossDomain: true}
      ).then(res => {
        console.log(res.data)
        let self = this
        if(res.data.length !== 0){
        let array = res.data.data; 
        array.forEach(function (value, index, array) {
          self.calenderDatas.push(value)
        });
        } else {
          console.log("カレンダー取得エラー")
        }
      })
    },
    submitEvent: function() {
      //イベント登録APIのURLを指定
      let url = '/api/timetree/event';
      var data = {
        'eventTitle': this.eventTitle,
        'startTime': this.eventStartTime,
        'endTime': this.eventEndTime,
        'Id': this.calenderId
      };
      var headers = {
         'Content-Type': 'application/json; charset=utf-8'
      };
      axios.post(url, data, {'headers': headers})
      .then(res => {
        console.log('イベント登録:', data);
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
   created: function () {
     console.log("よばれた")
     this.getCalender();
   },
  components: {
   calender: { 
     template: `<div>
                {{test}}
                </div>`
   }
  }
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
.buttons {
  margin: 0 0 0 auto;
}
#event-text {
  margin-bottom: 1em;
}
#calender-id {
  margin-bottom: 1em;
}
#calender {
  margin: 1em;
}
#event-option {
  margin-bottom: 1em;
}
.items {
  text-align: left;
  width: 50%;
  margin-left:30%;
  font-size:1.4em;
}
.item {
  margin-top:1em;
}
</style>
