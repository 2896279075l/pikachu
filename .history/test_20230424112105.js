const string = `.skin * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.skin *::before,
.skin *::after {
    box-sizing: border-box;
}



.skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}

.nose {
    position: absolute;
    top: 150px;
    left: 50%;
    border: 10px solid black;
    border-color: black transparent transparent;
    width: 0;
    height: 0;
    margin-left: -10px;
    z-index: 5;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    animation: wave 300ms infinite linear;
}

.yuan {
    position: absolute;
    top: -15px;
    left: -10px;
    background: black;
    width: 20px;
    height: 5px;
    border-radius: 50% / 100% 100% 0 0;
    ;
}

.eye {
    width: 64px;
    height: 64px;
    border: 2px solid black;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye.left {
    transform: translateX(-120px);
}

.eye::before {
    content: '';
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid black;
    position: absolute;
    border-radius: 50%;
    top: 3x;
    left: 8px;
}

.eye.right {
    transform: translateX(120px);
}

.mouth {
    position: absolute;
    height: 100px;
    width: 200px;
    top: 170px;
    left: 50%;
    margin-left: -100px;
}

.mouth .up .cover1,
.mouth .cover2 {
    width: 70px;
    height: 15px;
    position: absolute;
    top: -11px;
    z-index: 3;
    background: #ffe600;
}

.mouth .up .cover1 {
    left: 32px;
    transform: rotate(-5deg);
}

.mouth .cover2 {
    right: 32px;
    transform: rotate(5deg);
}

.mouth .up::after {
    right: 0;
}

.mouth .lip {
    height: 20px;
    width: 80px;
    border: 3px solid black;
    z-index: 2;
    position: absolute;
    border-top: transparent;
    background: #ffe600;
}

.mouth .lip.left {
    border-radius: 40% / 0 0 50% 100%;
    transform: rotate(-15deg);
    border-right: transparent;
    left: 21px;
}

.mouth .lip.right {
    border-radius: 40% / 0 0 100% 50%;
    border-left: transparent;
    transform: rotate(15deg);
    right: 21px;
}

.mouth .down {
    height: 250px;
    width: 100%;
    position: absolute;
    top: -5px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    bottom: 90px;
    margin-left: -75px;
    border-radius: 75px/350px;
    background-color: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 180px;
    height: 300px;
    position: absolute;
    bottom: -175px;
    left: 50%;
    margin-left: -90px;
    border-radius: 50%;
    background: #ff485f;
}

.face {
    position: absolute;
    width: 85px;
    height: 85px;
    border: 3px solid black;
    top: 200px;
    left: 50%;
    margin-left: -44px;
    border-radius: 50%;
    background-color: red;
}

.face.left {
    transform: translateX(-170px);
}

.face.right {
    transform: translateX(170px);
}`;

let n = 1;
let time = 50;
let id;

const player = {
  init: () => {
    player.play();
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    return (id = setInterval(player.run, time));
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause();
    time = 50;
    player.play();
  },
  normal: () => {
    player.pause();
    time = 20;
    player.play();
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
  },
};

player.init();
