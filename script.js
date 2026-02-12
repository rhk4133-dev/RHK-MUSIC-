const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const currentTimeEl = document.getElementById("current");
const durationEl = document.getElementById("duration");
const album = document.getElementById("album");
const songs = document.querySelectorAll(".song");
const title = document.getElementById("title");

let isPlaying = false;

playBtn.addEventListener("click", togglePlay);

function togglePlay() {
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
}

songs.forEach(song => {
    song.addEventListener("click", () => {
        document.querySelector(".song.active").classList.remove("active");
        song.classList.add("active");

        audio.src = song.dataset.src;
        title.innerText = song.innerText;

        audio.play();
        isPlaying = true;
        playBtn.innerText = "⏸";
        album.classList.add("playing");
    });
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
    audio.currentTime = (clickX / width) * audio.duration;
});

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return minutes + ":" + seconds;
}