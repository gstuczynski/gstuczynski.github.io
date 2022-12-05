//const d = require('./static_assets/interesting_facts/1.js')
import ifArr from "./static_assets/interesting_facts/index.js";
const container = document.createElement("div");
container.className = "interesting-facts-loader-container";
container.innerHTML = `
<div class="spinner">
<span>Ładuję Scenę</span>
  <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>
</div>
<div class='interesting-fact'>
  <p class='dyk'>Witaj wędrowcze!</p>
  ${ifArr[Math.floor(Math.random() * ifArr.length)]}
</div>`;

document.body.appendChild(container);
window.addEventListener(
    "message",
    () => {
        removeFadeOut(container, 1000);
    },
    false
);

function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    el.style.transition = "opacity " + seconds + "s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode && el.parentNode.removeChild(el);
    }, speed);
}