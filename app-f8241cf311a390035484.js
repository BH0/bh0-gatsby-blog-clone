webpackJsonp([0xd2a57dc1d883],{72:function(n,e){"use strict";function o(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function t(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=t;var r=[]},198:function(n,e,o){"use strict";e.components={"component---src-templates-post-js":o(314),"component---src-pages-404-js":o(311),"component---src-pages-archives-js":o(312),"component---src-pages-index-js":o(313)},e.json={"layout-index.json":o(315),"a-very-insecure-ajax-social-network.json":o(319),"advantages-of-asking-for-help.json":o(321),"actionscript-flappy-bird-clone.json":o(320),"an-implication-of-the-important-css-rule.json":o(322),"android-java-react-native-same-app-my-experience.json":o(323),"farewell-hexo-hello-gatsby.json":o(325),"html-css-colour-cycling-effect.json":o(326),"html-css-traffic-lights-1.json":o(327),"html-js-swear-word-detector.json":o(328),"interactive-web-pages-for-noobs.json":o(331),"introduction-to-arduino-tinkercad.json":o(332),"i-ve-never-met-my-greatest-heroes.json":o(329),"js-html-css-working-with-classes.json":o(333),"a-simplified-introduction-to-objects-in-javascript.json":o(318),"learn-the-basics-of-brainfuck-and-pseudocode.json":o(334),"my-2017-arduino-projects.json":o(335),"program-for-fifteen-minutes.json":o(336),"rush-or-take-time-coding.json":o(338),"thankyou-madebrave.json":o(339),"react-navmenu-component-using-context-api.json":o(337),"theres-two-javascripts.json":o(340),"unit-testing-js-with-jest.json":o(341),"visual-basic-introduction-guess-my-number.json":o(342),"when-automation-is-moral-my-opinion.json":o(343),"when-youre-ready.json":o(344),"why-i-avoid-form-designers.json":o(345),"why-i-chose-javascript.json":o(346),"why-i-don-t-use-wordpress-for-my-blog.json":o(347),"windows-form-c-sound-player-app.json":o(348),"wordpress-itself-is-not-a-website-builder.json":o(349),"yii-quick-setup-php.json":o(350),"404.json":o(316),"archives.json":o(324),"index.json":o(330),"404-html.json":o(317)},e.layouts={"layout---index":o(310)}},199:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(3),c=t(i),l=o(8),p=t(l),f=o(133),d=t(f),m=o(53),h=t(m),g=o(72),y=o(493),j=t(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(o){r(this,e);var t=a(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},53:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(394),a=t(r),u=(0,a.default)();n.exports=u},200:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(71),a=o(134),u=t(a),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,u.default)(t,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,s[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,s[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,s[a]=n,!0}return!1}),i}}},201:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(105),a=t(r),u=o(72),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},317:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(357)})})}},316:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(358)})})}},318:function(n,e,o){o(1),n.exports=function(n){return o.e(64672452356029,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(359)})})}},319:function(n,e,o){o(1),n.exports=function(n){return o.e(36450160171835,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(360)})})}},320:function(n,e,o){o(1),n.exports=function(n){return o.e(0xc0d421544639,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(361)})})}},321:function(n,e,o){o(1),n.exports=function(n){return o.e(0x85fa4b5cb347,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(362)})})}},322:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa9f71590c5fb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(363)})})}},323:function(n,e,o){o(1),n.exports=function(n){return o.e(0xfa6e1ee21940,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(364)})})}},324:function(n,e,o){o(1),n.exports=function(n){return o.e(66145460603085,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(365)})})}},325:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa28f1b50a1c0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(366)})})}},326:function(n,e,o){o(1),n.exports=function(n){return o.e(0xce91591b9b52,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(367)})})}},327:function(n,e,o){o(1),n.exports=function(n){return o.e(2786945604662,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(368)})})}},328:function(n,e,o){o(1),n.exports=function(n){return o.e(30754843142833,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(369)})})}},329:function(n,e,o){o(1),n.exports=function(n){return o.e(0xd77d13bd4dd3,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(370)})})}},330:function(n,e,o){o(1),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(371)})})}},331:function(n,e,o){o(1),n.exports=function(n){return o.e(0x8110d210ac78,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(372)})})}},332:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe63e3352dc4c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(373)})})}},333:function(n,e,o){o(1),n.exports=function(n){return o.e(0xff8960259699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(374)})})}},315:function(n,e,o){o(1),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(108)})})}},334:function(n,e,o){o(1),n.exports=function(n){return o.e(40081024087601,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(375)})})}},335:function(n,e,o){o(1),n.exports=function(n){return o.e(0xc7e4f973c83e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(376)})})}},336:function(n,e,o){o(1),n.exports=function(n){return o.e(26184778596085,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(377)})})}},337:function(n,e,o){o(1),n.exports=function(n){return o.e(0xc9f5e346573a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(378)})})}},338:function(n,e,o){o(1),n.exports=function(n){return o.e(69120697091644,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(379)})})}},339:function(n,e,o){o(1),n.exports=function(n){return o.e(0xd4ec9a20f8ff,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(380)})})}},340:function(n,e,o){o(1),n.exports=function(n){return o.e(76857626116648,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(381)})})}},341:function(n,e,o){o(1),n.exports=function(n){return o.e(0x89e8225b523c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},342:function(n,e,o){o(1),n.exports=function(n){return o.e(40172022505595,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},343:function(n,e,o){o(1),n.exports=function(n){return o.e(0x89108f3f8d19,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},344:function(n,e,o){o(1),n.exports=function(n){return o.e(0x7a55b8718cc4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},345:function(n,e,o){o(1),n.exports=function(n){return o.e(0x72ad321b4399,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},346:function(n,e,o){o(1),n.exports=function(n){return o.e(0xfd780584371b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},347:function(n,e,o){o(1),n.exports=function(n){return o.e(0xcf67971e6d08,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},348:function(n,e,o){o(1),n.exports=function(n){return o.e(94139463393558,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},349:function(n,e,o){o(1),n.exports=function(n){return o.e(0x7101b733eebd,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},350:function(n,e,o){o(1),n.exports=function(n){return o.e(32974387278668,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},310:function(n,e,o){o(1),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(202)})})}},133:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(3),a=(t(r),o(200)),u=t(a),s=o(53),i=t(s),c=o(134),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},v="",b=[],C={},N=function(n){return n&&n.default||n},w=void 0,k=!0,R=[],_={},P={},E=5;w=o(203)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){b=b.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,R.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),R=R.slice(-E),o(n,t)})}},S=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):T(e,function(n,t){if(n)o(n);else{var r=N(t());g[e]=r,o(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=R.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},C={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="/bh0-gatsby-blog",p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(L);var t=p(e);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!t.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:t};var n={component:r,json:a,layout:u,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return S(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),r=e,s()}),S(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=e,s()}),void(t.layoutComponentChunkName&&S(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(109))},392:function(n,e){n.exports=[{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"a-very-insecure-ajax-social-network.json",path:"/a-very-insecure-ajax-social-network"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advantages-of-asking-for-help.json",path:"/advantages-of-asking-for-help"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"actionscript-flappy-bird-clone.json",path:"/actionscript-flappy-bird-clone"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"an-implication-of-the-important-css-rule.json",path:"/an-implication-of-the-important-css-rule"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"android-java-react-native-same-app-my-experience.json",path:"/android-java-react-native-same-app-my-experience"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"farewell-hexo-hello-gatsby.json",path:"/farewell-hexo-hello-gatsby"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"html-css-colour-cycling-effect.json",path:"/html-css-colour-cycling-effect"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"html-css-traffic-lights-1.json",path:"/html-css-traffic-lights-#1"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"html-js-swear-word-detector.json",path:"/html-js-swear-word-detector"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"interactive-web-pages-for-noobs.json",path:"/interactive-web-pages-for-noobs"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"introduction-to-arduino-tinkercad.json",path:"/introduction-to-arduino-&-tinkercad"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"i-ve-never-met-my-greatest-heroes.json",path:"/i-ve-never-met-my-greatest-heroes"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"js-html-css-working-with-classes.json",path:"/js-html-css-working-with-classes"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"a-simplified-introduction-to-objects-in-javascript.json",path:"/a-simplified-introduction-to-objects-in-javascript"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"learn-the-basics-of-brainfuck-and-pseudocode.json",path:"/learn-the-basics-of-brainfuck-and-pseudocode"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"my-2017-arduino-projects.json",path:"/my-2017-arduino-projects"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"program-for-fifteen-minutes.json",path:"/program-for-fifteen-minutes"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"rush-or-take-time-coding.json",path:"/rush-or-take-time-coding"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"thankyou-madebrave.json",path:"/thankyou-madebrave"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"react-navmenu-component-using-context-api.json",path:"/react-navmenu-component-using-context-api"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"theres-two-javascripts.json",path:"/theres-two-javascripts"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"unit-testing-js-with-jest.json",path:"/unit-testing-(js)-with-jest"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"visual-basic-introduction-guess-my-number.json",path:"/visual-basic-introduction-[guess-my-number]"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"when-automation-is-moral-my-opinion.json",path:"/when-automation-Is-moral-my-opinion"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"when-youre-ready.json",path:"/when-youre-ready"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"why-i-avoid-form-designers.json",path:"/why-i-avoid-form-designers"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"why-i-chose-javascript.json",path:"/why-i-chose-javascript"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"why-i-don-t-use-wordpress-for-my-blog.json",path:"/why-i-don t-use-wordpress-for-my-blog"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"windows-form-c-sound-player-app.json",path:"/windows-form-c#-sound-player-app"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"wordpress-itself-is-not-a-website-builder.json",path:"/wordpress-itself-is-not-a-website-builder"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"yii-quick-setup-php.json",path:"/yii-quick-setup-php"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-archives-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"archives.json",path:"/archives/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},203:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],a=function(){var n=e();n&&(r.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(72),u=o(3),s=t(u),i=o(168),c=t(i),l=o(71),p=o(354),f=o(295),d=t(f),m=o(107),h=o(201),g=t(h),y=o(53),j=t(y),x=o(392),v=t(x),b=o(393),C=t(b),N=o(199),w=t(N),k=o(198),R=t(k),_=o(133),P=t(_);o(221),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(204);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),t=o.pathname,r=E[t];r&&(t=r.toPath);var a=window.location;if(a.pathname!==o.pathname||a.search!==o.search||a.hash!==o.hash){var u=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(u),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(w.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,u.createElement)(w.default,r({page:!0},t)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},393:function(n,e){n.exports=[]},204:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(53),a=t(r),u="/";u="/bh0-gatsby-blog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},134:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},295:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},1:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,u){var s=!1,i=!0,c=function(n){u&&(u(o,n),u=null)};return!a&&e&&e[t]?void c(!0):(r(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},394:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},109:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];
m.push(new i(n,e)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},493:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},311:function(n,e,o){o(1),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(208)})})}},312:function(n,e,o){o(1),n.exports=function(n){return o.e(0x61134f733b1f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(209)})})}},313:function(n,e,o){o(1),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(210)})})}},314:function(n,e,o){o(1),n.exports=function(n){return o.e(0xb1abc741118f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(211)})})}}});
//# sourceMappingURL=app-f8241cf311a390035484.js.map