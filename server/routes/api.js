var express = require('express');
var router = express.Router();
let usersInfo = {
    "sagawa":123,
    "tanaka":456
}
//前回とおなじプロファイルのAPI/
router.get('/profile', function(req, res, next) {
  res.json({ 
        'name': 'Junki Sagawa 2',
        'age': 30,
        'hobby': 'football 2'
    });
});

router.get('/cancer', function(req, res) {
    res.json({
      "INSURANCE_NAME":"お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"お試しです",
    })
  })

//TODO : 1
///lifeでリクエストを受け取ったら、Life生命のAPIにリクエストを投げ結果を整形してクライアントに返す
router.get('/life', function(req,res,next){

    //node.jsサーバーからリクエストを投げるにはどうするか

    //受け取った結果をクライアントが想定している形に整形して返す
})

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

module.exports = router;