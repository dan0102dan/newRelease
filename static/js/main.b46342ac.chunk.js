(this.webpackJsonpnewrelease=this.webpackJsonpnewrelease||[]).push([[0],{307:function(t,e,i){},330:function(t,e){},335:function(t,e,i){"use strict";i.r(e);i(200),i(226),i(228),i(229),i(231),i(232),i(233),i(234),i(235),i(236),i(237),i(238),i(240),i(241),i(242),i(243),i(244),i(245),i(246),i(247),i(248),i(249),i(251),i(252),i(253),i(254),i(255),i(256),i(257),i(258),i(259),i(260),i(261),i(262),i(263),i(264),i(265),i(266),i(267),i(268);var r=i(1),s=i(0),a=i.n(s),n=i(130),o=i.n(n),c=i(39),l=i(131),d=i(60),u=i(19),h=i.n(u),p=i(31),j=i(56),b=i(57),g=i(61),m=i(59),f=i(17),v=i.n(f),x=i(62),O=i.n(x),w=i(85),y=i.n(w),k=i(46),A=i.n(k),S=i(3),C=(i(306),i(146)),_=i.n(C),B=i(147),R=i.n(B),T=i(149),P=i.n(T),z=i(148),E=i.n(z),V=i.p+"static/media/DuaLipa.ac7e2d0c.jpg",L=i.p+"static/media/BillieEilish.11912ddf.jpg",I=i.p+"static/media/ArianaGrande.5e8c2779.jpg",N=function(t){Object(g.a)(i,t);var e=Object(m.a)(i);function i(t){var r;return Object(j.a)(this,i),(r=e.call(this,t)).goBack=function(){var t=r.state.history;"greeting1"===r.state.activePanel&&v.a.send("VKWebAppDisableSwipeBack"),t.length>1&&(t.pop(),r.setState({activePanel:t[t.length-1]}))},r.state={activePanel:"greeting1",history:["greeting1"]},r}return Object(b.a)(i,[{key:"goToPage",value:function(t){window.history.pushState({panel:t},t),"greeting1"===this.state.activePanel&&v.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:t,history:[].concat(Object(d.a)(this.state.history),[t])})}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("popstate",(function(){return t.goBack()})),window.Image&&((new window.Image).src=V,(new window.Image).src=L,(new window.Image).src=I)}},{key:"render",value:function(){var t=this;return Object(r.jsxs)(S.y,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,children:[Object(r.jsxs)(S.n,{id:"greeting1",children:[Object(r.jsx)("div",{style:{width:"100%",height:"100%",background:"#00a1e3",position:"fixed",zIndex:-1,top:0}}),Object(r.jsx)("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(V,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(r.jsx)(S.x,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2.5em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"})}),Object(r.jsx)(S.x,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy",children:"\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u043e\u0432\u0438\u043d\u043a\u0438 \u2014 \u0412\u0430\u0448 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0432 \u043c\u0443\u0437\u044b\u043a\u0435."}),Object(r.jsx)(S.h,{children:Object(r.jsx)(S.c,{mode:"overlay_primary",size:"xl",onClick:function(){t.goToPage("greeting2")},children:"\u0414\u0430\u043b\u0435\u0435"})})]}),Object(r.jsxs)(S.n,{id:"greeting2",children:[Object(r.jsx)("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #332f28, #36332d)",position:"fixed",zIndex:-1,top:0}}),Object(r.jsx)("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(L,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(r.jsx)(S.x,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f!"})}),Object(r.jsx)(S.x,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy",children:"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u043b\u0438\u0437\u0430 \u043f\u0435\u0441\u043d\u0438 \u0431\u043e\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0438\u0442 \u0412\u0430\u043c \u043e\u0431 \u044d\u0442\u043e\u043c."}),Object(r.jsx)(S.h,{children:Object(r.jsx)(S.c,{mode:"overlay_primary",size:"xl",onClick:function(){t.goToPage("greeting3")},children:"\u041f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u0435\u043d\u044c\u043a\u043e"})})]}),Object(r.jsxs)(S.n,{id:"greeting3",children:[Object(r.jsx)("div",{style:{width:"100%",height:"100%",background:"linear-gradient(#cdd0d4, #767676)",position:"fixed",zIndex:-1,top:0}}),Object(r.jsx)("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(I,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(r.jsx)(S.x,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2.5em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy",children:"\u0411\u0443\u0434\u044c \u0432 \u0442\u0440\u0435\u043d\u0434\u0435!"})}),Object(r.jsx)(S.x,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy",children:"\u0421\u043b\u0443\u0448\u0430\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u0435\u0441\u043d\u0438 \u043f\u0440\u044f\u043c\u043e \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435."}),Object(r.jsx)(S.h,{children:Object(r.jsx)(S.c,{mode:"overlay_primary",size:"xl",onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.props.setActiveView("home"),e.next=3,v.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"});case 3:case"end":return e.stop()}}),e)}))),children:"\u0412 \u0441\u0435\u0440\u0432\u0438\u0441!"})})]})]})}}]),i}(a.a.Component),W=(i(307),i(144)),K=i.n(W),D=i(145),H=i.n(D)()("https://music.dan0102dan.ru"),M=function(t){Object(g.a)(i,t);var e=Object(m.a)(i);function i(t){var r;return Object(j.a)(this,i),(r=e.call(this,t)).goBack=function(){var t=r.state.history;"home"===r.state.activePanel&&v.a.send("VKWebAppDisableSwipeBack"),1===t.length?v.a.send("VKWebAppClose",{status:"success"}):t.length>1&&(t.pop(),r.setState({activePanel:t[t.length-1],snackbar:null}))},r.someBridgeThings=Object(p.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v.a.subscribe((function(t){var e=t.detail,i=e.type,s=e.data;if("VKWebAppUpdateConfig"===i){var a=document.createAttribute("scheme");a.value=s.scheme?s.scheme:"bright_light",document.body.attributes.setNamedItem(a),v.a.send("VKWebAppSetViewSettings",{status_bar_style:"bright_light"===s.scheme?"dark":"light",action_bar_color:"bright_light"===s.scheme?"#ffffff":"#191919"}).catch((function(){}))}else"VKWebAppViewHide"===i&&r.setState({popout:null})})),v.a.send("VKWebAppInit"),v.a.send("VKWebAppStorageGet",{keys:["greeting"]}).then((function(t){var e;""===(null===t||void 0===t||null===(e=t.keys[0])||void 0===e?void 0:e.value)&&r.setState({activeView:"greeting"})})),t.t0=r,t.next=7,v.a.send("VKWebAppGetUserInfo");case 7:t.t1=t.sent,t.t2={user:t.t1},t.t0.setState.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),console.log(t.t3);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),r.state={activeView:"home",activePanel:"home",history:["home"],slideIndex:0,popout:null,fetching:!1,user:{},search:"",artists:[],searchResults:[],currentArtist:{},currentPlaylist:{},currentAlbum:{},catalog:{},isCooldown:!1,transfer:[]},r}return Object(b.a)(i,[{key:"goToPage",value:function(t){window.history.pushState({panel:t},t),"home"===this.state.activePanel&&v.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:t,history:[].concat(Object(d.a)(this.state.history),[t])})}},{key:"openError",value:function(t,e){var i=this;this.setState({snackbar:Object(r.jsx)(S.v,{duration:e||4e3,layout:"vertical",onClose:function(){return i.setState({snackbar:null})},before:Object(r.jsx)(S.b,{size:24,style:{backgroundImage:"linear-gradient(135deg, #fc7373, #cb5e5a)"},children:Object(r.jsx)(_.a,{fill:"#fff",width:14,height:14})}),children:t})})}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("popstate",(function(){return t.goBack()})),this.startSocket(),window.location.hash&&this.getArtistsCard(Number(window.location.hash.replace("#",""))),H.emit("HomeCatalog",{sign:window.location.search.slice(1)}),this.someBridgeThings()}},{key:"startSocket",value:function(){var t=this;H.on("message",(function(e){var i,r,s,a,n,o;if(console.log(e),null===e||void 0===e?void 0:e.data){if("HomeCatalog"===e.method){if((null===(i=e.data)||void 0===i||null===(r=i.tracks)||void 0===r?void 0:r.data)||(null===(s=e.data)||void 0===s||null===(a=s.artists)||void 0===a?void 0:a.data)||(null===(n=e.data)||void 0===n||null===(o=n.albums)||void 0===o?void 0:o.data)){var d;if(null===(d=e.data)||void 0===d?void 0:d.novelties){var u,j=Object(l.a)(e.data.novelties);try{for(j.s();!(u=j.n()).done;){var b=u.value;b.tracks.filter((function(t){return t.release_date})).length>0?b.last_release=Math.max.apply(Math,b.tracks.filter((function(t){return t.release_date})).map((function(t){return t.release_date}))):b.last_release=0}}catch(y){j.e(y)}finally{j.f()}console.log(e.data.novelties),e.data.novelties.sort((function(t,e){return e.last_release-t.last_release}))}t.setState({catalog:e.data,fetching:!1,popout:null})}}else if("getArtist"===e.method)t.setState({currentArtist:e.data},Object(p.a)(h.a.mark((function e(){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.goToPage("artistsCard"),e.prev=1,e.next=4,O.a.get("https://dan0102dan.herokuapp.com/https://api.deezer.com/artist/".concat(t.state.currentArtist.id,"/playlists"));case 4:i=e.sent.data.data,t.setState((function(t){return{currentArtist:Object(c.a)(Object(c.a)({},t.currentArtist),{},{playlists:i})}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))),t.setState({popout:null});else if("notifications"===e.method){var g,m;if(t.state.currentArtist&&t.setState((function(t){return{currentArtist:Object(c.a)(Object(c.a)({},t.currentArtist),{},{notifications:e.data.toggle})}})),(null===(g=t.state.user)||void 0===g||null===(m=g.artists)||void 0===m?void 0:m.findIndex((function(t){return(null===t||void 0===t?void 0:t.id)===e.data.artist})))>-1){var f=t.state.user;f.artists[null===f||void 0===f?void 0:f.artists.findIndex((function(t){return(null===t||void 0===t?void 0:t.id)===e.data.artist}))].toggle=e.data.toggle,t.setState({user:f,popout:null})}}else if("profile"===e.method)e.data.map((function(t){return t.toggle=!0})),t.setState((function(t){return{user:Object(c.a)(Object(c.a)({},t.user),{},{artists:e.data})}}),(function(){return t.goToPage("profile")})),t.setState({popout:null});else if("search"===e.method){var x,w;(null===e||void 0===e||null===(x=e.data)||void 0===x?void 0:x.total)>0&&(null===e||void 0===e||null===(w=e.data)||void 0===w?void 0:w.data)?t.setState({searchResults:e.data.data}):t.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}}else(null===e||void 0===e?void 0:e.error)&&("HomeCatalog"===e.method?(t.setState({fetching:!1}),t.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")):"getArtist"===e.method?(t.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),t.setState({popout:null})):"notifications"===e.method?(t.openError(e.error),v.a.send("VKWebAppTapticNotificationOccurred",{type:"error"}).catch((function(){}))):"profile"===e.method?(t.openError(e.error),t.setState({popout:null})):"search"===e.method?t.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"):"flood"===e.method?(t.openError(e.error,e.next),t.setState({popout:null,fetching:!1})):(t.openError(e.error),t.setState({popout:null})))})),H.on("connect",(function(){t.setState({popout:null})})),H.on("disconnect",(function(){t.setState({popout:Object(r.jsxs)(S.a,{actionsLayout:"vertical",actions:[{title:"\u0425\u043e\u0440\u043e\u0448\u043e",autoclose:!0,mode:"cancel"}],onClose:function(){return t.setState({popout:null})},children:[Object(r.jsx)("h2",{children:"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043e("}),Object(r.jsx)("p",{children:"\u041f\u043e\u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430\u0439\u0442\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442."})]})})}))}},{key:"turnNotifications",value:function(){var t=Object(p.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e||this.state.isCooldown){t.next=13;break}return t.prev=2,this.setState({isCooldown:!0}),t.next=6,v.a.send("VKWebAppAllowMessagesFromGroup",{group_id:74612115});case 6:this.setState({isCooldown:!1}),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(2),this.setState({isCooldown:!1}),t.abrupt("return");case 13:return t.next=15,H.emit("notifications",{toggle:e,id:this.state.currentArtist.id,sign:window.location.search.slice(1)});case 15:t.next=20;break;case 17:t.prev=17,t.t1=t.catch(0),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f");case 20:case"end":return t.stop()}}),t,this,[[0,17],[2,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getArtistsCard",value:function(){var t=Object(p.a)(h.a.mark((function t(e){var i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((null===(i=this.state.currentArtist)||void 0===i?void 0:i.id)!==e){t.next=3;break}return this.goToPage("artistsCard"),t.abrupt("return");case 3:return this.setState({popout:Object(r.jsx)(S.s,{})}),t.prev=4,t.next=7,H.emit("getArtist",{id:e,sign:window.location.search.slice(1)});case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(4),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),this.setState({popout:null});case 13:case"end":return t.stop()}}),t,this,[[4,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"supportsEmoji",value:function(){var t=document.createElement("canvas").getContext("2d");return t.fillText("\ud83c\udd74",-2,4),t.getImageData(0,0,1,1).data[3]>0}},{key:"openViewAllArtists",value:function(t){var e=this;"loveArtists"===t?this.setState({transfer:["catalog","novelties"]},(function(){return e.goToPage("viewAllArtists")})):"popularArtists"===t&&this.setState({transfer:["catalog","artists.data"]},(function(){return e.goToPage("viewAllArtists")}))}},{key:"render",value:function(){var t,e,i,s,a,n,o,c,l,d,u,j,b,g,m,f,v,x,w,C,_,B,T,z,V,L,I,W,D,M,U,F,G,q,J,Q=this;return Object(r.jsx)(S.g,{webviewType:(null===(t=window)||void 0===t||null===(e=t.location)||void 0===e||null===(i=e.search)||void 0===i?void 0:i.match(/vk_platform=([a-z_]+)/))&&["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger","mobile_web"].includes(null===(s=window.location.search)||void 0===s?void 0:s.match(/vk_platform=([a-z_]+)/)[1])?"vkapps":"internal",children:Object(r.jsxs)(S.r,{activeView:this.state.activeView,children:[Object(r.jsxs)(S.y,{id:"home",activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,popout:this.state.popout,children:[Object(r.jsxs)(S.n,{id:"home",children:[Object(r.jsx)(S.o,{left:Object(r.jsx)(S.b,{style:{marginLeft:-5,cursor:"pointer"},size:36,src:null===(a=this.state.user)||void 0===a?void 0:a.photo_200,onClick:function(){H.emit("profile",{sign:window.location.search.slice(1)}),Q.setState({popout:Object(r.jsx)(S.s,{})})}}),separator:!1,children:Object(r.jsx)(S.t,{value:this.state.search,maxLength:100,onChange:function(t){var e=t.target.value;if(Q.state.search!==e){try{window.scrollTo({top:0,behavior:"smooth"})}catch(t){window.scrollTo(0,0)}Q.setState({searchResults:Object(r.jsx)(S.s,{}),search:e}),Q.state.isCooldown||(e.length>0&&H.emit("search",{q:e}),Q.setState({isCooldown:!0}),setTimeout((function(){Q.state.search.length>0&&H.emit("search",{q:Q.state.search}),Q.setState({isCooldown:!1})}),500))}},onKeyDown:function(t){return"Enter"===t.key&&document.activeElement.blur()}})}),this.state.search.trim()?Array.isArray(this.state.searchResults)&&this.state.searchResults.length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{mode:"secondary",children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"}),children:Object(r.jsx)(S.k,{children:Object(r.jsx)("div",{style:{display:"flex"},children:this.state.searchResults.map((function(t,e,i){var s=t.artist;return i.findIndex((function(t){return t.artist.id===s.id}))>=e&&Object(r.jsxs)("div",{style:{display:"flex",flexShrink:0,width:80,height:90,flexDirection:"column",alignItems:"center",fontSize:12,paddingLeft:4,cursor:"pointer"},onClick:function(){return Q.getArtistsCard(s.id)},children:[Object(r.jsx)(S.b,{size:64,src:s.picture_xl}),Object(r.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:64,marginTop:4},children:s.name})]},s.id)}))})})}),Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{mode:"secondary",children:"\u041f\u0435\u0441\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439"}),children:this.state.searchResults.map((function(t){return Object(r.jsx)(S.u,{style:{cursor:"pointer"},expandable:!0,before:Object(r.jsx)(S.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,onClick:function(){return Q.getArtistsCard(t.artist.id)},children:t.title},t.id)}))})]}):Object(r.jsx)(S.h,{children:Object(r.jsx)(S.x,{level:"1",weight:"semibold",style:{marginTop:32},children:this.state.searchResults})}):Object(r.jsxs)(S.q,{onRefresh:Object(p.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Q.setState({fetching:!0}),t.next=4,H.emit("HomeCatalog",{sign:window.location.search.slice(1)});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),Q.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435");case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),isFetching:this.state.fetching,children:[(null===(n=this.state.catalog)||void 0===n||null===(o=n.novelties)||void 0===o?void 0:o.length)>0&&Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{aside:Object(r.jsx)(S.l,{onClick:function(){return Q.openViewAllArtists("loveArtists")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438 \u0443 \u0412\u0430\u0448\u0438\u0445 \u043b\u044e\u0431\u0438\u043c\u0447\u0438\u043a\u043e\u0432"}),children:Object(r.jsx)(S.e,{children:this.state.catalog.novelties.map((function(t){return Object(r.jsx)(S.d,{onClick:function(){return Q.getArtistsCard(t.id)},size:"s",children:Object(r.jsxs)("div",{style:{width:124,height:150,cursor:"pointer",lineHeight:0},children:[Object(r.jsx)("img",{style:{width:124,height:124,borderRadius:"50%"},src:t.picture_xl,alt:""}),Object(r.jsx)(S.w,{weight:"medium",style:{textAlign:"center",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:124,marginTop:7},children:t.name})]})},t.id)}))})}),Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{children:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0442\u0440\u0435\u043a\u0438"}),children:(null===(c=this.state.catalog)||void 0===c||null===(l=c.tracks)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.length)>0?this.state.catalog.tracks.data.map((function(t,e,i){return Object(r.jsxs)(S.u,{className:"popularSongs",style:{marginRight:8,marginLeft:8,background:t.background,borderTopLeftRadius:0===e?15:0,borderTopRightRadius:0===e?15:0,borderBottomLeftRadius:e===i.length-1?15:0,borderBottomRightRadius:e===i.length-1?15:0},disabled:!0,before:Object(r.jsx)(S.b,{mode:"image",src:t.album.cover_medium}),after:Object(r.jsx)(R.a,{fill:"#ffffff",onClick:function(){return Q.getArtistsCard(t.artist.id)}}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]},t.id)})):Object(r.jsx)("div",{style:{marginRight:8,marginLeft:8},children:Object(r.jsx)(k.SkeletonTheme,{color:"var(--background_content)",highlightColor:"var(--background_light)",children:Object(r.jsx)(A.a,{duration:2,style:{borderRadius:15},height:360})})})}),Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{aside:Object(r.jsx)(S.l,{onClick:function(){return Q.openViewAllArtists("popularArtists")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0430\u0440\u0442\u0438\u0441\u0442\u044b"}),children:Object(r.jsx)(S.e,{children:(null===(u=this.state.catalog)||void 0===u||null===(j=u.artists)||void 0===j||null===(b=j.data)||void 0===b?void 0:b.length)>0?this.state.catalog.artists.data.map((function(t){return Object(r.jsx)(S.d,{onClick:function(){return Q.getArtistsCard(t.id)},size:"s",children:Object(r.jsxs)("div",{style:{width:124,height:154,cursor:"pointer",lineHeight:0},children:[Object(r.jsx)("img",{style:{width:124,height:124,borderRadius:"50%"},src:t.picture_xl,alt:""}),Object(r.jsx)(S.w,{weight:"medium",style:{textAlign:"center",marginTop:7},children:t.name})]})},t.id)})):Object(r.jsx)(S.d,{children:Object(r.jsx)(k.SkeletonTheme,{color:"var(--background_content)",highlightColor:"var(--background_light)",children:Object(r.jsx)(A.a,{circle:!0,height:124,width:124,style:{marginRight:8},count:10})})})})})]}),this.state.snackbar]}),Object(r.jsxs)(S.n,{id:"profile",children:[Object(r.jsx)(S.o,{separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),(null===(g=this.state.user)||void 0===g||null===(m=g.artists)||void 0===m?void 0:m.length)>0?Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c"}),children:Object(r.jsx)(S.m,{children:this.state.user.artists.map((function(t){return Object(r.jsx)(S.f,{style:{cursor:"pointer"},before:Object(r.jsx)(S.b,{src:t.picture_xl,size:50}),selectable:!0,checked:t.toggle,onChange:function(e){return H.emit("notifications",{toggle:e.target.checked,id:t.id,sign:window.location.search.slice(1)})},children:t.name},t.id)}))})}):Object(r.jsx)(S.x,{level:"4",weight:"semibold",style:{textAlign:"center",marginTop:12},children:"\u0412\u044b \u043f\u043e\u043a\u0430 \u043d\u0438 \u043d\u0430 \u043a\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c("}),this.state.snackbar]}),Object(r.jsxs)(S.n,{id:"viewAllArtists",children:[Object(r.jsx)(S.o,{separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"}),Object(r.jsx)(S.i,{separator:"hide",children:Object(r.jsx)(y.a,{breakpointCols:{default:4,1199:3,666:2,210:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:this.state.transfer.length>0&&K.a.get(this.state[this.state.transfer[0]],this.state.transfer[1]).map((function(t){return Object(r.jsxs)(S.d,{onClick:function(){return Q.getArtistsCard(t.id)},style:{cursor:"pointer",display:"flex",justifyContent:"center"},children:[Object(r.jsx)(S.b,{className:"ViewAllAvatar",src:t.picture_xl}),Object(r.jsx)(S.w,{className:"textUnderViewAllAvatar",weight:"medium",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",textAlign:"center",marginTop:7},children:t.name})]},t.id)}))})})]}),Object(r.jsxs)(S.n,{id:"artistsCard",children:[Object(r.jsx)(S.o,{id:"artistsHeader",separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack})}),Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsx)("div",{style:{width:"100%",height:500,borderBottomLeftRadius:25,borderBottomRightRadius:25,marginTop:"calc(-1px - var(--panelheader_height_ios) - var(--safe-area-inset-top))",background:"linear-gradient(to bottom, rgba(65, 65, 65, .2), rgba(0, 0, 0, 1)), url(".concat(this.state.currentArtist.picture_xl,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),Object(r.jsx)(S.x,{style:{color:"#fff",position:"absolute",bottom:14,fontSize:"2.5em",marginLeft:18,maxWidth:"80%"},weight:"heavy",children:this.state.currentArtist.name}),this.state.currentArtist.notifications?Object(r.jsx)(E.a,{className:"checkedBell",width:40,height:40,style:{color:"#fff",position:"absolute",bottom:17,right:17,height:50,cursor:"pointer"},onClick:function(){return Q.turnNotifications(!1)}}):Object(r.jsx)(P.a,{className:"Bell",width:40,height:40,style:{color:"#fff",position:"absolute",bottom:17,right:17,height:50,cursor:"pointer"},onClick:function(){return Q.turnNotifications(!0)}})]}),(null===(f=this.state.currentArtist)||void 0===f||null===(v=f.tracks)||void 0===v?void 0:v.filter((function(t){return t.release_date})).length)>0&&Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{children:"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0440\u0435\u043b\u0438\u0437\u044b"}),children:Object(r.jsx)(S.k,{children:Object(r.jsx)("div",{style:{display:"flex"},children:this.state.currentArtist.tracks.filter((function(t){return t.release_date})).reduce((function(t,e,i){return t[Math.floor(i/3)]||(t[Math.floor(i/3)]=[]),t[Math.floor(i/3)][i%3]=e,t}),[]).map((function(t,e){return Object(r.jsx)(S.d,{children:t.map((function(t){return Object(r.jsxs)(S.u,{disabled:!0,style:{width:240},before:Object(r.jsx)(S.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))},e)}))})})}),Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{aside:Object(r.jsx)(S.l,{onClick:function(){return Q.goToPage("viewAllTracks")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438"}),children:Object(r.jsx)(S.k,{children:Object(r.jsx)("div",{style:{display:"flex"},children:(null===(x=this.state.currentArtist)||void 0===x||null===(w=x.tracks)||void 0===w?void 0:w.length)>0&&this.state.currentArtist.tracks.reduce((function(t,e,i){return t[Math.floor(i/3)]||(t[Math.floor(i/3)]=[]),t[Math.floor(i/3)][i%3]=e,t}),[]).map((function(t,e){return Object(r.jsx)(S.d,{children:t.map((function(t){return Object(r.jsxs)(S.u,{style:{width:240},disabled:!0,before:Object(r.jsx)(S.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))},e)}))})})}),(null===(C=this.state.currentArtist)||void 0===C||null===(_=C.albums)||void 0===_?void 0:_.length)>0&&Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{aside:Object(r.jsx)(S.l,{onClick:function(){return Q.goToPage("viewAllAlbums")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"}),children:Object(r.jsx)(S.e,{children:this.state.currentArtist.albums.sort((function(t,e){return e.release_date-t.release_date})).map((function(t){return Object(r.jsx)(S.d,{onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q.setState({popout:Object(r.jsx)(S.s,{})}),e.prev=1,e.next=4,O.a.get("https://dan0102dan.herokuapp.com/"+t.tracklist);case 4:t.tracks=e.sent.data.data,Q.setState({currentAlbum:t},(function(){return Q.goToPage("albumCard")})),Q.setState({popout:null}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),Q.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u043b\u044c\u0431\u043e\u043c"),Q.setState({popout:null});case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),size:"s",children:Object(r.jsxs)("div",{style:{width:184,height:236,cursor:"pointer",lineHeight:0},children:[Object(r.jsx)("img",{style:{width:184,height:184,borderRadius:4},src:t.cover_xl,alt:""}),Object(r.jsxs)(S.w,{weight:"medium",style:{textAlign:"left",marginTop:6,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]}),Object(r.jsxs)(S.w,{weight:"regular",style:{textAlign:"left",marginTop:2,fontSize:13},children:["\u0410\u043b\u044c\u0431\u043e\u043c \u0432\u044b\u0448\u0435\u043b ",new Date(t.release_date).toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})]})]})},t.id)}))})}),(null===(B=this.state.currentArtist)||void 0===B?void 0:B.related)&&Object(r.jsx)(S.i,{separator:"hide",header:Object(r.jsx)(S.j,{mode:"secondary",children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"}),children:Object(r.jsx)(S.e,{children:this.state.currentArtist.related.map((function(t){return Object(r.jsx)(S.d,{onClick:function(){return Q.getArtistsCard(t.id)},size:"s",children:Object(r.jsxs)("div",{style:{width:124,height:154,cursor:"pointer",lineHeight:0},children:[Object(r.jsx)("img",{style:{width:124,height:124,borderRadius:"50%"},src:t.picture_xl,alt:""}),Object(r.jsx)(S.w,{weight:"medium",style:{textAlign:"center",marginTop:7},children:t.name})]})},t.id)}))})}),this.state.snackbar]}),Object(r.jsxs)(S.n,{id:"viewAllAlbums",children:[Object(r.jsx)(S.o,{separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041d\u043e\u0432\u043e\u0435"}),Object(r.jsx)(S.i,{separator:"hide",children:Object(r.jsx)(y.a,{breakpointCols:{default:4,1199:3,666:2,210:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:(null===(T=this.state.currentArtist)||void 0===T||null===(z=T.albums)||void 0===z?void 0:z.length)>0&&this.state.currentArtist.albums.sort((function(t,e){return e.release_date-t.release_date})).map((function(t){return Object(r.jsxs)(S.d,{style:{cursor:"pointer",display:"flex",justifyContent:"center"},onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q.setState({popout:Object(r.jsx)(S.s,{})}),e.prev=1,e.next=4,O.a.get("https://dan0102dan.herokuapp.com/"+t.tracklist);case 4:t.tracks=e.sent.data.data,Q.setState({currentAlbum:t},(function(){return Q.goToPage("albumCard")})),Q.setState({popout:null}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),Q.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u043b\u044c\u0431\u043e\u043c"),Q.setState({popout:null});case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),children:[Object(r.jsx)(S.b,{className:"ViewAllAvatar",mode:"image",size:"45vw",src:t.cover_xl}),Object(r.jsxs)(S.w,{className:"textUnderViewAllAvatar",weight:"medium",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",marginTop:7},children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]}),Object(r.jsxs)(S.w,{className:"textUnderViewAllAvatar",weight:"regular",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",textAlign:"left",marginTop:2,fontSize:13},children:["\u0410\u043b\u044c\u0431\u043e\u043c \u0432\u044b\u0448\u0435\u043b ",new Date(t.release_date).toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})]})]},t.id)}))})})]}),Object(r.jsxs)(S.n,{id:"viewAllTracks",children:[Object(r.jsx)(S.o,{separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"}),Object(r.jsx)(S.i,{separator:"hide",children:(null===(V=this.state.currentArtist)||void 0===V||null===(L=V.tracks)||void 0===L?void 0:L.length)>0&&this.state.currentArtist.tracks.map((function(t){return Object(r.jsxs)(S.u,{disabled:!0,before:Object(r.jsx)(S.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))})]}),Object(r.jsxs)(S.n,{id:"albumCard",children:[Object(r.jsx)(S.o,{separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack}),children:this.state.currentAlbum.title}),Object(r.jsx)(S.i,{separator:"hide",children:(null===(I=this.state.currentAlbum)||void 0===I||null===(W=I.tracks)||void 0===W?void 0:W.length)>0&&this.state.currentAlbum.tracks.map((function(t,e){return Object(r.jsxs)(S.u,{before:Object(r.jsx)(S.w,{style:{marginRight:12},children:(e+1).toString().padStart(2,"0")}),disabled:!0,description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))}),this.state.snackbar]}),Object(r.jsxs)(S.n,{id:"playlistCard",children:[Object(r.jsx)(S.o,{separator:!1,left:Object(r.jsx)(S.p,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"}),Object(r.jsx)("img",{style:{height:300,objectFit:"cover",borderRadius:25,marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:8},src:this.state.currentPlaylist.picture_xl,alt:""}),Object(r.jsxs)(S.i,{separator:"hide",children:[(null===(D=this.state.currentPlaylist)||void 0===D||null===(M=D.tracks)||void 0===M?void 0:M.length)>0&&this.state.currentPlaylist.tracks.map((function(t){return Object(r.jsxs)(S.u,{expandable:!0,onClick:function(){return Q.getArtistsCard(t.artist.id)},before:Object(r.jsx)(S.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&Q.supportsEmoji()&&"\ud83c\udd74"]},t.id)})),Object(r.jsxs)(S.w,{weight:"medium",style:{marginTop:16,marginBottom:8,textAlign:"center"},children:[null===(U=this.state.currentPlaylist)||void 0===U||null===(F=U.tracks)||void 0===F?void 0:F.length," \u043f\u0435\u0441\u0435\u043d \u2022 ",null===(G=this.state.currentPlaylist)||void 0===G||null===(q=G.creation_date)||void 0===q?void 0:q.substring(0,(null===(J=this.state.currentPlaylist)||void 0===J?void 0:J.creation_date.length)-15)]})]}),this.state.snackbar]})]}),Object(r.jsx)(N,{setActiveView:function(t){return Q.setState({activeView:t})},id:"greeting"})]})})}}]),i}(a.a.Component);o.a.render(Object(r.jsx)(M,{}),document.getElementById("root"))}},[[335,1,2]]]);