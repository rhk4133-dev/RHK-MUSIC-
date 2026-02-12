* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #141E30, #243B55, #1f4037, #99f2c8);
    background-size: 400% 400%;
    animation: bgMove 12s ease infinite;
    color: white;
}

@keyframes bgMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.player {
    width: 400px;
    padding: 35px;
    border-radius: 30px;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(25px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
    text-align: center;
}

.cd {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin: 0 auto 20px;
    background: radial-gradient(circle at center, #111 20%, #444 21%, #222 40%, #000 100%);
    box-shadow: 0 20px 50px rgba(0,0,0,0.7);
}

.cd.playing {
    animation: spin 5s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.controls button {
    width: 60px;
    height: 60px;
    font-size: 22px;
    border-radius: 50%;
    border: none;
    margin: 5px;
    background: linear-gradient(45deg, #00ffcc, #00c3ff);
    cursor: pointer;
    box-shadow: 0 0 20px #00ffcc;
}

.progress-container {
    height: 8px;
    background: rgba(255,255,255,0.2);
    border-radius: 20px;
    cursor: pointer;
    margin: 15px 0;
}

.progress {
    height: 100%;
    width: 0%;
    background: #00ffcc;
    border-radius: 20px;
}

.time {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

.playlist {
    margin-top: 20px;
    max-height: 120px;
    overflow-y: auto;
}

.playlist div {
    padding: 8px;
    cursor: pointer;
    border-radius: 10px;
}

.playlist div.active {
    background: #00ffcc;
    color: black;
}