(()=>{"use strict";const e=()=>{const e=document.querySelector(".main"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p");t.className="item",n.className="item",a.className="item",d.innerHTML="<h2>Hey there!</h2>Welcome to our amazing restaurant!! We cook \n        lovely food which you order at tables and our wonderful staff\n        bring it right to you!! The chefs are just amazing and we're \n        so sure you'll love the food THAT much that you won't be able\n        to stop returning",c.innerHTML="<h2>Opening Times:</h2>Mon: 12:00 - 22:00<br/>Tue: 12:00 - 22:00<br/>Wed: 12:00 - 22:00<br/>Thur: 12:00 - 22:00<br/>Fri: 11:00 - 23:00<br/>Sat: 11:00 - 23:00<br/>Sun: 12:00 - 22:00",l.innerHTML="<h2>Offers</h2>Free birthday cake with every birthday celebration!",t.appendChild(d),n.appendChild(c),a.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(a)},t=t=>{const a=t.target.dataset.page;document.querySelector(".main").innerHTML="",n(),t.target.classList.add("selected"),"0"===a&&e(),"1"===a&&(()=>{const e=document.querySelector(".main"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p");t.className="item",n.className="item",a.className="item",d.textContent="Breakfast Menu",c.textContent="Lunch Menu",l.textContent="Dinner Menu",t.appendChild(d),n.appendChild(c),a.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(a)})(),"2"===a&&(()=>{const e=document.querySelector(".main"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p");t.className="item",n.className="item",a.className="item",d.textContent="Phone",c.textContent="Map",l.textContent="Address",t.appendChild(d),n.appendChild(c),a.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(a)})()},n=()=>{Array.from(document.querySelectorAll("div.nav-button > h2")).forEach((e=>e.classList.remove("selected")))},a=document.querySelector("#content");(e=>{const n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("h2"),m=document.createElement("h2"),o=document.createElement("h2"),r=document.createElement("div"),i=document.createElement("h1");l.classList.add("selected"),r.className="header",n.className="nav",a.className="nav-button",d.className="nav-button",c.className="nav-button",l.dataset.page=0,m.dataset.page=1,o.dataset.page=2,i.textContent="My Restaurant",l.textContent="Home",m.textContent="Menu",o.textContent="Contact",r.appendChild(i),a.appendChild(l),d.appendChild(m),c.appendChild(o),n.appendChild(a),n.appendChild(d),n.appendChild(c),e.appendChild(r),e.appendChild(n),Array.from(document.querySelectorAll(".nav-button")).forEach((e=>e.addEventListener("click",t)))})(a);const d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("span");d.className="main",c.className="footer",l.textContent="Design by Neil Douglas",a.appendChild(d),c.appendChild(l),a.appendChild(c),e()})();