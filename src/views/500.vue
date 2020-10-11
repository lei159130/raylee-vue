<template>
  <div class="notfoud-container">
    <div class="img-404"></div>
    <p class="notfound-p">系统异常...</p>
    <div class="notfound-reason">
      <p>可能的原因：</p>
      <ul>
        <li v-if="errorMsg">{{ errorMsg }}</li>
        <li v-else>系统异常，请稍后再试</li>
      </ul>
    </div>
    <div class="notfound-btn-container">
      <router-link class="notfound-btn" to="/">返回首页</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Error",
  data() {
    return {
      errorMsg: ""
    };
  },
  mounted() {
    this.errorMsg = this.$route.query.errorMsg;
  },
  methods: {}
};
</script>
<style lang="less" scope>
.notfoud-container {
  .img-404 {
    height: 155px;
    background: url(~@/assets/img/img-404.png) center center no-repeat;
    background-size: 150px auto;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .notfound-p {
    line-height: 22px;
    font-size: 17px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f6f6f6;
    text-align: center;
    color: #262b31;
  }
  .notfound-reason {
    color: #9ca4ac;
    font-size: 13px;
    line-height: 13px;
    text-align: left;
    width: 210px;
    margin: 0 auto;
    p {
      margin-top: 13px;
    }
    ul li {
      margin-top: 10px;
      margin-left: 36px;
    }
  }
  .notfound-btn-container {
    margin: 40px auto 0;
    text-align: center;
    .notfound-btn {
      display: inline-block;
      border: 1px solid #ebedef;
      background-color: #239bf0;
      color: #fff;
      font-size: 15px;
      border-radius: 5px;
      text-align: center;
      padding: 10px;
      line-height: 16px;
      white-space: nowrap;
    }
  }
}
</style>
