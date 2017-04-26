///########## FIREBASE ############ //

var config = {
    apiKey: "AIzaSyBiuFnow3ATj8T1p4_OTOrq5-H-lq2R7Yz9pg",
    authDomain: "music-a48a0.firebaseapp.com",
    databaseURL: "https://music-a48a0.firebaseio.com",
    storageBucket: "music-a48a0.appspot.com",
    messagingSenderId: "846232769714"
};

firebase.initializeApp(config);
var database = firebase.database();
var drumPattern;
var drumPattern2;
var drumPattern3;
var playing = false;

database.ref('stb').on('value', function(snapshot) {
  var value = snapshot.val();
  console.log(playing);
  if (value.buttonClicked === 1 && !playing ) {
      playing = true;
      console.log("play kicks");
      var kit2 = new Tone.MultiPlayer({
       "kick1" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_kick_1.mp3",
       "silence" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/silence.mp3"
     }, function(){
        Tone.Transport.start()}).toMaster()

      drumPattern2 = new Tone.Pattern(function(time, note){
      kit2.start(note, time) }, ["kick1", "silence", "kick1", "silence",], 'up').start()
      drumPattern2.playbackRate = 1.8;
      document.body.style.animation = "random 5s infinite";
      document.body.style.backgroundColor = "yellow";
  }



    database.ref('st2').on('value', function(snapshot) {
      console.log('playing kit 2');
      var value = snapshot.val();
      if (value.buttonClicked === 1 && !playing) {
        playing = true;

        var kit = new Tone.MultiPlayer({
          "kick1" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_kick_1.mp3",
          "kick2" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_kick_2.mp3",
          "clap" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_clap.mp3",
          "hh" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_hihat.mp3",
          "rim" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/ale_rim.mp3",
          "silence" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/silence.mp3"
        }, function(){
          Tone.Transport.start()}).toMaster()

        drumPattern = new Tone.Pattern(function(time, note){
        kit.start(note, time) }, ["kick1", "hh", "clap", "hh",], 'up').start()
        drumPattern3 = new Tone.Pattern(function(time, note){
        kit.start(note, time) }, ["silence", "silence", "kick2", "silence",], 'up').start()
        drumPattern.playbackRate = 1.8;
        drumPattern3.playbackRate = 1.8;
        document.body.style.animation = "random 5s infinite";
      }
    });

    database.ref('st4').on('value', function(snapshot) {
      var value = snapshot.val();
      if (value.buttonClicked === 1) {
        playing = false;
        drumPattern.mute = true;
        drumPattern3.mute = true;
        document.body.style.backgroundColor = "magenta";
      }
    });

    database.ref('st5').on('value', function(snapshot) {
      var value = snapshot.val();
      if (value.buttonClicked === 1) {
        playing = false;
        drumPattern2.mute = true;
        document.body.style.backgroundColor = "magenta";
      }
    });

    database.ref('st3').on('value', function(snapshot) {
      var value = snapshot.val();
      if (value.buttonClicked === 1) {
        console.log('st3 ok');
  
        // drumPattern3.mute = true;
        var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/atentstgolargo.mp3").toMaster()
        player.autostart = true;

        document.body.style.animation = "black 5s infinite";
      }
    });
  // }
});
