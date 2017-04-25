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

database.ref('tower1').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_C.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "¥ππ∆";
    document.body.style.backgroundColor = '#009FB7';
  } else {
    console.log('stop');
    }
});

// ### Second Pad Chord A

database.ref('tower2').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_F.mp3")
     .toMaster()
    player.autostart = true;
    word.innerHTML = "µµ˜√";
    document.body.style.backgroundColor = '#E4DFDA';
  } else {
    console.log('stop');
    }
});

// ### Third Pad Chord A

database.ref('tower3').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    var video = document.querySelector('video')
    console.log('hi');
    video.classList.add('show');
    video.classList.remove('hide');

  } else {
    video.classList.remove('show');
    video.classList.add('hide');
    // console.log('stop');
    }
});

// ### Four Pad Chord C

database.ref('tower4').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/samples/masha.mp3")
     .toMaster()
    player.autostart = true;
    var video = document.querySelector('video')
    console.log('hi');
    video.classList.add('hide');
    video.classList.remove('show');
    word.innerHTML = "ºª•¶§";
    document.body.style.backgroundColor = 'blue';
  } else {
    console.log('stop');
    }
});


// ### Five Pad Chord C

database.ref('tower5').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");

    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/samples/masha.mp3")
     .toMaster()
    player.autostart = true;

  }
});
