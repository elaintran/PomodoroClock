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
var alarm = document.querySelector(".alarm");
var taskInput = document.querySelector(".task-input");
var button = document.querySelector(".button");
var title = document.querySelector(".title-screen");
var active = document.querySelector(".active");
var innerContainer = document.querySelector(".inner-container");
var nextPanel = document.querySelector(".next-panel");
var styleElem = document.head.appendChild(document.createElement("style"));
var taskComplete = document.querySelector(".task-complete");
var advance = document.querySelectorAll(".advance")[1];
var finish = document.querySelector(".finish");
var exclamation = document.querySelector(".fa-exclamation-circle");
var checkmark = document.querySelector(".fa-check-circle");

var clearCountdown = 0;
var focusTime = true;
var count = 0;
var sessionActive;

//setinterval stops time
function resetTime() {
	clearInterval(0);
	if (start.textContent === "Pause" || start.textContent === "Resume") {
		start.textContent = "Start";
	} else {
		start.textContent = "Start";
	}
	focusTimer();
	alarm.pause();
	alarm.currentTime = 0;
}

function toggle() {
	if (start.textContent === "Start") {
		start.textContent = "Pause";
	} else if (start.textContent === "Pause") {
		start.textContent = "Resume";
	} else if (start.textContent === "Resume") {
		start.textContent = "Pause";
	} else if (start.textContent === "Stop") {
		start.textContent = "Start";
		alarm.pause();
		alarm.currentTime = 0;
		if (focusTime) {
			startBreak();
			focusTime = false;
		} else {
			startFocus();
			focusTime = true;
		}
		if (count == sessionNumber.textContent) {
			startBreak();
			completion();
		}
		styleElem.innerHTML = "";
	}
	focusTimer();
}

function checkTyping() {
	if (taskInput.value === "") {
		taskInput.style.borderColor = "#f6605c";
		exclamation.style.display = "block";
		checkmark.removeAttribute("style");
	} else {
		taskInput.removeAttribute("style");
		exclamation.removeAttribute("style");
		checkmark.style.display = "block";
	}
}

function nextPage() {
	//prevents submission if task input is empty
	if (taskInput.value === "") {
		taskInput.style.borderColor = "#f6605c";
		exclamation.style.display = "block";
		return false
	}
	else {
		setUp.style.display = "none";
		nextPanel.style.display = "flex";
		if (durationNumber.textContent < 10) {
			time.textContent = "0" + durationNumber.textContent + ":00";
		} else {
			time.textContent = durationNumber.textContent + ":00";
		}
		//need to fix
		sessionsContainer.innerHTML = "";
		for (var i = 0; i < sessionNumber.innerText; i++) {
			sessionsContainer.innerHTML += "<div class='sessions'></div>";
		}
		sessionActive = document.querySelectorAll(".sessions")[0];
		sessionActive.classList.add("active");
		//return sessionActive;
	}
}

//reset numbers and margins to default
function toIntro() {
	nextPanel.style.display = "none";
	finish.style.display = "none";
	setUp.style.display = "block";
	start.textContent = "Start";
	taskInput.value = "";
	focusTime = true;
	taskInput.removeAttribute("style");
	exclamation.removeAttribute("style");
	checkmark.removeAttribute("style");
	//resets to 0 when startFocus is called
	count = -1;
	durationNumber.textContent = 25;
	breakNumber.textContent = 5;
	sessionNumber.textContent = 4;
	startFocus();
	alarm.pause();
	alarm.currentTime = 0;
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
	if (sessionNumber.textContent >= 10) {
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
	if (time.textContent.length === 5) {
		var minutes = time.textContent.substring(0,2);
		var seconds = time.textContent.substring(3,5);
	}
	function setDurationTimer() {
		if (--seconds === -1) {
			seconds = 59;
			--minutes;
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
		}
		time.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
		console.log(minutes);
		if (minutes <= 0 && seconds <= 0) {
			clearInterval(clearCountdown);
			start.textContent = "Stop";
			alarm.play();
		}
	}
	//press start
	if (start.textContent === "Pause") {
		//setDurationTimer();
		clearCountdown = setInterval(setDurationTimer, 1000);
		styleElem.innerHTML = "";
		if (focusTime) {
			var totalSeconds = (durationNumber.textContent * 60);
		} else if (!focusTime) {
			var totalSeconds = (breakNumber.textContent * 60);
			var animationBreak = ".clock:before, .clock:after {background: #25bc87;} .spin-one:after {background: #f6f6f6;} .spin-one:before {background: inherit;}";
			styleElem.append(animationBreak);
		}
		//console.log(totalSeconds);
		var animation = ".spin-two:before {animation: rotate1 " + totalSeconds + "s linear;} .spin-two:after {animation: rotate2 " + totalSeconds + "s linear;} .spin-two:before, .spin-two:after {animation-fill-mode: forwards; animation-play-state: running;}";
		styleElem.prepend(animation);
		if (minutes <= 0 && seconds <= 0) {
			clearInterval(clearCountdown);
		}
	//press pause
	} else if (start.textContent === "Resume") {
		clearInterval(clearCountdown);
		var animationPause = ".spin-two:before, .spin-two:after {animation-play-state: paused;}";
		styleElem.append(animationPause);
	//press reset
	} else if (start.textContent === "Start") {
		clearInterval(clearCountdown);
		var animationReset = ".spin-two:before, .spin-two:after {animation: none;}";
		styleElem.append(animationReset);
		if (!focusTime) {
			if (breakNumber.textContent < 10) {
				time.textContent = "0" + breakNumber.textContent + ":00";
			} else {
				time.textContent = breakNumber.textContent + ":00";
			}
		} else {
			if (durationNumber.textContent < 10) {
				time.textContent = "0" + durationNumber.textContent + ":00";
			} else {
				time.textContent = durationNumber.textContent + ":00";
			}
		}
	}
}

//change colors on break
function startBreak() {
	document.body.style.backgroundColor = "#25bc87";
	start.style.backgroundColor = "#25bc87";
	start.style.borderColor = "#25bc87";
	innerContainer.style.color = "#25bc87";
	advance.style.backgroundColor = "#25bc87";
	advance.style.borderColor = "#25bc87";
	for (var j = 0; j < count + 1; j++) {
		if (document.querySelectorAll(".sessions")[j] === undefined) {
			return false;
		} else {
			document.querySelectorAll(".sessions")[j].style.backgroundColor = "#25bc87";
		}
	}
}

//reset colors back to default
function startFocus() {
	time.textContent = durationNumber.textContent + ":00";
	document.body.removeAttribute("style");
	start.removeAttribute("style");
	innerContainer.removeAttribute("style");
	styleElem.innerHTML = "";
	sessionActive.removeAttribute("style");
	count++;
	console.log(count);
	if (count == sessionNumber.textContent) {
		return false;
	} else {
		document.querySelectorAll(".sessions")[count].classList.add("active");
	}
	for (var k = 0; k < count + 1; k++) {
		if (document.querySelectorAll(".sessions")[k] === undefined) {
			return false;
		} else {
			document.querySelectorAll(".sessions")[k].removeAttribute("style");
		}
	}
}

function completion() {
	finish.style.display = "flex";
	nextPanel.style.display = "none";
	taskComplete.textContent = "You have completed the following task: " + taskInput.value;
}