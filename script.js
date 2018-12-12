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
	time.innerHTML = durationNumber.innerHTML + ":00";
	sessionsContainer.innerHTML = "";
	for (var i = 0; i < sessionNumber.innerText; i++) {
		sessionsContainer.innerHTML += "<div class='sessions'></div>";
	}
}

function toIntro() {
	sessionStart.style.display = "none";
	setUp.style.display = "block";
	start.innerHTML = "Start";
}

function durationAddOne() {
	var plusOne = durationNumber.innerHTML;
	plusOne++;
	durationNumber.innerHTML = plusOne;
	if (durationNumber.innerHTML >= 40) {
		durationNumber.innerHTML = 40;
	}
	if (durationNumber.innerHTML <= 9) {
		right.style.marginLeft = "34px";
		left.style.marginRight = "34px";
	} else {
		right.style.marginLeft = "30px";
		left.style.marginRight = "30px";
	}
}

function durationSubtractOne() {
	var minusOne = durationNumber.innerHTML;
	minusOne--;
	durationNumber.innerHTML = minusOne;
	if (durationNumber.innerHTML <= 9) {
		right.style.marginLeft = "34px";
		left.style.marginRight = "34px";
	} else {
		right.style.marginLeft = "30px";
		left.style.marginRight = "30px";
	}
	if (durationNumber.innerHTML <= 1) {
		durationNumber.innerHTML = 1;
	}
}

function breakAddOne() {
	var plusOne = breakNumber.innerHTML;
	plusOne++;
	breakNumber.innerHTML = plusOne;
	if (breakNumber.innerHTML >= 20) {
		breakNumber.innerHTML = 20;
	}
	if (breakNumber.innerHTML >= 10) {
		breakRight.style.marginLeft = "30px";
		breakLeft.style.marginRight = "30px";
	}
}

function breakSubtractOne() {
	var minusOne = breakNumber.innerHTML;
	minusOne--;
	breakNumber.innerHTML = minusOne;
	if (breakNumber.innerHTML <= 1) {
		breakNumber.innerHTML = 1;
	}
	if (breakNumber.innerHTML < 10) {
		breakRight.style.marginLeft = "34px";
		breakLeft.style.marginRight = "34px";
	} else {
		breakRight.style.marginLeft = "30px";
		breakLeft.style.marginRight = "30px";
	}
}

function sessionAddOne() {
	var plusOne = sessionNumber.innerHTML;
	plusOne++;
	sessionNumber.innerHTML = plusOne;
	if (sessionNumber.innerHTML >= 10) {
		sessionNumber.innerHTML = 10;
	}
	if (sessionNumber.innerHTML >= 10) {
		sessionRight.style.marginLeft = "30px";
		sessionLeft.style.marginRight = "30px";
	}
}

function sessionSubtractOne() {
	var minusOne = sessionNumber.innerHTML;
	minusOne--;
	sessionNumber.innerHTML = minusOne;
	if (sessionNumber.innerHTML <= 1) {
		sessionNumber.innerHTML = 1;
	}
	if (sessionNumber.innerHTML < 10) {
		sessionRight.style.marginLeft = "34px";
		sessionLeft.style.marginRight = "34px";
	} else {
		sessionRight.style.marginLeft = "30px";
		sessionLeft.style.marginRight = "30px";
	}
}

//function addOne() {
//	var plusOne = parseInt(durationNumber);
//	console.log(durationNumber);
	//durationNumber.innerHTML = plusOne;
//}