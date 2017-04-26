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

database.ref('talk1').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("play talk 1");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1a.wav").toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#E43C54';
    }
});

database.ref('talk2').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("play talk 2");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1b.wav").toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#704E99';
    }
});


database.ref('talk3').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log('playtalk 3');
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1c.wav").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#A96670';
    }
});

database.ref('talk4').on('value', function(snapshot) {
    var value = snapshot.val();
    if (value.buttonClicked === 1) {
      console.log('play talk 4');
      var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk1c.wav").toMaster()
      player.autostart = true;
      document.body.style.backgroundColor = '#A590BE';
    }
});
