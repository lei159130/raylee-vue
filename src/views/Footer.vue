<template>
  <div class="footer" role="footer">
    <a
      target="_blank"
      href="https://beian.miit.gov.cn"
      rel="noopener noreferrer"
      title="蜀ICP备18038865号-1"
      >蜀ICP备18038865号-1</a
    >
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scope>
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
