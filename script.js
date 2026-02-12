const songs = [
    { name: "Song 1", file: "song1.mp3" },
    { name: "Song 2", file: "song2.mp3" },
    { name: "Song 3", file: "song3.mp3" }
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
