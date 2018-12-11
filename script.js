var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
var cancel = document.querySelector(".cancel");

$(document).ready(function() {
	$(".start").on("click", function() {
		$(".start").hide();
		$(".pause").show();
		$(".cancel").show();
	})
	$(".cancel").on("click", function() {
		$(".start").show();
		$(".pause").hide();
		$(".cancel").hide();
	})
});

function toggle() {
	if (pause.innerHTML === "Pause") {
		pause.innerHTML = "Resume";
	} else {
		pause.innerHTML = "Pause";
	}
}