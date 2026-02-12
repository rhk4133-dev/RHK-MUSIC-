let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3"
];

let audio = new Audio();

function playSong(index) {
    audio.src = songs[index];
    audio.play();
}