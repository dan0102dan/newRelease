(this.webpackJsonpnewrelease=this.webpackJsonpnewrelease||[]).push([[0],{199:function(e,t,a){e.exports=a(337)},306:function(e,t,a){},332:function(e,t){},337:function(e,t,a){"use strict";a.r(t);a(200),a(226),a(228),a(229),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268);var r=a(0),n=a.n(r),i=a(52),s=a.n(i),o=a(18),c=a.n(o),l=a(75),u=a(136),d=a(13),h=a.n(d),m=a(29),p=a(118),f=a(119),g=a(53),v=a(138),b=a(137),y=a(120),E=a.n(y),k=a(4),w=(a(305),a(132)),S=a.n(w),A=a(54),x=a.n(A),C=a(134),_=a.n(C),j=a(133),O=a.n(j),R=a(350),T=(a(306),a(131)),z=a.n(T)()("https://music.dan0102dan.ru"),V=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).goBack=function(){var e=r.state.history;"home"===r.state.activePanel&&c.a.send("VKWebAppDisableSwipeBack"),e.length>1&&(e.pop(),r.setState({activePanel:e[e.length-1]}))},r.onChange=function(){var e=Object(m.a)(h.a.mark((function e(t){var a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.setState({searchResults:n.a.createElement(k.n,null),search:t.target.value}),!(t.target.value.length>0)){e.next=9;break}return e.next=4,E.a.get("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(encodeURIComponent(t.target.value)),{headers:{"x-rapidapi-key":"aa262e04c6msh0fdfa92d02aff45p1e848ajsn1a6084920c73","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",useQueryString:!0}});case 4:a=e.sent,(null===(i=a.data)||void 0===i?void 0:i.data)&&(null===i||void 0===i?void 0:i.total)>0?r.setState({searchResults:i.data}):r.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),e.next=10;break;case 9:Array.isArray(r.state.searchResults)&&r.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={activePanel:"home",history:["home"],popout:null,modal:null,avatar:null,search:"",artists:[],searchResults:[],currentArtist:{},catalog:{}},r.onStoryChange=r.onStoryChange.bind(Object(g.a)(r)),r}return Object(f.a)(a,[{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),"home"===this.state.activePanel&&c.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:e,history:[].concat(Object(u.a)(this.state.history),[e])})}},{key:"openError",value:function(e){var t=this;this.setState({snackbar:n.a.createElement(k.q,{layout:"vertical",onClose:function(){return t.setState({snackbar:null})},before:n.a.createElement(k.a,{size:24,style:{backgroundImage:"linear-gradient(135deg, #fc7373, #cb5e5a)"}},n.a.createElement(S.a,{fill:"#fff",width:14,height:14}))},e)})}},{key:"componentDidMount",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startSocket(),z.emit("HomeCatalog",{sign:window.location.search.slice(1)}),e.t0=this,e.next=5,c.a.send("VKWebAppGetUserInfo");case 5:e.t1=e.sent.photo_200,e.t2={avatar:e.t1},e.t0.setState.call(e.t0,e.t2),c.a.subscribe((function(e){"VKWebAppViewHide"===e.detail.type&&t.setState({popout:null})}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story}),c.a.send("VKWebAppTapticSelectionChanged",{})}},{key:"startSocket",value:function(){var e=this;z.on("message",(function(t){console.log(t),(null===t||void 0===t?void 0:t.data)?"HomeCatalog"===t.method?e.setState({catalog:t.data}):"getArtist"===t.method?(e.setState({currentArtist:t.data},(function(){return e.goToPage("artistsCard")})),e.setState({popout:null})):"notifications"===t.method&&e.setState((function(e){return{currentArtist:Object(l.a)(Object(l.a)({},e.currentArtist),{},{notifications:t.data.toggle})}})):(null===t||void 0===t?void 0:t.error)&&("HomeCatalog"===t.method?e.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"):"getArtist"===t.method?(e.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),e.setState({popout:null})):"notifications"===t.method?(e.openError(t.error),c.a.send("VKWebAppTapticNotificationOccurred",{type:"error"})):(e.openError(t.error),e.setState({popout:null})))}))}},{key:"turnNotifications",value:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.emit("notifications",{toggle:t,id:this.state.currentArtist.id,sign:window.location.search.slice(1)});case 2:c.a.send("VKWebAppTapticSelectionChanged",{});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getArtistsCard",value:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({popout:n.a.createElement(k.n,null)}),e.prev=1,e.next=4,z.emit("getArtist",{id:t,sign:window.location.search.slice(1)});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),this.setState({popout:null});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,r,i,s,o,c,l,u,d,p,f,g,v,b,y=this;return n.a.createElement(k.d,{scheme:document.body.getAttribute("scheme")?document.body.getAttribute("scheme"):"bright_light",webviewType:(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.match(/vk_platform=([a-z_]+)/))?["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger"].includes(null===(r=window.location.search)||void 0===r?void 0:r.match(/vk_platform=([a-z_]+)/)[1])?"vkapps":"internal":null},n.a.createElement(k.s,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,popout:this.state.popout,modal:this.state.modal},n.a.createElement(k.k,{id:"home"},n.a.createElement(k.l,{left:n.a.createElement(k.a,{style:{marginLeft:-5},size:36,src:this.state.avatar?this.state.avatar:null}),separator:!1},n.a.createElement(k.o,{value:this.state.search,onChange:this.onChange})),this.state.search?Array.isArray(this.state.searchResults)&&this.state.searchResults.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(k.g,{header:n.a.createElement(k.h,{mode:"secondary"},"\u0410\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(k.j,null,n.a.createElement("div",{style:{display:"flex"}},this.state.searchResults.map((function(e,t,a){var r=e.artist;return a.findIndex((function(e){return e.artist.id===r.id}))>=t&&n.a.createElement("div",{"data-mode":r.id,key:r.id,style:{display:"flex",flexShrink:0,width:80,height:94,flexDirection:"column",alignItems:"center",fontSize:12,paddingLeft:4},onClick:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.getArtistsCard(t.currentTarget.dataset.mode));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},n.a.createElement(k.a,{size:64,src:r.picture_xl,style:{marginBottom:8}}),r.name.length>17?r.name.slice(0,13)+"...":r.name)}))))),n.a.createElement(k.g,{header:n.a.createElement(k.h,{mode:"secondary"},"\u041f\u0435\u0441\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439")},this.state.searchResults.map((function(e){return n.a.createElement(k.p,{className:"SongCell",key:e.id,"data-mode":e.artist.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name,after:Math.floor(e.duration/60)+":"+"".concat(e.duration%60).padEnd(2,"0"),onClick:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.getArtistsCard(t.currentTarget.dataset.mode));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},e.title)})))):n.a.createElement(k.e,null,n.a.createElement(k.r,{level:"1",weight:"semibold",style:{marginTop:32}},this.state.searchResults)):n.a.createElement(n.a.Fragment,null,n.a.createElement(k.g,{separator:"hide",header:n.a.createElement(k.h,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0430\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(k.c,null,(null===(i=this.state.catalog)||void 0===i||null===(s=i.artists)||void 0===s?void 0:s.data)&&this.state.catalog.artists.data.map((function(e){return n.a.createElement(k.b,{"data-mode":e.id,onClick:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.getArtistsCard(t.currentTarget.dataset.mode));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),key:e.id,size:"s"},n.a.createElement("div",{style:{width:154,height:190,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:154,height:154,borderRadius:8},src:e.picture_xl,alt:""}),n.a.createElement("div",{style:{width:154,height:34,marginTop:7}},n.a.createElement(k.i,{weight:"semibold"},e.name))))})))),n.a.createElement(k.g,{header:n.a.createElement(k.h,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438")},n.a.createElement(k.f,{slideWidth:"90%",align:"right",style:{height:180}},n.a.createElement("div",null,(null===(o=this.state.catalog)||void 0===o||null===(c=o.tracks)||void 0===c?void 0:c.data)&&this.state.catalog.tracks.data.map((function(e,t){return t<3&&n.a.createElement(k.p,{key:e.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),after:n.a.createElement(x.a,{fill:"var(--accent)","data-mode":e.artist.id,onClick:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.getArtistsCard(t.currentTarget.dataset.mode));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),description:e.artist.name},e.title)}))),n.a.createElement("div",null,(null===(l=this.state.catalog)||void 0===l||null===(u=l.tracks)||void 0===u?void 0:u.data)&&this.state.catalog.tracks.data.map((function(e,t){return t>2&&t<6&&n.a.createElement(k.p,{key:e.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),after:n.a.createElement(x.a,{fill:"var(--accent)","data-mode":e.artist.id,onClick:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.getArtistsCard(t.currentTarget.dataset.mode));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),description:e.artist.name},e.title)}))),n.a.createElement("div",null,(null===(d=this.state.catalog)||void 0===d||null===(p=d.tracks)||void 0===p?void 0:p.data)&&this.state.catalog.tracks.data.map((function(e,t){return t>5&&t<9&&n.a.createElement(k.p,{key:e.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),after:n.a.createElement(x.a,{fill:"var(--accent)","data-mode":e.artist.id,onClick:function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.getArtistsCard(t.currentTarget.dataset.mode));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),description:e.artist.name},e.title)}))))),n.a.createElement(k.g,{separator:"hide",header:n.a.createElement(k.h,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b")},n.a.createElement(k.c,null,(null===(f=this.state.catalog)||void 0===f||null===(g=f.playlists)||void 0===g?void 0:g.data)&&this.state.catalog.playlists.data.map((function(e){return n.a.createElement(k.b,{key:e.id,size:"s"},n.a.createElement("div",{style:{width:154,height:225,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:154,height:154,borderRadius:8},src:e.picture_xl,alt:""}),n.a.createElement("div",{style:{width:154,height:34,marginTop:7}},n.a.createElement(k.i,{weight:"semibold"},e.title))))}))))),this.state.snackbar),n.a.createElement(k.k,{id:"artistsCard"},n.a.createElement(k.l,{id:"artistsHeader",separator:!1,left:n.a.createElement(k.m,{style:{cursor:"pointer"},onClick:function(){return y.goBack()}})}),n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("img",{style:{width:"100%",height:500,objectFit:"cover",borderBottomLeftRadius:25,borderBottomRightRadius:25,marginTop:"calc(-1px - var(--panelheader_height_ios) - var(--safe-area-inset-top))"},src:this.state.currentArtist.picture_xl,alt:""}),n.a.createElement(k.r,{style:{color:"#fff",position:"absolute",bottom:30,fontSize:"2.5em",marginLeft:12,textShadow:"0px 2px 3px #000"},weight:"heavy"},this.state.currentArtist.name),this.state.currentArtist.notifications?n.a.createElement(O.a,{width:40,height:40,style:{color:"#fff",position:"absolute",bottom:30,right:10,height:50},onClick:function(){return y.turnNotifications(!1)}}):n.a.createElement(_.a,{width:40,height:40,style:{color:"#fff",position:"absolute",bottom:30,right:10,height:50},onClick:function(){return y.turnNotifications(!0)}})),n.a.createElement(k.g,{header:n.a.createElement(k.h,{mode:"secondary"},"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438")},(null===(v=this.state.currentArtist)||void 0===v||null===(b=v.tracks)||void 0===b?void 0:b.length)>0&&this.state.currentArtist.tracks.map((function(e,t,a){return n.a.createElement(k.p,{className:"SongCell",key:e.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name,after:n.a.createElement(R.a,{name:"half-rating-read",defaultValue:5-(a[0===t?t:t-1].rank>e.rank?.1*t:.1*-t),precision:.1,readOnly:!0})},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")}))),this.state.snackbar)))}}]),a}(n.a.Component);s.a.render(n.a.createElement(V,null),document.getElementById("root")),c.a.subscribe((function(e){var t=e.detail,a=t.type,r=t.data;if("VKWebAppUpdateConfig"===a){var n=document.createAttribute("scheme");n.value=r.scheme?r.scheme:"bright_light",document.body.attributes.setNamedItem(n)}})),c.a.send("VKWebAppInit")}},[[199,1,2]]]);