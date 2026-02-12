const songs = [
    { name: "Song 1", file: "song1.mp3" },
    { name: "Song 2", file: "song2.mp3" },
    { name: "Song 3", file: "song3.mp3" },
    { name: "Song 4", file: "song4.mp3" },
    { name: "Song 5", file: "song5.mp3" }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const currentTimeEl = document.getElementById("current");
const durationEl = document.getElementById("duration");
const playlist = document.getElementById("playlist");
const title = document.getElementById("title");
const cd = document.getElementById("cd");

let currentSong = 0;
let isPlaying = false;

/* Create playlist */
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerText = song.name;
    li.addEventListener("click", () => loadSong(index));
    playlist.appendChild(li);
});

function loadSong(index) {
    currentSong = index;
    audio.src = songs[index].file;
    title.innerText = songs[index].name;

    document.querySelectorAll("#playlist li").forEach(li => li.classList.remove("active"));
    playlist.children[index].classList.add("active");

    audio.play();
    playBtn.innerText = "⏸";
    cd.classList.add("playing");
    isPlaying = true;
}

/* Play button */
playBtn.addEventListener("click", () => {
    if (!audio.src) loadSong(0);

    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶";
        cd.classList.remove("playing");
    } else {
        audio.play();
        playBtn.innerText = "⏸";
        cd.classList.add("playing");
    }

    isPlaying = !isPlaying;
});

/* Progress bar */
audio.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audio;
    if (!duration) return;

    progress.style.width = (currentTime / duration) * 100 + "%";
    currentTimeEl.innerText = formatTime(currentTime);
    durationEl.innerText = formatTime(duration);
});

progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    audio.currentTime = (e.offsetX / width) * audio.duration;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return minutes + ":" + seconds;
}

/* Auto next */
audio.addEventListener("ended", () => {
    let next = (currentSong + 1) % songs.length;
    loadSong(next);
});