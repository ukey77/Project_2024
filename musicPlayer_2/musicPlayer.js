
// DOM ID
const audio = document.getElementById('music');
const playRange = document.getElementById('playRange');
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');
// 좋아요기능
const heartBox = document.getElementById('heartBox');
const heartBtn = document.getElementById('heartBtn');

playRange.value = 0; // 초기값
//loadedmetadata
audio.addEventListener('loadedmetadata', () => {
  let minutes = parseInt(audio.duration / 60);
  let second = parseInt(audio.duration % 60);
  playRange.max = audio.duration;
  endTime.innerText = `0${minutes}:${second}`;
});

// play
playBtn.addEventListener("click", (event) => {
  playBtn.style.display = "none";
  stopBtn.style.display = "block";
  audio.play();
});

// stop
stopBtn.addEventListener("click", (event) => {
  stopBtn.style.display = "none";
  playBtn.style.display = "block";
  audio.pause();
});

// startTime
audio.addEventListener("timeupdate", (event) => {
  let minutes = parseInt(audio.currentTime / 60);
  let second = parseInt(audio.currentTime % 60);
  let secondV = second < 10 ? ('0' + second) : second;
  playRange.value = audio.currentTime;
  startTime.textContent = `0${minutes}:${secondV}`;
});

// input range 조작시
playRange.addEventListener("input", (event) => {
  audio.currentTime = playRange.value;
});

//heartBtn toggle (classList사용)
heartBtn.addEventListener("click", (event) => {
  if (heartBtn.classList.contains('xi-heart-o')) {
    heartBtn.classList.remove('xi-heart-o');
    heartBtn.classList.add('xi-heart');
  } else {
    heartBtn.classList.add('xi-heart-o');
    heartBtn.classList.remove('xi-heart');
  }
});

// // 뮤직 끝
// audio.addEventListener('ended', () => {
//   playRange.value = 0;
//   startTime.textContent = 0;
// });

//forwardBtn
class Deck {
  constructor(id) {
    this.id = id;
    this.name = name;
    this.storage = [];
    this.length = 0;
  }
  pushItem(anyItem) {
    this.storage.push(anyItem);
  }
  popItem() {
    return this.storage.pop();
  }
  shiftItem() {
    return this.storage.shift();
  }
  unshiftItem(anyItem) {
    this.storage.unshift(anyItem);
  }
  countQueue() {
    this.length = this.storage.length;
    return this.length;
  }
}

/*
<audio id="music" src="audio/Bad.mp3"></audio>
<audio id="music" src="audio/Every Second.mp3"></audio>
<audio id="music" src="audio/golden hour.mp3"></audio>
<audio id="music" src="audio/Grace.mp3"></audio>
<audio id="music" src="audio/Lemons.mp3"></audio>
<audio id="music" src="audio/Lucky.mp3"></audio>
<audio id="music" src="audio/Nice To Meet You.mp3"></audio>
<audio id="music" src="audio/Off My Face.mp3"></audio>
<audio id="music" src="audio/Out of Time.mp3"></audio>
<audio id="music" src="audio/That's Hilarious.mp3"></audio>
*/

/*
Bad
Every Second
golden hour
Grace
Lemons
Lucky
Nice To Meet You
Off My Face
Out of Time
That's Hilarious
*/
const musicContents = {
  music1: {

  },
  music2: {},
  music3: {},
  music4: {},
  music5: {},
  music6: {},
  music7: {},
  music8: {},
  music9: {},
  music10: {}
}
