(this.webpackJsonpnewrelease=this.webpackJsonpnewrelease||[]).push([[0],{135:function(e,t,a){e.exports=a.p+"static/media/ava.d549df08.png"},197:function(e,t,a){e.exports=a(333)},304:function(e,t,a){},330:function(e,t){},333:function(e,t,a){"use strict";a.r(t);a(198),a(224),a(226),a(227),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266);var r=a(0),n=a.n(r),i=a(120),l=a.n(i),s=a(21),o=a.n(s),c=a(42),u=a(141),d=a(27),m=a.n(d),h=a(39),p=a(121),g=a(122),f=a(143),v=a(142),y=a(74),E=a.n(y),b=a(3),k=(a(303),a(137)),x=a.n(k),w=a(138),S=a.n(w),A=a(140),C=a.n(A),_=a(139),R=a.n(_),j=a(77),B=a.n(j),z=a(76),I=a.n(z),P=(a(304),a(135)),T=a.n(P),O=a(53),L=a.n(O),V=a(136),W=a.n(V)()("https://music.dan0102dan.ru"),K=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).goBack=function(){var e=r.state.history;"home"===r.state.activePanel&&o.a.send("VKWebAppDisableSwipeBack"),e.length>1&&(e.pop(),r.setState({activePanel:e[e.length-1]}))},r.onChange=function(){var e=Object(h.a)(m.a.mark((function e(t){var a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.setState({searchResults:n.a.createElement(b.p,null),search:t.target.value}),!(t.target.value.length>0)){e.next=9;break}return e.next=4,E.a.get("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(encodeURIComponent(t.target.value)),{headers:{"x-rapidapi-key":"aa262e04c6msh0fdfa92d02aff45p1e848ajsn1a6084920c73","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",useQueryString:!0}});case 4:a=e.sent,(null===(i=a.data)||void 0===i?void 0:i.data)&&(null===i||void 0===i?void 0:i.total)>0?r.setState({searchResults:i.data}):r.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),e.next=10;break;case 9:Array.isArray(r.state.searchResults)&&r.setState({searchResults:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.playSong=function(e){r.state.audio.getAttribute("src")!==e?(r.state.audio.pause(),r.setState({audio:new Audio(e),play:!0},(function(){r.state.audio.addEventListener("error",(function(){return r.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u043f\u0441\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043f\u0435\u0441\u043d\u044e")})),r.state.audio.play(),r.state.audio.addEventListener("ended",(function(){return r.setState({play:!1})}))}))):r.state.play?r.setState({play:!1},(function(){return r.state.audio.pause()})):r.setState({play:!0},(function(){return r.state.audio.play()}))},r.state={activePanel:"home",history:["home"],slideIndex:0,popout:null,modal:null,user:{},search:"",artists:[],searchResults:[],currentArtist:{},currentPlaylist:{},catalog:{},play:!1,audio:new Audio},r}return Object(g.a)(a,[{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),"home"===this.state.activePanel&&o.a.send("VKWebAppEnableSwipeBack"),this.setState({activePanel:e,history:[].concat(Object(u.a)(this.state.history),[e])})}},{key:"openError",value:function(e){var t=this;this.setState({snackbar:n.a.createElement(b.s,{layout:"vertical",onClose:function(){return t.setState({snackbar:null})},before:n.a.createElement(b.a,{size:24,style:{backgroundImage:"linear-gradient(135deg, #fc7373, #cb5e5a)"}},n.a.createElement(x.a,{fill:"#fff",width:14,height:14}))},e)})}},{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("popstate",(function(){return t.goBack()})),this.startSocket(),W.emit("HomeCatalog",{sign:window.location.search.slice(1)}),this.setState({popout:n.a.createElement(b.p,null)}),e.t0=this,e.next=7,o.a.send("VKWebAppGetUserInfo");case 7:e.t1=e.sent,e.t2={user:e.t1},e.t0.setState.call(e.t0,e.t2),o.a.subscribe((function(e){"VKWebAppViewHide"===e.detail.type&&t.setState({popout:null})}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startSocket",value:function(){var e=this;W.on("message",(function(t){var a,r;if(console.log(t),null===t||void 0===t?void 0:t.data)if("HomeCatalog"===t.method)(null===(a=t.data)||void 0===a||null===(r=a.tracks)||void 0===r?void 0:r.data)&&e.setState({catalog:t.data,popout:null});else if("getArtist"===t.method)e.setState({currentArtist:t.data},(function(){return e.goToPage("artistsCard")})),e.setState({popout:null});else if("notifications"===t.method){var n;if(e.state.currentArtist&&e.setState((function(e){return{currentArtist:Object(c.a)(Object(c.a)({},e.currentArtist),{},{notifications:t.data.toggle})}})),null===(n=e.state.user)||void 0===n?void 0:n.artists){var i=e.state.user;i.artists.splice(i.artists.findIndex((function(e){return e.id===t.data.artist})),1),e.setState({user:i,popout:null})}}else"profile"===t.method&&(e.setState((function(e){return{user:Object(c.a)(Object(c.a)({},e.user),{},{artists:t.data})}}),(function(){return e.goToPage("profile")})),e.setState({popout:null}));else(null===t||void 0===t?void 0:t.error)&&("HomeCatalog"===t.method?e.openError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"):"getArtist"===t.method?(e.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),e.setState({popout:null})):"notifications"===t.method?(e.openError(t.error),o.a.send("VKWebAppTapticNotificationOccurred",{type:"error"}).catch((function(){}))):(t.method,e.openError(t.error),e.setState({popout:null})))}))}},{key:"turnNotifications",value:function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=4;break}return e.next=4,o.a.send("VKWebAppAllowMessagesFromGroup",{group_id:74612115});case 4:return e.next=6,W.emit("notifications",{toggle:t,id:this.state.currentArtist.id,sign:window.location.search.slice(1)});case 6:o.a.send("VKWebAppTapticSelectionChanged",{}).catch((function(){})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f");case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getArtistsCard",value:function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({popout:n.a.createElement(b.p,null)}),e.prev=1,e.next=4,W.emit("getArtist",{id:t,sign:window.location.search.slice(1)});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),this.setState({popout:null});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"playlistCard",value:function(){var e=Object(h.a)(m.a.mark((function e(t){var a,r,i,l=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({popout:n.a.createElement(b.p,null)}),e.prev=1,a=this.state.catalog.playlists.data[t],e.next=5,E.a.get("https://cors-anywhere.herokuapp.com/".concat(a.tracklist),{headers:{"x-rapidapi-key":"aa262e04c6msh0fdfa92d02aff45p1e848ajsn1a6084920c73","x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",useQueryString:!0}});case 5:r=e.sent,i=r.data,a.tracks=i.data,this.setState({popout:null,currentPlaylist:a},(function(){return l.goToPage("playlistCard")})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),this.openError("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0430\u0440\u0442\u0438\u0441\u0442\u0430"),this.setState({popout:null});case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,r,i,l,s,c,u,d,m,h,p,g,f,v,y,E,k,x,w,A,_,j,z,P,O,V,K,M,N,H=this;return n.a.createElement(b.f,{isWebView:!0,scheme:document.body.getAttribute("scheme")?document.body.getAttribute("scheme"):"bright_light",webviewType:(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.match(/vk_platform=([a-z_]+)/))?["mobile_android","mobile_iphone","mobile_android_messenger","mobile_iphone_messenger"].includes(null===(r=window.location.search)||void 0===r?void 0:r.match(/vk_platform=([a-z_]+)/)[1])?"vkapps":"internal":null},n.a.createElement(b.v,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack,popout:this.state.popout,modal:this.state.modal},n.a.createElement(b.m,{id:"greeting",style:{position:"fixed"}},n.a.createElement(b.h,{slideWidth:"100%",align:"center",style:{height:"100vh"},slideIndex:this.state.slideIndex,onChange:function(e){return H.setState({slideIndex:e})},bullets:"light"},n.a.createElement("div",{style:{backgroundColor:"#8818d1",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},n.a.createElement("img",{className:"IntroImg",src:T.a,alt:"",style:{width:"300px",height:"300px",marginBottom:64}}),n.a.createElement(b.u,{level:"1",weight:"heavy",style:{color:"#fff",marginBottom:16,fontSize:"2.5em",textAlign:"center"}},"\u041c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u043e\u0432\u0438\u043d\u043a\u0438"),n.a.createElement(b.u,{level:"3",weight:"semibold",style:{color:"#fff",marginBottom:4,textAlign:"center"}},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"),n.a.createElement(b.u,{level:"5",weight:"semibold",style:{color:"#fff",textAlign:"center",marginBottom:48,padding:"0 10px"}},"\u0421\u0432\u0430\u0439\u043f\u043d\u0438 \u0432\u043b\u0435\u0432\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435."),n.a.createElement(b.g,null,n.a.createElement(b.b,{style:{cursor:"pointer"},size:"xl",mode:"commerce",onClick:function(){o.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"}),H.setState({activeStory:"home"})}},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"))),n.a.createElement("div",{style:{backgroundColor:"#a3c6c7",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},n.a.createElement("img",{className:"IntroImg",src:L.a,alt:"",style:{width:"300px",height:"300px",marginBottom:64}}),n.a.createElement(b.u,{level:"1",weight:"heavy",style:{color:"#fff",marginBottom:16,fontSize:"2.5em",textAlign:"center"}},"\u0410\u0440\u0442\u0438\u0441\u0442\u044b"),n.a.createElement(b.u,{level:"3",weight:"semibold",style:{color:"#fff",marginBottom:48,textAlign:"center",padding:"0 10px"}},"\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0441\u0430\u043c\u044b\u043c\u0438 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0430\u0440\u0442\u0438\u0441\u0442\u0430\u043c\u0438"),n.a.createElement(b.g,null,n.a.createElement(b.b,{style:{cursor:"pointer"},size:"xl",mode:"commerce",onClick:function(){return H.setState({slideIndex:2})}},"\u0412\u0430\u0443"))),n.a.createElement("div",{style:{backgroundColor:"#fe96ce",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},n.a.createElement("img",{className:"IntroImg",src:L.a,alt:"",style:{width:"300px",height:"300px",marginBottom:64}}),n.a.createElement(b.u,{level:"1",weight:"heavy",style:{color:"#fff",marginBottom:16,fontSize:"2.5em",textAlign:"center"}},"\u0423\u0434\u043e\u0431\u043d\u043e\u0441\u0442\u044c"),n.a.createElement(b.u,{level:"3",weight:"semibold",style:{color:"#fff",marginBottom:48,textAlign:"center",padding:"0 10px"}},"\u0412\u0441\u0451 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b."),n.a.createElement(b.g,null,n.a.createElement(b.b,{style:{cursor:"pointer"},size:"xl",mode:"commerce",onClick:function(){o.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"}),H.setState({activeStory:"home"})}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441!"))))),n.a.createElement(b.m,{id:"home"},n.a.createElement(b.n,{left:n.a.createElement(b.a,{style:{marginLeft:-5},size:36,src:(null===(i=this.state.user)||void 0===i?void 0:i.photo_200)?null===(l=this.state.user)||void 0===l?void 0:l.photo_200:null,onClick:function(){W.emit("profile",{sign:window.location.search.slice(1)}),H.setState({popout:n.a.createElement(b.p,null)})}}),separator:!1},n.a.createElement(b.q,{value:this.state.search,onChange:this.onChange})),this.state.search?Array.isArray(this.state.searchResults)&&this.state.searchResults.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,{mode:"secondary"},"\u0410\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(b.k,null,n.a.createElement("div",{style:{display:"flex"}},this.state.searchResults.map((function(e,t,a){var r=e.artist;return a.findIndex((function(e){return e.artist.id===r.id}))>=t&&n.a.createElement("div",{key:r.id,style:{display:"flex",flexShrink:0,width:80,height:90,flexDirection:"column",alignItems:"center",fontSize:12,paddingLeft:4},onClick:function(){return H.getArtistsCard(r.id)}},n.a.createElement(b.a,{size:64,src:r.picture_xl,style:{marginBottom:8}}),r.name.length>11?r.name.slice(0,9)+"...":r.name)}))))),n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,{mode:"secondary"},"\u041f\u0435\u0441\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439")},this.state.searchResults.map((function(e){return n.a.createElement(b.r,{key:e.id,expandable:!0,before:n.a.createElement(b.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name,after:Math.floor(e.duration/60)+":"+"".concat(e.duration%60).padEnd(2,"0"),onClick:function(){return H.getArtistsCard(e.artist.id)}},e.title)})))):n.a.createElement(b.g,null,n.a.createElement(b.u,{level:"1",weight:"semibold",style:{marginTop:32}},this.state.searchResults)):n.a.createElement(n.a.Fragment,null,(null===(s=this.state.catalog)||void 0===s||null===(c=s.novelties)||void 0===c?void 0:c.length)>0&&n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438 \u0443 \u0412\u0430\u0448\u0438\u0445 \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u0430\u0440\u0442\u0438\u0441\u0442\u043e\u0432")},n.a.createElement(b.d,null,this.state.catalog.novelties.map((function(e,t,a){return n.a.createElement(b.c,{onClick:function(){return H.getArtistsCard(e.id)},key:e.id,size:"s"},n.a.createElement("div",{style:{width:124,height:150,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:124,height:124,borderRadius:100,borderTopLeftRadius:0===t?13:100,borderBottomRightRadius:t===a.length-1?13:100},src:e.picture_xl,alt:""}),n.a.createElement(b.t,{weight:"medium",style:{textAlign:"center",marginTop:7}},e.name)))})))),(null===(u=this.state.catalog)||void 0===u||null===(d=u.tracks)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.length)>0&&n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u041b\u0443\u0447\u0448\u0438\u0435 \u0442\u0440\u0435\u043a\u0438")},this.state.catalog.tracks.data.map((function(e,t,a){return n.a.createElement(b.r,{className:"popularSongs",style:{marginRight:8,marginLeft:8,background:e.background,borderTopLeftRadius:0===t?25:0,borderTopRightRadius:0===t?25:0,borderBottomLeftRadius:t===a.length-1?25:0,borderBottomRightRadius:t===a.length-1?25:0},key:e.id,disabled:!0,before:n.a.createElement(b.a,{mode:"image",src:e.album.cover_medium}),after:n.a.createElement(S.a,{fill:"#ffffff",onClick:function(){return H.getArtistsCard(e.artist.id)}}),description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")}))),(null===(h=this.state.catalog)||void 0===h||null===(p=h.playlists)||void 0===p?void 0:p.data)&&n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u0411\u043e\u043b\u044c\u0448\u0435 \u043b\u044e\u0431\u0438\u043c\u043e\u0439 \u043c\u0443\u0437\u044b\u043a\u0438")},n.a.createElement(b.d,null,this.state.catalog.playlists.data.map((function(e,t){return n.a.createElement(b.c,{key:e.id,size:"s",onClick:function(){return H.playlistCard(t)}},n.a.createElement("div",{style:{width:154,height:200,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:154,height:154,borderRadius:8},src:e.picture_xl,alt:""}),n.a.createElement("div",{style:{width:154,height:34,marginTop:7}},n.a.createElement(b.t,{weight:"regular"},e.user.name))))})))),(null===(g=this.state.catalog)||void 0===g||null===(f=g.artists)||void 0===f?void 0:f.data)&&n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0430\u0440\u0442\u0438\u0441\u0442\u044b")},n.a.createElement(b.d,null,this.state.catalog.artists.data.map((function(e,t,a){return n.a.createElement(b.c,{onClick:function(){return H.getArtistsCard(e.id)},key:e.id,size:"s"},n.a.createElement("div",{style:{width:124,height:150,cursor:"pointer",lineHeight:0}},n.a.createElement("img",{style:{width:124,height:124,borderRadius:100,borderTopLeftRadius:0===t?13:100,borderBottomRightRadius:t===a.length-1?13:100},src:e.picture_xl,alt:""}),n.a.createElement(b.t,{weight:"medium",style:{textAlign:"center",marginTop:7}},e.name)))}))))),this.state.snackbar),n.a.createElement(b.m,{id:"profile"},n.a.createElement(b.n,{separator:!1,left:n.a.createElement(b.o,{style:{cursor:"pointer"},onClick:this.goBack})},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),n.a.createElement("div",{style:{width:100,height:100,margin:"auto auto",borderRadius:"50%",background:"url(".concat(null===(v=this.state.user)||void 0===v?void 0:v.photo_max_orig,")"),backgroundSize:100,marginBottom:12}}),n.a.createElement(b.u,{style:{textAlign:"center"},level:"2",weight:"semibold"},(null===(y=this.state.user)||void 0===y?void 0:y.last_name)+" "+(null===(E=this.state.user)||void 0===E?void 0:E.first_name)),(null===(k=this.state.user)||void 0===k||null===(x=k.artists)||void 0===x?void 0:x.length)>0?n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u0410\u0440\u0442\u0438\u0441\u0442\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c")},n.a.createElement(b.l,null,this.state.user.artists.map((function(e){return n.a.createElement(b.e,{before:n.a.createElement(b.a,{src:e.picture_xl,size:50}),key:e.id,removable:!0,onRemove:function(){H.setState({popout:n.a.createElement(b.p,null)}),W.emit("notifications",{toggle:!1,id:e.id,sign:window.location.search.slice(1)})}},e.name)})))):n.a.createElement(b.u,{level:"4",weight:"semibold",style:{textAlign:"center",marginTop:12}},"\u0412\u044b \u043f\u043e\u043a\u0430 \u043d\u0438 \u043d\u0430 \u043a\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c("),this.state.snackbar),n.a.createElement(b.m,{id:"playlistCard"},n.a.createElement(b.n,{separator:!1,left:n.a.createElement(b.o,{style:{cursor:"pointer"},onClick:this.goBack})},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"),n.a.createElement("img",{style:{height:300,objectFit:"cover",borderRadius:25,marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:8},src:this.state.currentPlaylist.picture_xl,alt:""}),n.a.createElement(b.u,{style:{textAlign:"center"},level:"4",weight:"semibold"},null===(w=this.state.currentPlaylist)||void 0===w||null===(A=w.user)||void 0===A?void 0:A.name),n.a.createElement(b.i,{separator:"hide"},(null===(_=this.state.currentPlaylist)||void 0===_||null===(j=_.tracks)||void 0===j?void 0:j.length)>0&&this.state.currentPlaylist.tracks.map((function(e){return n.a.createElement(b.r,{expandable:!0,onClick:function(){return H.getArtistsCard(e.artist.id)},key:e.id,before:n.a.createElement(b.a,{mode:"image",src:e.album.cover_medium}),description:e.artist.name},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")})),n.a.createElement(b.t,{weight:"medium",style:{marginTop:16,marginBottom:8,textAlign:"center"}},null===(z=this.state.currentPlaylist)||void 0===z||null===(P=z.tracks)||void 0===P?void 0:P.length," \u043f\u0435\u0441\u0435\u043d \u2022 ",null===(O=this.state.currentPlaylist)||void 0===O?void 0:O.creation_date)),this.state.snackbar),n.a.createElement(b.m,{id:"artistsCard"},n.a.createElement(b.n,{id:"artistsHeader",separator:!1,left:n.a.createElement(b.o,{style:{cursor:"pointer"},onClick:this.goBack})}),n.a.createElement("div",{style:{position:"relative"}},n.a.createElement("img",{style:{width:"100%",height:500,objectFit:"cover",borderBottomLeftRadius:25,borderBottomRightRadius:25,marginTop:"calc(-1px - var(--panelheader_height_ios) - var(--safe-area-inset-top))"},src:this.state.currentArtist.picture_xl,alt:""}),n.a.createElement(b.u,{style:{color:"#fff",position:"absolute",bottom:30,fontSize:"2.5em",marginLeft:12,textShadow:"0px 2px 3px #000"},weight:"heavy"},this.state.currentArtist.name),this.state.currentArtist.notifications?n.a.createElement(R.a,{width:40,height:40,style:{color:"#fff",position:"absolute",bottom:30,right:10,height:50},onClick:function(){return H.turnNotifications(!1)}}):n.a.createElement(C.a,{width:40,height:40,style:{color:"#fff",position:"absolute",bottom:30,right:10,height:50},onClick:function(){return H.turnNotifications(!0)}})),(null===(V=this.state.currentArtist)||void 0===V||null===(K=V.tracks)||void 0===K?void 0:K.filter((function(e){return e.release_date})).length)>0&&n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u0440\u0435\u043b\u0438\u0437\u044b")},n.a.createElement(b.k,null,n.a.createElement("div",{style:{display:"flex"}},this.state.currentArtist.tracks.filter((function(e){return e.release_date})).reduce((function(e,t,a){return e[Math.floor(a/3)]||(e[Math.floor(a/3)]=[]),e[Math.floor(a/3)][a%3]=t,e}),[]).map((function(e,t){return n.a.createElement(b.c,{key:t},e.map((function(e){return n.a.createElement(b.r,{style:{width:240},key:e.id,before:n.a.createElement(b.a,{mode:"image",src:e.album.cover_medium}),after:H.state.play&&H.state.audio.getAttribute("src")===e.preview?n.a.createElement(I.a,null):n.a.createElement(B.a,null),description:e.artist.name,onClick:function(){return H.playSong(e.preview)}},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")})))}))))),n.a.createElement(b.i,{separator:"hide",header:n.a.createElement(b.j,null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438")},n.a.createElement(b.k,null,n.a.createElement("div",{style:{display:"flex"}},(null===(M=this.state.currentArtist)||void 0===M||null===(N=M.tracks)||void 0===N?void 0:N.length)>0&&this.state.currentArtist.tracks.reduce((function(e,t,a){return e[Math.floor(a/3)]||(e[Math.floor(a/3)]=[]),e[Math.floor(a/3)][a%3]=t,e}),[]).map((function(e,t){return n.a.createElement(b.c,{key:t},e.map((function(e){return n.a.createElement(b.r,{style:{width:240},key:e.id,before:n.a.createElement(b.a,{mode:"image",src:e.album.cover_medium}),after:H.state.play&&H.state.audio.getAttribute("src")===e.preview?n.a.createElement(I.a,null):n.a.createElement(B.a,null),description:e.artist.name,onClick:function(){return H.playSong(e.preview)}},e.title," ",e.explicit_lyrics&&"\ud83c\udd74")})))}))))),this.state.snackbar)))}}]),a}(n.a.Component);l.a.render(n.a.createElement(K,null),document.getElementById("root")),o.a.subscribe((function(e){var t=e.detail,a=t.type,r=t.data;if("VKWebAppUpdateConfig"===a){var n=document.createAttribute("scheme");n.value=r.scheme?r.scheme:"bright_light",document.body.attributes.setNamedItem(n)}})),o.a.send("VKWebAppInit")},53:function(e,t,a){e.exports=a.p+"static/media/AppleMusic.cd5eac42.svg"}},[[197,1,2]]]);