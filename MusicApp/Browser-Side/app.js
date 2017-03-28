// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiuFnow3ATj8T1p4_OTOrq5-H-lq2R7Yz9pg",
    authDomain: "music-a48a0.firebaseapp.com",
    databaseURL: "https://music-a48a0.firebaseio.com",
    storageBucket: "music-a48a0.appspot.com",
    messagingSenderId: "846232769714"
};
firebase.initializeApp(config);

// var vue = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hi'
//     }
// });


var database = firebase.database();



console.log('ok');
var boton = document.getElementById("btn");
var reset = document.getElementById("reset");
var count = document.getElementById("count");
var nameUser = document.getElementById("nameUser");
var img = document.getElementById("picasso");
var word = document.getElementById("word");
var countClick = 0;
var buttonState;
var name;
var audioCtx;
var oscillator;
var synth = new Tone.Synth().toMaster()
var synth2 = new Tone.Synth().toMaster()
var piano = new Tone.PolySynth(4, Tone.Synth, {
    "volume": -8,
    "oscillator": {
        "partials": [1, 2, 1],
    },
    "portamento": 0.05
}).toMaster()

var audioCtx;

window.addEventListener('load', function() {
    audioCtx = new(window.AudioContext || window.webkitAudioContext)();
})

// Event that goes to the database and read once the click state and add 1 to it.
// boton.addEventListener('click', function() {
//     readClickCountOnce(function(value) {
//         // console.log('clicked ->',value.buttonClicked);
//         writeClickCount(value.buttonClicked + 1);
//         // console.log(value.buttonClicked);
//
//     });
// });

// Event that overwrite the funcion writeClickCount with 0.
// reset.addEventListener('click', function() {
//     writeClickCount(0);
// });

// Read Once the state of counter and return the latest state
function readClickCountOnce(callback) {
    var clickCountRef = firebase.database().ref('counter');
    clickCountRef.once('value').then(function(snapshot) {
        var value = snapshot.val();
        console.log('read value:', value);
        callback(value);

    });
}

// Writes the latest count click
function writeClickCount(int) {
    var clickCountRef = firebase.database().ref('counter');
    clickCountRef.set({
        buttonClicked: int
    });
}

// Permanently reads the changes of the database.

// database.ref('counter').on('value', function(snapshot) {
//     var value = snapshot.val();
//     console.log('read value:', value);
//     count.innerHTML = value.buttonClicked;
//     picasso.style.transform = 'rotateX(' + value.buttonClicked + 'deg)'
//     //  console.log('here +' + value.buttonClicked);
//
//     // trigger Synth when counter is 1
//     if (value.buttonClicked === 1) {
//         console.log("hi");
//         synth.triggerAttack('c2');
//     } else {
//         synth.triggerRelease();
//
//     }
// });

// 0 or 1 if the bt2 (in cordova) is pressed
database.ref('bt2').on('value', function(snapshot) {

    var value = snapshot.val();

    if (value.buttonClicked === 1) {
        console.log("play");
        var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/workit.mp3")
          .toMaster()
          player.autostart = true;
        // synth2.triggerAttack('c4')
        word.innerHTML = "WORK IT";
        document.body.style.backgroundColor = '#ff3434';

    } else {

        // synthillator.stop();
        console.log('stop');
        synth2.triggerRelease()
    }

});


// 0 or 1 if the bt3 (in electron and sensor tag) is pressed
database.ref('bt3').on('value', function(snapshot) {

    var value = snapshot.val();

    if (value.buttonClicked === 1) {
        console.log("play sensotag");

        // synth.triggerAttack('c2')

        var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/makeit.mp3")
          .toMaster()
          player.autostart = true;
          word.innerHTML = "MAKE IT";
          document.body.style.backgroundColor = '#3caba2';

        readClickCountOnce(function(value) {
            // console.log('clicked ->',value.buttonClicked);
            writeClickCount(value.buttonClicked + 1);
            // console.log(value.buttonClicked);

        });

    } else {

        // synthillator.stop();
        console.log('stop sensortag');
        synth.triggerRelease()
    }

});


database.ref('bt4').on('value', function(snapshot) {

    var value = snapshot.val();

    if (value.buttonClicked === 1) {
        console.log("play sensotag");

        // synth.triggerAttack('c2')

        var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/doit.mp3")
          .toMaster()
          player.autostart = true;
          document.body.style.backgroundColor = '#ffae34';

          word.innerHTML = "DO IT";

        readClickCountOnce(function(value) {
            // console.log('clicked ->',value.buttonClicked);
            writeClickCount(value.buttonClicked + 1);
            // console.log(value.buttonClicked);

        });

    } else {

        // synthillator.stop();
        console.log('stop sensortag');
        synth.triggerRelease()
    }

});

database.ref('bt5').on('value', function(snapshot) {

    var value = snapshot.val();

    if (value.buttonClicked === 1) {
        console.log("play sensotag");

        // synth.triggerAttack('c2')

        var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/stronger.mp3")
          .toMaster()
          player.autostart = true;
          word.innerHTML = "STRONGER";
          document.body.style.backgroundColor = "yellow";


        readClickCountOnce(function(value) {
            // console.log('clicked ->',value.buttonClicked);
            writeClickCount(value.buttonClicked + 1);
            // console.log(value.buttonClicked);

        });

    } else {

        // synthillator.stop();
        console.log('stop sensortag');
        synth.triggerRelease()
    }

});

database.ref('btn').on('value', function(snapshot) {

    var value = snapshot.val();

    if (value.buttonClicked === 1) {
        console.log("play sensotag");

        // synth.triggerAttack('c2')

        var player = new Tone.Player("https://raw.githubusercontent.com/matamalaortiz/Always-On-Always-Connected/master/MusicApp/audios/makeus.mp3")
          .toMaster()
          player.autostart = true;
          word.innerHTML = "STRONGER";
          document.body.style.backgroundColor = "yellow";


        readClickCountOnce(function(value) {
            // console.log('clicked ->',value.buttonClicked);
            writeClickCount(value.buttonClicked + 1);
            // console.log(value.buttonClicked);

        });

    } else {

        // synthillator.stop();
        console.log('stop sensortag');
        synth.triggerRelease()
    }

});



// Getting the name of User

database.ref('users').on('value', function(snapshot) {
    var value = snapshot.val()
    var name = value.name
    console.log(name);
    word.innerHTML = value.name;

})
