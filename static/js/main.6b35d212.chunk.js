(this.webpackJsonpnewrelease=this.webpackJsonpnewrelease||[]).push([[0],{310:function(t,e,i){},333:function(t,e){},338:function(t,e,i){"use strict";i.r(e);i(202),i(228),i(230),i(231),i(233),i(234),i(235),i(236),i(237),i(238),i(239),i(240),i(242),i(243),i(244),i(245),i(246),i(247),i(248),i(249),i(250),i(251),i(253),i(254),i(255),i(256),i(257),i(258),i(259),i(260),i(261),i(262),i(263),i(264),i(265),i(266),i(267),i(268),i(269),i(270);var r=i(1),a=i(0),n=i.n(a),s=i(132),o=i.n(s),c=i(39),l=i(133),d=i(61),u=i(19),h=i.n(u),p=i(29),b=i(57),j=i(58),g=i(62),m=i(60),f=i(17),v=i.n(f),x=i(63),O=i.n(x),k=i(47),w=i.n(k),y=i(134),S=i.n(y),A=i(3),_=(i(309),i(152)),C=i.n(_),B=i(154),R=i.n(B),z=i(156),P=i.n(z),T=i(155),E=i.n(T),L=i(153),I=i.n(L),V=i.p+"static/media/DuaLipa.ac7e2d0c.jpg",W=i.p+"static/media/BillieEilish.11912ddf.jpg",K=i.p+"static/media/ArianaGrande.5e8c2779.jpg",D=function(t){Object(g.a)(i,t);var e=Object(m.a)(i);function i(t){var r;return Object(b.a)(this,i),(r=e.call(this,t)).goBack=function(){var t=r.state.history;"greeting1"===r.state.activePanel&&v.a.send("VKWebAppDisableSwipeBack"),t.length>1&&(t.pop(),r.setState({activePanel:t[t.length-1]}))},r.state={activePanel:"greeting1",history:["greeting1"]},r}return Object(j.a)(i,[{key:"goToPage",value:function(t){window.history.pushState({panel:t},t),"greeting1"===this.state.activePanel&&v.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:t,history:[].concat(Object(d.a)(this.state.history),[t])})}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("popstate",(function(){return t.goBack()})),window.Image&&((new window.Image).src=V,(new window.Image).src=W,(new window.Image).src=K)}},{key:"render",value:function(){var t=this;return Object(r.jsxs)(A.B,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,children:[Object(r.jsxs)(A.q,{id:"greeting1",children:[Object(r.jsx)("div",{style:{width:"100%",height:"100%",background:"#00a1e3",position:"fixed",zIndex:-1,top:0}}),Object(r.jsx)("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(V,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(r.jsx)(A.A,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2.5em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"})}),Object(r.jsx)(A.A,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy",children:"\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u043e\u0432\u0438\u043d\u043a\u0438 \u2014 \u0412\u0430\u0448 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a \u0432 \u043c\u0443\u0437\u044b\u043a\u0435."}),Object(r.jsx)(A.i,{children:Object(r.jsx)(A.d,{mode:"overlay_primary",size:"xl",onClick:function(){t.goToPage("greeting2")},children:"\u0414\u0430\u043b\u0435\u0435"})})]}),Object(r.jsxs)(A.q,{id:"greeting2",children:[Object(r.jsx)("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #332f28, #36332d)",position:"fixed",zIndex:-1,top:0}}),Object(r.jsx)("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(W,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(r.jsx)(A.A,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f!"})}),Object(r.jsx)(A.A,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy",children:"\u041f\u043e\u0441\u043b\u0435 \u0440\u0435\u043b\u0438\u0437\u0430 \u043f\u0435\u0441\u043d\u0438 \u0431\u043e\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0438\u0442 \u0412\u0430\u043c \u043e\u0431 \u044d\u0442\u043e\u043c."}),Object(r.jsx)(A.i,{children:Object(r.jsx)(A.d,{mode:"overlay_primary",size:"xl",onClick:function(){t.goToPage("greeting3")},children:"\u041f\u0440\u0438\u043a\u043e\u043b\u044c\u043d\u0435\u043d\u044c\u043a\u043e"})})]}),Object(r.jsxs)(A.q,{id:"greeting3",children:[Object(r.jsx)("div",{style:{width:"100%",height:"100%",background:"linear-gradient(#cdd0d4, #767676)",position:"fixed",zIndex:-1,top:0}}),Object(r.jsx)("div",{className:"IntroImg",style:{width:"100%",height:"calc(500px + var(--safe-area-inset-top))",borderBottomLeftRadius:25,marginBottom:12,borderBottomRightRadius:35,position:"relative",background:"linear-gradient(to bottom, rgba(0,0,0,.1) 10%, rgba(0,0,0,.3)), url(".concat(K,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:Object(r.jsx)(A.A,{style:{position:"absolute",bottom:14,color:"#fff",fontSize:"2.5em",marginLeft:12,maxWidth:"90%",lineHeight:1},weight:"heavy",children:"\u0411\u0443\u0434\u044c \u0432 \u0442\u0440\u0435\u043d\u0434\u0435!"})}),Object(r.jsx)(A.A,{className:"helloDescribe",style:{color:"#fff",fontSize:"1.5em",marginLeft:12,marginBottom:12},weight:"heavy",children:"\u0421\u043b\u0443\u0448\u0430\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u0435\u0441\u043d\u0438 \u043f\u0440\u044f\u043c\u043e \u0432 \u0441\u0435\u0440\u0432\u0438\u0441\u0435."}),Object(r.jsx)(A.i,{children:Object(r.jsx)(A.d,{mode:"overlay_primary",size:"xl",onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.props.setActiveView("home"),e.next=3,v.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"});case 3:case"end":return e.stop()}}),e)}))),children:"\u0412 \u0441\u0435\u0440\u0432\u0438\u0441!"})})]})]})}}]),i}(n.a.Component),M=(i(310),i(150)),N=i.n(M),q=i(151),H=i.n(q)()("https://music.dan0102dan.ru"),F=function(t){Object(g.a)(i,t);var e=Object(m.a)(i);function i(t){var r;return Object(b.a)(this,i),(r=e.call(this,t)).goBack=function(){var t=r.state.history;"home"===r.state.activePanel&&v.a.send("VKWebAppDisableSwipeBack"),1===t.length?v.a.send("VKWebAppClose",{status:"success"}):t.length>1&&(t.pop(),r.setState({activePanel:t[t.length-1],snackbar:null}))},r.someBridgeThings=Object(p.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v.a.subscribe((function(t){var e=t.detail,i=e.type,a=e.data;if("VKWebAppUpdateConfig"===i){var n=document.createAttribute("scheme");n.value=a.scheme?a.scheme:"bright_light",document.body.attributes.setNamedItem(n),v.a.send("VKWebAppSetViewSettings",{status_bar_style:"bright_light"===a.scheme?"dark":"light",action_bar_color:"bright_light"===a.scheme?"#ffffff":"#191919"}).catch((function(){}))}else"VKWebAppViewHide"===i&&r.setState({popout:null})})),v.a.send("VKWebAppInit"),v.a.send("VKWebAppStorageGet",{keys:["greeting"]}).then((function(t){var e;""===(null===t||void 0===t||null===(e=t.keys[0])||void 0===e?void 0:e.value)&&r.setState({activeView:"greeting"})})),t.t0=r,t.next=7,v.a.send("VKWebAppGetUserInfo");case 7:t.t1=t.sent,t.t2={user:t.t1},t.t0.setState.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),console.log(t.t3);case 15:case"end":return t.stop()}}),t,null,[[0,12]])}))),r.state={activeView:"home",activePanel:"home",history:["home"],slideIndex:0,popout:null,modal:null,fetching:!1,user:{},search:"",artists:[],searchResults:[],currentArtist:{},currentPlaylist:{},currentAlbum:{},catalog:{},isCooldown:!1,from:""},r}return Object(j.a)(i,[{key:"goToPage",value:function(t){window.history.pushState({panel:t},t),"home"===this.state.activePanel&&v.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:t,history:[].concat(Object(d.a)(this.state.history),[t]),snackbar:null})}},{key:"openError",value:function(t,e){var i=this;this.setState({snackbar:Object(r.jsx)(A.y,{duration:e||4e3,layout:"vertical",onClose:function(){return i.setState({snackbar:null})},before:Object(r.jsx)(A.b,{size:24,style:{backgroundImage:"linear-gradient(135deg, #fc7373, #cb5e5a)"},children:Object(r.jsx)(C.a,{fill:"#fff",width:14,height:14})}),children:t})})}},{key:"openStory",value:function(){var t=this;this.setState({modal:Object(r.jsx)(A.p,{activeModal:"artistCard",onClose:this.setState({modal:null}),children:Object(r.jsx)(A.o,{id:"artistCard",onClose:function(){return t.setState({modal:null})},header:"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",actionsLayout:"vertical",actions:[{title:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c",mode:"primary",action:function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({popout:Object(r.jsx)(A.v,{})}),e.prev=1,e.t0=v.a,e.next=5,S()(document.getElementById("artistCardModal"),{backgroundColor:"rgba(0, 0, 0, 0)",useCORS:!0,scrollX:0,scrollY:0,removeContainer:!0}).then(function(){var t=Object(p.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.toDataURL("image/png"));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:return e.t1=e.sent,e.t2={relation_width:1,gravity:"center_top"},e.t3=[{action_type:"link",action:{link:"https://vk.com/app7647010#"+t.state.currentArtist.id}}],e.t4={can_delete:0,content_type:"image",blob:e.t1,transform:e.t2,clickable_zones:e.t3},e.t5={sticker_type:"renderable",sticker:e.t4},e.t6=[e.t5],e.t7={background_type:"none",stickers:e.t6},e.next=14,e.t0.send.call(e.t0,"VKWebAppShowStoryBox",e.t7);case 14:e.next=19;break;case 16:e.prev=16,e.t8=e.catch(1),t.setState({modal:null},(function(){return t.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e \ud83d\ude1e")}));case 19:t.setState({popout:null});case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}()},{title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",mode:"secondary",action:function(){return t.setState({modal:null})}}],children:Object(r.jsxs)("div",{id:"artistCardModal",style:{position:"relative",marginTop:12},children:[Object(r.jsx)("div",{style:{width:"100%",height:300,borderBottomLeftRadius:25,borderBottomRightRadius:25,background:"linear-gradient(to bottom, rgba(65, 65, 65, .2), rgba(0, 0, 0, 1)), url(".concat(this.state.currentArtist.picture_xl,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),Object(r.jsx)(A.A,{style:{color:"#fff",position:"absolute",bottom:14,fontSize:"2em",marginLeft:18,maxWidth:"85%"},weight:"heavy",children:this.state.currentArtist.name})]})})})})}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("popstate",(function(){return t.goBack()})),this.startSocket(),window.location.hash&&this.getArtistsCard(Number(window.location.hash.replace("#",""))),H.emit("HomeCatalog",{sign:window.location.search.slice(1)}),this.someBridgeThings()}},{key:"startSocket",value:function(){var t=this;H.on("message",(function(e){var i,a,n,s,o,d;if(console.log(e),null===e||void 0===e?void 0:e.data){if("HomeCatalog"===e.method){if((null===(i=e.data)||void 0===i||null===(a=i.tracks)||void 0===a?void 0:a.data)||(null===(n=e.data)||void 0===n||null===(s=n.artists)||void 0===s?void 0:s.data)||(null===(o=e.data)||void 0===o||null===(d=o.albums)||void 0===d?void 0:d.data)){var u;if(null===(u=e.data)||void 0===u?void 0:u.novelties){e.data.newAlbums=[];var b,j=Object(l.a)(e.data.novelties);try{for(j.s();!(b=j.n()).done;){var g=b.value;if(g.albums.filter((function(t){return t.release_date})).length>0){g.last_release=Math.max.apply(Math,g.albums.filter((function(t){return t.release_date})).map((function(t){return t.release_date})));var m=g.albums.find((function(t){return t.release_date===g.last_release}));m.artistId=g.id,e.data.newAlbums.push(m)}else g.last_release=0}}catch(z){j.e(z)}finally{j.f()}e.data.novelties.sort((function(t,e){return e.last_release-t.last_release})),e.data.newAlbums.sort((function(t,e){return e.release_date-t.release_date}))}t.setState({catalog:e.data,fetching:!1,popout:null})}}else if("getArtist"===e.method)t.setState({currentArtist:e.data},Object(p.a)(h.a.mark((function e(){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.goToPage("artistsCard"),e.prev=1,e.next=4,O.a.get("https://dan0102dan.herokuapp.com/https://api.deezer.com/artist/".concat(t.state.currentArtist.id,"/playlists"));case 4:i=e.sent.data.data,t.setState((function(t){return{currentArtist:Object(c.a)(Object(c.a)({},t.currentArtist),{},{playlists:i})}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))),t.setState({popout:null});else if("notifications"===e.method){var f,x,k,w,y,S,_;if((null===(f=t.state.currentArtist)||void 0===f?void 0:f.id)===e.data.artist)t.setState((function(t){return{currentArtist:Object(c.a)(Object(c.a)({},t.currentArtist),{},{notifications:e.data.toggle})}})),e.data.toggle&&"artistsCard"===t.state.activePanel&&(null===(w=window)||void 0===w||null===(y=w.location)||void 0===y||null===(S=y.search)||void 0===S?void 0:S.match(/vk_platform=([a-z_]+)/))&&["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger"].includes(null===(_=window.location.search)||void 0===_?void 0:_.match(/vk_platform=([a-z_]+)/)[1])&&t.setState({snackbar:Object(r.jsx)(A.y,{onClose:function(){return t.setState({snackbar:null})},action:"\u0414\u0430!",onActionClick:function(){return t.openStory()},before:Object(r.jsx)(A.b,{size:24,style:{backgroundImage:"linear-gradient(135deg, #714bdb, #715edb)"},children:Object(r.jsx)(I.a,{fill:"#fff",width:14,height:14})}),children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439?"})});if((null===(x=t.state.user)||void 0===x||null===(k=x.artists)||void 0===k?void 0:k.findIndex((function(t){return(null===t||void 0===t?void 0:t.id)===e.data.artist})))>-1){var C=t.state.user;C.artists[null===C||void 0===C?void 0:C.artists.findIndex((function(t){return(null===t||void 0===t?void 0:t.id)===e.data.artist}))].toggle=e.data.toggle,t.setState({user:C,popout:null})}t.setState({popout:null})}else if("profile"===e.method)e.data.map((function(t){return t.toggle=!0})),t.setState((function(t){return{user:Object(c.a)(Object(c.a)({},t.user),{},{artists:e.data})}}),(function(){return t.goToPage("profile")})),t.setState({popout:null});else if("search"===e.method){var B,R;(null===e||void 0===e||null===(B=e.data)||void 0===B?void 0:B.total)>0&&(null===e||void 0===e||null===(R=e.data)||void 0===R?void 0:R.data)?t.setState({searchResults:e.data.data}):t.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}}else(null===e||void 0===e?void 0:e.error)&&("HomeCatalog"===e.method?(t.setState({fetching:!1}),t.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445")):"getArtist"===e.method?(t.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),t.setState({popout:null})):"notifications"===e.method?(t.openError(e.error),t.setState({popout:null}),v.a.send("VKWebAppTapticNotificationOccurred",{type:"error"}).catch((function(){}))):"profile"===e.method?(t.openError(e.error),t.setState({popout:null})):"search"===e.method?t.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"):"flood"===e.method?(t.openError(e.error,e.next),t.setState({popout:null,fetching:!1})):(t.openError(e.error),t.setState({popout:null})))})),H.on("connect",(function(){t.setState({popout:null})})),H.on("disconnect",(function(){t.setState({popout:Object(r.jsxs)(A.a,{actionsLayout:"vertical",actions:[{title:"\u0425\u043e\u0440\u043e\u0448\u043e",autoclose:!0,mode:"cancel"}],onClose:function(){return t.setState({popout:null})},children:[Object(r.jsx)("h2",{children:"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043e("}),Object(r.jsx)("p",{children:"\u041f\u043e\u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430\u0439\u0442\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442."})]})})}))}},{key:"turnNotifications",value:function(){var t=Object(p.a)(h.a.mark((function t(e){var i,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e||this.state.isCooldown||!(null===(i=window)||void 0===i||null===(a=i.location)||void 0===a?void 0:a.search)){t.next=13;break}return t.prev=2,this.setState({isCooldown:!0}),t.next=6,v.a.send("VKWebAppAllowMessagesFromGroup",{group_id:74612115});case 6:this.setState({isCooldown:!1}),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(2),this.setState({isCooldown:!1}),t.abrupt("return");case 13:return t.next=15,H.emit("notifications",{toggle:e,id:this.state.currentArtist.id,sign:window.location.search.slice(1)});case 15:this.setState({popout:Object(r.jsx)(A.v,{})}),t.next=21;break;case 18:t.prev=18,t.t1=t.catch(0),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f");case 21:case"end":return t.stop()}}),t,this,[[0,18],[2,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getArtistsCard",value:function(){var t=Object(p.a)(h.a.mark((function t(e){var i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((null===(i=this.state.currentArtist)||void 0===i?void 0:i.id)!==e){t.next=3;break}return this.goToPage("artistsCard"),t.abrupt("return");case 3:return this.setState({popout:Object(r.jsx)(A.v,{})}),t.prev=4,t.next=7,H.emit("getArtist",{id:e,sign:window.location.search.slice(1)});case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(4),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),this.setState({popout:null});case 13:case"end":return t.stop()}}),t,this,[[4,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"supportsEmoji",value:function(){var t=document.createElement("canvas").getContext("2d");return t.fillText("\ud83c\udd74",-2,4),t.getImageData(0,0,1,1).data[3]>0}},{key:"render",value:function(){var t,e,i,a,n,s,o,c,l,d,u,b,j,g,m,f,v,x,y,S,_,C,B,z,T,L,I,V,W,K,M,q,F,G=this;return Object(r.jsx)(A.h,{webviewType:(null===(t=window)||void 0===t||null===(e=t.location)||void 0===e||null===(i=e.search)||void 0===i?void 0:i.match(/vk_platform=([a-z_]+)/))&&["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger","mobile_web"].includes(null===(a=window.location.search)||void 0===a?void 0:a.match(/vk_platform=([a-z_]+)/)[1])?"vkapps":"internal",children:Object(r.jsxs)(A.u,{activeView:this.state.activeView,children:[Object(r.jsxs)(A.B,{id:"home",activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,popout:this.state.popout,modal:this.state.modal,children:[Object(r.jsxs)(A.q,{id:"home",children:[Object(r.jsx)(A.r,{left:Object(r.jsx)(A.b,{style:{marginLeft:-5,cursor:"pointer"},size:36,src:null===(n=this.state.user)||void 0===n?void 0:n.photo_200,onClick:function(){H.emit("profile",{sign:window.location.search.slice(1)}),G.setState({popout:Object(r.jsx)(A.v,{})})}}),separator:!1,children:Object(r.jsx)(A.w,{value:this.state.search,maxLength:100,onChange:function(t){var e=t.target.value;if(G.state.search!==e){try{window.scrollTo({top:0,behavior:"smooth"})}catch(t){window.scrollTo(0,0)}G.setState({searchResults:Object(r.jsx)(A.v,{}),search:e}),G.state.isCooldown||(e.length>0&&H.emit("search",{q:e}),G.setState({isCooldown:!0}),setTimeout((function(){G.state.search.length>0&&G.state.search!==e&&H.emit("search",{q:G.state.search}),G.setState({isCooldown:!1})}),500))}},onKeyDown:function(t){return"Enter"===t.key&&document.activeElement.blur()}})}),this.state.search.trim()?Array.isArray(this.state.searchResults)&&this.state.searchResults.length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{mode:"secondary",children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"}),children:Object(r.jsx)(A.l,{children:Object(r.jsx)("div",{style:{display:"flex"},children:this.state.searchResults.map((function(t,e,i){var a=t.artist;return i.findIndex((function(t){return t.artist.id===a.id}))>=e&&Object(r.jsxs)("div",{style:{display:"flex",flexShrink:0,width:80,height:90,flexDirection:"column",alignItems:"center",fontSize:12,paddingLeft:4,cursor:"pointer"},onClick:function(){return G.getArtistsCard(a.id)},children:[Object(r.jsx)(A.b,{size:64,src:a.picture_xl}),Object(r.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:64,marginTop:4},children:a.name})]},a.id)}))})})}),Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{mode:"secondary",children:"\u041f\u0435\u0441\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439"}),children:this.state.searchResults.map((function(t){return Object(r.jsx)(A.x,{style:{cursor:"pointer"},expandable:!0,before:Object(r.jsx)(A.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,onClick:function(){return G.getArtistsCard(t.artist.id)},children:t.title},t.id)}))})]}):Object(r.jsx)(A.i,{children:Object(r.jsx)(A.A,{level:"1",weight:"semibold",style:{marginTop:32},children:this.state.searchResults})}):Object(r.jsxs)(A.t,{onRefresh:Object(p.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,G.setState({fetching:!0}),t.next=4,H.emit("HomeCatalog",{sign:window.location.search.slice(1)});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),G.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435");case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),isFetching:this.state.fetching,children:[(null===(s=this.state.catalog)||void 0===s?void 0:s.newAlbums)&&Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{aside:Object(r.jsx)(A.m,{onClick:function(){G.setState({from:"loveArtists"},(function(){return G.goToPage("viewAllArtists")}))},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438 \u0443 \u0412\u0430\u0448\u0438\u0445 \u043b\u044e\u0431\u0438\u043c\u0447\u0438\u043a\u043e\u0432"}),children:Object(r.jsx)(A.f,{children:this.state.catalog.newAlbums.map((function(t){return Object(r.jsxs)(A.e,{style:{width:186,height:238,cursor:"pointer",lineHeight:0},onClick:function(){return G.getArtistsCard(t.artistId)},children:[Object(r.jsx)("img",{style:{width:186,height:186,borderRadius:4},src:t.cover_xl,alt:""}),Object(r.jsx)(A.z,{weight:"medium",style:{textAlign:"left",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:186,marginTop:7},children:t.title}),Object(r.jsxs)(A.z,{weight:"regular",style:{textAlign:"left",marginTop:2.5,fontSize:13,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:186},children:["\u0410\u043b\u044c\u0431\u043e\u043c \u0432\u044b\u0448\u0435\u043b ",new Date(t.release_date).toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})]})]},t.id)}))})}),Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{aside:Object(r.jsx)(A.m,{onClick:function(){G.setState({from:"popularArtists"},(function(){return G.goToPage("viewAllArtists")}))},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0430\u0440\u0442\u0438\u0441\u0442\u044b"}),children:Object(r.jsx)(A.f,{children:(null===(o=this.state.catalog)||void 0===o||null===(c=o.artists)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.length)>0?this.state.catalog.artists.data.map((function(t){return Object(r.jsxs)(A.e,{style:{width:124,height:154,cursor:"pointer",lineHeight:0},onClick:function(){return G.getArtistsCard(t.id)},children:[Object(r.jsx)("img",{style:{width:124,height:124,borderRadius:"50%"},src:t.picture_xl,alt:""}),Object(r.jsx)(A.z,{weight:"medium",style:{textAlign:"center",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:124,marginTop:7},children:t.name})]},t.id)})):Object(r.jsx)(A.e,{children:Object(r.jsx)(k.SkeletonTheme,{color:"var(--skeleton_color)",highlightColor:"var(--skeleton_highlight)",children:Object(r.jsx)(w.a,{circle:!0,height:124,width:124,style:{marginRight:8},count:10})})})})}),Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{children:"\u041b\u0443\u0447\u0448\u0438\u0435 \u0442\u0440\u0435\u043a\u0438"}),children:(null===(d=this.state.catalog)||void 0===d||null===(u=d.tracks)||void 0===u?void 0:u.data)?this.state.catalog.tracks.data.map((function(t,e,i){return Object(r.jsxs)(A.x,{className:"popularSongs",style:{marginRight:8,marginLeft:8,background:"linear-gradient(to left, rgba(255, 255, 255, 0), rgba(0, 0, 0, .35)), ".concat(t.background),borderTopLeftRadius:0===e?15:0,borderTopRightRadius:0===e?15:0,borderBottomLeftRadius:e===i.length-1?15:0,borderBottomRightRadius:e===i.length-1?15:0},disabled:!0,before:Object(r.jsx)(A.b,{mode:"image",src:t.album.cover_medium}),after:Object(r.jsx)(R.a,{fill:"#ffffff",onClick:function(){return G.getArtistsCard(t.artist.id)}}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)})):Object(r.jsx)("div",{style:{marginRight:8,marginLeft:8},children:Object(r.jsx)(k.SkeletonTheme,{color:"var(--skeleton_color)",highlightColor:"var(--skeleton_highlight)",children:Object(r.jsx)(w.a,{duration:1.75,style:{borderRadius:15},height:360})})})}),!this.state.catalog.subscriber&&Object(r.jsx)(A.j,{separator:"hide",children:Object(r.jsx)(A.c,{header:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0445 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435",subheader:"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u0430\u0436\u043d\u0443\u044e \u043d\u043e\u0432\u0438\u043d\u043a\u0443 \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0435!",asideMode:"expand",onClick:function(){var t=document.createElement("a");t.target="_blank",t.href="https://vk.com/public74612115",t.click()}})})]}),this.state.snackbar]}),Object(r.jsxs)(A.q,{id:"profile",children:[Object(r.jsx)(A.r,{separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),(null===(b=this.state.user)||void 0===b||null===(j=b.artists)||void 0===j?void 0:j.length)>0?Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c"}),children:Object(r.jsx)(A.n,{children:this.state.user.artists.map((function(t){return Object(r.jsx)(A.g,{style:{cursor:"pointer"},before:Object(r.jsx)(A.b,{src:t.picture_xl,size:50}),selectable:!0,checked:t.toggle,onChange:function(e){H.emit("notifications",{toggle:e.target.checked,id:t.id,sign:window.location.search.slice(1)}),G.setState({popout:Object(r.jsx)(A.v,{})})},children:t.name},t.id)}))})}):Object(r.jsx)(A.A,{level:"4",weight:"semibold",style:{textAlign:"center",marginTop:12},children:"\u0412\u044b \u043f\u043e\u043a\u0430 \u043d\u0438 \u043d\u0430 \u043a\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c("}),this.state.snackbar]}),Object(r.jsxs)(A.q,{id:"viewAllArtists",children:[Object(r.jsx)(A.r,{separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"}),Object(r.jsx)(A.j,{separator:"hide",children:this.state.from&&N.a.get(this.state.catalog,"popularArtists"===this.state.from?"artists.data":"loveArtists"===this.state.from&&"novelties").map((function(t){return Object(r.jsx)(A.x,{style:{cursor:"pointer"},expandable:!0,before:Object(r.jsx)(A.b,{src:t.picture_xl}),onClick:function(){return G.getArtistsCard(t.id)},children:t.name},t.id)}))})]}),Object(r.jsxs)(A.q,{id:"artistsCard",children:[Object(r.jsx)(A.r,{id:"artistsHeader",separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack})}),Object(r.jsxs)("div",{style:{position:"relative"},children:[Object(r.jsx)("div",{style:{width:"100%",height:500,borderBottomLeftRadius:25,borderBottomRightRadius:25,marginTop:"calc(-1px - var(--panelheader_height_ios) - var(--safe-area-inset-top))",background:"linear-gradient(to bottom, rgba(65, 65, 65, .2), rgba(0, 0, 0, 1)), url(".concat(this.state.currentArtist.picture_xl,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),Object(r.jsx)(A.A,{style:{color:"#fff",position:"absolute",bottom:14,fontSize:"2.5em",marginLeft:18,maxWidth:"80%"},weight:"heavy",children:this.state.currentArtist.name}),this.state.currentArtist.notifications?Object(r.jsx)(E.a,{className:"checkedBell",width:40,height:40,style:{color:"#cfcfcf",position:"absolute",bottom:17,right:17,cursor:"pointer"},onClick:function(){return G.turnNotifications(!1)}}):Object(r.jsx)(P.a,{className:"Bell",width:40,height:40,style:{color:"#ea4632",position:"absolute",bottom:17,right:17,cursor:"pointer"},onClick:function(){return G.turnNotifications(!0)}})]}),(null===(g=this.state.currentArtist)||void 0===g||null===(m=g.tracks)||void 0===m?void 0:m.filter((function(t){return t.release_date})).length)>0&&Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{children:"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0440\u0435\u043b\u0438\u0437\u044b"}),children:Object(r.jsx)(A.l,{children:Object(r.jsx)("div",{style:{display:"flex"},children:this.state.currentArtist.tracks.filter((function(t){return t.release_date})).reduce((function(t,e,i){return t[Math.floor(i/3)]||(t[Math.floor(i/3)]=[]),t[Math.floor(i/3)][i%3]=e,t}),[]).map((function(t,e){return Object(r.jsx)(A.e,{children:t.map((function(t){return Object(r.jsxs)(A.x,{disabled:!0,style:{width:240},before:Object(r.jsx)(A.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))},e)}))})})}),Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{aside:Object(r.jsx)(A.m,{onClick:function(){return G.goToPage("viewAllTracks")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438"}),children:Object(r.jsx)(A.l,{children:Object(r.jsx)("div",{style:{display:"flex"},children:(null===(f=this.state.currentArtist)||void 0===f||null===(v=f.tracks)||void 0===v?void 0:v.length)>0&&this.state.currentArtist.tracks.reduce((function(t,e,i){return t[Math.floor(i/3)]||(t[Math.floor(i/3)]=[]),t[Math.floor(i/3)][i%3]=e,t}),[]).map((function(t,e){return Object(r.jsx)(A.e,{children:t.map((function(t){return Object(r.jsxs)(A.x,{style:{width:240},disabled:!0,before:Object(r.jsx)(A.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))},e)}))})})}),(null===(x=this.state.currentArtist)||void 0===x||null===(y=x.albums)||void 0===y?void 0:y.length)>0&&Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{aside:Object(r.jsx)(A.m,{onClick:function(){return G.goToPage("viewAllAlbums")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"}),children:Object(r.jsx)(A.f,{children:this.state.currentArtist.albums.sort((function(t,e){return e.release_date-t.release_date})).map((function(t){return Object(r.jsx)(A.e,{onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G.setState({popout:Object(r.jsx)(A.v,{})}),e.prev=1,e.next=4,O.a.get("https://dan0102dan.herokuapp.com/"+t.tracklist);case 4:t.tracks=e.sent.data.data,G.setState({currentAlbum:t},(function(){return G.goToPage("albumCard")})),G.setState({popout:null}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),G.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u043b\u044c\u0431\u043e\u043c"),G.setState({popout:null});case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),size:"s",children:Object(r.jsxs)("div",{style:{width:184,height:236,cursor:"pointer",lineHeight:0},children:[Object(r.jsx)("img",{style:{width:184,height:184,borderRadius:4},src:t.cover_xl,alt:""}),Object(r.jsxs)(A.z,{weight:"medium",style:{textAlign:"left",marginTop:6,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]}),Object(r.jsxs)(A.z,{weight:"regular",style:{textAlign:"left",marginTop:2,fontSize:13},children:["\u0410\u043b\u044c\u0431\u043e\u043c \u0432\u044b\u0448\u0435\u043b ",new Date(t.release_date).toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})]})]})},t.id)}))})}),(null===(S=this.state.currentArtist)||void 0===S?void 0:S.related)&&Object(r.jsx)(A.j,{separator:"hide",header:Object(r.jsx)(A.k,{mode:"secondary",children:"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"}),children:Object(r.jsx)(A.f,{children:this.state.currentArtist.related.map((function(t){return Object(r.jsx)(A.e,{onClick:function(){return G.getArtistsCard(t.id)},size:"s",children:Object(r.jsxs)("div",{style:{width:124,height:154,cursor:"pointer",lineHeight:0},children:[Object(r.jsx)("img",{style:{width:124,height:124,borderRadius:"50%"},src:t.picture_xl,alt:""}),Object(r.jsx)(A.z,{weight:"medium",style:{textAlign:"center",marginTop:7},children:t.name})]})},t.id)}))})}),this.state.snackbar]}),Object(r.jsxs)(A.q,{id:"viewAllAlbums",children:[Object(r.jsx)(A.r,{separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041d\u043e\u0432\u043e\u0435"}),Object(r.jsx)(A.j,{separator:"hide",children:(null===(_=this.state.currentArtist)||void 0===_||null===(C=_.albums)||void 0===C?void 0:C.length)>0&&this.state.currentArtist.albums.sort((function(t,e){return e.release_date-t.release_date})).map((function(t){return Object(r.jsxs)(A.x,{style:{cursor:"pointer"},expandable:!0,before:Object(r.jsx)(A.b,{mode:"image",src:t.cover_xl}),description:"\u0410\u043b\u044c\u0431\u043e\u043c \u0432\u044b\u0448\u0435\u043b ".concat(new Date(t.release_date).toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})),onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G.setState({popout:Object(r.jsx)(A.v,{})}),e.prev=1,e.next=4,O.a.get("https://dan0102dan.herokuapp.com/"+t.tracklist);case 4:t.tracks=e.sent.data.data,G.setState({currentAlbum:t},(function(){return G.goToPage("albumCard")})),G.setState({popout:null}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),G.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u043b\u044c\u0431\u043e\u043c"),G.setState({popout:null});case 13:case"end":return e.stop()}}),e,null,[[1,9]])}))),children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))})]}),Object(r.jsxs)(A.q,{id:"viewAllTracks",children:[Object(r.jsx)(A.r,{separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"}),Object(r.jsx)(A.j,{separator:"hide",children:(null===(B=this.state.currentArtist)||void 0===B||null===(z=B.tracks)||void 0===z?void 0:z.length)>0&&this.state.currentArtist.tracks.map((function(t){return Object(r.jsxs)(A.x,{disabled:!0,before:Object(r.jsx)(A.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))})]}),Object(r.jsxs)(A.q,{id:"albumCard",children:[Object(r.jsx)(A.r,{separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack}),children:this.state.currentAlbum.title}),Object(r.jsx)(A.j,{separator:"hide",children:(null===(T=this.state.currentAlbum)||void 0===T||null===(L=T.tracks)||void 0===L?void 0:L.length)>0&&this.state.currentAlbum.tracks.map((function(t,e){return Object(r.jsxs)(A.x,{before:Object(r.jsx)(A.z,{style:{marginRight:12},children:(e+1).toString().padStart(2,"0")}),disabled:!0,description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)}))}),this.state.snackbar]}),Object(r.jsxs)(A.q,{id:"playlistCard",children:[Object(r.jsx)(A.r,{separator:!1,left:Object(r.jsx)(A.s,{style:{cursor:"pointer"},onClick:this.goBack}),children:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"}),Object(r.jsx)("img",{style:{height:300,objectFit:"cover",borderRadius:25,marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:8},src:this.state.currentPlaylist.picture_xl,alt:""}),Object(r.jsxs)(A.j,{separator:"hide",children:[(null===(I=this.state.currentPlaylist)||void 0===I||null===(V=I.tracks)||void 0===V?void 0:V.length)>0&&this.state.currentPlaylist.tracks.map((function(t){return Object(r.jsxs)(A.x,{expandable:!0,onClick:function(){return G.getArtistsCard(t.artist.id)},before:Object(r.jsx)(A.b,{mode:"image",src:t.album.cover_medium}),description:t.artist.name,children:[t.title," ",t.explicit_lyrics&&G.supportsEmoji()&&"\ud83c\udd74"]},t.id)})),Object(r.jsxs)(A.z,{weight:"medium",style:{marginTop:16,marginBottom:8,textAlign:"center"},children:[null===(W=this.state.currentPlaylist)||void 0===W||null===(K=W.tracks)||void 0===K?void 0:K.length," \u043f\u0435\u0441\u0435\u043d \u2022 ",null===(M=this.state.currentPlaylist)||void 0===M||null===(q=M.creation_date)||void 0===q?void 0:q.substring(0,(null===(F=this.state.currentPlaylist)||void 0===F?void 0:F.creation_date.length)-15)]})]}),this.state.snackbar]})]}),Object(r.jsx)(D,{setActiveView:function(t){return G.setState({activeView:t})},id:"greeting"})]})})}}]),i}(n.a.Component);o.a.render(Object(r.jsx)(F,{}),document.getElementById("root"))}},[[338,1,2]]]);