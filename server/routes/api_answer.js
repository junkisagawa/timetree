let express = require('express');
let router = express.Router();
const usersInfo = {
    "sagawa":123,
    "tanaka":456,
    "kato":789
}
const bankType = {
    "sagawa":"mizuko",
    "tanaka":"hfj",
    "kato":"tfbc"
}

const mizuko_cancer = {data:[
        {"INSURANCE_NAME":"みずこ限定お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"みずこユーザーへのお試しです"},
        {"INSURANCE_NAME":"みずこ限定お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"みずこユーザーへのお試しです"},
        {"INSURANCE_NAME":"みずこ限定お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"みずこユーザーへのお試しです"}
    ]}

const hfj_cancer = {data:[
        {"INSURANCE_NAME":"HFJ限定すぺしゃるがん保険","MONTHLY_COST":"3,000","DETAILE":"HFJユーザーへのお試しです"},
        {"INSURANCE_NAME":"HFJ限定ハイパーがん保険","MONTHLY_COST":"3,000","DETAILE":"HFJユーザーへのお試しです"},
        {"INSURANCE_NAME":"HFJ限定スペシャルがん保険パック","MONTHLY_COST":"3,000","DETAILE":"HFJユーザーへのお試しです"}
    ]}


const tfbc_cancer = {data:[
        {"INSURANCE_NAME":"TFBC限定お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"TFBC様限定お試しです"},
        {"INSURANCE_NAME":"TFBC限定お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"TFBC様限定お試しです"},
        {"INSURANCE_NAME":"TFBC限定お試しパックスーパー","MONTHLY_COST":"3,000","DETAILE":"TFBC様限定お試しです"}
    ]}

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

//TODO : 2 /cancerでバンクタイプごとに異なるデータを返すAPIを実装
router.get('/cancer', function(req, res) {
    console.log(req.query.bank)
    if (req.query.bank == "mizuko") {

        console.log("みずこの保険を返します")
        res.json(mizuko_cancer)

    } else if (req.query.bank == "hfj"){

        console.log("hfjの保険を返します")
        res.json(hfj_cancer)

    } else if (req.query.bank == "tfbc"){
        
        console.log("tfbcの保険を返します")
        res.json(tfbc_cancer)

    } else {
        res.json({err:"バンクが存在しません"})
    }
  })


module.exports = router;
