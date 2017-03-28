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

/// ########## END FIREBASE CONFIG ############ ///

/// ########## PAD ############ ///

// ### First Pad Chord E

database.ref('btn').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_C.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "æ÷¡Ω≈";
    document.body.style.backgroundColor = 'orange';
  } else {
    console.log('stop');
    }
});

// ### Second Pad Chord A

database.ref('bt2').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_F.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "µµ˜√";
    document.body.style.backgroundColor = 'pink';
  } else {
    console.log('stop');
    }
});

// ### Third Pad Chord A

database.ref('bt3').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_G.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "∆˚¬¬"
    document.body.style.backgroundColor = '#ff3434';
  } else {
    console.log('stop');
    }
});

// ### Four Pad Chord C

database.ref('bt4').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_a_min.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "ºª•¶§";
    document.body.style.backgroundColor = 'blue';
  } else {
    console.log('stop');
    }
});


// ### Five Pad Chord C

database.ref('bt5').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_nasal_chord_C.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "•¶∞¶§";
    document.body.style.backgroundColor = 'lightgreen';
  } else {
    console.log('stop');
    }
});


/// ########## USERS ############ ///

database.ref('users').on('value', function(snapshot) {
  var value = snapshot.val()
  var name = value.name
  console.log(name);
  word.innerHTML = value.name;
});
