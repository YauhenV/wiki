/* =========================== Mobile Nav =========================== */
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click",  () => {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

/* =========================== Video =========================== */
const videoButton = document.querySelector("#story__video-button");
const videoIcon = document.querySelector("#story__video-button-icon");
const videoFile = document.querySelector("#video-story");
const videoOverlay = document.querySelector("#story__video-overlay");



videoButton.addEventListener("click", () => {

  const toggleOverlay = (event) => {
    if (event.type === "mouseleave") {
      videoOverlay.classList.add("hidden");
    } else {
      videoOverlay.classList.remove("hidden");
    };
  };

  if (videoFile.paused) {
    videoFile.play();
    videoIcon.src = "./img/story/pause-white.svg";
    videoOverlay.onmouseleave = toggleOverlay; 
    videoOverlay.onmouseenter  = toggleOverlay; 

  } else {
    videoFile.pause();
    videoIcon.src = "./img/story/play-white.svg";
    videoOverlay.onmouseleave = null; 
    videoOverlay.onmouseenter  = null; 
  }
})

