(()=>{var e={598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,s;r(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body,bannerSlider:document.querySelector(".banner-slider"),marketing:document.querySelector(".marketing"),catalogSlider:document.querySelector(".hero-catalog__slider"),catalogFiltersTop:document.querySelectorAll(".catalog-filter__top"),hideFilters:document.querySelector(".hide-filters")};if(console.log((()=>{const t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})()),new Swiper(e.bannerSlider,{loop:!0,slidesPerView:1,pagination:{el:".banner-pag",type:"bullets",clickable:!0}}),new Swiper(e.catalogSlider,{loop:!0,slidesPerView:1}),e.marketing){let t=0;const n=[{title:"Title of product 1",where:"Kyiv, Ukraine"},{title:"Title of product 2",where:"Lviv, Ukraine"},{title:"Title of product 3",where:"Rome, Italy"}],o=()=>{e.marketing.classList.remove("marketing--visible")},i=()=>{e.marketing.classList.remove("marketing--visible"),setTimeout((()=>{const o=`${n[t].title}`,i=`15 minutes ago ${n[t].where}`;e.marketing.querySelector(".marketing__title").textContent=o,e.marketing.querySelector(".marketing__when-from").textContent=i,e.marketing.classList.add("marketing--visible")}),1e3),t++,t===n.length&&(t=0)};i(),setInterval(i,1e4),e.marketing.addEventListener("click",(e=>{e.target.classList.contains("marketing__close")&&o()}))}e.catalogFiltersTop.forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.closest(".catalog-filter").classList.toggle("catalog-filter--open")}))})),e.hideFilters.addEventListener("click",(()=>{e.catalogFiltersTop.forEach((e=>{console.log(e),e.closest(".catalog-filter").classList.remove("catalog-filter--open")}))}))})()})();