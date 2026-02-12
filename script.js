const songs = [
    {name:"KANAVE KANAVE", file:"song2.mp3", img:"img2.jpg", lang:"kannada"},
    {name:"KANTHARA THE PART 2", file:"song4.mp3", img:"img4.jpg", lang:"kannada"},
    {name:"ZARA ZARA", file:"song5.mp3", img:"img5.jpg", lang:"hindi"},
    {name:"TAMIL SONG", file:"song3.mp3", img:"img3.jpg", lang:"tamil"}
];

const audio = document.getElementById("audio");
const kannadaList = document.getElementById("kannadaList");
const hindiList = document.getElementById("hindiList");
const tamilList = document.getElementById("tamilList");

const playerImg = document.getElementById("playerImg");
const playerTitle = document.getElementById("playerTitle");

/* Enter App */
function enterApp(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("musicApp").style.display="block";
}

/* Load Songs Into Columns */
songs.forEach((song)=>{
    const li=document.createElement("li");
    li.innerHTML=`<img src="${song.img}"> ${song.name}`;
    li.onclick=()=>playSong(song);

    if(song.lang==="kannada") kannadaList.appendChild(li);
    if(song.lang==="hindi") hindiList.appendChild(li);
    if(song.lang==="tamil") tamilList.appendChild(li);
});

/* Play Song */
function playSong(song){
    audio.src=song.file;
    audio.play();

    playerImg.src=song.img;
    playerTitle.innerText=song.name;
}

/* Search */
function searchSong(){
    let input=document.getElementById("searchBar").value.toLowerCase();
    document.querySelectorAll(".column li").forEach(li=>{
        li.style.display=li.innerText.toLowerCase().includes(input)?"flex":"none";
    });
}