<template>
  <div>
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
            <span class="icon iconfont">&#xe634;</span>
          </a>
          <a title="邮箱" href="mailto:lei159130@sina.cn">
            <span class="icon iconfont">&#xe613;</span>
          </a>
          <a
            title="QQ"
            target="_blank"
            href="http://wpa.qq.com/msgrd?v=3&uin=584830792&site=qq&menu=yes"
          >
            <span class="icon iconfont">&#xe651;</span>
          </a>
          <a title="github" target="_blank" href="https://github.com/lei159130">
            <span class="icon iconfont">&#xe677;</span>
          </a>
          <router-link to="/nr" title="夜读">
            <span class="icon iconfont">&#xe707;</span>
          </router-link>
        </div>
        <img v-if="wechat.show" class="wechat" :src="wechat.img" />
      </div>
    </div>
    <div class="footer" role="footer">
      <a
        target="_blank"
        href="https://beian.miit.gov.cn"
        rel="noopener noreferrer"
        title="蜀ICP备18038865号-1"
        >蜀ICP备18038865号-1</a
      >
    </div>
  </div>
</template>
<script>
import wechatImg from '@/assets/img/wechat.jpg';
export default {
  name: 'Home',
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
  #content {
    display: none;
  }
}
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
  a {
    text-decoration: none;
    color: #333;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
}
</style>
