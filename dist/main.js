(()=>{"use strict";const e=new class{constructor({main:e,wrap:t,next:o,prev:n,infinity:s=!1,position:i=0,slidesToShow:l=3,responsive:r}){e||t||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(o),this.prev=document.querySelector(n),this.slidesToShow=l,this.options={position:i,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n    .glo-slider {\n      overflow: hidden !important;\n    };\n    .glo-slider__wrap {\n      display: flex !important;\n      transition: transform .5s !important;\n      will-change: transform !important;\n    }\n    .glo-slider__item {\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      flex: 0 0 ${this.options.widthSlide}% !important;\n      margin: auto 0 !important;\n    }\n    `,this.wrap.style.display="flex",document.head.append(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next);const e=document.createElement("style");e.textContent="\n    .glo-slider__prev,\n    .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n    }\n    .glo-slider__prev {\n        border-right-color: #19b5fe;\n    }\n    .glo-slider__next {\n        border-left-color: #19b5fe;\n    }\n    .glo-slider__prev:hover,\n    .glo-slider__next:hover,\n    .glo-slider__prev:focus,\n    .glo-slider__next:focus {\n        background: transparent;\n        outline: none;\n    }\n    ",document.head.append(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),o=Math.max(...t),n=()=>{this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()},s=()=>{const s=document.documentElement.clientWidth;if(s<o)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slideToShow,n());else this.slidesToShow=e,n()};s(),window.addEventListener("resize",s)}}({main:".services-elements",wrap:".services-carousel",prev:".arrow-left",next:".arrow-right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:992,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]});(()=>{const e=document.querySelectorAll(".fancyboxModal"),t=document.querySelector(".modal-overlay"),o=document.getElementById("callback"),n=document.querySelector(".modal-close"),s=e=>{o.style.display=e,t.style.display=e};e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),s("block")}))})),n.addEventListener("click",(()=>{s("none")})),t.addEventListener("click",(()=>{s("none")}))})(),(()=>{document.querySelector(".top-slider");const e=document.querySelectorAll(".table"),t=document.querySelectorAll(".item");let o=0;setInterval((()=>{e[o].classList.remove("active"),t[o].style.display="none",o++,o>=e.length&&(o=0),t[o].style.display="block",e[o].classList.add("active")}),3e3)})(),e.init(),document.querySelector(".accordeon").querySelectorAll(".element").forEach((e=>{const t=e.querySelector(".element-content");e.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?t.style.display="block":t.style.display="none"}))})),(()=>{const e=document.querySelector(".up");e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{window.scrollY>300?e.classList.remove("visible"):e.classList.add("visible")}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelector(".feedback");document.querySelectorAll("input").forEach((e=>{e.setAttribute("required",!0)})),e.forEach((e=>{e.addEventListener("input",(e=>{const o=e.target;"Ваше имя"===o.placeholder?o.value=o.value.replace(/[^А-Яа-яЁё\ ]/,""):"Телефон*"===o.placeholder&&(function(e,t="+7 (___) ___-__-__"){const o=document.querySelectorAll(e);function n(e){const o=e.keyCode,n=t,s=n.replace(/\D/g,""),i=this.value.replace(/\D/g,"");let l=0,r=n.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||s.charAt(l):e}));l=r.indexOf("_"),-1!==l&&(r=r.slice(0,l));let a=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=r),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of o)e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}(".tel"),18===o.value.length&&(o.style.border="2px solid green",t.disabled=!1))}))}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelector(".feedback");e.forEach((e=>{e.addEventListener("focusout",(e=>{const o=e.target;"Ваше имя"===o.placeholder?(o.value=o.value.trim().replace(/[^\s\da-zа-я]/gi,"").replace(/\s+/g," "),""!==o.value&&(o.value=o.value.split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")),o.value.search(/[^A-Za-z]/)&&(o.value="")):"Телефон*"===o.placeholder&&18!==o.value.length&&(o.style.border="2px solid red",alert("Введите корректный номер телефона"),t.disabled=!0)}))}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.color="red";const o=document.querySelectorAll("input"),n=document.getElementById("callback"),s=document.querySelector(".modal-overlay");e.forEach((e=>{e.addEventListener("submit",(i=>{i.preventDefault(),e.appendChild(t),t.textContent="Загрузка...";const l=new FormData(e);let r={};l.forEach(((e,t)=>{r[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(r).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо...Мы скоро с вами свяжемся",o.forEach((e=>{e.value=""})),setTimeout((()=>{t.textContent=""}),2e3),setTimeout((()=>{s.style.display="none",n.style.display="none"}),2e3)})).catch((e=>{t.textContent="Что то пошло не так...",console.error(e)}))}))}))})()})();