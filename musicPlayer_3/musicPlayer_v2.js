const musicContents = {
  music1: {
    title: 'Nice To Meet You',
    artist: 'Imagine Dragons',
    videoUrl: 'https://www.youtube.com/watch?v=NeUfmyu5t8Q',
    lyricsText: '',
    albumCover: 'images/1.jpg',
    audioFile: 'audio/Nice To Meet You.mp3',
    
    isLiked: false
  },
  music2: {
    title: 'Out of Time',
    artist: 'The Weeknd',
    videoUrl: 'https://www.youtube.com/watch?v=2fDzCWNS3ig',
    lyricsText: '',
    albumCover: 'images/2.jpg',
    audioFile: 'audio/Out of Time.mp3',
    isLiked: false
  },
  music3: {
    title: 'Lemons',
    artist: 'Spencer Sutherland',
    videoUrl: 'https://www.youtube.com/watch?v=2fDzCWNS3ig',
    lyricsText: '',
    albumCover: 'images/3.jpg',
    audioFile: 'audio/Lemons.mp3',
    isLiked: false
  },
  music4: {
    title: "That's Hilarious",
    artist: 'Charlie Puth',
    videoUrl: 'https://www.youtube.com/watch?v=2fDzCWNS3ig',
    lyricsText: '',
    albumCover: 'images/4.jpg',
    audioFile: "audio/That's Hilarious.mp3",
    isLiked: false
  },
  music5: {
    title: "Every Second",
    artist: 'Mina Okabe',
    videoUrl: 'https://www.youtube.com/watch?v=5zjTR7BVVBY',
    lyricsText: '',
    albumCover: 'images/5.jpg',
    audioFile: "audio/Every Second.mp3",
    isLiked: false
  },
  music6: {
    title: "Bad",
    artist: 'Christopher',
    videoUrl: 'https://www.youtube.com/watch?v=ACiyYOz0wsQ',
    lyricsText: '',
    albumCover: 'images/6.jpg',
    audioFile: "audio/Bad.mp3",
    isLiked: false
  },
  music7: {
    title: "Off My Face",
    artist: 'Justin Bieber',
    videoUrl: 'https://www.youtube.com/watch?v=Iz51Nm5NHIw',
    lyricsText: '',
    albumCover: 'images/7.jpg',
    audioFile: "audio/Off My Face.mp3",
    isLiked: false
  },
  music8: {
    title: "Lucky",
    artist: 'Halsey',
    videoUrl: 'https://www.youtube.com/watch?v=zUtTpuqV55U',
    lyricsText: '',
    albumCover: 'images/8.jpg',
    audioFile: "audio/Lucky.mp3",
    isLiked: false
  },
  music9: {
    title: "golden hour",
    artist: 'JVKE',
    videoUrl: 'https://www.youtube.com/watch?v=PEM0Vs8jf1w',
    lyricsText: '',
    albumCover: 'images/9.jpg',
    audioFile: "audio/golden hour.mp3",
    isLiked: false
  },
  music10: {
    title: "Grace",
    artist: 'ADOY',
    videoUrl: 'https://www.youtube.com/watch?v=QA7OSuV_Z3g',
    lyricsText: '',
    albumCover: 'images/10.jpg',
    audioFile: "audio/Grace.mp3",
    isLiked: false
  }
}

// #Class_CircularLinkedList
class CircularLinkedList {
  constructor(id) {
    this.id = id;
    this._prev = null;
    this._next = null;
    this.length = 0;
  }
  set prev(pLink) { this._prev = pLink; }
  get prev() { return this._prev; }
  set next(nLink) { this._next = nLink; }
  get next() { return this._next; }
}//end_CircularLinkedList


// #Class_MusicNode
class MusicNode {
  constructor(id, musicObject) {
    this.id = id;
    this.musicContents = musicObject;
    this.musicLinks = [];
    this.musicLength = 0;
  }
  createLinks() {
    this.musicLength = Object.keys(this.musicContents).length;
    for (let i = 0; i < this.musicLength; i++) {
      this.musicLinks.push(new CircularLinkedList(`music${i + 1}`));
    }
  }
  linkNodes() {
    this.musicLength = this.musicLinks.length;
    for (let i = 0; i < this.musicLength; i++) {
      if (i === 0) {
        // start
        this.musicLinks[i].prev = this.musicLinks[this.musicLength - 1];
        this.musicLinks[i].next = this.musicLinks[i + 1];
      } else if (i === this.musicLength - 1) {
        // end
        this.musicLinks[i].prev = this.musicLinks[i - 1];
        this.musicLinks[i].next = this.musicLinks[0];
      } else { 
        this.musicLinks[i].prev = this.musicLinks[i - 1];
        this.musicLinks[i].next = this.musicLinks[i + 1];
      }
    }
  }
  setNode() {
    this.createLinks();
    this.linkNodes();
  }
}//end_MusicNode
const musicNodeLink = new MusicNode('musicNodeLink', musicContents);
musicNodeLink.setNode();


