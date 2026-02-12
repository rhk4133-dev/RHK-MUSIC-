const songs = [
{name:"KAGADADA DONIYALLI", file:"song1.mp3", img:"img1.jpg", lang:"kannada"},
{name:"KANAVE KANAVE", file:"song2.mp3", img:"img2.jpg", lang:"kannada"},
{name:"DIL LAGANA MANATHA", file:"song4.mp3", img:"img4.jpg", lang:"kannada"},
{name:"ZARA ZARA", file:"song5.mp3", img:"img5.jpg", lang:"hindi"},
{name:"TAMIL SONG", file:"song3.mp3", img:"img3.jpg", lang:"tamil"}
];

const audio=document.getElementById("audio");
const kannadaList=document.getElementById("kannadaList");
const hindiList=document.getElementById("hindiList");
const tamilList=document.getElementById("tamilList");
const englishList=document.getElementById("englishList");

/* Enter App */
function enterApp(){
document.getElementById("homePage").style.display="none";
document.getElementById("musicApp").style.display="block";
}

/* Load Songs */
songs.forEach(song=>{
const li=document.createElement("li");
li.innerHTML=`<img src="${song.img}"> ${song.name}`;
li.onclick=()=>playSong(song.file,song.name,song.img);

if(song.lang==="kannada") kannadaList.appendChild(li);
if(song.lang==="hindi") hindiList.appendChild(li);
if(song.lang==="tamil") tamilList.appendChild(li);
});

/* English Not Available */
englishList.innerHTML="<li>Not Available</li>";

function playSong(file,name,img){
audio.src=file;
audio.play();

document.getElementById("nowTitle").innerText=name;
document.getElementById("nowImg").src=img;
}

/* Search */
function searchSong(){
let input=document.getElementById("searchBar").value.toLowerCase();
document.querySelectorAll("li").forEach(li=>{
li.style.display=li.innerText.toLowerCase().includes(input)?"flex":"none";
});
}

/* Theme Toggle */
document.getElementById("themeToggle").onclick=function(){
document.body.classList.toggle("light-mode");
};

/* Volume */
document.getElementById("volume").oninput=function(){
audio.volume=this.value;
};