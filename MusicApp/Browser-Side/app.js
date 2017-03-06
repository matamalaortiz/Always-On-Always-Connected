// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiuFnow3ATj8T1p4_OTOrq5-H-lq2R7Yz9pg",
    authDomain: "music-a48a0.firebaseapp.com",
    databaseURL: "https://music-a48a0.firebaseio.com",
    storageBucket: "music-a48a0.appspot.com",
    messagingSenderId: "846232769714"
};
firebase.initializeApp(config);

var vue = new Vue({
    el: '#app',
    data: {
        message: 'Hi'
    }
});


var database = firebase.database();



console.log('ok');
var boton = document.getElementById("btn");
var reset = document.getElementById("reset");
var count = document.getElementById("count");
var nameUser = document.getElementById("nameUser");
var img = document.getElementById("picasso");
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
boton.addEventListener('click', function() {
    readClickCountOnce(function(value) {
        // console.log('clicked ->',value.buttonClicked);
        writeClickCount(value.buttonClicked + 1);
        // console.log(value.buttonClicked);

    });
});

// Event that overwrite the funcion writeClickCount with 0.
reset.addEventListener('click', function() {
    writeClickCount(0);
});

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

database.ref('counter').on('value', function(snapshot) {
    var value = snapshot.val();
    console.log('read value:', value);
    count.innerHTML = value.buttonClicked;
    picasso.style.transform = 'rotateX(' + value.buttonClicked + 'deg)'
    //  console.log('here +' + value.buttonClicked);

    // trigger Synth when counter is 1
    if (value.buttonClicked === 1) {
        console.log("hi");
        synth.triggerAttack('c2');
    } else {
        synth.triggerRelease();

    }
});

// 0 or 1 if the bt2 (in cordova) is pressed
database.ref('bt2').on('value', function(snapshot) {

    var value = snapshot.val();

    if (value.buttonClicked === 1) {
        console.log("play");

        synth2.triggerAttack('c4')


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

        var osc = new Tone.Oscillator().toMaster()

        var player = new Tone.Player("https://tonejs.github.io/examples/audio/casio/A1.mp3")
        	.toMaster()
        player.retrigger = true

        function playerCallback(time){
        	player.start(time).stop(time + 0.1)
        }

        function oscCallback(time){
        	osc.start(time).stop(time + 0.1)
        }

        //player scheduling
        Tone.Transport.schedule(playerCallback, 0)
        Tone.Transport.schedule(playerCallback, 1)
        Tone.Transport.schedule(playerCallback, 2)

        //oscil scheduling
        Tone.Transport.schedule(oscCallback, 0.5)
        Tone.Transport.schedule(oscCallback, 1.5)
        Tone.Transport.schedule(oscCallback, 2.5)

        Tone.Buffer.on('load', function(){
          Tone.Transport.start().stop("+5.5").start("+4")
        })
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
    nameUser.innerHTML = value.name;

})