// #Class_MusicPlayer
class MusicPlayer {
  constructor(id) {
    this.id = id;
    this.currentNode = musicContents['music1'];
    this.playListNum= 0;
    // DOM_Area
    this.playRange = document.getElementById('playRange');
    this.startTime = document.getElementById('startTime');
    this.endTime = document.getElementById('endTime');
    this.playBtn = document.getElementById('playBtn');
    this.stopBtn = document.getElementById('stopBtn');
    this.backwardBtn = document.getElementById('backwardBtn');
    this.forwardBtn = document.getElementById('forwardBtn');
    this.linkMovie = document.getElementById('linkMovie');
    // DOM_Element
    this.musicTitle = document.getElementById('musicTitle');
    this.artistName = document.getElementById('artistName');
    this.lyricsTxt = document.getElementById('lyricsTxt');
    this.photoArea = document.getElementById('photoArea');
    this.audioFile = document.getElementById('audioFile');
    this.wrap = document.getElementById('contentWrap');
    this.heartBtn=document.getElementById('heartBtn');
  }//
  updateDOM() {
    const currentMusic = this.currentNode;
    this.musicTitle.textContent = currentMusic.title;
    this.artistName.textContent = currentMusic.artist;
    this.lyricsTxt.textContent = currentMusic.lyricsText;
    this.photoArea.style.backgroundImage = `url(${currentMusic.albumCover})`;
    this.audioFile.src = `${currentMusic.audioFile}`;
    this.wrap.style.backgroundImage = `linear-gradient(rgba(24, 24, 24, 0.757),
      rgba(24, 24, 24, 0.938)), url(${currentMusic.albumCover})`;
    this.linkMovie.href = currentMusic.videoUrl; // yutube_link
    // 기본설정
    // this.stopBtn.style.display = "none";
    // this.playBtn.style.display = "block";
    // heartBtn
    if(this.currentNode.isLiked === false){
      heartBtn.classList.add('xi-heart-o');
      heartBtn.classList.remove('xi-heart');
    }else{
      heartBtn.classList.remove('xi-heart-o');
      heartBtn.classList.add('xi-heart');
    };
    this.audioFile.play();
    // this.heartFunc();
  }//
  playMusic() {
    this.playBtn.addEventListener("click", (event) => {
      this.playBtn.style.display = "none";
      this.stopBtn.style.display = "block";
      document.getElementById('audioFile').play();
    });
  }//
  pauseMusic() {
    this.stopBtn.addEventListener("click", (event) => {
      this.stopBtn.style.display = "none";
      this.playBtn.style.display = "block";
      this.audioFile.pause();
    });
  }//
  loadData() {
    this.audioFile.addEventListener('loadedmetadata', () => {
      const minutes = parseInt(this.audioFile.duration / 60);
      const second = parseInt(this.audioFile.duration % 60);
      const secondV = second < 10 ? ('0' + second) : second;
      this.playRange.max = this.audioFile.duration;
      this.endTime.innerText = `0${minutes}:${secondV}`;
    });
  }//
  musicTimeUpdate() {
    this.audioFile.addEventListener("timeupdate", (event) => {
      const minutes = parseInt(this.audioFile.currentTime / 60);
      const second = parseInt(this.audioFile.currentTime % 60);
      const secondV = second < 10 ? ('0' + second) : second;
      this.playRange.value = this.audioFile.currentTime;
      this.startTime.textContent = `0${minutes}:${secondV}`;
    });
  }//
  musicRange() {
    this.playRange.addEventListener("input", (event) => {
      this.audioFile.currentTime = this.playRange.value;
    });
  }//
  heartFunc() {
    heartBtn.addEventListener("click", (event) => {
      if (heartBtn.classList.contains('xi-heart-o')) {
        heartBtn.classList.remove('xi-heart-o');
        heartBtn.classList.add('xi-heart');
        this.currentNode.isLiked = true;
      } else {
        heartBtn.classList.add('xi-heart-o');
        heartBtn.classList.remove('xi-heart');
        this.currentNode.isLiked = false;
      }
    });
  }//
  backwardPlay() {
    this.backwardBtn.addEventListener("click", (event) => {
      this.audioFile.play();
      this.playListNum%=(musicNodeLink.musicLinks.length)
      const currentNum = musicNodeLink.musicLinks[this.playListNum]._prev.id;
      this.currentNode = musicContents[currentNum];
      this.updateDOM();
      this.playListNum--; 
      if(this.playListNum===-1){
        this.playListNum=(musicNodeLink.musicLinks.length);
        this.playListNum--; 
      }
    })
  }//
  forwardPlay() {
    this.forwardBtn.addEventListener("click", (event) => {
      this.audioFile.play();
      this.playListNum%=(musicNodeLink.musicLinks.length)
      const currentNum = musicNodeLink.musicLinks[this.playListNum]._next.id;
      this.currentNode = musicContents[currentNum];
      this.updateDOM();
      // this.heartFunc();
      this.playListNum++; 
    })
  }//
  playTrack() {
    this.playMusic();
    this.pauseMusic();
    this.loadData();
    this.musicTimeUpdate();
    this.musicRange();
    this.updateDOM();
    this.heartFunc();
    this.forwardPlay();
    this.backwardPlay();
  }//
}//end_MusicPlayer

const musicPlayer = new MusicPlayer('musicPlayer');
musicPlayer.playTrack();