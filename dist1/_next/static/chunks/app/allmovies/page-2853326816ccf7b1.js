(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{9643:function(e,t,r){Promise.resolve().then(r.bind(r,1505))},1505:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(1396),c=r.n(s),a=r(2265);r(1251);var o=r(6820);t.default=function(){let[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>((async()=>{try{fetch("https://api.themoviedb.org/3/discover/movie?api_key=79bd47a591062f4695f664d8ff6a67d7").then(e=>e.json()).then(e=>t(e.results))}catch(e){setError("Error fetching data")}})(),()=>{}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-center p-3",children:" Movies"}),e.map(e=>(0,n.jsx)("div",{className:"container my-3 p-3 d-flex",children:(0,n.jsx)("div",{className:"card mb-3 bs-tertiary-color-rgb ",style:{maxwidth:" 340px",backgroundColor:"rgb(63, 61, 61)",color:"white"},children:(0,n.jsx)(c(),{href:"/topmovie/".concat(e.id),children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),style:{height:"60vh",width:"100%"},className:"rounded float-left",alt:"..."})}),(0,n.jsx)("div",{className:"col-md-9 ",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("h5",{className:"card-title grid gap-3",children:[e.title," ",(0,n.jsx)(o.KQP,{size:25,color:"white"}),e.vote_average]}),(0,n.jsx)("h5",{children:"Overview:"}),(0,n.jsxs)("p",{className:"card-text",children:[" ",e.overview]})]})})]})})})},e.id))]})}},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(s),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function i(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var r,s=e.attr,c=e.size,i=e.title,l=o(e,["attr","size","title"]),d=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==c?n.createElement(c.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[115,621,971,938,744],function(){return e(e.s=9643)}),_N_E=e.O()}]);