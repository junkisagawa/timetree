<template>
  <div class="footer">
    <ul class="dir col1">
      <li>クレジットカードのオリコ</li>
    </ul>
    <ul class="dir">
      <li>クレジットカードのお申し込み</li>
        <ul>
          <li>人気ランキング</li>
          <li>家族カード</li>
        </ul>
      <li>人気ランキング</li>
    </ul>
    <span>topへ戻る</span>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Footer',
  props: {
    msg: String
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.footer{
  text-align: center;
  height: 20em;
  background-color:#edeceb;
  margin-top: 5em;
  padding: 0 20%;
}
.col1 {
  padding-top: 1em;
}
</style>
