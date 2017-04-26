/// ########## FIREBASE ############ ///

var config = {
    apiKey: "AIzaSyBiuFnow3ATj8T1p4_OTOrq5-H-lq2R7Yz9pg",
    authDomain: "music-a48a0.firebaseapp.com",
    databaseURL: "https://music-a48a0.firebaseio.com",
    storageBucket: "music-a48a0.appspot.com",
    messagingSenderId: "846232769714"
};

firebase.initializeApp(config);
var database = firebase.database();
var video = document.querySelector('video')

database.ref('tower1').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("play tower 1");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/adelante.mp3").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#009FB7';
    document.querySelector("#circles").style.display = "none";
    video.classList.add('hide');
    }
});


database.ref('tower2').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("play telurico ");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/sky.mp3").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#black';
    document.querySelector("#circles").style.display = "block";
    video.classList.add('hide');
    console.log('changedisplay');
    }
});


database.ref('tower3').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    var n = Math.floor(Math.random() * 3);
    console.log(n);
    if (n >= 1) {
      console.log('st3 ok');
      var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/movimiento.mp3").toMaster()
      player.autostart = true;
      console.log('Play tower 3');
      video.classList.add('show');
      video.classList.remove('hide');
      document.querySelector("#circles").style.display = "none";
    }
  } else {
        video.classList.remove('show');
        video.classList.add('hide');
    }
});


database.ref('tower4').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("play tower 4");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/bastante.mp3").toMaster()
    player.autostart = true;
    var video = document.querySelector('video')
    console.log('hi');
    video.classList.add('hide');
    video.classList.remove('show');
    document.body.style.backgroundColor = '#971B2F';
    }
});


database.ref('tower5').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("Talk a Array 1");
    var phrases = ["https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1a.wav",
    "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1b.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1c.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1d.wav"]
    var newPhrase = [];
    for(var i = 0; i < phrases.length ; i++) {
      var idx = Math.floor(Math.random() * phrases.length);
      console.log(idx);
      newPhrase.push(phrases[idx]);
      phrases.splice(idx, 1);
      console.log(phrases[idx]);
      var player = new Tone.Player(phrases[idx]).toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#971B2F';
    }
  }
});
