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
//ヒント POSTを受け付ける場合はrouter.post
//ヒント ユーザーからのデータはreq.bodyにある(たとえばreq.body.name)






//TODO : 2 /cancerでバンクタイプごとに異なるデータを返すAPIを実装
//ヒント クエリパラメーターは、req.query.KEYで取得できる(今回のKEYはbankです)

module.exports = router;
