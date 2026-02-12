const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const currentTimeEl = document.getElementById("current");
const durationEl = document.getElementById("duration");
const album = document.getElementById("album");

let isPlaying = false;

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶";
        album.classList.remove("playing");
    } else {
        audio.play();
        playBtn.innerText = "⏸";
        album.classList.add("playing");
    }
    isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audio;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";

    currentTimeEl.innerText = formatTime(currentTime);
    durationEl.innerText = formatTime(duration);
});

progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return minutes + ":" + seconds;
}