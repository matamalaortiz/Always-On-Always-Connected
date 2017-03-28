
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBiuFnow3ATj8T1p4_OTOrq5-H-lq2R7Yz9pg",
  authDomain: "music-a48a0.firebaseapp.com",
  databaseURL: "https://music-a48a0.firebaseio.com",
  storageBucket: "music-a48a0.appspot.com",
  messagingSenderId: "846232769714"
};

firebase.initializeApp(config);

var database = firebase.database();


var app = {
      // Application Constructor
      initialize: function() {
          document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      },

      // deviceready Event Handler
      //
      // Bind any cordova events here. Common events are:
      // 'pause', 'resume', etc.
      onDeviceReady: function() {
          this.receivedEvent('deviceready');
      },

      // Update DOM on a Received Event
      receivedEvent: function(id) {
          var parentElement = document.getElementById(id);
          var listeningElement = parentElement.querySelector('.listening');
          var receivedElement = parentElement.querySelector('.received');

          listeningElement.setAttribute('style', 'display:none;');
          receivedElement.setAttribute('style', 'display:block;');

          console.log('Received Event: ' + id);
      }

    };

    var boton = document.getElementById("btn");
    var boton = document.getElementById("btn1");
    var boton2 = document.getElementById("btn2");
    var boton3 = document.getElementById("btn3");
    var boton4 = document.getElementById("btn4");
    var boton5 = document.getElementById("btn5");

    //
    // boton.addEventListener('click', function(e){
    //   readClickCountOnce(function(value) {
    //   writeClickCount(value.buttonClicked+ 1);
    //   });
    //   e.preventDefault();
    //   return false;
    // });

  var down = false;

    function mouseDown(e) {
        var down = true;
        if (down === true ){
          firebase.database().ref('bt2').set({buttonClicked: 1});
        }
        e.preventDefault();
        return false;
    }


    function mouseUp() {
      var down = false;
      if (down === false ){
          firebase.database().ref('bt2').set({buttonClicked: 0});
      }
    }

    function mouseDown3(e) {
        var down = true;
        if (down === true ){
          firebase.database().ref('bt3').set({buttonClicked: 1});
        }
        e.preventDefault();
        return false;
    }


    function mouseUp3() {
      var down = false;
      if (down === false ){
          firebase.database().ref('bt3').set({buttonClicked: 0});
      }
    }

    function mouseDown4(e) {
        var down = true;
        if (down === true ){
          firebase.database().ref('bt4').set({buttonClicked: 1});
        }
        e.preventDefault();
        return false;
    }


    function mouseUp4() {
      var down = false;
      if (down === false ){
          firebase.database().ref('bt4').set({buttonClicked: 0});
      }
    }

    function mouseDown5(e) {
        var down = true;
        if (down === true ){
          firebase.database().ref('bt5').set({buttonClicked: 1});
        }
        e.preventDefault();
        return false;
    }


    function mouseUp5() {
      var down = false;
      if (down === false ){
          firebase.database().ref('bt5').set({buttonClicked: 0});
      }
    }

    function mouseDown0(e) {
        var down = true;
        if (down === true ){
          firebase.database().ref('btn').set({buttonClicked: 1});
        }
        e.preventDefault();
        return false;
    }


    function mouseUp0() {
      var down = false;
      if (down === false ){
          firebase.database().ref('btn').set({buttonClicked: 0});
      }
    }

    //
    // Funcion lee "Once" el estado actual de la bdd.
    // callback devuelve el ultimo estado.
      function readClickCountOnce(callback) {
        var clickCountRef = firebase.database().ref('counter');
        clickCountRef.once('value').then(function(snapshot) {
          var value = snapshot.val();
          console.log('read value:',value);
          callback(value);
        });
      }

    // Funcion que escribe/sobreescribe la bdd.
      function writeClickCount(int) {
        var clickCountRef = firebase.database().ref('counter');
        clickCountRef.set({buttonClicked: int});
      }



      var currentSearch = document.getElementById('name').value;

      searchButton = document.getElementById("submit");
      searchButton.addEventListener('click', buttonClicked);

      function buttonClicked() {

        var currentSearch = document.getElementById('name').value;
        firebase.database().ref('users').set({
          name: currentSearch,
          id: Math.floor(Math.random() * 100000000),
          });

      }


app.initialize();
