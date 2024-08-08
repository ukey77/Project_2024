// DOM ID
const audio = document.getElementById('music');
const playRange = document.getElementById('playRange');
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');


const musicContents = {
  music1: {
    title: 'Nice To Meet You',
    artist: 'Imagine Dragons',
    videoUrl: 'https://www.youtube.com/watch?v=NeUfmyu5t8Q',
    lyricsText: '',
    albumCover:'1.jpg',
    audioFile: 'Nice To Meet You.mp3',
    likesCount: 0,
    isLiked: false
  },
  music2: {
    title: 'Out of Time',
    artist: 'The Weeknd',
    videoUrl: 'https://www.youtube.com/watch?v=2fDzCWNS3ig',
    lyricsText: '',
    albumCover:'2.jpg',
    audioFile: 'Out of Time.mp3',
    likesCount: 0,
    isLiked: false
  },
  music3: {

  },
  music4: {

  },
  music5: {

  },
  music6: {

  },
  music7: {

  },
  music8: {

  },
  music9: {

  },
  music10: {

  }
}

{
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
}


// DoublyLinkedList
class DoublyLinkedList{
  constructor(id){
    this.id=id;
    this._prev = null;
    this._next=null;
    this.length=0;
  }
  set prev(pLink){this._prev=pLink;}
  get prev(){return this._prev;}
  set next(nLink){this._next=nLink;}
  get next(){return this._next;}
}

class Music {
  constructor(id){
    this.id=id;
    this.title='';
    this.artist='';
    this.videoUrl='';
    this.lyricsText='';
    this.albumCover='';
    this.audioFile='';
    this.likesCount='';
    this.isLiked='';

		this._next = null;
		this._prev = null;
	}
	set next(nextNode) {
		this._next = nextNode;
	}
	get next() {
		return this._next;
	}
	set prev(prevNode) {
		this._prev = prevNode;
	}
	get prev() {
		return this._prev;
	}
  musicInfo(){

  }
}

