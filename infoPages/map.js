const trailsArr = [
  "mok-rysy",
  "mok-roztoka",
  "mok-miekusz",
  "mok-pw",
  "mok-szpiglas-5",
  "mok-5"
];

const pins = [
  "schroniskoroztoka2",
  "polana_wlosienica",
  "zoltyszlak",
  "szpiglas_przelecz",
  "morskie_oko"
];

const mapContainer = document.getElementsByClassName("map-container")[0];
const mainContainer = document.getElementsByClassName("main")[0];


function Scroll() {
  window.innerWidth < 600 && window.scroll(400,0); 
}
window.onload = Scroll

trailsArr.forEach(t => {
  const btn = document.getElementsByClassName(`btn ${t}`)[0];

  btn.addEventListener("click", () => {
    const trail = document.getElementsByClassName(`trail ${t}`)[0].style;
    if (!trail.display || trail.display === "none") {
      trail.display = "initial";
    } else {
      trail.display = "none";
    }
  });
});


pins.forEach(p => {
  const pinElement = document.createElement("button");
  pinElement.className = `pin ${p}`;
  mapContainer.appendChild(pinElement);
  pinElement.addEventListener("click", () => {
    window.open(`${window.location.origin}${window.parent.location.pathname}?${p}`, "_parent");
  });
});

