(()=>{var e={598:()=>{function e(e){var t=!0,c=!1,o=null,n={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function l(){document.addEventListener("mousemove",i),document.addEventListener("mousedown",i),document.addEventListener("mouseup",i),document.addEventListener("pointermove",i),document.addEventListener("pointerdown",i),document.addEventListener("pointerup",i),document.addEventListener("touchmove",i),document.addEventListener("touchstart",i),document.addEventListener("touchend",i)}function i(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",i),document.removeEventListener("mousedown",i),document.removeEventListener("mouseup",i),document.removeEventListener("pointermove",i),document.removeEventListener("pointerdown",i),document.removeEventListener("pointerup",i),document.removeEventListener("touchmove",i),document.removeEventListener("touchstart",i),document.removeEventListener("touchend",i))}document.addEventListener("keydown",(function(c){c.metaKey||c.altKey||c.ctrlKey||(r(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(c&&(t=!0),l())}),!0),l(),e.addEventListener("focus",(function(e){var c,o,a;r(e.target)&&(t||(o=(c=e.target).type,"INPUT"===(a=c.tagName)&&n[o]&&!c.readOnly||"TEXTAREA"===a&&!c.readOnly||c.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(c=!0,window.clearTimeout(o),o=window.setTimeout((function(){c=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function c(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,c),r.exports}(()=>{"use strict";c(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body,bannerSlider:document.querySelector(".banner-slider"),marketing:document.querySelector(".marketing"),catalogSlider:document.querySelector(".hero-catalog__slider"),catalogFiltersTop:document.querySelectorAll(".catalog-filter__top"),hideFilters:document.querySelector(".hide-filters"),catalogColumns:document.querySelector(".catalog-columns__list"),catalogGridContent:document.querySelector(".catalog-grid__content"),catalogFilterItems:document.querySelectorAll(".catalog-filter__item"),catalogChoise:document.querySelector(".catalog-choice"),customSelect:document.querySelectorAll(".custom-select"),freeDeliveryBtn:document.querySelector(".free-delivery__btn"),colorSelectSelected:document.querySelector(".color-select__selected"),colorSelect:document.querySelector(".color-select"),sizeSelect:document.querySelector(".size-select")};if(new Swiper(e.bannerSlider,{loop:!0,slidesPerView:1,pagination:{el:".banner-pag",type:"bullets",clickable:!0}}),new Swiper(e.catalogSlider,{loop:!0,slidesPerView:1,navigation:{nextEl:".hero-next-btn",prevEl:".hero-prev-btn"}}),e.marketing){let t=0;const c=[{title:"Title of product 1",where:"Kyiv, Ukraine"},{title:"Title of product 2",where:"Lviv, Ukraine"},{title:"Title of product 3",where:"Rome, Italy"}],o=()=>{e.marketing.classList.remove("marketing--visible")},n=()=>{e.marketing.classList.remove("marketing--visible"),setTimeout((()=>{const o=`${c[t].title}`,n=`15 minutes ago ${c[t].where}`;e.marketing.querySelector(".marketing__title").textContent=o,e.marketing.querySelector(".marketing__when-from").textContent=n,e.marketing.classList.add("marketing--visible")}),1e3),t++,t===c.length&&(t=0)};n(),setInterval(n,1e4),e.marketing.addEventListener("click",(e=>{e.target.classList.contains("marketing__close")&&o()}))}if(document.querySelector(".catalog")){e.catalogFiltersTop.forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.closest(".catalog-filter").classList.toggle("catalog-filter--open")}))})),e.hideFilters.addEventListener("click",(()=>{e.catalogFiltersTop.forEach((e=>{console.log(e),e.closest(".catalog-filter").classList.remove("catalog-filter--open")}))}));const t=e=>`    <button class="btn-reset catalog-choice__item" data-choice-text="${e}">\n    ${e}\n    <svg aria-hidden="true">\n      <use xlink:href="img/sprite.svg#choice-close"></use>\n    </svg>\n  </button>`;e.catalogFilterItems.forEach((c=>{c.querySelector("input").addEventListener("change",(o=>{if(c.querySelector("input").checked){c.querySelector(".custom-checkbox").classList.add("custom-checkbox--active");let o=c.querySelector(".custom-checkbox__text").textContent;e.catalogChoise.insertAdjacentHTML("afterbegin",t(o))}else{c.querySelector(".custom-checkbox").classList.remove("custom-checkbox--active");let e=c.querySelector(".custom-checkbox").dataset.text;document.querySelector(`[data-choice-text='${e}']`).remove()}document.querySelectorAll(".custom-checkbox--active").length>0?e.catalogChoise.style.display="block":e.catalogChoise.style.display="none"}))})),e.catalogChoise.addEventListener("click",(t=>{if(t.target.classList.contains("catalog-choice__item")){t.target.remove();let e=t.target.textContent.trim();console.log(e),document.querySelector(`[data-text='${e}']`).querySelector("input").checked=!1,document.querySelector(`[data-text='${e}']`).classList.remove("custom-checkbox--active")}t.target.classList.contains("catalog-choice__clear")&&(Array.from(t.currentTarget.children).forEach((t=>{t.classList.contains("catalog-choice__clear")||t.remove(),e.catalogFilterItems.forEach((e=>{e.querySelector("input").checked=!1,e.querySelector(".custom-checkbox").classList.remove("custom-checkbox--active")}))})),t.currentTarget.style.display="none"),1===t.currentTarget.children.length&&(t.currentTarget.style.display="none")}))}document.querySelector(".catalog")&&(vars.freeDeliveryBtn.addEventListener("click",(e=>{e.currentTarget.closest(".free-delivery").style.display="none"})),e.catalogColumns.addEventListener("click",(t=>{if(t.target.classList.contains(".catalog-columns__btn")||t.target.closest(".catalog-columns__item")){let c=t.target.dataset.columns;document.querySelectorAll(".catalog-columns__btn").forEach((e=>{e.classList.remove("catalog-columns__btn--current")})),t.target.classList.add("catalog-columns__btn--current"),e.catalogGridContent.dataset.gridColumns=c}})),e.customSelect.forEach((e=>{e.addEventListener("click",(e=>{if(e.currentTarget.classList.toggle("custom-select--open"),e.target.classList.contains("custom-select__item")){let t=e.target.textContent;e.currentTarget.querySelector(".custom-select__top").textContent=t}})),e.addEventListener("focus",(e=>{e.currentTarget.classList.add("custom-select--open")})),e.addEventListener("blur",(e=>{e.currentTarget.classList.remove("custom-select--open")}))}))),e.colorSelect.addEventListener("click",(e=>{if(e.target.classList.contains("color-select__btn")){document.querySelectorAll(".color-select__btn").forEach((e=>e.classList.remove("color-select__btn--active")));let t=e.target.dataset.color;e.currentTarget.querySelector(".color-select__selected span").textContent=t,e.target.classList.add("color-select__btn--active")}}));let t="";e.sizeSelect.addEventListener("click",(e=>{if(e.target.classList.contains("size-select__btn")){if(e.currentTarget.querySelector(".size-select__clear").style.display="inline-flex",e.target.classList.toggle("size-select__btn--active"),e.target.classList.contains("size-select__btn--active")){let c=e.target.textContent;t+=c+", "}else{let c=e.target.textContent+", ";t=t.replace(c,"")}e.currentTarget.querySelector(".size-select__selected span").textContent=t,t||(e.currentTarget.querySelector(".size-select__selected span").textContent="Select a size")}e.target.classList.contains("size-select__clear")&&(e.currentTarget.querySelector(".size-select__selected span").textContent="Select a size",document.querySelectorAll(".size-select__btn").forEach((e=>e.classList.remove("size-select__btn--active"))),e.target.style.display="none")}))})()})();