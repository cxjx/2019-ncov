(function(e){function t(t){for(var r,u,s=t[0],c=t[1],l=t[2],i=0,f=[];i<s.length;i++)u=s[i],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"25d00d81"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(i);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2395:function(e,t,n){},"2be0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/amap"}},[e._v("Amap")]),e._v(" | "),n("router-link",{attrs:{to:"/antv"}},[e._v("Antv")]),e._v(" | "),n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],u=(n("7c55"),n("2877")),s={},c=Object(u["a"])(s,o,a,!1,null,null,null),l=c.exports,i=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},m=d,_=(n("b1e0"),Object(u["a"])(m,v,h,!1,null,"6a42263c",null)),g=_.exports,b={name:"home",components:{HelloWorld:g}},y=b,j=Object(u["a"])(y,p,f,!1,null,null,null),w=j.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"},[n("div",{attrs:{id:"container"}})])}],E={name:"amap",mounted:function(){new window.AMap.Map("container",{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})}},L=E,x=(n("cd4f"),Object(u["a"])(L,k,F,!1,null,"65d56642",null)),C=x.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"map",attrs:{id:"shangrao"}})])}],P=(n("99af"),n("4160"),n("b0c0"),n("159b"),n("f269")),A=n("f4c8"),$={name:"antv",mounted:function(){this.demo02()},methods:{demo01:function(){var e=new P["Scene"]({id:"shangrao",map:new A["a"]({style:"dark",center:[117.971185,28.44442],pitch:0,zoom:4,token:"d7df5833e92af1c3ab411bc769f56035"})});fetch("https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json").then((function(e){return e.json()})).then((function(t){var n=new P["PointLayer"]({}).source(t.list,{parser:{type:"json",x:"j",y:"w"}}).shape("cylinder").size("t",(function(e){return[1,2,2*e+20]})).color("t",["#094D4A","#146968","#1D7F7E","#289899","#34B6B7","#4AC5AF","#5FD3A6","#7BE39E","#A1EDB8","#CEF8D6"]).style({opacity:1});e.addLayer(n)}))},demo02:function(){var e=new P["Scene"]({id:"shangrao",map:new A["a"]({style:"blank",center:[117.371185,28.60442],pitch:0,zoom:7.5,token:"d7df5833e92af1c3ab411bc769f56035"})}),t=["#FFF5B8","#FFDC7D","#FFAB5C","#F27049","#D42F31","#730D1C"];fetch("./static/361100_full.json").then((function(e){return e.json()})).then((function(n){n.features.forEach((function(e){e.properties.value=Math.floor(100*Math.random())})),console.log(n);var r=(new P["PolygonLayer"]).source(n).color("value",(function(e){return e>90?t[5]:e>80?t[4]:e>60?t[3]:e>40?t[2]:e>20?t[1]:t[0]})).shape("fill").style({opacity:1});e.addLayer(r);var o=new P["LineLayer"]({zIndex:2}).source(n).size(.3).color("pink");e.addLayer(o),r.on("mousemove",(function(t){var n=new P["Popup"]({offsets:[0,0],closeButton:!1}).setLnglat(t.lngLat).setHTML("<span>".concat(t.feature.properties.name,": ").concat(t.feature.properties.value,"</span>"));e.addPopup(n)}))}))},demo03:function(){var e=new P["Scene"]({id:"shangrao",map:new A["a"]({style:"dark",center:[117.971185,28.44442],pitch:0,zoom:4,token:"d7df5833e92af1c3ab411bc769f56035"})}),t=["#FFF5B8","#FFDC7D","#FFAB5C","#F27049","#D42F31","#730D1C"];fetch("./static/city-pm2.5.json").then((function(e){return e.json()})).then((function(n){console.log(n);var r=(new P["PolygonLayer"]).source(n).color("pm2_5_24h",(function(e){return e>120?t[5]:e>65?t[4]:e>30?t[3]:e>15?t[2]:e>8?t[1]:t[0]})).shape("fill").active(!0).style({opacity:1});e.addLayer(r);var o=new P["LineLayer"]({zIndex:2}).source(n).color("#fff").size(.3).style({lineType:"dash",dashArray:[2,2],opacity:.1});e.addLayer(o)}))}}},z=$,M=(n("ff20"),Object(u["a"])(z,D,O,!1,null,"8f3caa28",null)),S=M.exports;r["a"].use(i["a"]);var B=[{path:"*",name:"home",component:w},{path:"/amap",name:"amap",component:C},{path:"/antv",name:"antv",component:S},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],T=new i["a"]({routes:B}),H=T,I=n("2f62");r["a"].use(I["a"]);var W=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:H,store:W,render:function(e){return e(l)}}).$mount("#app")},6488:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},b1e0:function(e,t,n){"use strict";var r=n("6488"),o=n.n(r);o.a},c4c6:function(e,t,n){},cd4f:function(e,t,n){"use strict";var r=n("c4c6"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ff20:function(e,t,n){"use strict";var r=n("2be0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.39f9f4a2.js.map