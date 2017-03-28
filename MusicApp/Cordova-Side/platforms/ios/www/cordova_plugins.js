cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.mbppower.camerapreview.CameraPreview",
        "file": "plugins/com.mbppower.camerapreview/www/CameraPreview.js",
        "pluginId": "com.mbppower.camerapreview",
        "clobbers": [
            "cordova.plugins.camerapreview"
        ]
    },
    {
        "id": "cordova-plugin-ble-central.ble",
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
            "ble"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.mbppower.camerapreview": "0.0.8",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-ble-central": "1.1.4",
    "cordova-plugin-compat": "1.1.0"
};
// BOTTOM OF METADATA
});