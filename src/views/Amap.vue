<template>
  <div class="map">
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: "amap",
  mounted() {
    new window.AMap.Map("container", {
      zoom: 11, //级别
      center: [116.397428, 39.90923], //中心点坐标
      viewMode: "3D" //使用3D视图
    });
  }
};
</script>

<style scoped lang="less">
#container {
  width: 100%;
  height: 360px;
}
</style>
