var start = document.querySelector(".start");
var reset = document.querySelector(".reset");
var cancel = document.querySelector(".cancel");
var setUp = document.querySelector(".set-up");
var sessionStart = document.querySelector(".session-start");
var time = document.querySelector(".time");
var sessionsContainer = document.querySelector(".sessions-container");
var left = document.querySelector(".fa-caret-left");
var right = document.querySelector(".fa-caret-right");
var durationNumber = document.querySelector(".duration-number");
var breakNumber = document.querySelector(".break-number");
var sessionNumber = document.querySelector(".session-number");
var breakRight = document.querySelector(".break-time .fa-caret-right");
var breakLeft = document.querySelector(".break-time .fa-caret-left");
var sessionRight = document.querySelector(".session-length .fa-caret-right");
var sessionLeft = document.querySelector(".session-length .fa-caret-left");

var clearCountdown = 0;
//var seconds = 1500;
var breakTime = true;
var paused = true;

//setinterval stops time
function resetTime() {
	clearInterval(0);
	if (start.textContent === "Pause" || start.textContent === "Resume") {
		start.textContent = "Start";
	} else {
		start.textContent = "Start";
	}
	focusTimer();
}

function toggle() {
	if (start.textContent === "Start") {
		start.textContent = "Pause";
	} else if (start.textContent === "Pause") {
		start.textContent = "Resume";
	} else {
		start.textContent = "Pause";
	}
	focusTimer();
}

function nextPage() {
	setUp.style.display = "none";
	sessionStart.style.display = "block";
	time.textContent = durationNumber.textContent + ":00";
	//need to fix
	sessionsContainer.innerHTML = "";
	for (var i = 0; i < sessionNumber.innerText; i++) {
		sessionsContainer.innerHTML += "<div class='sessions'></div>";
	}

}

//reset numbers and margins to default
function toIntro() {
	sessionStart.style.display = "none";
	setUp.style.display = "block";
	start.textContent = "Start";
	durationNumber.textContent = 25;
	breakNumber.textContent = " 5 ";
	sessionNumber.textContent = " 4 ";
	if (durationNumber.textContent <= 9) {
		right.style.marginLeft = "34px";
		left.style.marginRight = "34px";
	} else {
		right.style.marginLeft = "30px";
		left.style.marginRight = "30px";
	}
	if (breakNumber.textContent < 10) {
		breakRight.style.marginLeft = "34px";
		breakLeft.style.marginRight = "34px";
	} else {
		breakRight.style.marginLeft = "30px";
		breakLeft.style.marginRight = "30px";
	}
	focusTimer();
}

function durationAddOne() {
	var plusOne = durationNumber.textContent;
	plusOne++;
	durationNumber.textContent = plusOne;
	if (durationNumber.textContent >= 40) {
		durationNumber.textContent = 40;
	}
	if (durationNumber.textContent <= 9) {
		right.style.marginLeft = "34px";
		left.style.marginRight = "34px";
	} else {
		right.style.marginLeft = "30px";
		left.style.marginRight = "30px";
	}
}

function durationSubtractOne() {
	var minusOne = durationNumber.textContent;
	minusOne--;
	durationNumber.textContent = minusOne;
	if (durationNumber.textContent <= 9) {
		right.style.marginLeft = "34px";
		left.style.marginRight = "34px";
	} else {
		right.style.marginLeft = "30px";
		left.style.marginRight = "30px";
	}
	if (durationNumber.textContent <= 1) {
		durationNumber.textContent = 1;
	}
}

function breakAddOne() {
	var plusOne = breakNumber.textContent;
	plusOne++;
	breakNumber.textContent = plusOne;
	if (breakNumber.textContent >= 20) {
		breakNumber.textContent = 20;
	}
	if (breakNumber.textContent >= 10) {
		breakRight.style.marginLeft = "30px";
		breakLeft.style.marginRight = "30px";
	}
}

function breakSubtractOne() {
	var minusOne = breakNumber.textContent;
	minusOne--;
	breakNumber.textContent = minusOne;
	if (breakNumber.textContent <= 1) {
		breakNumber.textContent = 1;
	}
	if (breakNumber.textContent < 10) {
		breakRight.style.marginLeft = "34px";
		breakLeft.style.marginRight = "34px";
	} else {
		breakRight.style.marginLeft = "30px";
		breakLeft.style.marginRight = "30px";
	}
}

function sessionAddOne() {
	var plusOne = sessionNumber.textContent;
	plusOne++;
	sessionNumber.textContent = plusOne;
	if (sessionNumber.textContentL >= 10) {
		sessionNumber.textContent = 10;
	}
	if (sessionNumber.textContent >= 10) {
		sessionRight.style.marginLeft = "30px";
		sessionLeft.style.marginRight = "30px";
	}
}

function sessionSubtractOne() {
	var minusOne = sessionNumber.textContent;
	minusOne--;
	sessionNumber.textContent = minusOne;
	if (sessionNumber.textContent <= 1) {
		sessionNumber.textContent = 1;
	}
	if (sessionNumber.textContent < 10) {
		sessionRight.style.marginLeft = "34px";
		sessionLeft.style.marginRight = "34px";
	} else {
		sessionRight.style.marginLeft = "30px";
		sessionLeft.style.marginRight = "30px";
	}
}

function focusTimer() {
	if (time.textContent.substring(2,3) === ":") {
		var seconds = time.textContent.substring(3,5);
		var minutes = time.textContent.substring(0,2);
	} else {
		var seconds = time.textContent.substring(2,4);
		var minutes = time.textContent.substring(0,1);
	}
	var handler = function setDurationTimer() {
		if (--seconds === -1) {
			seconds = 59;
			--minutes;
		}
		time.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
		if (minutes == 0 && seconds == 0) {
			clearInterval(clearCountdown);
		}
	}
	if (start.textContent === "Pause") {
		clearCountdown = setInterval(handler, 1000);
	} else if (start.textContent === "Resume") {
		clearInterval(clearCountdown);
	} else if (start.textContent === "Start") {
		clearInterval(clearCountdown);
		time.textContent = durationNumber.textContent + ":00";
	}
}