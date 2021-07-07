<template>
  <div>
    页面188888888800000

  </div>
</template>
<script>
export default {
  mounted() {
    // todo
    document.title = "\u200E";
  },
  beforeRouteLeave(to, from, next) {

    // 注意此处容易写成死循环

    if (to.fullPath === "/page2") {
      next();
    } else {
      next("/page2");
    }
  },
};
</script>