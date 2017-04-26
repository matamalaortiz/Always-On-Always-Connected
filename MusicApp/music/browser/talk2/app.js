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


database.ref('talka1').on('value', function(snapshot) {
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
      document.body.style.backgroundColor = '#75ABBC';
    }
  }
});

database.ref('talka2').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("Talk a Array 1");
    var phrases = ["https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk2a.wav",
    "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk2b.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk2c.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk2d.wav"]
    var newPhrase = [];
    for(var i = 0; i < phrases.length ; i++) {
      var idx = Math.floor(Math.random() * phrases.length);
      console.log(idx);
      newPhrase.push(phrases[idx]);
      phrases.splice(idx, 1);
      console.log(phrases[idx]);
      var player = new Tone.Player(phrases[idx]).toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#23B5D3';
    }
  }
});

database.ref('talka3').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("Talk a Array 1");
    var phrases = ["https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3a.wav",
    "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3b.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3c.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3d.wav"]
    var newPhrase = [];
    for(var i = 0; i < phrases.length ; i++) {
      var idx = Math.floor(Math.random() * phrases.length);
      console.log(idx);
      newPhrase.push(phrases[idx]);
      phrases.splice(idx, 1);
      console.log(phrases[idx]);
      var player = new Tone.Player(phrases[idx]).toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#A2AEBB';
    }
  }
});

database.ref('talka4').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("Talk a Array 1");
    var phrases = ["https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk4a.wav",
    "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk4b.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk4c.wav","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk4d.wav"]
    var newPhrase = [];
    for(var i = 0; i < phrases.length ; i++) {
      var idx = Math.floor(Math.random() * phrases.length);
      console.log(idx);
      newPhrase.push(phrases[idx]);
      phrases.splice(idx, 1);
      console.log(phrases[idx]);
      var player = new Tone.Player(phrases[idx]).toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#B4E7E8';
    }
  }
});


database.ref('tower3').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    var n = Math.floor(Math.random() * 4);
    console.log(n);
    if (n > 2) {
      console.log('st3 ok');
      var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/movimiento.mp3").toMaster()
      player.autostart = true;
      console.log('Play tower 3');
      video.classList.add('show');
      video.classList.remove('hide');
    }
  } else {
        video.classList.remove('show');
        video.classList.add('hide');
    }
});
