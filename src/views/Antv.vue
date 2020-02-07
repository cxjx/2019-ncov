<template>
  <div>
    <div class="map" id="shangrao"></div>
  </div>
</template>

<script>
import { Scene, PolygonLayer, LineLayer, PointLayer, Popup } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";

export default {
  name: "antv",
  mounted() {
    // this.demo01();
    this.demo02();
    // this.demo03();
  },
  methods: {
    demo01() {
      const scene = new Scene({
        id: "shangrao",
        map: new GaodeMap({
          style: "dark",
          center: [117.971185, 28.44442],
          pitch: 0,
          zoom: 4,
          token: "d7df5833e92af1c3ab411bc769f56035"
        })
      });

      fetch(
        "https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json"
      )
        .then(res => res.json())
        .then(data => {
          const pointLayer = new PointLayer({})
            .source(data.list, {
              parser: {
                type: "json",
                x: "j",
                y: "w"
              }
            })
            .shape("cylinder")
            .size("t", function(level) {
              return [1, 2, level * 2 + 20];
            })
            .color("t", [
              "#094D4A",
              "#146968",
              "#1D7F7E",
              "#289899",
              "#34B6B7",
              "#4AC5AF",
              "#5FD3A6",
              "#7BE39E",
              "#A1EDB8",
              "#CEF8D6"
            ])
            .style({
              opacity: 1.0
            });
          scene.addLayer(pointLayer);
        });
    },
    demo02() {
      const scene = new Scene({
        id: "shangrao",
        map: new GaodeMap({
          style: "blank", // dark, light, blank
          center: [117.371185, 28.60442],
          pitch: 0,
          zoom: 7.5,
          token: "d7df5833e92af1c3ab411bc769f56035"
        })
      });

      const color = [
        "#FFF5B8",
        "#FFDC7D",
        "#FFAB5C",
        "#F27049",
        "#D42F31",
        "#730D1C"
      ];
      this.$axios
        .get("./static/361100_full.json")
        .then(res => res.data)
        .then(data => {
          data.features.forEach(it => {
            it.properties.value = Math.floor(Math.random() * 100);
          });
          console.log(data);
          const layer = new PolygonLayer()
            .source(data)
            .color("value", d => {
              return d > 90
                ? color[5]
                : d > 80
                ? color[4]
                : d > 60
                ? color[3]
                : d > 40
                ? color[2]
                : d > 20
                ? color[1]
                : color[0];
            })
            .shape("fill")
            // .active(true)
            .style({
              opacity: 1
            });
          scene.addLayer(layer);

          const layer2 = new LineLayer({ zIndex: 2 })
            .source(data)
            .size(0.3)
            .color("pink");
          scene.addLayer(layer2);

          layer.on("mousemove", e => {
            const popup = new Popup({
              offsets: [0, 0],
              closeButton: false
            })
              .setLnglat(e.lngLat)
              .setHTML(
                `<span>${e.feature.properties.name}: ${e.feature.properties.value}</span>`
              );
            scene.addPopup(popup);
          });
        });
    },
    demo03() {
      const scene = new Scene({
        id: "shangrao",
        map: new GaodeMap({
          style: "dark",
          center: [117.971185, 28.44442],
          pitch: 0,
          zoom: 4,
          token: "d7df5833e92af1c3ab411bc769f56035"
        })
      });

      const colors = [
        "#FFF5B8",
        "#FFDC7D",
        "#FFAB5C",
        "#F27049",
        "#D42F31",
        "#730D1C"
      ];
      fetch("./static/city-pm2.5.json")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const layer = new PolygonLayer()
            .source(data)
            //.color('pm2_5_24h',["#FFF5B8","#FFDC7D","#FFAB5C","#F27049","#D42F31","#730D1C"])
            .color("pm2_5_24h", p => {
              if (p > 120) {
                return colors[5];
              } else if (p > 65) {
                return colors[4];
              } else if (p > 30) {
                return colors[3];
              } else if (p > 15) {
                return colors[2];
              } else if (p > 8) {
                return colors[1];
              } else {
                return colors[0];
              }
            })
            .shape("fill")
            .active(true)
            .style({
              opacity: 1
            });
          scene.addLayer(layer);

          const layer2 = new LineLayer({ zIndex: 2 })
            .source(data)
            .color("#fff")
            .size(0.3)
            .style({
              lineType: "dash",
              dashArray: [2, 2],
              opacity: 0.1
            });
          scene.addLayer(layer2);

          // layer.on('mousemove', e => {
          //   const popup = new Popup({
          //     offsets: [ 0, 0 ],
          //     closeButton: false
          //   })
          //     .setLnglat(e.lngLat)
          //     .setHTML(`<span>${e.feature.properties.name}: ${e.feature.properties.pm2_5_24h}</span>`);
          //   scene.addPopup(popup);
          // });
        });
    }
  }
};
</script>

<style scoped lang="less">
.map {
  width: 100%;
  height: 360px;
  position: relative;
}
</style>
