var start = document.querySelector(".start");
var reset = document.querySelector(".reset");
var cancel = document.querySelector(".cancel");
var setUp = document.querySelector(".set-up");
var sessionStart = document.querySelector(".session-start");
var time = document.querySelector(".time");

function toggle() {
	if (start.innerHTML === "Start") {
		start.innerHTML = "Pause";
	} else if (start.innerHTML === "Pause") {
		start.innerHTML = "Resume";
	} else {
		start.innerHTML = "Pause";
	}
}

function nextPage() {
	setUp.style.display = "none";
	sessionStart.style.display = "block";
}

function toIntro() {
	sessionStart.style.display = "none";
	setUp.style.display = "block";
	start.innerHTML = "Start";
}