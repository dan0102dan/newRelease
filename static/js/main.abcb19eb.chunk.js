(this.webpackJsonpnewrelease=this.webpackJsonpnewrelease||[]).push([[0],{138:function(e,t,a){e.exports=a.p+"static/media/DuaLipa.a58ebb17.jpg"},139:function(e,t,a){e.exports=a.p+"static/media/BillieEilish.d0f0ef37.jpg"},140:function(e,t,a){e.exports=a.p+"static/media/ArianaGrande.10e5c0d4.jpg"},198:function(e,t,a){e.exports=a(334)},305:function(e,t,a){},331:function(e,t){},334:function(e,t,a){"use strict";a.r(t);a(199),a(225),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267);var r=a(0),n=a.n(r),i=a(124),o=a.n(i),s=a(38),l=a(125),c=a(22),u=a.n(c),d=a(31),m=a(58),h=a(54),p=a(55),g=a(59),f=a(57),v=a(12),b=a.n(v),E=a(80),y=a.n(E),k=a(2),w=(a(304),a(142)),x=a.n(w),S=a(143),A=a.n(S),_=a(145),C=a.n(_),R=a(144),B=a.n(R),P=a(138),j=a.n(P),z=a(139),V=a.n(z),O=a(140),T=a.n(O),L=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).goBack=function(){var e=r.state.history;"greeting1"===r.state.activePanel&&b.a.send("VKWebAppDisableSwipeBack"),e.length>1&&(e.pop(),r.setState({activePanel:e[e.length-1]}))},r.state={activePanel:"greeting1",history:["greeting1"]},r}return Object(p.a)(a,[{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),"greeting1"===this.state.activePanel&&b.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:e,history:[].concat(Object(m.a)(this.state.history),[e])})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(){return e.goBack()}))}},{key:"render",value:function(){var e=this;return n.a.createElement(k.w,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack},n.a.createElement(k.l,{id:"greeting1"},n.a.createElement("div",{style:{width:"100%",height:"100%",background:"#00a1e3",position:"fixed",zIndex:-1,top:0}}),n.a.createElement("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(j.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},n.a.createElement(k.v,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2.5em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!")),n.a.createElement(k.v,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy"},"\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u043e\u0432\u0438\u043d\u043a\u0438 \u2014 \u0412\u0430\u0448 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0432 \u043c\u0443\u0437\u044b\u043a\u0435."),n.a.createElement(k.g,null,n.a.createElement(k.b,{mode:"overlay_primary",size:"xl",onClick:function(){e.goToPage("greeting2")}},"\u0414\u0430\u043b\u0435\u0435"))),n.a.createElement(k.l,{id:"greeting2"},n.a.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #332f28, #36332d)",position:"fixed",zIndex:-1,top:0}}),n.a.createElement("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(V.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},n.a.createElement(k.v,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy"},"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f!")),n.a.createElement(k.v,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy"},"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u043b\u0438\u0437\u0430 \u043f\u0435\u0441\u043d\u0438 \u0431\u043e\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0438\u0442 \u0412\u0430\u043c \u043e\u0431 \u044d\u0442\u043e\u043c."),n.a.createElement(k.g,null,n.a.createElement(k.b,{mode:"overlay_primary",size:"xl",onClick:function(){e.goToPage("greeting3")}},"\u041f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u0435\u043d\u044c\u043a\u043e"))),n.a.createElement(k.l,{id:"greeting3"},n.a.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(#cdd0d4, #767676)",position:"fixed",zIndex:-1,top:0}}),n.a.createElement("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(T.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},n.a.createElement(k.v,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2.5em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy"},"\u0411\u0443\u0434\u044c \u0432 \u0442\u0440\u0435\u043d\u0434\u0435!")),n.a.createElement(k.v,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy"},"\u0421\u043b\u0443\u0448\u0430\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u0435\u0441\u043d\u0438 \u043f\u0440\u044f\u043c\u043e \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435."),n.a.createElement(k.g,null,n.a.createElement(k.b,{mode:"overlay_primary",size:"xl",onClick:Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.setActiveView("home"),t.next=3,b.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"});case 3:case"end":return t.stop()}}),t)})))},"\u0412 \u0441\u0435\u0440\u0432\u0438\u0441!"))))}}]),a}(n.a.Component),W=(a(305),a(141)),I=a.n(W)()("https://music.dan0102dan.ru"),K=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).goBack=function(){var e=r.state.history;"home"===r.state.activePanel&&b.a.send("VKWebAppDisableSwipeBack"),e.length>1&&(e.pop(),r.setState({activePanel:e[e.length-1]}))},r.state={activeView:"home",activePanel:"home",history:["home"],scheme:"bright_light",slideIndex:0,popout:null,modal:null,fetching:!1,user:{},search:"",artists:[],searchResults:[],currentArtist:{},currentPlaylist:{},currentAlbum:{},catalog:{},isCooldown:!1},r}return Object(p.a)(a,[{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),"home"===this.state.activePanel&&b.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:e,history:[].concat(Object(m.a)(this.state.history),[e])})}},{key:"openError",value:function(e,t){var a=this;this.setState({snackbar:n.a.createElement(k.t,{duration:t||4e3,layout:"vertical",onClose:function(){return a.setState({snackbar:null})},before:n.a.createElement(k.a,{size:24,style:{backgroundImage:"linear-gradient(135deg, #fc7373, #cb5e5a)"}},n.a.createElement(x.a,{fill:"#fff",width:14,height:14}))},e)})}},{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("popstate",(function(){return t.goBack()})),this.startSocket(),window.location.hash&&this.getArtistsCard(Number(window.location.hash.replace("#",""))),I.emit("HomeCatalog",{sign:window.location.search.slice(1)}),this.setState({popout:n.a.createElement(k.q,null)}),e.prev=5,b.a.subscribe((function(e){var a=e.detail,r=a.type,n=a.data;if("VKWebAppUpdateConfig"===r){var i=document.createAttribute("scheme");i.value=n.scheme?n.scheme:"bright_light",document.body.attributes.setNamedItem(i),t.setState({scheme:i.value}),"bright_light"===i.value?b.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark"}):b.a.send("VKWebAppSetViewSettings",{status_bar_style:"light"})}else"VKWebAppViewHide"===r&&t.setState({popout:null})})),e.next=9,b.a.send("VKWebAppStorageGet",{keys:["greeting"]}).then((function(e){var a;""===(null===e||void 0===e||null===(a=e.keys[0])||void 0===a?void 0:a.value)&&t.setState({activeView:"greeting"})}));case 9:return b.a.send("VKWebAppInit"),e.t0=this,e.next=13,b.a.send("VKWebAppGetUserInfo");case 13:e.t1=e.sent,e.t2={user:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(5),console.log(e.t3);case 21:case"end":return e.stop()}}),e,this,[[5,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"startSocket",value:function(){var e=this;I.on("message",(function(t){var a,r,n,i,o,c;if(console.log(t),null===t||void 0===t?void 0:t.data){if("HomeCatalog"===t.method){if((null===(a=t.data)||void 0===a||null===(r=a.tracks)||void 0===r?void 0:r.data)||(null===(n=t.data)||void 0===n||null===(i=n.artists)||void 0===i?void 0:i.data)||(null===(o=t.data)||void 0===o||null===(c=o.albums)||void 0===c?void 0:c.data)){var m;if(null===(m=t.data)||void 0===m?void 0:m.novelties){var h,p=Object(l.a)(t.data.novelties);try{for(p.s();!(h=p.n()).done;){var g=h.value;g.tracks.filter((function(e){return e.release_date})).length>0?g.last_release=Math.max.apply(Math,g.tracks.filter((function(e){return e.release_date})).map((function(e){return e.release_date}))):g.last_release=0}}catch(w){p.e(w)}finally{p.f()}t.data.novelties.sort((function(e,t){return t.last_release-e.last_release}))}e.setState({catalog:t.data,fetching:!1,popout:null})}}else if("getArtist"===t.method)e.setState({currentArtist:t.data},Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.goToPage("artistsCard"),t.prev=1,t.next=4,y.a.get("https://dan0102dan.herokuapp.com/https://api.deezer.com/artist/".concat(e.state.currentArtist.id,"/playlists"));case 4:a=t.sent.data.data,e.setState((function(e){return{currentArtist:Object(s.a)(Object(s.a)({},e.currentArtist),{},{playlists:a})}})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))),e.setState({popout:null});else if("notifications"===t.method){var f;if(e.state.currentArtist&&e.setState((function(e){return{currentArtist:Object(s.a)(Object(s.a)({},e.currentArtist),{},{notifications:t.data.toggle})}})),null===(f=e.state.user)||void 0===f?void 0:f.artists){var v=e.state.user;v.artists[v.artists.findIndex((function(e){return e.id===t.data.artist}))].toggle=t.data.toggle,e.setState({user:v,popout:null})}b.a.send("VKWebAppTapticSelectionChanged",{}).catch((function(){}))}else if("profile"===t.method)t.data.map((function(e){return e.toggle=!0})),e.setState((function(e){return{user:Object(s.a)(Object(s.a)({},e.user),{},{artists:t.data})}}),(function(){return e.goToPage("profile")})),e.setState({popout:null});else if("search"===t.method){var E,k;(null===t||void 0===t||null===(E=t.data)||void 0===E?void 0:E.total)>0&&(null===t||void 0===t||null===(k=t.data)||void 0===k?void 0:k.data)?e.setState({searchResults:t.data.data}):e.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}}else(null===t||void 0===t?void 0:t.error)&&("HomeCatalog"===t.method?(e.setState({fetching:!1}),e.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")):"getArtist"===t.method?(e.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),e.setState({popout:null})):"notifications"===t.method?(e.openError(t.error),b.a.send("VKWebAppTapticNotificationOccurred",{type:"error"}).catch((function(){}))):"profile"===t.method?(e.openError(t.error),e.setState({popout:null})):"search"===t.method?e.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"):"flood"===t.method?(e.openError(t.error,t.next),e.setState({popout:null,fetching:!1})):(e.openError(t.error),e.setState({popout:null})))}))}},{key:"turnNotifications",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=4;break}return e.next=4,b.a.send("VKWebAppAllowMessagesFromGroup",{group_id:74612115});case 4:return e.next=6,I.emit("notifications",{toggle:t,id:this.state.currentArtist.id,sign:window.location.search.slice(1)});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f");case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getArtistsCard",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===(a=this.state.currentArtist)||void 0===a?void 0:a.id)!==t){e.next=3;break}return this.goToPage("artistsCard"),e.abrupt("return");case 3:return this.setState({popout:n.a.createElement(k.q,null)}),e.prev=4,e.next=7,I.emit("getArtist",{id:t,sign:window.location.search.slice(1)});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),this.setState({popout:null});case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,r,i,o,s,l,c,m,h,p,g,f,v,b,E,w,x,S,_,R,P,j,z,V,O,T,W,K,N=this;return n.a.createElement(k.f,{isWebView:!0,scheme:this.state.scheme,webviewType:(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.match(/vk_platform=([a-z_]+)/))?["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger","mobile_web"].includes(null===(r=window.location.search)||void 0===r?void 0:r.match(/vk_platform=([a-z_]+)/)[1])?"vkapps":"internal":null},n.a.createElement(k.p,{activeView:this.state.activeView},n.a.createElement(k.w,{id:"home",activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,popout:this.state.popout,modal:this.state.modal},n.a.createElement(k.l,{id:"home"},n.a.createElement(k.m,{left:n.a.createElement(k.a,{style:{marginLeft:-5,cursor:"pointer"},size:36,src:null===(i=this.state.user)||void 0===i?void 0:i.photo_200,onClick:function(){I.emit("profile",{sign:window.location.search.slice(1)}),N.setState({popout:n.a.createElement(k.q,null)})}}),separator:!1},n.a.createElement(k.r,{value:this.state.search,onChange:function(e){N.setState({searchResults:n.a.createElement(k.q,null),search:e.target.value}),N.state.isCooldown||(e.target.value.length>0?(console.log(e.target.value.trim()),I.emit("search",{q:e.target.value})):Array.isArray(N.state.searchResults)&&N.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),N.setState({isCooldown:!0}),setTimeout((function(){return N.setState({isCooldown:!1})}),100))}})),this.state.search?Array.isArray(this.state.searchResults)&&this.state.searchResults.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,{mode:"secondary"},"\u0410\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(k.j,null,n.a.createElement("div",{style:{display:"flex"}},this.state.searchResults.map((function(e,t,a){var r=e.artist;return a.findIndex((function(e){return e.artist.id===r.id}))>=t&&n.a.createElement("div",{key:r.id,style:{display:"flex",flexShrink:0,width:80,height:90,flexDirection:"column",alignItems:"center",fontSize:12,paddingLeft:4,cursor:"pointer"},onClick:function(){return N.getArtistsCard(r.id)}},n.a.createElement(k.a,{size:64,src:r.picture_xl,style:{marginBottom:8}}),r.name.length>11?r.name.slice(0,9)+"...":r.name)}))))),n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,{mode:"secondary"},"\u041f\u0435\u0441\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439")},this.state.searchResults.map((function(e){return n.a.createElement(k.s,{style:{cursor:"pointer"},key:e.id,expandable:!0,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name,onClick:function(){return N.getArtistsCard(e.artist.id)}},e.title)})))):n.a.createElement(k.g,null,n.a.createElement(k.v,{level:"1",weight:"semibold",style:{marginTop:32}},this.state.searchResults)):n.a.createElement(k.o,{onRefresh:Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N.setState({fetching:!0}),e.next=4,I.emit("HomeCatalog",{sign:window.location.search.slice(1)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),N.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435");case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),isFetching:this.state.fetching},(null===(o=this.state.catalog)||void 0===o||null===(s=o.novelties)||void 0===s?void 0:s.length)>0&&n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438 \u0443 \u0412\u0430\u0448\u0438\u0445 \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u0430\u0440\u0442\u0438\u0441\u0442\u043e\u0432")},n.a.createElement(k.d,null,this.state.catalog.novelties.map((function(e){return n.a.createElement(k.c,{onClick:function(){return N.getArtistsCard(e.id)},key:e.id,size:"s"},n.a.createElement("div",{style:{width:124,height:150,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:124,height:124,borderRadius:"50%"},src:e.picture_xl,alt:""}),n.a.createElement(k.u,{weight:"medium",style:{textAlign:"center",marginTop:7}},e.name)))})))),n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u041b\u0443\u0447\u0448\u0438\u0435 \u0442\u0440\u0435\u043a\u0438")},(null===(l=this.state.catalog)||void 0===l||null===(c=l.tracks)||void 0===c||null===(m=c.data)||void 0===m?void 0:m.length)>0&&this.state.catalog.tracks.data.map((function(e,t,a){return n.a.createElement(k.s,{className:"popularSongs",style:{marginRight:8,marginLeft:8,background:e.background,borderTopLeftRadius:0===t?15:0,borderTopRightRadius:0===t?15:0,borderBottomLeftRadius:t===a.length-1?15:0,borderBottomRightRadius:t===a.length-1?15:0},key:e.id,disabled:!0,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),after:n.a.createElement(A.a,{fill:"#ffffff",onClick:function(){return N.getArtistsCard(e.artist.id)}}),description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")}))),n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0430\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(k.d,null,(null===(h=this.state.catalog)||void 0===h||null===(p=h.artists)||void 0===p?void 0:p.data)&&this.state.catalog.artists.data.map((function(e){return n.a.createElement(k.c,{onClick:function(){return N.getArtistsCard(e.id)},key:e.id,size:"s"},n.a.createElement("div",{style:{width:124,height:154,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:124,height:124,borderRadius:"50%"},src:e.picture_xl,alt:""}),n.a.createElement(k.u,{weight:"medium",style:{textAlign:"center",marginTop:7}},e.name)))}))))),this.state.snackbar),n.a.createElement(k.l,{id:"profile"},n.a.createElement(k.m,{separator:!1,left:n.a.createElement(k.n,{style:{cursor:"pointer"},onClick:this.goBack})},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),(null===(g=this.state.user)||void 0===g||null===(f=g.artists)||void 0===f?void 0:f.length)>0?n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u0410\u0440\u0442\u0438\u0441\u0442\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c")},n.a.createElement(k.k,null,this.state.user.artists.map((function(e){return n.a.createElement(k.e,{before:n.a.createElement(k.a,{src:e.picture_xl,size:50}),key:e.id,selectable:!0,checked:e.toggle,onChange:function(t){N.setState({popout:n.a.createElement(k.q,null)}),I.emit("notifications",{toggle:t.target.checked,id:e.id,sign:window.location.search.slice(1)})}},e.name)})))):n.a.createElement(k.v,{level:"4",weight:"semibold",style:{textAlign:"center",marginTop:12}},"\u0412\u044b \u043f\u043e\u043a\u0430 \u043d\u0438 \u043d\u0430 \u043a\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c("),this.state.snackbar),n.a.createElement(k.l,{id:"artistsCard"},n.a.createElement(k.m,{id:"artistsHeader",separator:!1,left:n.a.createElement(k.n,{style:{cursor:"pointer"},onClick:this.goBack})}),n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("div",{style:{width:"100%",height:500,borderBottomLeftRadius:25,borderBottomRightRadius:25,marginTop:"calc(-1px - var(--panelheader_height_ios) - var(--safe-area-inset-top))",background:"linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(".concat(this.state.currentArtist.picture_xl,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),n.a.createElement(k.v,{style:{color:"#fff",position:"absolute",bottom:14,fontSize:"2.5em",marginLeft:18,maxWidth:"80%"},weight:"heavy"},this.state.currentArtist.name),this.state.currentArtist.notifications?n.a.createElement(B.a,{className:"checkedBell",width:40,height:40,style:{color:"#fff",position:"absolute",bottom:17,right:17,height:50},onClick:function(){return N.turnNotifications(!1)}}):n.a.createElement(C.a,{className:"Bell",width:40,height:40,style:{color:"#fff",position:"absolute",bottom:17,right:17,height:50},onClick:function(){return N.turnNotifications(!0)}})),(null===(v=this.state.currentArtist)||void 0===v||null===(b=v.tracks)||void 0===b?void 0:b.filter((function(e){return e.release_date})).length)>0&&n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0440\u0435\u043b\u0438\u0437\u044b")},n.a.createElement(k.j,null,n.a.createElement("div",{style:{display:"flex"}},this.state.currentArtist.tracks.filter((function(e){return e.release_date})).reduce((function(e,t,a){return e[Math.floor(a/3)]||(e[Math.floor(a/3)]=[]),e[Math.floor(a/3)][a%3]=t,e}),[]).map((function(e,t){return n.a.createElement(k.c,{key:t},e.map((function(e){return n.a.createElement(k.s,{disabled:!0,style:{width:240},key:e.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")})))}))))),n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438")},n.a.createElement(k.j,null,n.a.createElement("div",{style:{display:"flex"}},(null===(E=this.state.currentArtist)||void 0===E||null===(w=E.tracks)||void 0===w?void 0:w.length)>0&&this.state.currentArtist.tracks.reduce((function(e,t,a){return e[Math.floor(a/3)]||(e[Math.floor(a/3)]=[]),e[Math.floor(a/3)][a%3]=t,e}),[]).map((function(e,t){return n.a.createElement(k.c,{key:t},e.map((function(e){return n.a.createElement(k.s,{style:{width:240},key:e.id,disabled:!0,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")})))}))))),(null===(x=this.state.currentArtist)||void 0===x||null===(S=x.albums)||void 0===S?void 0:S.length)>0&&n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438")},n.a.createElement(k.d,null,this.state.currentArtist.albums.sort((function(e,t){return t.release_date-e.release_date})).map((function(e){return n.a.createElement(k.c,{onClick:Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N.setState({popout:n.a.createElement(k.q,null)}),t.prev=1,t.next=4,y.a.get("https://dan0102dan.herokuapp.com/"+e.tracklist);case 4:e.tracks=t.sent.data.data,N.setState({currentAlbum:e},(function(){return N.goToPage("albumCard")})),N.setState({popout:null}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),N.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u043b\u044c\u0431\u043e\u043c"),N.setState({popout:null});case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),key:e.id,size:"s"},n.a.createElement("div",{style:{width:184,height:256,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:184,height:184,borderRadius:4},src:e.cover_xl,alt:""}),n.a.createElement(k.u,{weight:"medium",style:{textAlign:"left",marginTop:6}},e.title," ",e.explicit_lyrics&&"\ud83c\udd74"),n.a.createElement(k.u,{weight:"regular",style:{textAlign:"left",marginTop:2,color:"f1f1f1",fontSize:13}},"\u0410\u043b\u044c\u0431\u043e\u043c \u0432\u044b\u0448\u0435\u043b ",new Date(e.release_date).toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"}))))})))),(null===(_=this.state.currentArtist)||void 0===_?void 0:_.related)&&n.a.createElement(k.h,{separator:"hide",header:n.a.createElement(k.i,{mode:"secondary"},"\u0410\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(k.d,null,this.state.currentArtist.related.map((function(e){return n.a.createElement(k.c,{onClick:function(){return N.getArtistsCard(e.id)},key:e.id,size:"s"},n.a.createElement("div",{style:{width:124,height:154,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:124,height:124,borderRadius:"50%"},src:e.picture_xl,alt:""}),n.a.createElement(k.u,{weight:"medium",style:{textAlign:"center",marginTop:7}},e.name)))})))),this.state.snackbar),n.a.createElement(k.l,{id:"albumCard"},n.a.createElement(k.m,{separator:!1,left:n.a.createElement(k.n,{style:{cursor:"pointer"},onClick:this.goBack})},this.state.currentAlbum.title),n.a.createElement(k.h,{separator:"hide"},(null===(R=this.state.currentAlbum)||void 0===R||null===(P=R.tracks)||void 0===P?void 0:P.length)>0&&this.state.currentAlbum.tracks.map((function(e,t){return n.a.createElement(k.s,{before:n.a.createElement(k.u,{style:{marginRight:12}},(t+1).toString().padStart(2,"0")),key:e.id,description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")}))),this.state.snackbar),n.a.createElement(k.l,{id:"playlistCard"},n.a.createElement(k.m,{separator:!1,left:n.a.createElement(k.n,{style:{cursor:"pointer"},onClick:this.goBack})},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"),n.a.createElement("img",{style:{height:300,objectFit:"cover",borderRadius:25,marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:8},src:this.state.currentPlaylist.picture_xl,alt:""}),n.a.createElement(k.h,{separator:"hide"},(null===(j=this.state.currentPlaylist)||void 0===j||null===(z=j.tracks)||void 0===z?void 0:z.length)>0&&this.state.currentPlaylist.tracks.map((function(e){return n.a.createElement(k.s,{expandable:!0,onClick:function(){return N.getArtistsCard(e.artist.id)},key:e.id,before:n.a.createElement(k.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")})),n.a.createElement(k.u,{weight:"medium",style:{marginTop:16,marginBottom:8,textAlign:"center"}},null===(V=this.state.currentPlaylist)||void 0===V||null===(O=V.tracks)||void 0===O?void 0:O.length," \u043f\u0435\u0441\u0435\u043d \u2022 ",null===(T=this.state.currentPlaylist)||void 0===T||null===(W=T.creation_date)||void 0===W?void 0:W.substring(0,(null===(K=this.state.currentPlaylist)||void 0===K?void 0:K.creation_date.length)-15))),this.state.snackbar)),n.a.createElement(L,{setActiveView:function(e){return N.setState({activeView:e})},id:"greeting"})))}}]),a}(n.a.Component);o.a.render(n.a.createElement(K,null),document.getElementById("root"))}},[[198,1,2]]]);