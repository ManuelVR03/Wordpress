(()=>{"use strict";var t,e={4773:(t,e,r)=>{r(1609);var a=r(6087),n=r(3554);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}var o=function(t){var e,r,a=t.wrapper,i=t._autoplay,o=t._muted,s=a.getAttribute("data-url"),l=(a.getAttribute("data-option"),"true"===a.getAttribute("data-controls")),c="true"===a.getAttribute("data-loop"),d=o||"true"===a.getAttribute("data-muted"),u=i||"true"===a.getAttribute("data-playing"),m="true"===a.getAttribute("data-overlay"),y=a.getAttribute("data-light"),p="true"===a.getAttribute("data-customPlayIcon"),b=a.getAttribute("data-playicon"),f=a.getAttribute("data-customPlayIconType"),v=a.getAttribute("data-customPlayIconLib"),g=a.getAttribute("data-download");return e=!(!0!==m||!y)&&y,r=1==m&&1==p&&"image"==f?React.createElement("img",{src:b}):1==m&&1==p&&"icon"==f?React.createElement("i",{class:v}):null,React.createElement(React.Fragment,null,React.createElement(n.A,{className:"eb-react-player",width:"100%",height:"100%",url:s,controls:l,loop:c,muted:d,playing:u,light:e,playIcon:r,volume:.5,config:{file:{attributes:{controlsList:"false"===g?"nodownload":""}}}}))};document.addEventListener("DOMContentLoaded",(function(t){var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return i(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}(document.getElementsByClassName("eb-advanced-video-wrapper"));try{var n,s,l,c,d,u,m,y=function(){var t=e.value,r=t.getElementsByClassName("eb-player-option")[0],i="true"===r.getAttribute("data-overlay"),y=(r.getAttribute("data-id"),r.getAttribute("data-option"));if(i&&r.addEventListener("click",(function(t){(0,a.render)(React.createElement(o,{wrapper:r,_autoplay:!0,_muted:!1}),r)})),(0,a.render)(React.createElement(o,{wrapper:r}),r),"eb-sticky"===y){(n=document.querySelector(".eb-player-option.eb-sticky")).innerHeight,s=document.querySelector(".eb-react-player").offsetHeight,l=r.closest(".eb-sticky").closest(".wp-block-essential-blocks-advanced-video").offsetTop,c=r.querySelector(".eb-sticky-video-close"),(d=document.createElement("span")).innerHTML="&times;",d.setAttribute("class","eb-sticky-video-close");var p="stuck-out",b=0,f=r.getAttribute("data-stickyVisibility"),v=r.getAttribute("data-stickyVisibilityTAB"),g=r.getAttribute("data-stickyVisibilityMOB");window.matchMedia("(min-width: 1025px)").matches&&"hidden"!=f&&document.addEventListener("scroll",(function(){var t=s+l+200,e=s+l+320,r=window.pageYOffset;r<=t?n.classList.remove(p):window.scrollY>t?window.scrollY>e?(n.classList.remove("stuck-out"),n.classList.add("stuck"),null==c&&n.prepend(d),d.style.display="inline",d.addEventListener("click",(function(){n.classList.remove("eb-sticky")}))):(r<b&&n.classList.contains("stuck")&&(n.classList.remove("stuck"),n.classList.add(p)),b=r):n.classList.remove("stuck-out")})),window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches&&"hidden"!=v&&document.addEventListener("scroll",(function(){var t=s+l+200,e=s+l+320,r=window.pageYOffset;r<=t?n.classList.remove(p):window.scrollY>t?window.scrollY>e?(n.classList.remove("stuck-out"),n.classList.add("stuck"),null==c&&n.prepend(d),d.style.display="inline",d.addEventListener("click",(function(){n.classList.remove("eb-sticky")}))):(r<b&&n.classList.contains("stuck")&&(n.classList.remove("stuck"),n.classList.add(p)),b=r):n.classList.remove("stuck-out")})),window.matchMedia("(max-width: 767px)").matches&&"hidden"!=g&&document.addEventListener("scroll",(function(){var t=s+l+200,e=s+l+320,r=window.pageYOffset;r<=t?n.classList.remove(p):window.scrollY>t?window.scrollY>e?(n.classList.remove("stuck-out"),n.classList.add("stuck"),null==c&&n.prepend(d),d.style.display="inline",d.addEventListener("click",(function(){n.classList.remove("eb-sticky")}))):(r<b&&n.classList.contains("stuck")&&(n.classList.remove("stuck"),n.classList.add(p)),b=r):n.classList.remove("stuck-out")}))}if(t.classList.contains("lightbox")){var w=t.getAttribute("data-id"),h=document.querySelector('[data-id="'.concat(w,'"]')),k="#eb-modal-"+w,L="#myBtn-"+w;h.querySelector(k),u=h.querySelector(L),m=h.getElementsByClassName("eb-modal-close")[0],u.onclick=function(){var t="#eb-modal-"+this.id.substring(6),e=document.querySelector(t),n=e.getElementsByClassName("lightbox")[0].getAttribute("data-autoplay");e.style.display="block","true"===n&&(0,a.render)(React.createElement(o,{wrapper:r,_autoplay:!0,_muted:!1}),r)},m.onclick=function(){var t="#eb-modal-"+this.id.substring(6);document.querySelector(t).style.display="none",(0,a.render)(React.createElement(o,{wrapper:r,_autoplay:!1}),r)},window.onclick=function(t){t.target.classList.contains("eb-modal-player")&&(document.getElementById(t.target.id).style.display="none",(0,a.render)(React.createElement(o,{wrapper:r,_autoplay:!1}),r))}}};for(r.s();!(e=r.n()).done;)y()}catch(t){r.e(t)}finally{r.f()}}))},1609:t=>{t.exports=window.React},6087:t=>{t.exports=window.wp.element}},r={};function a(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,t=[],a.O=(e,r,n,i)=>{if(!r){var o=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],i=t[d][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((t=>a.O[t](r[l])))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,n,i]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.j=695,(()=>{var t={695:0};a.O.j=e=>0===t[e];var e=(e,r)=>{var n,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((e=>0!==t[e]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var d=l(a)}for(e&&e(r);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},r=self.webpackChunkessential_blocks=self.webpackChunkessential_blocks||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),a.nc=void 0;var n=a.O(void 0,[916],(()=>a(4773)));n=a.O(n)})();