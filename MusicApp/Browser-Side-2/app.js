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

///########## END FIREBASE CONFIG ############ //

///########## BUTTON SENSOR TAG INIT ############ //

database.ref('st').on('value', function(snapshot) {

 var value = snapshot.val();

 if (value.buttonClicked === 1) {
   console.log("play");

   var kit = new Tone.MultiPlayer({
     "kick" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/kick7.wav",
     "snare" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/simplesnare2.WAV",
     "hh" : "https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/clap1.wav"
   }, function(){
      Tone.Transport.start()}).toMaster()

   var drumPattern = new Tone.Pattern(function(time, note){
     kit.start(note, time) }, ["kick", "hh", "snare", "hh",], 'up').start()
     drumPattern.playbackRate = 1.4;
     document.body.style.backgroundColor = "black";
 } else {
     console.log('stop');
   }
});

///########## BUTTON SENSOR TAG END ############ //
