const songs = [
    {name:"KAGADADA DONIYALLI", file:"song1.mp3", img:"img1.jpg", lang:"kannada"},
    {name:"KANAVE KANAVE", file:"song2.mp3", img:"img2.jpg", lang:"kannada"},
    {name:"ZARA ZARA", file:"song3.mp3", img:"img3.jpg", lang:"hindi"},
    {name:"DIL LAGANA MANATHA", file:"song4.mp3", img:"img4.jpg", lang:"hindi"},
    {name:"ENGLISH SONG", file:"song5.mp3", img:"img5.jpg", lang:"english"}
];

const audio = document.getElementById("audio");

const kannadaList = document.getElementById("kannadaList");
const hindiList = document.getElementById("hindiList");
const englishList = document.getElementById("englishList");

/* Homepage Button */
function enterApp(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("musicApp").style.display="block";
}

/* Load Songs */
songs.forEach((song)=>{
    const li=document.createElement("li");
    li.innerHTML=`<img src="${song.img}"> ${song.name}`;
    li.onclick=()=>playSong(song.file);

    if(song.lang==="kannada") kannadaList.appendChild(li);
    if(song.lang==="hindi") hindiList.appendChild(li);
    if(song.lang==="english") englishList.appendChild(li);
});

function playSong(file){
    audio.src=file;
    audio.play();
}

/* Search */
function searchSong(){
    let input=document.getElementById("searchBar").value.toLowerCase();
    document.querySelectorAll("li").forEach(li=>{
        li.style.display=li.innerText.toLowerCase().includes(input)?"flex":"none";
    });
}