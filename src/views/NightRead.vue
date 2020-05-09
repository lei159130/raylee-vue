<template>
  <div class="container">
    <div class="nav">
      <div class="w1000">
        <a
          v-for="menu in menus"
          :key="menu.id"
          href="javascript:void(0)"
          @click="chooseSeminarId(menu.id)"
          :class="{ 'active':menu.id==seminarId }"
        >{{ menu.name }}</a>
      </div>
    </div>
    <div class="audio_control">
      <audio class="J-audio" :src="current.audioUrl">
        本页面采用HTML5编辑，目前您的浏览器无法显示，请换成谷歌(
        <a href="https://www.google.com/chrome/">Chrome</a>
        )浏览器，或者其他游览器的最新版本。
      </audio>
      <span class="audio_head">{{ current.title }}</span>
      <span class="audio_player">
        <i class="fa fa-backward" v-if="prev" @click="requestData(prev.id)"></i>
        <i class="fa fa-play" @click="play" v-if="playing"></i>
        <i class="fa fa-pause" @click="pause" v-else></i>
        <i class="fa fa-forward" v-if="next" @click="requestData(next.id)"></i>
      </span>
      <span class="audio_time J-audio-time">
        <span>{{ time.minute | formatNumber }}</span>
        :
        <span>{{ time.second | formatNumber }}</span>
        &nbsp;/&nbsp;
        <span>{{ maxTime.minute | formatNumber }}</span>
        :
        <span>{{ maxTime.second | formatNumber }}</span>
      </span>
    </div>
    <div class="article-container share-container wrapper-position">
      <div class="article" v-html="current.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NightRead",
  data() {
    return {
      audio: {},
      menus: [],
      seminarId: "",
      prev: {},
      current: {},
      next: {},
      playing: true,
      time: { minute: 0, second: 0 },
      maxTime: { minute: "", second: "" },
      timer: {}
    };
  },
  mounted() {
    this.audio = document.getElementsByClassName("J-audio")[0];
    this.requestMenus();
  },
  methods: {
    requestMenus() {
      let vm = this;
      vm.$http.post("sysConfig/menus").then(res => {
        vm.menus = res.data.data;
        vm.seminarId = vm.menus[vm.menus.length - 1].id;
        vm.requestData();
      });
    },
    requestData(id) {
      let vm = this;
      vm.$http
        .post("peopleDaily/query", {
          seminarId: vm.seminarId,
          id: id
        })
        .then(res => {
          let index = vm._.findIndex(res.data.data, { id: id });
          if (index == -1) {
            index = 0;
          }

          try {
            vm.prev = res.data.data[index - 1];
          } catch (error) {
            vm.prev = undefined;
          }
          vm.current = res.data.data[index];
          try {
            vm.next = res.data.data[index + 1];
          } catch (error) {
            vm.next = undefined;
          }

          let time = vm.current.audioPlayTime.split(":");
          vm.maxTime = {
            minute: parseInt(time[0]),
            second: parseInt(time[1])
          };
        });
    },
    chooseSeminarId(id) {
      this.seminarId = id;
      this.requestData();
    },
    play() {
      this.timer = window.setInterval(this.refreshTime, 1000);
      this.playing = !this.playing;
      this.audio.play();
    },
    pause() {
      window.clearInterval(this.timer);
      this.playing = !this.playing;
      this.audio.pause();
    },
    refreshTime() {
      if (
        this.time.minute == this.maxTime.minute &&
        this.time.second == this.maxTime.second
      ) {
        this.pause();
        this.time.minute = 0;
        this.time.second = 0;
      } else {
        if (this.time.second < 60) {
          this.time.second++;
        } else if (this.time.second >= 60) {
          this.time.minute++;
          this.time.second = 0;
        }
      }
    }
  },
  filters: {
    formatNumber(value) {
      if (value < 10) {
        return "0" + value;
      } else {
        return "" + value;
      }
    }
  }
};
</script>
<style lang="less" scope>
@import url("//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css");
.container {
  min-width: 450px;
  .nav {
    width: 100%;
    height: 55px;
    background: #e60012;
    line-height: 55px;
    .w1000 {
      line-height: 55px;
      position: relative;
      margin: 0 auto;
      text-align: center;
      a {
        display: inline-block;
        color: #fff;
        margin: 0 5px 0 5px;
        font-size: 14px;
        font-family: "SimSun";
      }
      .active {
        color: #000;
      }
    }
  }

  .audio_control {
    display: block;
    position: relative;
    height: 110px;
    background: #f3f3f3;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    padding: 7px 14px;
    .audio_player {
      display: block;
      width: 200px;
      height: 32px;
      margin: 14px auto 0;
      text-align: center;
      i {
        background-position: center center;
        background-repeat: no-repeat;
        padding: 10px;
        color: gray;
        font-size: 22px;
      }
    }
    .audio_head {
      font-size: 18px;
      color: #000;
      line-height: 24px;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
    .audio_time {
      display: block;
      font-size: 16px;
      color: #717171;
      line-height: 24px;
      text-align: center;
      margin-top: 12px;
    }
  }
}
</style>
