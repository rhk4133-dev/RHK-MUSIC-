/* ============================= */
/* 50 SONGS AUTO GENERATOR */
/* ============================= */

const songs = [];

/* Auto create 50 songs (song1.mp3 to song50.mp3) */
/* Auto images (img1.jpg to img50.jpg) */

for (let i = 1; i <= 50; i++) {
    songs.push({
        name: "SONG " + i,
        file: "song" + i + ".mp3",
        img: "img" + i + ".jpg"
    });
}

const audio = document.getElementById("audio");
const songGrid = document.getElementById("songGrid");
const playerView = document.getElementById("playerView");
const cd = document.getElementById("cd");
const nowTitle = document.getElementById("nowTitle");

function enterApp(){
document.getElementById("homePage").style.display="none";
document.getElementById("musicApp").style.display="block";
}

/* Load Songs */
songs.forEach(song=>{
const card=document.createElement("div");
card.className="song-card";
card.innerHTML=`
<img src="${song.img}">
<h3>${song.name}</h3>
`;
card.onclick=()=>playSong(song);
songGrid.appendChild(card);
});

function playSong(song){

audio.src=song.file;
audio.play();

nowTitle.innerText=song.name;

/* Background */
playerView.style.backgroundImage=`url('${song.img}')`;
playerView.style.display="flex";

/* CD */
cd.style.backgroundImage=`url('${song.img}')`;
cd.classList.add("playing");
}

function goBack(){
playerView.style.display="none";
audio.pause();
cd.classList.remove("playing");
}

/* Search */
function searchSong(){
let input=document.getElementById("searchBar").value.toLowerCase();
document.querySelectorAll(".song-card").forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(input)?"block":"none";
});
}