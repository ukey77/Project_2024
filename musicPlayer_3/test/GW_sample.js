const musicImage = [
  { id: "고백", img: "img/goback", name: "양다일" },
  { id: "사랑이란", img: "img/love" },
  { id: "나쁜년", img: "img/bitch" }
];

const musicAudio = [
  { id: "가사", audio: "audio/양다일 - 고백" },
  { id: "가사", audio: "audio/양다일 - 사랑이란" },
  { id: "가사", audio: "audio/B ch (Feat. CHANGMO)" }
];

musicImage.forEach(
  (v) => {
    document.getElementById('bigListFrame').innerHTML += `<image class="songListFrame" src="${v['img']}">`;
    document.getElementById('bigListFrame').innerHTML += `
    <h3 class="totalListTitle">${v['id']}<span class="smallTitle"><br>${v['name']}</span></h3>`
  }
);


document.getElementById('down').addEventListener(
  'click',
  () => {
    document.getElementById('totalMusicList').style.display = "none";

  }
);


document.getElementById('musicList').addEventListener(
  'click',
  () => {
    document.getElementById('totalMusicList').style.display = "block";

  }
);

document.getElementById('Volume').addEventListener(
  'click',
  () => {
    document.getElementById('volumeRange').style.display = "block";

  }
);

document.getElementById('volumeRange').addEventListener(
  'change',
  () => {
    document.getElementById('volumeRange').style.display = "none";
  }
);

class Deck {
  constructor(id) {
    this.id = id;
    this.storageImage = [];
    this.storageAudio = [];
    this.length = 0;
  }
  pushItem(musicImage) {
    this.storageImage.push(musicImage);
    //console.log(this.storageImage);
  }
  popItem() {
    return this.storageImage.pop();
  }
  unshiftItem(musicImage) {
    this.storageImage.unshift(musicImage);
  }
  shiftItem() {
    return this.storageImage.shift();
  }
  pushAudio(audio) {
    this.storageAudio.push(audio);
    //console.log(this.storageAudio);
  }
  popAudio() {
    return this.storageAudio.pop();
  }
  unshiftAudio(audio) {
    this.storageAudio.unshift(audio);
  }
  shiftAudio() {
    return this.storageAudio.shift();
  }
  lengthItem() {
    this.length = this.storageImage.length;
    //console.log(this.length);
    return this.length;
  }
}



