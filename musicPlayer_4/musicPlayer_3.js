const musicContents = {
  music1: {
    title: 'Nice To Meet You',
    artist: 'Imagine Dragons',
    videoUrl: 'https://www.youtube.com/watch?v=NeUfmyu5t8Q',
    lyricsText: `I was wandering up your street
And I was really hoping to meet you
But your girlfriend's gonna delete my number, gone
I was wondering how your weekend's been
You waking up or you sleeping in?
Your girlfriend's gonna be leaving soon, or not?
What could ever go wrong?
Sing your favorite song
She could come along
Oh yeah, yeah
Oh yeah, yeah
What could ever go wrong?
Summer's never too long
Our love's too strong
Oh yeah, yeah
Oh yeah, yeah
Anyway, it's nice to meet you
Anyway, it's nice to meet you
Anyway, it's nice to meet you
Anyway, it's nice to meet you
I was buying you those flowers
I was listening for hours
I was shutting up those doubters, yeah, yeah
She was jealous of our relationship
She hated that we were making it
She's smiling but she's faking it, yeah, yeah
Praying that we make it through the weekend
Wind is in the sail, but we are sinking
Hammering a nail, and now we're leaking, eh, yeah, yeah
Oh yeah, yeah, yeah
Painting on the wall is something freaky
She's been throwing punches like a T.K.O.
Knocking on the door and being sneaky, getaway oh yeah
Oh yeah, yeah, yeah
Anyway, it's nice to meet you
Nice to meet you
Anyway, it's nice to meet you
It's nice to meet
Anyway, it's nice to meet you
I hope to see you
Anyway, it's nice to meet you
Anyways, it's nice to meet you
She could be a Mona Lisa
Should've seen her
I hope we meet again
Hey, it's nice to meet
I hope we meet again (True believer)
Anyway, it's nice to meet you
I hope we meet again (It's nice to meet you)
To meet again
(And I hope to see you)
I hope we meet again (True believer)
(To meet again)
Anyway, it's nice to meet you
`,
    albumCover: 'images/niceToMeetYou.jpg',
    audioFile: 'audio/niceToMeetYou.mp3',
    audioDuration: '03:10',
    isLiked: false
  },
  music2: {
    title: "golden hour",
    artist: 'JVKE',
    videoUrl: 'https://www.youtube.com/watch?v=PEM0Vs8jf1w',
    lyricsText: '',
    albumCover: 'images/goldenhour.jpg',
    audioFile: "audio/goldenhour.mp3",
    audioDuration: '03:36',
    isLiked: false
  },
  music3: {
    title: 'Baby',
    artist: "BE'O & Paul Blanco",
    videoUrl: 'https://www.youtube.com/watch?v=PJ89TSGcvHs',
    lyricsText: '',
    albumCover: 'images/Baby.jpg',
    audioFile: 'audio/Baby.mp3',
    audioDuration: '03:09',
    isLiked: false
  },
  music4: {
    title: 'Coldplay',
    artist: 'Everglow',
    videoUrl: 'https://www.youtube.com/watch?v=xn_1hFdE-5g',
    lyricsText: '',
    albumCover: 'images/Everglow.jpg',
    audioFile: 'audio/Everglow.mp3',
    audioDuration: '04:42',
    isLiked: false
  },
  music5: {
    title: "That's Hilarious",
    artist: 'Charlie Puth',
    videoUrl: 'https://www.youtube.com/watch?v=2fDzCWNS3ig',
    lyricsText: '',
    albumCover: "images/ThatsHilarious.jpg",
    audioFile: "audio/ThatsHilarious.mp3",
    audioDuration: '02:26',
    isLiked: false
  },
  music6: {
    title: "Every Second",
    artist: 'Mina Okabe',
    videoUrl: 'https://www.youtube.com/watch?v=5zjTR7BVVBY',
    lyricsText: '',
    albumCover: 'images/EverySecond.jpg',
    audioFile: "audio/EverySecond.mp3",
    audioDuration: '03:01',
    isLiked: false
  },
  music7: {
    title: "Bad",
    artist: 'Christopher',
    videoUrl: 'https://www.youtube.com/watch?v=ACiyYOz0wsQ',
    lyricsText: '',
    albumCover: 'images/Bad.jpg',
    audioFile: "audio/Bad.mp3",
    audioDuration: '03:10',
    isLiked: false
  },
  music8: {
    title: "Off My Face",
    artist: 'Justin Bieber',
    videoUrl: 'https://www.youtube.com/watch?v=Iz51Nm5NHIw',
    lyricsText: '',
    albumCover: 'images/OffMyFace.jpg',
    audioFile: "audio/OffMyFace.mp3",
    audioDuration: '02:36',
    isLiked: false
  },
  music9: {
    title: "Lucky",
    artist: 'Halsey',
    videoUrl: 'https://www.youtube.com/watch?v=zUtTpuqV55U',
    lyricsText: '',
    albumCover: 'images/Lucky.jpg',
    audioFile: "audio/Lucky.mp3",
    audioDuration: '03:18',
    isLiked: false
  },
  music10: {
    title: 'Out of Time',
    artist: 'The Weeknd',
    videoUrl: 'https://www.youtube.com/watch?v=2fDzCWNS3ig',
    lyricsText: '',
    albumCover: 'images/OutofTime.jpg',
    audioFile: 'audio/OutofTime.mp3',
    audioDuration: '03:34',
    isLiked: false
  },
  music11: {
    title: "Grace",
    artist: 'ADOY',
    videoUrl: 'https://www.youtube.com/watch?v=QA7OSuV_Z3g',
    lyricsText: '',
    albumCover: 'images/Grace.jpg',
    audioFile: "audio/Grace.mp3",
    audioDuration: '04:05',
    isLiked: false
  },
  music12: {
    title: "Lemons",
    artist: 'Spencer Sutherland',
    videoUrl: 'https://www.youtube.com/watch?v=xQNTFnYmHBM',
    lyricsText: '',
    albumCover: 'images/Lemons.jpg',
    audioFile: "audio/Lemons.mp3",
    audioDuration: '02:27',
    isLiked: false
  }
}

