<template>
  <div class="file-wapper">
    <a href="javascript:void(0);">上传</a>
    <ul>
      <template v-for="type in types">
        <li v-bind:key="type.id">
          <a href="javascript:void(0);">{{ type.name }}</a>
        </li>
      </template>
    </ul>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: "File",
  data() {
    return {
      token: "",
      types: [
        { id: 1, name: "图片" },
        { id: 2, name: "视频" }
      ]
    };
  },
  mounted() {
    this.token = this.$route.query.token;
    this.checkToken(this.token);
  },
  methods: {
    checkToken() {
      this.$http
        .post("auth/check", {
          token: this.token
        })
        .then(res => {
          if (res.data.code != 0) {
            this.$router.push({
              path: "/error",
              query: {
                errorMsg: res.data.msg
              }
            });
          }
        });
    }
  }
};
</script>
<style lang="less" scope></style>
