const songs = [
    { name: "Song 1", file: "songs/song1.mp3" },
    { name: "Song 2", file: "songs/song2.mp3" },
    { name: "Song 3", file: "songs/song3.mp3" }
];

const songList = document.getElementById("songList");
const player = document.getElementById("player");

songs.forEach(song => {
    const div = document.createElement("div");
    div.className = "song";
    div.innerText = song.name;

    div.onclick = () => {
        player.src = song.file;
        player.play();
    };

    songList.appendChild(div);
});