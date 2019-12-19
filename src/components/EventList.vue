<template>
  <div id='announcement-list' v-loading="loading">
    <label id="title-label">Annoucement List</label>
    <span id="announce-list-button">
      <el-button id="announce-delete" type="primary"
      @click="updateAnnouncement()">Update</el-button>
      <el-button id="announce-delete" type="primary"
      :disabled="checkboxGroup.length == 0" @click="deleteAnnouncement()">Delete</el-button>
    </span>
    <div class='table'>
      <el-table
        ref='multipleTable'
        :data='submittedList'
        @selection-change="handleSelectionChange"
        border>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column v-for='(item) in submittedFieldInfo'
          :key='item.key'
          :label='item.label'
          :prop='item.key'
          :width='item.width'>
        </el-table-column>
      </el-table>
    </div><!--// .table -->
  </div><!--// .descriptions -->
</template>

<script>
/* eslint-disable */
import axios from 'axios'
const headers = { 'Content-Type': 'application/json; charset=utf-8' , 'x-api-key': 'Wey48_Q0W5Dg5zRt'} //TODO: get key when authorize
let url = '/announcement'
export default {
  name: 'AnnouncementList',
  data () {
    return {
      //announcemtn list
      submittedFieldInfo: [
        {
          key: 'ANNOUNCE_TIME',
          label: 'time',
          width: 120
        },
        {
          key: 'ANNOUNCE_REPEAT',
          label: 'repeat',
          width: 100
        },
        {
          key: 'ANNOUNCE_TEXT',
          label: 'message',
          width: 400
        },
        {
          key: 'CREATE_AT',
          label: 'submited at',
          width: 200
        },
        {
          key: 'SENT_AT',
          label: 'sent to device at',
          width: 200
        }
      ],
      submittedList: [],
      //checkboxGroup
      checkboxGroup: [],
      loading: false
    }
  },
  props: [],
  methods: {
    updateAnnouncement(){
      let params = {};
      console.log('Get Announcement');

      // show loading
      this.loading = true;
      axios.get(url, {params: params, headers: headers})
      .then(res => {
        console.log('get announcement:', res.data);
        if(res.data.length == 0){
          //this.openModal('warning', 'cannot load info.')
        }else{
          this.submittedList = res.data;
          //vue.$forceUpdate();
        }
        this.loading = false;
      })
      .catch(error => {
        console.log('get announcement:', error);
        //this.openModal('warning', 'cannot load info.' + error)
        this.loading = false;
      })
    },
    deleteAnnouncement(){
      console.log('Delete Announcement');
      //let params = {'id': this.checkboxGroup[0].ANNOUNCE_ID};

      let funcWithAsync = async (datas) => {
        return await Promise.all(datas.map(function(data){
          let params = {'id': data.ANNOUNCE_ID};
          console.log('delete announcement:', data.ANNOUNCE_ID);
          return axios.delete(url, {params: params, headers: headers})
        }));
      };

      this.loading = true;
      //axios.delete(url, {params: params, headers: headers})
      funcWithAsync(this.checkboxGroup)
      .then(res => {
        this.updateAnnouncement();
        this.loading = false;
      })
      .catch(error => {
        //this.openModal('warning', 'cannot load info.' + error)
        this.loading = false;
      })

/*
      let funcWithAsync = async (datas) => {
        console.log("here3");
        return await Promise.all(datas.map(function(data){
          return doAsyncJobWithPromise(data);
        }));
      };

      let doAsyncJobWithPromise = (data) => {
        console.log("here2");
        var params = {'id': data.ANNOUNCE_ID};
        return axios.delete(url, {params: params, headers: headers});
      };

      let exec = async ()=>{
        console.log("here1");
        await funcWithAsync(this.checkboxGroup);
      };

      this.loading = true;
      exec();
      this.loading = false;
      */
    },
    handleSelectionChange (val) {
      this.checkboxGroup = val;
    }
  },
  computed: {
  },
  created: function () {
    this.updateAnnouncement();
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>


</style>