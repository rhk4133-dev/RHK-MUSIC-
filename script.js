const songs=[
{name:"KAGADADA DONIYALLI",file:"song1.mp3",img:"img1.jpg"},
{name:"KANAVE KANAVE",file:"song2.mp3",img:"img2.jpg"},
{name:"TAMIL SONG",file:"song3.mp3",img:"img3.jpg"},
{name:"DIL LAGANA MANATHA",file:"song4.mp3",img:"img4.jpg"},
{name:"ZARA ZARA",file:"song5.mp3",img:"img5.jpg"}
];

const audio=document.getElementById("audio");
const songGrid=document.getElementById("songGrid");
const playerView=document.getElementById("playerView");
const cd=document.getElementById("cd");
const nowTitle=document.getElementById("nowTitle");

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
playerView.style.backgroundImage=`url(${song.img})`;
playerView.style.display="flex";

/* CD */
cd.style.backgroundImage=`url(${song.img})`;
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