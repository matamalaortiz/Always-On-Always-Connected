$(function(){

	var msgs = ["You are an awesome photographer", "You are a great photographer!", "OMG!! You are so good!", "WOW you are awesome!"];
	var msg = msgs[Math.floor(Math.random()*msgs.length)];


	function photoSuccess(imgData) {
		$("#img_cam").attr("src",imgData);
		$("#nice").removeClass("hidden");
		$("#nice").html(msg);
		$("#btn_camera").html("Try Again");
		$("#firstMSG").addClass("hidden")

	}

	function camError(error) {
		$("#nice").html("Something went wrong");

	}

	function accessCamera() {
		var options = {
			destinationType: Camera.DestinationType.FILE_URI,
			source: Camera.PictureSourceType.CAMERA
		};

		navigator.camera.getPicture(photoSuccess, camError, options);

	}

	$("#btn_camera").on("click", accessCamera);
})
