(()=>{"use strict";(()=>{const e=document.querySelectorAll(".fancyboxModal"),t=document.querySelector(".modal-overlay"),l=document.getElementById("callback"),o=document.querySelector(".modal-close"),n=e=>{l.style.display=e,t.style.display=e};e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),n("block")}))})),o.addEventListener("click",(()=>{n("none")})),t.addEventListener("click",(()=>{n("none")}))})(),(()=>{document.querySelector(".top-slider");const e=document.querySelectorAll(".item");let t=0,l=[];l.push("url(images/slide1.jpg)"),l.push("url(images/slide2.jpg)"),l.push("url(images/slide3.jpg)"),setInterval((()=>{e[0].style.backgroundImage=l[t],t++,t===e.length&&(t=0)}),3e3)})(),document.querySelector(".accordeon").querySelectorAll(".element").forEach((e=>{const t=e.querySelector(".element-content");e.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?t.style.display="block":t.style.display="none"}))})),(()=>{const e=document.querySelector(".up");e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{window.scrollY>300?e.classList.remove("visible"):e.classList.add("visible")}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelector(".feedback");document.querySelectorAll("input").forEach((e=>{e.setAttribute("required",!0)})),e.forEach((e=>{e.addEventListener("input",(e=>{const l=e.target;"Ваше имя"===l.placeholder?l.value=l.value.replace(/[^А-Яа-яЁё\ ]/,""):"Телефон*"===l.placeholder&&(function(e,t="+7 (___) ___-__-__"){const l=document.querySelectorAll(e);function o(e){const l=e.keyCode,o=t,n=o.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let c=0,s=o.replace(/[_\d]/g,(function(e){return c<r.length?r.charAt(c++)||n.charAt(c):e}));c=s.indexOf("_"),-1!==c&&(s=s.slice(0,c));let a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||l>47&&l<58)&&(this.value=s),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of l)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}(".tel"),18===l.value.length&&(l.style.border="2px solid green",t.disabled=!1))}))}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelector(".feedback");e.forEach((e=>{e.addEventListener("focusout",(e=>{const l=e.target;"Ваше имя"===l.placeholder?(l.value=l.value.trim().replace(/[^\s\da-zа-я]/gi,"").replace(/\s+/g," "),""!==l.value&&(l.value=l.value.split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")),l.value.search(/[^A-Za-z]/)&&(l.value="")):"Телефон*"===l.placeholder&&18!==l.value.length&&(l.style.border="2px solid red",alert("Введите корректный номер телефона"),t.disabled=!0)}))}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.color="red";const l=document.querySelectorAll("input"),o=document.getElementById("callback"),n=document.querySelector(".modal-overlay");e.forEach((e=>{e.addEventListener("submit",(r=>{r.preventDefault(),e.appendChild(t),t.textContent="Загрузка...";const c=new FormData(e);let s={};c.forEach(((e,t)=>{s[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(s).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.textContent="Спасибо...Мы скоро с вами свяжемся",l.forEach((e=>{e.value=""})),setTimeout((()=>{t.textContent=""}),2e3),setTimeout((()=>{n.style.display="none",o.style.display="none"}),2e3)})).catch((e=>{t.textContent="Что то пошло не так...",console.error(e)}))}))}))})()})();