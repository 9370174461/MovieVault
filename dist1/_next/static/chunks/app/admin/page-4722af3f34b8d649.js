(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{8223:function(e,t,r){Promise.resolve().then(r.bind(r,2726))},2726:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7437),c=r(1396),i=r.n(c),o=r(2265),a=r(4086),s=r(7499);r(1251);var l=r(6820);function d(){let[e,t]=(0,o.useState)([]),r=(0,a.hJ)(s.RZ,"movies");return(0,o.useEffect)(()=>{(async()=>{try{let e=(await (0,a.PL)(r)).docs.map(e=>({id:e.id,...e.data()}));t(e),console.log(e)}catch(e){console.error(e)}})()},[]),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h2",{className:"text-center p-3",children:" Movies"}),e.map(e=>(0,n.jsx)("div",{className:"my-3 p-3",children:(0,n.jsx)(i(),{href:"admin/".concat(e.id),children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"card bs-tertiary-color-rgb",style:{maxWidth:"100%",backgroundColor:"rgb(63, 61, 61)",color:"white"},children:(0,n.jsxs)("div",{className:"row g-0",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)("div",{style:{height:"100%",width:"100%",overflow:"hidden",objectFit:"cover"},children:(0,n.jsx)("img",{src:e.fileURL,style:{height:"60vh",width:"100%",objectFit:"cover"},className:" rounded float-left",alt:"..."})})}),(0,n.jsx)("div",{className:"col-md-8",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("h5",{className:"card-title d-flex align-items-center gap-3",children:[e.title," ",(0,n.jsx)(l.KQP,{size:25,color:"white"}),e.rating]}),(0,n.jsx)("h5",{children:"Overview:"}),(0,n.jsx)("p",{className:"card-text",children:e.overview})]})})]})})})})},e.id))]})}},7499:function(e,t,r){"use strict";r.d(t,{I8:function(){return s},RZ:function(){return l}});var n=r(994),c=r(3085),i=r(4086),o=r(9584);let a=(0,n.ZF)({apiKey:"AIzaSyDfOFSro4cicscw5P8ebvdaGvuiiO_1j2M",authDomain:"top-movie-76e67.firebaseapp.com",projectId:"top-movie-76e67",storageBucket:"top-movie-76e67.appspot.com",messagingSenderId:"291233456576",appId:"1:291233456576:web:e6e7bada94404323ce6825"}),s=(0,c.v0)(a),l=(0,i.ad)(a);(0,o.cF)(a)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(2265),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(c),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var c in t=arguments[r])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,n=Object.getOwnPropertySymbols(e);c<n.length;c++)0>t.indexOf(n[c])&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(r[n[c]]=e[n[c]]);return r};function s(e){return function(t){return n.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,o({key:r},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var r,c=e.attr,i=e.size,s=e.title,l=a(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,l,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(c)}}},function(e){e.O(0,[115,358,220,621,89,371,971,938,744],function(){return e(e.s=8223)}),_N_E=e.O()}]);