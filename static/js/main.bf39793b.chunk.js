(this.webpackJsonpnewrelease=this.webpackJsonpnewrelease||[]).push([[0],{193:function(e,t,a){e.exports=a(329)},300:function(e,t,a){},326:function(e,t){},329:function(e,t,a){"use strict";a.r(t);a(194),a(220),a(222),a(223),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262);var n=a(0),r=a.n(n),s=a(114),i=a.n(s),o=a(18),c=a.n(o),l=a(129),u=a(36),h=a.n(u),d=a(51),m=a(115),p=a(116),f=a(50),v=a(131),g=a(130),b=a(117),y=a.n(b),k=a(11),E=(a(299),a(300),a(128)),w=a.n(E)()("https://music.dan0102dan.ru"),S=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=n.state.history;"home"===n.state.activePanel&&c.a.send("VKWebAppDisableSwipeBack"),e.length>1&&(e.pop(),"home"===e[e.length-1]&&w.close(),n.setState({activePanel:e[e.length-1]}))},n.onChange=function(){var e=Object(d.a)(h.a.mark((function e(t){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({searchResults:r.a.createElement(k.j,null),search:t.target.value}),!(t.target.value.length>0)){e.next=9;break}return e.next=4,y.a.get("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(encodeURIComponent(t.target.value)),{headers:{"x-rapidapi-key":"aa262e04c6msh0fdfa92d02aff45p1e848ajsn1a6084920c73","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",useQueryString:!0}});case 4:a=e.sent,(null===(s=a.data)||void 0===s?void 0:s.data)&&(null===s||void 0===s?void 0:s.total)>0?n.setState({searchResults:s.data}):n.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),e.next=10;break;case 9:Array.isArray(n.state.searchResults)&&n.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={activePanel:"home",history:["home"],popout:null,modal:null,avatar:null,search:"",artists:[],searchResults:[],currentArtist:Number},n.onStoryChange=n.onStoryChange.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),"home"===this.state.activePanel&&c.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:e,history:[].concat(Object(l.a)(this.state.history),[e])})}},{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,c.a.send("VKWebAppGetUserInfo");case 3:e.t1=e.sent.photo_200,e.t2={avatar:e.t1},e.t0.setState.call(e.t0,e.t2),c.a.subscribe((function(e){"VKWebAppViewHide"===e.detail.type&&t.setState({popout:null})})),this.startSocket();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story}),c.a.send("VKWebAppTapticSelectionChanged",{})}},{key:"startSocket",value:function(){w.on("message",(function(e){console.log(e)}))}},{key:"render",value:function(){var e,t,a,n,s=this;return r.a.createElement(k.b,{scheme:document.body.getAttribute("scheme")?document.body.getAttribute("scheme"):"bright_light",webviewType:(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.match(/vk_platform=([a-z_]+)/))?["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger"].includes(null===(n=window.location.search)||void 0===n?void 0:n.match(/vk_platform=([a-z_]+)/)[1])?"vkapps":"internal":null},r.a.createElement(k.n,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,popout:this.state.popout,modal:this.state.modal},r.a.createElement(k.g,{id:"home"},r.a.createElement(k.h,{left:r.a.createElement(k.a,{style:{marginLeft:-5},size:36,src:this.state.avatar?this.state.avatar:null}),separator:!1},r.a.createElement(k.k,{value:this.state.search,onChange:this.onChange})),this.state.search?Array.isArray(this.state.searchResults)&&this.state.searchResults.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.d,{header:r.a.createElement(k.e,{mode:"secondary"},"\u0410\u0440\u0442\u0438\u0441\u0442\u044b")},r.a.createElement(k.f,null,r.a.createElement("div",{style:{display:"flex"}},this.state.searchResults.map((function(e,t,a){var n=e.artist;return a.findIndex((function(e){return e.artist.id===n.id}))>=t&&r.a.createElement("div",{"data-mode":n.id,key:n.id,style:{display:"flex",flexShrink:0,width:80,height:94,flexDirection:"column",alignItems:"center",fontSize:13,paddingLeft:4},onClick:function(e){console.log(e.currentTarget.dataset.mode)}},r.a.createElement(k.a,{size:64,src:n.picture_xl,style:{marginBottom:8}}),n.name)}))))),r.a.createElement(k.d,{header:r.a.createElement(k.e,{mode:"secondary"},"\u041f\u0435\u0441\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439")},this.state.searchResults.map((function(e){return r.a.createElement(k.l,{className:"SongCell",key:e.id,"data-mode":e.artist.id,before:r.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name,after:Math.floor(e.duration/60)+":"+"".concat(e.duration%60).padEnd(2,"0"),onClick:function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.currentTarget.dataset.mode);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},e.title)})))):r.a.createElement(k.c,null,r.a.createElement(k.m,{level:"1",weight:"semibold",style:{marginTop:32}},this.state.searchResults)):"null",this.state.snackbar),r.a.createElement(k.g,{id:"artistsCard"},r.a.createElement(k.h,{left:r.a.createElement(k.i,{style:{cursor:"pointer"},onClick:function(){return s.goBack()}})},"error"===this.state.artists?"\u041e\u0448\u0438\u0431\u043a\u0430!":"\u0410\u0440\u0442\u0438\u0441\u0442 ".concat(this.state.artists.length,"/").concat(this.state.count)),this.state.snackbar)))}}]),a}(r.a.Component);i.a.render(r.a.createElement(S,null),document.getElementById("root")),c.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"bright_light",document.body.attributes.setNamedItem(r)}})),c.a.send("VKWebAppInit")}},[[193,1,2]]]);