class MusicAudio {
  constructor(id) {
    this.id = id;
    this.musicAudio = new Deck('musicAudio');
    this.leftClick = '';
    this.rigthClick = '';
    this.audioFrame = '';
    this.startClick = '';
    this.stopClick = '';
    this.audioRealTime = '';
  }
  cycle(cycleItem) {
    cycleItem.forEach(
      (v) => {
        this.musicAudio.pushAudio(v);
      }
    );
  }
  leftItem(item, audioFrame) {
    this.startClick = document.getElementById('Play');
    this.stopClick = document.getElementById('Stop');
    this.audioRealTime = document.getElementById('musicRange');
    let frontAudio = this.musicAudio.storageAudio[1];
    let outputFront = `<audio id="start" src="${frontAudio['audio']}"></audio>`;
    audioFrame.innerHTML = outputFront;



    item.addEventListener(
      'click',
      () => {
        let frontAudio = this.musicAudio.storageAudio[1];
        let front = this.musicAudio.shiftAudio();
        let outputFront = `<audio id="start" src="${frontAudio['audio']}"></audio>`;
        audioFrame.innerHTML = outputFront;
        this.timeSetting();
        //document.getElementById('start').play();
        this.musicAudio.pushAudio(front);
        this.audioRealTime.value = 0;
        this.startClick.style.display = 'block';
        this.stopClick.style.display = 'none';

      }
    );
    const audioBtn = (value) => {
      this.startClick.addEventListener(
        'click',
        () => {
          this.startClick.style.display = 'none';
          this.stopClick.style.display = 'block';
          document.getElementById('start').play();
          this.timeSetting();
          //value = document.getElementById('start').currentTime;
          //realTime(value);
        }
      );
      this.stopClick.addEventListener(
        'click',
        () => {
          this.startClick.style.display = 'block';
          this.stopClick.style.display = 'none';
          document.getElementById('start').pause();

        }
      );
    }
    audioBtn(0);
  }
  /*
  const realTime = ( realTimeItem ) =>{

    document.getElementById('firstTime').innerHTML =  realTimeItem < 10? '0:0' + Math.floor(realTimeItem) : '0:' + Math.floor(realTimeItem);
  }*/
  rigthItem(item, audioFrame) {
    item.addEventListener(
      'click',
      () => {
        const backAudio = this.musicAudio.popAudio();
        const outputBack = `<audio id="start" src="${backAudio['audio']}"></audio>`;
        audioFrame.innerHTML = outputBack;
        this.timeSetting();
        // document.getElementById('start').play();
        this.musicAudio.unshiftAudio(backAudio);
        this.audioRealTime.value = 0;
        this.startClick.style.display = 'block';
        this.stopClick.style.display = 'none';

      }
    );
  }
  timeSetting() {
    let realAudio = document.getElementById('start');
    realAudio.addEventListener(
      'loadeddata',
      () => {

        const totalTime = realAudio.duration || 0; //duration 전체시간
        const min = Math.floor(totalTime / 60);
        const sec = Math.floor(totalTime % 60);
        const totMin = min.toString().padStart(2, "0");
        const totSec = sec.toString().padStart(2, "0");
        document.getElementById('totalTime').innerHTML = totMin + ":" + totSec;


        //console.log( totMin +":"+ totSec);
      }
    );

    //현재시간 구하기
    realAudio.addEventListener(
      'timeupdate',
      () => {

        let currentTime = realAudio.currentTime; // audio 의 currentTime;

        //this.audioRealTime.value = currentTime;
        this.audioRealTime.max = realAudio.duration;
        //console.log(this.audioRealTime.value);
        //console.log(currentTime);
        //const totalBar = this.audioRealTime.width; //움직이는 바
        //console.log(totalBar);
        const totalTime = realAudio.duration || 0; // 전체시간이 0이 될 때 까지

        //console.log(totalTime);
        let totalBarCalculator = (currentTime / realAudio.duration) * 100 + "%";
        //console.log(totalBarCalculator);

        // this.audioRealTime.style.width = totalBarCalculator;
        //this.audioRealTime.style.width = 30 + "rem"; 

        let min = Math.floor(currentTime / 60);
        let sec = Math.floor(currentTime % 60);
        let currentMin = min.toString().padStart(2, "0");
        let currentSec = sec.toString().padStart(2, "0");
        //console.log(currentMin + ":" + currentSec);
        document.getElementById('firstTime').innerHTML = currentMin + ":" + currentSec;
        //console.log(totalBarCalculator);
        //console.log(totalBar);


      }
    );

    this.audioRealTime.addEventListener(
      'change',
      (event) => {
        document.getElementById('start').currentTime = event.target.value; // 슬라이드 하는 법

      }

    );

  }
  targetDom(targetItem1, targetItem2, audioFrame) {
    this.leftClick = document.getElementById(targetItem1);
    this.rigthClick = document.getElementById(targetItem2);
    this.audioFrame = document.getElementById(audioFrame);
    this.leftItem(this.leftClick, this.audioFrame);
    this.rigthItem(this.rigthClick, this.audioFrame);
  }

}


class Music {
  constructor(id) {
    this.id = id;
    this.musicPlay = new Deck('musicPlay');
    this.leftClick = '';
    this.rigthClick = '';
    this.imageFrame = '';
    this.musicTitle = '';
  }
  cycle(cycleItem) {
    cycleItem.forEach(
      (v) => {
        this.musicPlay.pushItem(v);
      }
    );
  }
  leftItem(item, imageFrame, musicTitle) {
    item.addEventListener(
      'click',
      () => {
        const frontImage = this.musicPlay.storageImage[1];
        const front = this.musicPlay.shiftItem();
        const outputFront = `<image src="${frontImage['img']}">`;
        const outputName = `<p class="">${frontImage['id']}<span class="Mtitle"><br>${frontImage['name']}</span></p>`;
        imageFrame.innerHTML = outputFront;
        musicTitle.innerHTML = outputName;
        this.musicPlay.pushItem(front);
        //alert(123);
      }
    );
  }
  rigthItem(item, imageFrame, musicTitle) {
    item.addEventListener(
      'click',
      () => {
        const backImage = this.musicPlay.popItem();
        const outputBack = `<image src="${backImage['img']}">`;
        imageFrame.innerHTML = outputBack;
        musicTitle.innerHTML = `<p>${backImage['id']}</p>`;

        this.musicPlay.unshiftItem(backImage);


        //alert(111);
      }
    );
  }
  targetDom(targetItem1, targetItem2, imageFrame, musicTitle) {
    this.leftClick = document.getElementById(targetItem1);
    this.rigthClick = document.getElementById(targetItem2);
    this.imageFrame = document.getElementById(imageFrame);
    this.musicTitle = document.getElementById(musicTitle);
    //console.log(this.rigthClick);
    this.leftItem(this.leftClick, this.imageFrame, this.musicTitle);
    this.rigthItem(this.rigthClick, this.imageFrame, this.musicTitle);
  }

}



const imageCycle = new Music('imageCycle');
imageCycle.cycle(musicImage);
imageCycle.targetDom('Back', 'Next', 'imgFrame', 'musicTitle');


const audioCycle = new MusicAudio('audioCycle');
audioCycle.cycle(musicAudio);
audioCycle.targetDom('Back', 'Next', 'musicListFrame');


