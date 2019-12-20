let express = require('express');
let router = express.Router();
let usersInfo = {
    "sagawa":123,
    "tanaka":456,
    "kato":789
}
let bankType = {
    "sagawa":"mizuko",
    "tanaka":"hfj",
    "ito":"tfbc"
}
const userType = []

//前回とおなじプロファイルのAPI/サンプル
router.get('/profile', function(req, res, next) {
  res.json({ 
        'name': 'Junki Sagawa 2',
        'age': 30,
        'hobby': 'football 2'
    });
});

//TODO : 1 /loginでPOSTリクエストを受け付けて、認証結果を返すAPIを実装
router.post('/login', function(req, res,next) {
    let name = req.body.name
    console.log(req.body.name)
    if (usersInfo[name]) {
        if (req.body.password == usersInfo[name]) {
            res.json({ flag:true, userInfo: bankType[name]}) 
        
        } else {

            res.json({ flag:false})
        
        }
    } else {
        res.json({ flag:false})
    }
  })


router.get('/cancer', function(req, res) {
    res.json({
      "INSURANCE_NAME":"お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"お試しです",
    })
  })

//TODO : 2
///lifeでリクエストを受け取ったら、Life生命のAPIにリクエストを投げ結果を整形してクライアントに返す
router.get('/life', function(req,res,next){

    //axiosを使用してNode.jsから外にリクエストをしてみましょう
    //受け取った結果をクライアントが想定している形に整形して返す
})


module.exports = router;


/// Answer (一例)
/* TODO
router.post('/login', function(req, res,next) {
    let name = req.body.name
    console.log(req.body.name)
    if (usersInfo[name]) {
        if (req.body.password == usersInfo[name]) {
            
            res.json({ flag:true, userInfo: "saitama"}) 
        
        } else {

            res.json({ flag:false})
        
        }
    } else {
        res.json({ flag:false})
    }
  })
  */