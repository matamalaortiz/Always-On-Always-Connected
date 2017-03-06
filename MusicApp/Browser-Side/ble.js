document.querySelector('#startButton').addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    if (isWebBluetoothEnabled()) {
        ChromeSamples.clearLog();
        onStartButtonClick();
    }
});

var bluetoothDevice;
var buttonStatusCharacteristic;
var log = ChromeSamples.log;

document.querySelector('#controlsDiv').hidden = true;
document.querySelector('#disconnectButton').addEventListener('click', disconnect);

function onStartButtonClick() {
  let sensorTagUuid = BluetoothUUID.getService(0xaa80);
  let serviceUuid = BluetoothUUID.getService(0xffe0);
  let buttonStatusCharacteristicUuid = BluetoothUUID.getCharacteristic(0xffe1);

  log('Requesting Bluetooth Device...');
  navigator.bluetooth.requestDevice(
    {
      filters: [{services: [sensorTagUuid]}],
      optionalServices: [serviceUuid]
    }
  ).then(device => {
    bluetoothDevice = device; // save a copy
    document.querySelector('#startButton').hidden = true;
    document.querySelector('#controlsDiv').hidden = false;
    log('Connecting to GATT Server...');
    return device.gatt.connect();
  })
  .then(server => {
    log('Getting Service...');
    return server.getPrimaryService(serviceUuid);
  })
  .then(service => {
    log('Getting Characteristic...');
    return service.getCharacteristics();
  })
  .then(characteristics => {

    // save references to the characteristics we care about
    characteristics.forEach(c => {

      switch(c.uuid) {
        case buttonStatusCharacteristicUuid:
          log('Button Status Characteristic');
          buttonStatusCharacteristic = c;
          buttonStatusCharacteristic.startNotifications().then(_ => {
            log('Button Status Notifications started');
            buttonStatusCharacteristic.addEventListener('characteristicvaluechanged', buttonStatusCharacteristicChanged);
          });
          break;

        default:
          log('Skipping ' + c.uuid);
      }
    });
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}

function buttonStatusCharacteristicChanged(event) {
  // Value is a DataView
  let value = event.target.value;
  let state = value.getUint8(0);
  console.log('Button Status Changed', state);

  // TI Sensor Tag uses a bit mask
  var LEFT_BUTTON = 1;  // 0001
  var RIGHT_BUTTON = 2; // 0010
  var REED_SWITCH = 4;  // 0100

  var message = '';

  if (state === 0) {
      message = 'No buttons are pressed.';
  }

  if (state & LEFT_BUTTON) {

            var osc = new Tone.Oscillator().toMaster()

            var player = new Tone.Player("https://tonejs.github.io/examples/audio/casio/A2.mp3")
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
  }else {
    // synthillator.stop();
    console.log('stop sensortag');
    synth.triggerRelease()
  }

  if (state & RIGHT_BUTTON) {
    document.body.style.backgroundColor = "red";
  }

  if (state & REED_SWITCH) {
      message += 'Reed switch is activated.<br/>';
  }

  statusDiv.innerHTML = message;

}

function disconnect() {
  if (bluetoothDevice && bluetoothDevice.gatt) {
    bluetoothDevice.gatt.disconnect();
  }
  document.querySelector('#startButton').hidden = false;
  document.querySelector('#controlsDiv').hidden = true;
}
