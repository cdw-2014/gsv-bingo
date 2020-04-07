(this["webpackJsonpgsv-bingo"]=this["webpackJsonpgsv-bingo"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(98),a(77)),l=a(31),s=a(160),u=a(174),m=a(167),d=a(175),g=a(163),p=a(165),f=a(79),b=a(166),E=Object(s.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function h(e){var t=E(),a=e.sections,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:t.toolbar},r.a.createElement(p.a,{size:"small"},"About"),r.a.createElement(f.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle},r.a.createElement(b.a,{href:"/",color:"inherit"},n)),r.a.createElement(p.a,{variant:"outlined",size:"small"},"Sign up")),r.a.createElement(g.a,{component:"nav",variant:"dense",className:t.toolbarSecondary},a.map((function(e){return r.a.createElement(b.a,{color:"inherit",noWrap:!0,key:e.title,variant:"body2",href:e.url,className:t.toolbarLink},e.title)}))))}var v=a(53),y=a(80),k=Object(s.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(v.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function w(e){var t=k(),a=e.post;return r.a.createElement(y.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")}},r.a.createElement("img",{style:{display:"none"},src:a.image,alt:a.imageText}),r.a.createElement("div",{className:t.overlay}),r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,md:6},r.a.createElement("div",{className:t.mainFeaturedPostContent},r.a.createElement(f.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},a.title),r.a.createElement(f.a,{variant:"h5",color:"inherit",paragraph:!0},a.description)))))}var x=a(16),O=a(169),j=a(168),S=a(170),C=a(171),N=a(181),T=a(172),M=a(186),F=a(184),I=a(173),P=a(182),B=Object(s.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function A(e){var t=B(),a=e.post,n=r.a.useState(!1),i=Object(x.a)(n,2),o=i[0],c=i[1],l=r.a.useRef(null),s=function(e){l.current&&l.current.contains(e.target)||c(!1)};function u(e){"Tab"===e.key&&(e.preventDefault(),c(!1))}var d=r.a.useRef(o);return r.a.useEffect((function(){!0===d.current&&!1===o&&l.current.focus(),d.current=o}),[o]),r.a.createElement(m.a,{item:!0,xs:12,md:6},r.a.createElement(j.a,{component:"a",ref:l,"aria-controls":o?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){c((function(e){return!e}))}},r.a.createElement(O.a,{className:t.card},r.a.createElement("div",{className:t.cardDetails},r.a.createElement(S.a,null,r.a.createElement(f.a,{component:"h2",variant:"h5"},a.title),r.a.createElement(f.a,{variant:"subtitle1",paragraph:!0},a.description))),r.a.createElement(N.a,{xsDown:!0},r.a.createElement(C.a,{className:t.cardMedia,image:a.image,title:a.imageTitle})))),r.a.createElement(T.a,{open:o,anchorEl:l.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,n=e.placement;return r.a.createElement(P.a,Object.assign({},t,{style:{transformOrigin:"bottom"===n?"center top":"center bottom",marginTop:"5px"}}),r.a.createElement(y.a,null,r.a.createElement(I.a,{onClickAway:s},r.a.createElement(F.a,{autoFocusItem:o,id:"menu-list-grow",onKeyDown:u},a.options.map((function(e){return r.a.createElement(M.a,{onClick:function(){return window.location.href=e.link}},e.title)}))))))})))}var D=Object(s.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),G={title:"Welcome",description:"Choose an option below to get started",image:"https://source.unsplash.com/random/?map",imgText:"map image from unsplash.com"},_=[{title:"Suggestions",description:"Create and manage submitted game piece suggestions",image:"".concat("","/suggestion.jpg"),imageText:"Image Text",options:[{title:"Submit a New Suggestion",link:"/suggestions/submit"},{title:"[COMING SOON] View All Suggested Pieces",link:"/suggestions/view"},{title:"[COMING SOON] Manage Your Suggestions",link:"/suggestions/manage"}]},{title:"Game Board",description:"Create new or load existing bingo boards",image:"".concat("","/map.jpg"),imageText:"Image Text",options:[{title:"Create a New Board",link:"/boards/create"},{title:"View All Boards",link:"/boards/view"},{title:"[COMING SOON] Manage Your Boards",link:"/boards/manage"}]}];function R(){D();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement("main",null,r.a.createElement(w,{post:G}),r.a.createElement(m.a,{container:!0,spacing:4},_.map((function(e){return r.a.createElement(A,{key:e.title,post:e})}))))))}a(176),Object(s.a)((function(e){return{root:{flexGrow:1},button:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var W=a(179),V=a(47),q=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function z(){var e=q(),t=r.a.useState("Unknown"),a=Object(x.a)(t,2),n=a[0],i=a[1];return r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,style:{marginTop:"15px"}},r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement("h3",null,"Add a Bingo Piece"),r.a.createElement("p",null,"Fill out the form to create a possible bingo piece that others can look for when playing Google Steet View Bingo!")),r.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){return t=e,console.log(t.target[1].value,t.target[0].value),void V.post("https://gsv-bingo.herokuapp.com/api/suggestions",{name:t.target[2].value,difficulty:t.target[1].value,suggestion:t.target[0].value});var t}},r.a.createElement("div",null,r.a.createElement(m.a,{container:!0,alignItems:"center",justify:"center",direction:"column",spacing:3},r.a.createElement(m.a,{item:!0},r.a.createElement(W.a,{required:!0,id:"suggestion",label:"Required",placeholder:"Suggestion"})),r.a.createElement(m.a,{item:!0},r.a.createElement(W.a,{id:"select-amount",select:!0,value:n,helperText:"About how long will it take to find?",onChange:function(e){i(e.target.value)}},[{text:"Unknown",id:0},{text:"Easy (1-2 minutes)",id:1},{text:"Fair (3-5 minutes)",id:2},{text:"Hard (Over 5 minutes)",id:3}].map((function(e){return r.a.createElement(M.a,{key:e.id,value:e.id},e.text)})))),r.a.createElement(m.a,{item:!0},r.a.createElement(W.a,{id:"name",label:"Your Name"})),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"contained",type:"submit",color:"primary",id:"submit"},"Submit"))))))}var L=a(14),U=a(177),Y=a(185),J=a(178),H=a(180),K=a(183),X=a(47),Q=Object(s.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function Z(){var e=Q(),t=r.a.useState({type:"bingo",isFreeSpace:!0,title:"",id:null}),a=Object(x.a)(t,2),n=a[0],i=a[1];return r.a.createElement(m.a,{container:!0,item:!0,xs:12,direction:"column",justify:"space-between",alignItems:"center",spacing:2,style:{marginTop:"15px"},className:e.root},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement("h3",null,"Create a Bingo Board")),r.a.createElement(m.a,{item:!0},r.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){return function(e){var t,a;e.preventDefault(),"bingo"===n.type?n.isFreeSpace?(t="bingo_f",a=24):(t="bingo_nf",a=25):(t="list",a=10);var r=[];X.get("https://gsv-bingo.herokuapp.com/api/suggestions/random/".concat(a)).then((function(e){e.data.forEach((function(e){return r.push(e[0]._id)}))})).then((function(e){r.length!==a?alert("There was a problem creating the board. Please try again."):X.post("https://gsv-bingo.herokuapp.com/api/boards",{title:n.title,type:t,pieces:r}).then((function(e){return window.location.href="/boards/play/".concat(e.data)}))}))}(e)}},r.a.createElement("div",null,r.a.createElement(m.a,{item:!0},r.a.createElement(W.a,{required:!0,id:"name",label:"Board Name",value:n.title,onChange:function(e){return t=e,void i(Object(L.a)({},n,{title:t.target.value}));var t}})),r.a.createElement(m.a,{item:!0},r.a.createElement(U.a,{component:"fieldset",name:"board-type"},r.a.createElement(Y.a,{onChange:function(e){return t=e,void i(Object(L.a)({},n,{type:t.target.value}));var t},value:n.type},r.a.createElement(J.a,{value:"bingo",control:r.a.createElement(H.a,null),label:"Bingo Board (5x5)"}),r.a.createElement(J.a,{value:"list",control:r.a.createElement(H.a,null),label:"List of 10 Items"})))),r.a.createElement(m.a,{item:!0},r.a.createElement("h5",null,"Additional Settings:")),r.a.createElement(m.a,{item:!0},r.a.createElement(U.a,{onChange:function(e){i(Object(L.a)({},n,{isFreeSpace:!n.isFreeSpace}))},disabled:"list"===n.type},r.a.createElement(J.a,{label:"Use free space in center",control:r.a.createElement(K.a,{checked:n.isFreeSpace})})))),r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{variant:"contained",type:"submit",color:"primary",id:"submit"},"Submit")))))}var $=a(56),ee=Object(s.a)({card:{display:"flex",width:"35%",height:"30px",marginTop:"5px"}});function te(e){e.title;var t=ee(),a=r.a.useState({didMount:!1,pieces:e.pieces}),n=Object(x.a)(a,2),i=n[0],o=n[1];r.a.useEffect((function(){i.pieces.forEach((function(e){return e.found=!1})),o(Object(L.a)({},i,{didMount:!0}))}),[]);var c=function(e,a){return r.a.createElement(O.a,{key:e._id,className:t.card,style:{backgroundColor:e.found?"green":"white"}},r.a.createElement(j.a,{onClick:function(e){return function(e){var t=Object($.a)(i.pieces),a=t[e];a.found=!a.found,o(Object(L.a)({},i,{pieces:t}))}(a)}},e.suggestion))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,item:!0,xs:10,justify:"space-around",alignItems:"center",direction:"column",spacing:2},r.a.createElement("h3",null,e.title),i.didMount&&i.pieces.map((function(e,t){return c(e,t)}))))}var ae=Object(s.a)({card:{display:"flex",width:"15%",height:"8ch",flexWrap:1}});function ne(e){var t=e.type,a=ae(),n=r.a.useState({didMount:!1,pieces:e.pieces}),i=Object(x.a)(n,2),o=i[0],c=i[1];r.a.useEffect((function(){console.log(o.pieces),o.pieces.forEach((function(e){return e.found=!1})),"bingo_f"===t&&o.pieces.splice(12,0,{suggestion:"FREE SPACE",found:!0}),c(Object(L.a)({},o,{didMount:!0}))}),[]);var l=function(e){return r.a.createElement(m.a,{container:!0,item:!0,xs:10,justify:"space-around",alignItems:"center",direction:"row",spaing:2,key:e},o.pieces.map((function(t,n){if(n>=5*(e-1)&&n<5*e)return r.a.createElement(O.a,{key:t._id,className:a.card,style:{backgroundColor:t.found?"green":"white"}},r.a.createElement(j.a,{onClick:function(e){return function(e){var t=Object($.a)(o.pieces),a=t[e];a.found=!a.found,c(Object(L.a)({},o,{pieces:t}))}(n)}},t.suggestion))})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,e.title),o.didMount&&[1,2,3,4,5].map((function(e){return l(e)})))}function re(e){var t=r.a.useState({timeStarted:(new Date).getTime(),isPlaying:!1,minutes:20,seconds:0}),a=Object(x.a)(t,2),n=a[0],i=a[1];r.a.useEffect((function(){var e;return e=setTimeout((function(){if(n.isPlaying&&(n.minutes>0||n.seconds>0)){var e=((new Date).getTime()-n.timeStarted)/1e3,t=Math.floor((e-1)/60),a={minutes:19-t,seconds:60-Math.floor(e-60*t)};i(Object(L.a)({},n,{minutes:a.minutes,seconds:a.seconds}))}}),1e3),function(){return clearInterval(e)}}),[n]);return r.a.createElement("div",null,n.isPlaying?r.a.createElement("h1",null,("0"+n.minutes).slice(-2),":",("0"+n.seconds).slice(-2)):null,r.a.createElement(p.a,{variant:"contained",color:!0===n.isPlaying?"secondary":"primary",onClick:function(e){n.isPlaying?i(Object(L.a)({},n,{isPlaying:!1})):i(Object(L.a)({},n,{isPlaying:!0,timeStarted:(new Date).getTime()}))}},!0===n.isPlaying?"Finished":"Start"),0===n.minutes&&0===n.seconds?alert("Time is up!"):null)}var ie=a(47),oe=a.n(ie);function ce(e){var t=e.match.params.gameId,a=r.a.useState({board:null,didMount:!1}),n=Object(x.a)(a,2),i=n[0],o=n[1];return r.a.useEffect((function(){oe.a.get("https://gsv-bingo.herokuapp.com/api/boards/".concat(t)).then((function(e){return e.data[0]})).then((function(e){var t="";e.pieces.forEach((function(e){return t+=e+","})),t=t.substr(0,t.length-1),oe.a.get("https://gsv-bingo.herokuapp.com/api/suggestions/many/".concat(t)).then((function(t){var a=t.data,n={_id:e._id,type:e.type,title:e.title,pieces:a};o(Object(L.a)({},i,{board:n,didMount:!0}))}))})).catch((function(e){console.error(e)}))}),[]),r.a.createElement(m.a,{container:!0,item:!0,xs:12,justify:"center",alignItems:"center",direction:"column",spacing:2},i.didMount&&console.log(i.board)&&"list"===i.board.type?r.a.createElement(te,i.board):i.didMount&&r.a.createElement(ne,i.board),r.a.createElement(re,null))}var le=[];var se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{title:"Google Street View Bingo",sections:le}),r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:R}),r.a.createElement(l.a,{exact:!0,path:"/suggestions/submit",component:z}),r.a.createElement(l.a,{exact:!0,path:"/boards/create",component:Z}),r.a.createElement(l.a,{path:"/boards/play/:gameId",component:ce}))))};o.a.render(r.a.createElement(se,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a(120)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.aeea2e4b.chunk.js.map