// #Class_DoublyLinkedList
class DoublyLinkedList {
  constructor(id) {
    this._id = id;
    this._prev = null;
    this._next = null;
  }
  set prev(pLink) { this._prev = pLink; }
  get prev() { return this._prev; }
  set next(nLink) { this._next = nLink; }
  get next() { return this._next; }
  get id() { return this._id; }
}//end_DoublyLinkedList

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
      this.musicLinks.push(new DoublyLinkedList(`music${i + 1}`));
    }
  }
  linkNodes() {
    for (let i = 0; i < this.musicLength; i++) {
      if (i === 0) {
        // 시작
        this.musicLinks[i].prev = this.musicLinks[this.musicLength - 1];
        this.musicLinks[i].next = this.musicLinks[i + 1];
      } else if (i === this.musicLength - 1) {
        // 끝
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
    this.currentLink = musicNodeLink.musicLinks[0];
    this.currentNode = musicContents[this.currentLink.id];
    this.musicLength = Object.keys(musicContents).length;

    // DOM_Area
    this.contentWrap = document.getElementById('contentWrap');
    this.playRange = document.getElementById('playRange');
    this.startTime = document.getElementById('startTime');
    this.endTime = document.getElementById('endTime');
    this.playBtn = document.getElementById('playBtn');
    this.stopBtn = document.getElementById('stopBtn');
    this.backwardBtn = document.getElementById('backwardBtn');
    this.forwardBtn = document.getElementById('forwardBtn');
    this.linkMovie = document.getElementById('linkMovie');
    this.playlistWrapBox = document.getElementById('playlistWrapBox');
    this.playlistBox = document.getElementById('playlistBox');

    // DOM_Element
    this.musicTitle = document.getElementById('musicTitle');
    this.artistName = document.getElementById('artistName');
    this.lyricsContTxt = document.getElementById('lyricsContTxt');
    this.photoArea = document.getElementById('photoArea');
    this.audioFile = document.getElementById('audioFile');
    this.wrap = document.getElementById('contentWrap');
    this.heartBtn = document.getElementById('heartBtn');
    this.ListBtn = document.getElementById('ListBtn');
    this.playlistCount = document.getElementById('playlistCount');
    this.playlistClose = document.getElementById('playlistClose');

    // PlayList
    this.playlistBackwardBtn = document.getElementById('playlistBackwardBtn');
    this.playlistPlayBtn = document.getElementById('playlistPlayBtn');
    this.playlistPauseBtn = document.getElementById('playlistPauseBtn');
    this.playlistForwardBtn = document.getElementById('playlistForwardBtn');

    // MusicBox
    this.activePlayMusicBox = document.getElementById('activePlayMusicBox');
    this.activePlayMusicImg = document.getElementById('activePlayMusicImg');
    this.activePlayMusicRange = document.getElementById('activePlayMusicRange');


  }
  // === mainContent ===
  updateDOM() {
    const currentMusic = this.currentNode;
    this.musicTitle.textContent = currentMusic.title;
    this.artistName.textContent = currentMusic.artist;
    this.lyricsContTxt.innerHTML = currentMusic.lyricsText;
    this.photoArea.style.backgroundImage = `url(${currentMusic.albumCover})`;
    // audioFile
    this.audioFile.src = `${currentMusic.audioFile}`;
    this.audioFile.className = (`${this.currentLink.id}`);
    // wrap - backgroundImage
    this.wrap.style.backgroundImage = `linear-gradient(rgba(24, 24, 24, 0.757),
      rgba(24, 24, 24, 0.938)), url(${currentMusic.albumCover})`;
    this.linkMovie.href = currentMusic.videoUrl; // 유튜브 링크
    this.playlistCount.textContent = this.musicLength;
    // playList - backgroundImage
    this.activePlayMusicImg.style.backgroundImage = `url(${currentMusic.albumCover})`;
    this.activePlayMusicBox.style.backgroundImage = `linear-gradient(rgba(36, 36, 36, 0.8),
      rgba(24, 24, 24, 0.938)), url(${currentMusic.albumCover})`;
    // playRange
    this.playRange.value = 0;
    this.playRange.style.background = `linear-gradient(to right, #00c3ff ${0}%, #ddd ${0}%)`;

    // heartBtn
    if (this.currentNode.isLiked === false) {
      this.heartBtn.classList.add('xi-heart-o');
      this.heartBtn.classList.remove('xi-heart');
    } else {
      this.heartBtn.classList.remove('xi-heart-o');
      this.heartBtn.classList.add('xi-heart');
    }
    this.audioFile.pause();
    // playListItem Active
    this.activePlayListMusicNode();
  }//

  musicPlayBtnFunc() {
    this.playBtn.style.display = "none";
    this.stopBtn.style.display = "block";

    this.playlistPlayBtn.style.display = "none";
    this.playlistPauseBtn.style.display = "block";

    this.audioFile.play();
  }//

  musicPauseBtnFunc() {
    this.playBtn.style.display = "block";
    this.stopBtn.style.display = "none";

    this.playlistPlayBtn.style.display = "block";
    this.playlistPauseBtn.style.display = "none";

    this.audioFile.pause();
  }//

  playMusic() {
    this.playBtn.addEventListener("click", () => {
      this.musicPlayBtnFunc();
    });
  }//

  pauseMusic() {
    this.stopBtn.addEventListener("click", () => {
      this.musicPauseBtnFunc();
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
    this.audioFile.addEventListener("timeupdate", () => {
      const minutes = parseInt(this.audioFile.currentTime / 60);
      const second = parseInt(this.audioFile.currentTime % 60);
      const secondV = second < 10 ? ('0' + second) : second;
      const currentPercent = (this.audioFile.currentTime / this.audioFile.duration) * 100;
      this.playRange.value = this.audioFile.currentTime;
      this.playRange.style.background = `linear-gradient(to right, #00c3ff ${currentPercent}%, #ddd ${currentPercent}%)`;
      //playListRange
      //그라디언트의 시작과 끝 지점이 동일
      this.activePlayMusicRange.style.background = `linear-gradient(to right, #00c3ff ${currentPercent}%, #ddd ${currentPercent}%)`;
      this.startTime.textContent = `0${minutes}:${secondV}`;
      // 다음 곡 자동 재생
      if (this.audioFile.currentTime === this.audioFile.duration && this.playBtn.style.display == "none") {
        this.moveToNextTrack();
        this.audioFile.play();
      }
    });
  }//

  musicRange() {
    this.playRange.addEventListener("input", () => {
      this.audioFile.currentTime = this.playRange.value;
    });
  }//

  heartFunc() {
    this.heartBtn.addEventListener("click", () => {
      if (this.heartBtn.classList.contains('xi-heart-o')) {
        this.heartBtn.classList.remove('xi-heart-o');
        this.heartBtn.classList.add('xi-heart');
        this.currentNode.isLiked = true;
      } else {
        this.heartBtn.classList.add('xi-heart-o');
        this.heartBtn.classList.remove('xi-heart');
        this.currentNode.isLiked = false;
      }
    });
  }//

  backwardPlay() {
    this.backwardBtn.addEventListener("click", () => {
      this.moveToPreviousTrack();
      this.musicPlayBtnFunc();
    });
  }//

  forwardPlay() {
    this.forwardBtn.addEventListener("click", () => {
      this.moveToNextTrack();
      this.musicPlayBtnFunc();
    });
  }//

  moveToNextTrack() {
    this.currentLink = this.currentLink.next;
    this.currentNode = musicContents[this.currentLink.id];
    this.updateDOM();
  }//

  moveToPreviousTrack() {
    this.currentLink = this.currentLink.prev;
    this.currentNode = musicContents[this.currentLink.id];
    this.updateDOM();
  }//

  // === playList ===

  showPlayList() {
    this.ListBtn.addEventListener("click", () => {
      this.playlistWrapBox.style.display = "block";
      setTimeout(() => {
        this.playlistWrapBox.style.top = 0;
      }, 0)
    })
  }//

  addPlayListItem() {
    for (let i = 1; i <= this.musicLength; i++) {
      const item = 'music' + (i);
      this.playlistBox.innerHTML +=
        `
       <article id="pItem${i}" class="playlistItem p${i}">
        <div id="pAlbum${i}" class="playlistAlbumImg"></div>
        <div class="playlistTxtBox pTxtBox${i}">
          <h2 id="playlistTitlemusic${i}" class="playlistTitle pTitle${i}">${musicContents[item].title}</h2>
          <p id="playlistArtistmusic${i}" class="playlistArtist pArtist${i}">${musicContents[item].artist}</p>
        </div>
        <i id="playListIconmusic${i}" class="xi-chart-bar iconSizeC"></i> 
        <span class="playlistDuration pTime${i}">${musicContents[item].audioDuration}</span>
        <div id="playlistItem0${i}" class="playlistItemCover"></div>
      </article> 
  `
      document.getElementById(`pAlbum${i}`).style.backgroundImage = `url(${musicContents[item].albumCover})`
    }
  }//

  playListLink() {
    this.playlistBox.addEventListener("click", (event) => {
      const id = event.target.id;
      const linkNum = parseInt(id.slice((event.target.id.length) - 2));
      this.currentLink = musicNodeLink.musicLinks[linkNum - 1];
      this.currentNode = musicContents[this.currentLink.id];
      // 뮤직재생화면도 바뀌어야함
      this.updateDOM();
      this.musicPlayBtnFunc();
      this.playBtn.style.display = "none";
      this.stopBtn.style.display = "block";
    })
  }//

  playListBackwardFunc() {
    this.playlistBackwardBtn.addEventListener("click", () => {
      this.moveToPreviousTrack();
      this.musicPlayBtnFunc();
    })
  }//

  playlistForwardFunc() {
    this.playlistForwardBtn.addEventListener("click", () => {
      this.moveToNextTrack();
      this.musicPlayBtnFunc();
    })
  }//

  playlistPauseFunc() {
    this.playlistPauseBtn.addEventListener("click", () => {
      this.musicPauseBtnFunc();
    })
  }//

  playlistPlayFunc() {
    this.playlistPlayBtn.addEventListener("click", () => {
      this.musicPlayBtnFunc();
    })
  }//

  playlistAreaClose() {
    this.playlistClose.addEventListener("click", () => {
      setTimeout(() => {
        this.playlistWrapBox.style.top = 100 + '%';
      }, 0)
    })
  }//

  activePlayMusicImgClick() {
    this.activePlayMusicImg.addEventListener("click", () => {
      setTimeout(() => {
        this.playlistWrapBox.style.top = 100 + '%';
      }, 0)
    })
  }//

  activePlayListMusicNode(){
    for (let i = 1; i <= this.musicLength; i++) {
      if( `music${i}` === (this.currentLink.id)){
        document.getElementById(`playlistTitle${this.currentLink.id}`).classList.add('pActive');
        document.getElementById(`playlistArtist${this.currentLink.id}`).classList.add('pActive');
        document.getElementById(`playListIcon${this.currentLink.id}`).classList.add('pActiveIcon');
      }else{
        document.getElementById(`playlistTitlemusic${i}`).classList.remove('pActive');
        document.getElementById(`playlistArtistmusic${i}`).classList.remove('pActive');
        document.getElementById(`playListIconmusic${i}`).classList.remove('pActiveIcon');
      }
    }
  }//
  

  playTrack() {
    this.addPlayListItem(); // playListItem 먼저 추가
    this.updateDOM();
    this.loadData();
    this.musicTimeUpdate();
    this.forwardPlay();
    this.backwardPlay();
    
    // playListBtn
    this.showPlayList();
    this.playListBackwardFunc();
    this.playlistForwardFunc();
    this.playlistPauseFunc();
    this.playlistPlayFunc();

    this.playMusic();
    this.pauseMusic();
    this.musicRange();
    this.heartFunc();

    // playList
    this.showPlayList();
    this.playListLink();
    this.playlistAreaClose();
    this.activePlayMusicImgClick();
    this.activePlayListMusicNode();
  }//
}//end_MusicPlayer

const musicPlayer = new MusicPlayer('musicPlayer');
musicPlayer.playTrack();


