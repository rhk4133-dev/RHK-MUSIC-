
const home = document.getElementById("home");
const app = document.getElementById("app");
const enterBtn = document.getElementById("enterBtn");

enterBtn.onclick = () => {
    home.style.display = "none";
    app.style.display = "flex";
};

const songs = [
{ name:"DIL LAGANA MANATHA", file:"song1.mp3", img:"img1.jpg"},
{ name:"KAGADADA DONIYALLI", file:"song2.mp3", img:"img2.jpg"},
{ name:"KANAVE KANAVE", file:"song3.mp3", img:"img3.jpg"},
{ name:"KANTHARA PART 2", file:"song4.mp3", img:"img4.jpg"},
{ name:"ZARA ZARA", file:"song5.mp3", img:"img5.jpg"}
];

const audio=document.getElementById("audio");
const cassette=document.getElementById("cassette");
const playlist=document.getElementById("playlist");
const title=document.getElementById("title");
const playBtn=document.getElementById("playBtn");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");
const backBtn=document.getElementById("backBtn");
const forwardBtn=document.getElementById("forwardBtn");
const progress=document.getElementById("progress");
const progressContainer=document.getElementById("progressContainer");
const currentTimeEl=document.getElementById("current");
const durationEl=document.getElementById("duration");

let currentSong=0;
let isPlaying=false;

songs.forEach((song,index)=>{
let li=document.createElement("li");
li.innerText=song.name;
li.onclick=()=>loadSong(index);
playlist.appendChild(li);
});

function loadSong(index){
currentSong=index;
audio.src=songs[index].file;
title.innerText=songs[index].name;
cassette.style.backgroundImage=`url(${songs[index].img})`;

document.querySelectorAll("#playlist li").forEach(li=>li.classList.remove("active"));
playlist.children[index].classList.add("active");

audio.play();
cassette.classList.add("playing");
playBtn.innerText="⏸";
isPlaying=true;
}

playBtn.onclick=()=>{
if(!audio.src){loadSong(0);return;}
if(isPlaying){
audio.pause();
cassette.classList.remove("playing");
playBtn.innerText="▶";
}else{
audio.play();
cassette.classList.add("playing");
playBtn.innerText="⏸";
}
isPlaying=!isPlaying;
};

nextBtn.onclick=()=>loadSong((currentSong+1)%songs.length);
prevBtn.onclick=()=>loadSong((currentSong-1+songs.length)%songs.length);
forwardBtn.onclick=()=>audio.currentTime+=10;
backBtn.onclick=()=>audio.currentTime-=10;

audio.ontimeupdate=()=>{
if(!audio.duration)return;
progress.style.width=(audio.currentTime/audio.duration)*100+"%";
currentTimeEl.innerText=formatTime(audio.currentTime);
durationEl.innerText=formatTime(audio.duration);
};

progressContainer.onclick=(e)=>{
audio.currentTime=(e.offsetX/progressContainer.clientWidth)*audio.duration;
};

function formatTime(time){
let m=Math.floor(time/60);
let s=Math.floor(time%60).toString().padStart(2,"0");
return m+":"+s;
}

audio.onended=()=>nextBtn.click();

/* LIKE */
let likes=0;
document.getElementById("likeBtn").onclick=()=>{
likes++;
document.getElementById("likeCount").innerText=likes;
};

/* SUBSCRIBE */
document.getElementById("subscribeBtn").onclick=function(){
this.innerText="Subscribed ✅";
};

/* COMMENTS */
document.getElementById("commentBtn").onclick=()=>{
let input=document.getElementById("commentInput");
if(input.value.trim()!==""){
let li=document.createElement("li");
li.innerText=input.value;
document.getElementById("commentList").appendChild(li);
input.value="";
}
};

/* SEARCH */
document.getElementById("search").onkeyup=function(){
let value=this.value.toLowerCase();
document.querySelectorAll("#playlist li").forEach(li=>{
li.style.display=li.innerText.toLowerCase().includes(value)?"":"none";
});
};