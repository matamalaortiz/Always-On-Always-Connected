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

database.ref('talka1').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("Talk a 1");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3a.wav").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#75ABBC';
  }
});

database.ref('talka2').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("Talk a 2");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3b.wav").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#23B5D3';
  }
});

database.ref('talka3').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log('Talk a 3');
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3c.wav").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#A2AEBB';
  }
});

database.ref('talka4').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log('talk a 4');
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/talk3d.wav").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#B4E7E8';
  }
});
