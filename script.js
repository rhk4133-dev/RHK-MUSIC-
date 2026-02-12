let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3"
];

let audio = new Audio();
let currentSong = -1;

function playSong(index) {
    if (currentSong !== index) {
        audio.src = songs[index];
        currentSong = index;
        audio.play();
        document.getElementById("nowPlaying").innerText = "Now Playing: Song " + (index + 1);
    } else {
        togglePlay();
    }
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}