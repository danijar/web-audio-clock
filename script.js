// Global constants
var tick = new Audio('tick.mp3');
var tock = new Audio('tock.mp3');
var element = document.getElementById('elapsed');

// Global variables
var interval;
var seconds = 0;

// Create interval for the clock
function startClock() {
	interval = setInterval(function() {
		if (seconds % 10 == 0)
			tock.play();
		else
			tick.play();
		elapsed.innerHTML = seconds.toString();
		seconds++;
	}, 1000);
}

// Remove the current lock interval
function stopClock() {
	clearInterval(interval);
}

// Start initial clock once
startClock();

// Pause clock when tab loses focus
window.onfocus = function() { startClock() };
window.onblur = function() { stopClock() };
