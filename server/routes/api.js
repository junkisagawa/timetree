/* eslint-disable */
/* eslint-disable no-console　*/
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const qs = require('querystring')
const cors = require('cors')
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = 'http://localhost:3000/api/oauth2callback'
const response_type = 'code'
const auth_uri = 'http://timetreeapp.com/oauth/authorize'
const token_uri = 'https://timetreeapp.com/oauth/token'
const state = Math.random().toString(36).slice(-8);
const timetree_url = 'https://timetreeapis.com'

//開発用の固定アクセスKEY
let access_key = process.env.ACCESS_KEY

//初回連携時に認証を行うAPI
router.get('/timetree', (req, res) => {
  console.log(client_id)
  console.log(client_secret)
  console.log(access_key)
  const params = qs.stringify({
    client_id,
    redirect_uri,
    response_type,
    state
  })
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  let url = `${auth_uri}?${params}`
  res.json({url:url})
})

//TimetreeとOAuth認証を行うAPI
router.get('/oauth2callback', (req, res) => {
  console.log('next step')
  console.log(req.query.code)
  fetch(token_uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      client_id:client_id,
      client_secret:client_secret,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: redirect_uri,
    })
  }).then(res => res.json())
  .then(json => {
    console.log(json.access_token)
    access_key = json.access_token
    let url = '/#/calender?key=' + json.access_token
    res.redirect(url)
   }) 
  })

//calenderの情報を取得するAPI
router.get('/timetree/calender', (req, res) => {
    console.log('カレンダーの取得')
    let url = timetree_url + '/calendars'
    let auth = 'Bearer ' + access_key
    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/vnd.timetree.v1+json',
          'Authorization': auth
        }
      }).then(res => res.json())
      .then(json => {
          let calender_datas = json.data
          this.calender = []
          let response = []
          for (let i=0; i < calender_datas.length; i++){
            let calender = {
                calenderName : calender_datas[i].attributes.name,
                calenderId : calender_datas[i].id,
                calenderType: calender_datas[i].type
            }
            console.log(calender)
            response.push(calender)
          }
          res.json({data: response})
      })
})


router.post('/timetree/event', (req, res, next) => {
  let url = timetree_url + '/calendars/' +  req.body.Id + '/events '
  let auth = 'Bearer ' + access_key
  console.log(req.body)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.timetree.v1+json',
      'Authorization': auth
    },
    body: JSON.stringify({
        "data": {
            "attributes": {
                "category": "schedule",
                "title": req.body.eventTitle,
                "all_day": false,
                "start_at": req.body.startTime,
                "start_timezone": "UTC",
                "end_at": req.body.endTime,
                "end_timezone": "UTC",
                "description": "te",
                "location": "Tokyo",
                "url": "https://example.com"
            },
            "relationships": {
                "label": {
                    "data": {
                        "id": "1",
                        "type": "label"
                    }
                }
            }
        }
      })
  })
  .then(response => {
    res.json(response)
    console.log(response)
  })
  .catch(
    error => {
      console.log(error)
    })
})

module.exports = router;

