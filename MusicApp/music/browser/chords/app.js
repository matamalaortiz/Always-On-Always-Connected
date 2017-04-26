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

database.ref('btn').on('value', function(snapshot) {
  var value = snapshot.val();
  if (value.buttonClicked === 1) {
    console.log("chord 1");
    var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_ambi_chord_C.mp3").toMaster()
    player.autostart = true;
    document.body.style.backgroundColor = '#91cfca';
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
    document.body.style.backgroundColor = 'plum';
  } else {
    console.log('stop');
    }
});


// ### Five Pad Chord C

database.ref('bt5').on('value', function(snapshot) {
  var value = snapshot.val();

  if (value.buttonClicked === 1) {
    console.log("play");


 var phrases = ["https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_lead_phrase.mp3",
    "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_lead_phrase_2.mp3","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_lead_phrase_4.mp3","https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_lead_phrase_short.mp3"]
 var newPhrase = [];

  for(var i = 0; i < phrases.length ; i++) {
      var idx = Math.floor(Math.random() * phrases.length);
      console.log(idx);
      newPhrase.push(phrases[idx]);
      phrases.splice(idx, 1);
      console.log(phrases[idx]);
      // console.log(newPhrase);
         var player = new Tone.Player(phrases[idx])
          .toMaster()
         player.autostart = true;
         document.body.style.backgroundColor = 'goldenrod';
  }

  }
});


// /// ########## USERS ############ ///
//
// database.ref('users').on('value', function(snapshot) {
//   var value = snapshot.val()
//   var name = value.name
//   console.log(name);
//   word.innerHTML = value.name;
// });
