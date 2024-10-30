(()=>{"use strict";var e,t={78:(e,t,r)=>{var a=r(8168),n=r(4467),l=(r(1609),r(6087)),o=r(4589);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}window.addEventListener("DOMContentLoaded",(function(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw l}}}}(document.getElementsByClassName("eb-slider-wrapper"));try{var n=function(){var e,r=t.value,n=r.getAttribute("data-version");if(null==n||"v1"==n){var i=function(e){var t=e.className,r=e.style,a=e.onClick,n=e.arrowNextIcon;return React.createElement("div",{className:t,style:c(c({},r),{},{display:"block"}),onClick:a},React.createElement("i",{"aria-hidden":"true",className:n}))},s=function(e){var t=e.className,r=e.style,a=e.onClick,n=e.arrowPrevIcon;return React.createElement("div",{className:t,style:c(c({},r),{},{display:"block"}),onClick:a},React.createElement("i",{"aria-hidden":"true",className:n}))},u=JSON.parse(r.getAttribute("data-settings")),d=JSON.parse(r.getAttribute("data-images")),b=r.getAttribute("data-sliderContentType"),m=r.getAttribute("data-sliderType"),f=r.getAttribute("data-textAlign"),g=r.getAttribute("data-arrowNextIcon"),p=r.getAttribute("data-arrowPrevIcon"),v=r.getAttribute("data-titleTag")||"h2",y=r.getAttribute("data-contentTag")||"p",h=(0,l.createRef)();u.nextArrow=React.createElement(i,{arrowNextIcon:g}),u.prevArrow=React.createElement(s,{arrowPrevIcon:p});var w="content"===m?"eb-slider-type-content":"eb-slider-type-image";(0,l.render)(React.createElement(o.A,(0,a.A)({ref:h},u,{key:"".concat(u.autoplay,"-").concat(u.adaptiveHeight),className:w}),d.map((function(e){return React.createElement("div",{className:"eb-slider-item ".concat(b)},"image"===m&&e.buttonUrl&&e.isValidUrl&&React.createElement(React.Fragment,null,React.createElement("a",{href:e.buttonUrl&&e.isValidUrl?e.buttonUrl:"#",target:e.openNewTab?"_blank":"_self",rel:"noopener"},React.createElement("img",{className:"eb-slider-image",src:e.url,alt:e.alt?e.alt:e.title}))),"image"===m&&!e.buttonUrl&&!e.isValidUrlf&&React.createElement("img",{className:"eb-slider-image",src:e.url,alt:e.alt?e.alt:e.title}),"content"===m&&React.createElement(React.Fragment,null,React.createElement("img",{className:"eb-slider-image",src:e.url,alt:e.alt?e.alt:e.title}),React.createElement("div",{className:"eb-slider-content align-".concat(f)},e.title&&e.title.length>0&&React.createElement(React.Fragment,null,React.createElement(v,{className:"eb-slider-title",dangerouslySetInnerHTML:{__html:e.title}})),e.subtitle&&e.subtitle.length>0&&React.createElement(y,{className:"eb-slider-subtitle",dangerouslySetInnerHTML:{__html:e.subtitle}}),React.createElement("div",{className:"eb-slider-button-wrapper"},e.showButton&&e.buttonText&&e.buttonText.length>0&&React.createElement("a",{href:e.buttonUrl&&e.isValidUrl?e.buttonUrl:"#",className:"eb-slider-button",target:e.openNewTab?"_blank":"_self",rel:"noopener",dangerouslySetInnerHTML:{__html:e.buttonText}}),e.showSecondButton&&e.secondButtonText&&e.secondButtonText.length>0&&React.createElement("a",{href:e.secondButtonUrl&&e.isValidUrl?e.secondButtonUrl:"#",className:"eb-slider-second-button",target:e.secondButtonOpenNewTab?"_blank":"_self",rel:"noopener",dangerouslySetInnerHTML:{__html:e.secondButtonText}})))))}))),r)}if("v2"===n){var O=r.getAttribute("data-blockid").replaceAll("-","_"),A=window["".concat(O)],E=r.getAttribute("data-arrowNextIcon"),N=r.getAttribute("data-arrowPrevIcon"),R=r.getAttribute("data-lightbox");A.prevArrow='<div class="slick-prev"><i aria-hidden="true" class="'.concat(N,'"></i></div>'),A.nextArrow='<div class="slick-next"><i aria-hidden="true" class="'.concat(E,'"></i></div>');var x=r.querySelector(".eb-slider-init");(e=jQuery)(x).slick(A),"true"==R&&e(x).slickLightbox({src:"data-src",itemSelector:".eb-slider-item",navigateByKeyboard:!0,imageMaxHeight:.7})}};for(r.s();!(t=r.n()).done;)n()}catch(e){r.e(e)}finally{r.f()}}))},1609:e=>{e.exports=window.React},6087:e=>{e.exports=window.wp.element}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=t,e=[],a.O=(t,r,n,l)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],l=e[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,n,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=638,(()=>{var e={638:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,o=r[0],i=r[1],c=r[2],s=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var u=c(a)}for(t&&t(r);s<o.length;s++)l=o[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},r=self.webpackChunkessential_blocks=self.webpackChunkessential_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var n=a.O(void 0,[935,916],(()=>a(78)));n=a.O(n)})();