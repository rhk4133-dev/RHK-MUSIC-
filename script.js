const songs = [
    {name:"KAGADADA DONIYALLI", file:"song1.mp3", img:"img1.jpg"},
    {name:"KANAVE KANAVE", file:"song2.mp3", img:"img2.jpg"},
    {name:"ZARA ZARA", file:"song3.mp3", img:"img3.jpg"},
    {name:"DIL LAGANA MANATHA", file:"song4.mp3", img:"img4.jpg"},
    {name:"ENGLISH SONG", file:"song5.mp3", img:"img5.jpg"}
];

let songIndex = 0;

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("playBtn");

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerText = song.name;
    audio.src = song.file;
    cover.src = song.img;
}

function playPause(){
    if(audio.paused){
        audio.play();
        cover.classList.add("play");
        playBtn.innerText="⏸";
    }else{
        audio.pause();
        cover.classList.remove("play");
        playBtn.innerText="▶";
    }
}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    audio.play();
    cover.classList.add("play");
    playBtn.innerText="⏸";
}

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length-1;
    }
    loadSong(songs[songIndex]);
    audio.play();
    cover.classList.add("play");
    playBtn.innerText="⏸";
}

/* Auto Next */
audio.addEventListener("ended", nextSong);

/* Progress Bar Update */
audio.addEventListener("timeupdate", updateProgress);

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";
}

/* Click to change progress */
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}