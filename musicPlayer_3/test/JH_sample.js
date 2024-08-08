class DoublyLinkedList {
	constructor() {
		this._head = null;
		this._tail = null;
		this.size = 0;

		this.test = " "; 
	}
	set head( node ) {
		this._head = node;
	}
	get head() {
		return this._head;
	}
	set tail( node ) {
		this._tail = node;
	}
	get tail() {
		return this._tail;
	}

	append(node) {
		if (this.size === 0) {
			this.head = node;
			this.tail = node;
		} else { 
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		}

		this.size++;
	}
	printNodes(node) {
		if (node.next != null) {
			this.test += node.title + " \n ";
			this.printNodes(node.next);
		} else {
			this.test += node.title + " \n ";
			console.log(this.test);
			return
		}
	}
}

class Music {
	constructor(id) {
		this.id = id;
		this.title = "";
		this.singer = "";
		this.cover = ""; // URL
		this.audio = "";

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

	setMusicInformation(musicJson) {
		this.title = musicJson[this.id]["title"];
		this.singer = musicJson[this.id]["singer"];
		this.cover = `url("${musicJson[this.id]["cover"]}")`;
		this.audio = `${musicJson[this.id]["audio"]}`;
	}
}

class MusicPlayer {
	constructor(MusicJson) {
		// setting music data
		this.musicJson = MusicJson; 
		this.musicList = null; 

		//
		this.currentMusic = null; // Music
		this.currentMusicDuration = 0;
		this.isPlaying = false;

		// Visible interface HTML Element
		this.playerArea = document.getElementById("playerArea"); 
		this.siteBackground = document.getElementById("siteBackground"); 
		this.coverArea = document.getElementById("coverArea"); 
		this.songTitle = document.getElementById("songTitle"); 
		this.singer = document.getElementById("singer"); 

		this.song = document.getElementById("song");
		this.songControl = document.getElementById("songControl");
		this.songCurrentTime = document.getElementById("songCurrentTime");
		this.songEndTime = document.getElementById("songEndTime");

		this.playToggle = document.getElementById("playToggle"); 
		this.prevButton = document.getElementById("prev"); 
		this.nextButton = document.getElementById("next"); 
	}

	setMusicList() {
		//console.log( this.musicJson );
		this.musicList = new DoublyLinkedList();
		for (const key in this.musicJson) {
			const music = new Music(key);
			music.setMusicInformation(this.musicJson);

			//console.log( music.title );
			this.musicList.append(music);


		}
		//console.log( this.musicList.tail );
		this.currentMusic = this.musicList.head;

	}

	setInterface() { 
		this.coverArea.style.backgroundImage = this.currentMusic.cover;
		this.siteBackground.style.backgroundImage = this.currentMusic.cover;

		this.song.src = this.currentMusic.audio;
		this.songTitle.innerText = this.currentMusic.title;
		this.singer.innerText = this.currentMusic.singer;

		this.songControl.value = 0;
		this.playToggle.innerHTML = `<i class="${this.isPlaying ? "xi-pause" : "xi-play"} xi-5x toggleIcon"></i>`
	}

	controlSong() { 
		this.song.addEventListener( "loadedmetadata", () => {
			const minute = String(Math.floor( this.song.duration / 60 )).padStart(2, "0");
			const second = String(Math.floor( this.song.duration % 60 )).padStart(2, "0");
			
			this.songEndTime.innerHTML = `${minute}:${second}`;
		} )

		this.songControl.addEventListener("input", () => {
			//console.log(this.songControl.value);
			this.song.currentTime = (this.songControl.value * this.song.duration) / 100;
		});

		this.song.addEventListener("timeupdate", () => {
			if (this.isPlaying === true) {
				this.songControl.value = isNaN((this.song.currentTime / this.song.duration) * 100) ? 0 : (this.song.currentTime / this.song.duration) * 100;
			}

			const minute = String(Math.floor( this.song.currentTime / 60 )).padStart(2, "0");
			const second = String(Math.floor( this.song.currentTime % 60 )).padStart(2, "0");
			this.songCurrentTime.innerHTML = `${minute}:${second}`;
		});
	}

	clickButtons() {
		this.playToggle.addEventListener("click", () => {
			this.isPlaying = !this.isPlaying;
			if (this.isPlaying === true) {
				this.song.play();
			} else {
				this.song.pause();
			}
			
			this.playToggle.innerHTML = `<i class="${this.isPlaying ? "xi-pause" : "xi-play"} xi-5x toggleIcon"></i>`
		});
		this.nextButton.addEventListener("click", () => {
			this.currentMusic = this.currentMusic === this.musicList.tail ? this.musicList.head : this.currentMusic.next;
			
			this.setInterface();
			if (this.isPlaying === true) {
				this.song.play();
			}
		});

		this.prevButton.addEventListener("click", () => {
			if (this.song.currentTime > (this.song.duration / 10)) {
				this.song.currentTime = 0;
				this.songControl.value = 0;
			} else {
				this.currentMusic = this.currentMusic === this.musicList.head ? this.musicList.tail : this.currentMusic.prev;
				
				this.setInterface();
				if (this.isPlaying === true) {
					this.song.play();
				}
			}

		});
	}

	readyForStart() {
		this.setMusicList(); 
		this.setInterface(); 
		this.controlSong();
		this.clickButtons(); 
	}
}

const main = (() => {
	console.log("Page is ready");

	const musicPlayer = new MusicPlayer(JSON.parse(JSON.stringify(MusicJson)));
	musicPlayer.readyForStart();
})();


