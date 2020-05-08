<template>
  <div class="wapper">
    <div class="wapper-content text-center">
      <p class="text-title">Ray•Lee</p>
      <p class="text-content">一个拥有轻微强迫症的程序猿</p>
      <div>
        <a
          title="微信"
          href="javascript:void(0)"
          @mouseover="toggleWechat(true)"
          @mouseout="toggleWechat(false)"
        >
          <span class="icon iconfont">&#xe684;</span>
        </a>
        <a title="邮箱" href="mailto:lei159130@sina.cn">
          <span class="icon iconfont">&#xe628;</span>
        </a>
        <a
          title="QQ"
          target="_blank"
          href="http://wpa.qq.com/msgrd?v=3&uin=584830792&site=qq&menu=yes"
        >
          <span class="icon iconfont">&#xe66a;</span>
        </a>
        <a title="github" target="_blank" href="https://github.com/lei159130">
          <span class="icon iconfont">&#xe709;</span>
        </a>
        <router-link to="/nr" title="夜读">
          <span class="icon iconfont">&#xe707;</span>
        </router-link>
      </div>
      <img v-if="wechat.show" class="wechat" :src="wechat.img" />
    </div>
  </div>
</template>
<script>
import wechatImg from "@/assets/img/wechat.jpg";
export default {
  name: "Home",
  data() {
    return {
      wechat: {
        show: false,
        img: wechatImg
      }
    };
  },
  methods: {
    toggleWechat(bool) {
      this.wechat.show = bool;
    }
  }
};
</script>
<style lang="less" scope>
@import url(~@/assets/iconfont/iconfont.css);
.wapper {
  height: 100vh;
  background: linear-gradient(to right, #337ab7 0%, #fcf8e3 100%);
  .wapper-content {
    position: absolute;
    min-width: 315px;
    height: 200px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .text-title {
      font-size: 2.5rem;
    }
    .text-content {
      font-size: 1.5rem;
    }
    a {
      margin: 0 0.2rem;
      color: #007bff;
      text-decoration: none;
      .icon {
        font-size: 1.5rem;
      }
    }
    .wechat {
      width: 7rem;
      height: 7rem;
      margin-top: 0.1rem;
    }
  }
}
</style>
