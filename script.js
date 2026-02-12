const songs = [
    { name: "DIL LAGANA MANATHA", file: "song1.mp3", img: "img1.jpg" },
    { name: "KAGADADA DONIYALLI", file: "song2.mp3", img: "img2.jpg" },
    { name: "KANAVE KANAVE", file: "song3.mp3", img: "img3.jpg" },
    { name: "KANTHARA THE PART 2", file: "song4.mp3", img: "img4.jpg" },
    { name: "ZARA ZARA", file: "song5.mp3", img: "img5.jpg" }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const currentTimeEl = document.getElementById("current");
const durationEl = document.getElementById("duration");
const playlist = document.getElementById("playlist");
const title = document.getElementById("title");
const cassette = document.getElementById("cassette");

let currentSong = 0;
let isPlaying = false;

/* Create Playlist */
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

    /* 🔥 IMAGE ADDED HERE */
    cassette.style.backgroundImage = `url('${songs[index].img}')`;
    cassette.style.backgroundSize = "cover";
    cassette.style.backgroundPosition = "center";

    document.querySelectorAll("li").forEach(li => li.classList.remove("active"));
    playlist.children[index].classList.add("active");

    audio.play();
    playBtn.innerText = "⏸";
    cassette.classList.add("playing");
    isPlaying = true;
}

/* Play / Pause */
playBtn.addEventListener("click", () => {
    if (!audio.src) {
        loadSong(0);
        return;
    }

    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶";
        cassette.classList.remove("playing");
    } else {
        audio.play();
        playBtn.innerText = "⏸";
        cassette.classList.add("playing");
    }

    isPlaying = !isPlaying;
});

/* Next / Previous */
nextBtn.addEventListener("click", () => {
    let next = (currentSong + 1) % songs.length;
    loadSong(next);
});

prevBtn.addEventListener("click", () => {
    let prev = (currentSong - 1 + songs.length) % songs.length;
    loadSong(prev);
});

/* 10 Seconds Forward / Back */
forwardBtn.addEventListener("click", () => {
    audio.currentTime += 10;
});

backBtn.addEventListener("click", () => {
    audio.currentTime -= 10;
});

/* Progress */
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

/* Auto Next */
audio.addEventListener("ended", () => {
    nextBtn.click();
});