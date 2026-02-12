const songs = [];

/* Auto 50 Songs */
for (let i = 1; i <= 50; i++) {
    songs.push({
        name: "RHK SONG " + i,
        file: "song" + i + ".mp3",
        img: "img" + i + ".jpg"
    });
}

const audio = document.getElementById("audio");
const songGrid = document.getElementById("songGrid");
const playerView = document.getElementById("playerView");
const cd = document.getElementById("cd");
const nowTitle = document.getElementById("nowTitle");

let currentIndex = 0;

function enterApp(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("musicApp").style.display="block";
}

/* Load Songs */
songs.forEach((song,index)=>{
    const card=document.createElement("div");
    card.className="song-card";
    card.innerHTML=`
    <img src="${song.img}">
    <h3>${song.name}</h3>
    `;
    card.onclick=()=>playSong(index);
    songGrid.appendChild(card);
});

function playSong(index){

    currentIndex = index;

    audio.src = songs[index].file;
    audio.play();

    nowTitle.innerText = songs[index].name;

    playerView.style.backgroundImage=`url('${songs[index].img}')`;
    playerView.style.display="flex";

    cd.style.backgroundImage=`url('${songs[index].img}')`;
    cd.classList.add("playing");
}

function togglePlay(){
    if(audio.paused){
        audio.play();
        cd.classList.add("playing");
    } else {
        audio.pause();
        cd.classList.remove("playing");
    }
}

function nextSong(){
    currentIndex++;
    if(currentIndex >= songs.length) currentIndex = 0;
    playSong(currentIndex);
}

function prevSong(){
    currentIndex--;
    if(currentIndex < 0) currentIndex = songs.length - 1;
    playSong(currentIndex);
}

function forward10(){
    audio.currentTime += 10;
}

function backward10(){
    audio.currentTime -= 10;
}

function goBack(){
    playerView.style.display="none";
    audio.pause();
    cd.classList.remove("playing");
}

function searchSong(){
    let input=document.getElementById("searchBar").value.toLowerCase();
    document.querySelectorAll(".song-card").forEach(card=>{
        card.style.display=card.innerText.toLowerCase().includes(input)?"block":"none";
    });
}