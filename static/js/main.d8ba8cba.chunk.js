(this.webpackJsonpreactui=this.webpackJsonpreactui||[]).push([[0],{66:function(e,a,t){e.exports=t(78)},71:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),i=t.n(o),l=(t(71),t(123)),c=t(36),m=t(125),s=t(126),p=t(115),u=t(55),d=t.n(u),g=t(109),E=t(111),f=t(113),h=t(38),b=t(114),k=Object(g.a)((function(e){return{status:{danger:"orange"},root:{flexGrow:1,marginLeft:e.spacing(3)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),x=function(){var e=k(),a=r.a.useState(null),t=Object(c.a)(a,2),n=t[0],o=t[1],i=function(){o(null)};return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{className:"Appbar",position:"static"},r.a.createElement(f.a,null,r.a.createElement(b.a,{edge:"start",className:e.menuButton,"aria-label":"menu",onClick:function(e){o(e.currentTarget)}},r.a.createElement(d.a,null)),r.a.createElement(m.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i},r.a.createElement(s.a,{onClick:i},"Papular"),r.a.createElement(s.a,{onClick:i},"Sashimi"),r.a.createElement(s.a,{onClick:i},"Sushi"),r.a.createElement(s.a,{onClick:i},"Maki Roll"),r.a.createElement(s.a,{onClick:i},"KOTO Chef Special - Mki Roll"),r.a.createElement(s.a,{onClick:i},"Soup & Salad"),r.a.createElement(s.a,{onClick:i},"Appetizer"),r.a.createElement(s.a,{onClick:i},"Bento Box & Tempura"),r.a.createElement(s.a,{onClick:i},"Ramen&Udon"),r.a.createElement(s.a,{onClick:i},"Beverages")),r.a.createElement(h.a,{variant:"h6",className:e.title,align:"center"},r.a.createElement("b",null,"Welcome to Tina online order system")),r.a.createElement(p.a,{color:"inherit",onClick:"{Login}"},"Login"))))},C=t(56),y=t(117),v=t(121),S=t(120),w=t(57),O=t.n(w),j=t(58),D=t.n(j),B=t(37),I=t(116),L=t(118),N=t(119),M=t(122),T=t(127),A=t(3),G=Object(g.a)((function(e){return{root:{flexGrow:1,marginLeft:e.spacing(2),marginRight:e.spacing(2)},title:{fontSize:14},pos:{marginBottom:12},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:B.a[500]},purple:{color:e.palette.getContrastText(I.a[900]),backgroundColor:I.a[900]}}})),R=function(e){var a=G(),t=r.a.useState(!1),n=Object(c.a)(t,2),o=n[0],i=n[1],l=e.title,m=e.subtitle,s=e.data,p=e.price,u=e.description,d=e.imgSrc,g=e.ingredients;return r.a.createElement(y.a,{className:a.root},r.a.createElement(L.a,{avatar:r.a.createElement(T.a,{className:a.purple,"aria-label":"Special"},"SP"),action:r.a.createElement(b.a,{color:"primary","aria-label":"add one"},r.a.createElement(O.a,null)),title:l,subheader:s}),r.a.createElement(N.a,{className:a.media,image:d,title:l}),r.a.createElement(S.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},m,", ",p,"/set"),r.a.createElement(v.a,{disableSpacing:!0},r.a.createElement(b.a,{className:Object(A.a)(a.expand,Object(C.a)({},a.expandOpen,o)),onClick:function(){i(!o)},"aria-expanded":o,"aria-label":"Detail"},r.a.createElement(D.a,null)))),r.a.createElement(M.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(S.a,null,r.a.createElement(h.a,{paragraph:!0},"Ingredients:"),r.a.createElement(h.a,{paragraph:!0},u),r.a.createElement(h.a,{paragraph:!0},g))))},W=Object(g.a)((function(e){return{root:{flexGrow:1,marginLeft:e.spacing(2)}}})),z=function(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{container:!0,spacing:4,direction:"row",justify:"space-evenly",alignItems:"flex-start"},r.a.createElement(l.a,{item:!0,xs:12,sm:4},r.a.createElement(R,{title:"Mother's Day Special",subtitle:"Limited offer",data:Date,price:"120 CAD",description:"It's party combo for Mother's day. It's good for 4-5 people.",imgSrc:"https://imgur.com/HpkGimC.jpg",ingredients:"rice, fish, and so on....."})),r.a.createElement(l.a,{item:!0,xs:12,sm:4},r.a.createElement(R,{title:"Mother's Day Special -2",subtitle:"Limited offer",data:Date,price:"120 CAD",description:"It's party combo for Mother's day. It's good for 4-5 people.",imgSrc:"https://imgur.com/9gDlsAd.jpg",ingredients:"rice, fish, and so on....."})),r.a.createElement(l.a,{item:!0,xs:12,sm:4},r.a.createElement(R,{title:"",subtitle:"Limited offer",data:Date,price:"120 CAD",description:"It's party combo for Mother's day. It's good for 4-5 people.",ingredients:"rice, fish, and so on....."}))))},J=function(){return r.a.createElement(l.a,{container:!0,spacing:3,direction:"column"},r.a.createElement(l.a,{item:!0},r.a.createElement(x,null)),r.a.createElement(l.a,{container:!0,justify:"center"},r.a.createElement(l.a,{item:!0,xs:!1,sm:2}),r.a.createElement(l.a,{item:!0,xs:12,sm:8},r.a.createElement(z,null)),r.a.createElement(l.a,{item:!0,xs:!1,sm:2})))},P=t(61);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=t(124),K=t(60),U=Object(K.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#ffffff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000000"}},status:{danger:"orange"}});i.a.render(r.a.createElement(P.a,null,r.a.createElement(H.a,{theme:U},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.d8ba8cba.chunk.js.map