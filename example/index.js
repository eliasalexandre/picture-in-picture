const video = document.querySelector("video#video");
const sliderProgress = document.querySelector("#slider > #progress");
const playerButton = document.querySelector("button#video-state");
const lessButton = document.querySelector("button#less");
const moreButton = document.querySelector("button#more");

function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

document.addEventListener("load", () => {
  video.controls = false;
});
video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime / video.duration;
  const timeInPercent = currentTime * 100 + "%";

  sliderProgress.style.width = timeInPercent;
});

playerButton.addEventListener("click", togglePlayPause);
moreButton.addEventListener("click", () => {
  video.currentTime += 10;
});
lessButton.addEventListener("click", () => {
  if (video.currentTime <= 0) return;
  video.currentTime -= 10;
});
