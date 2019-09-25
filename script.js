window.onload = function() {
	var numSquares = 6;
	var colors = [];
	var pickedColor;

	var squares = document.querySelectorAll(".square");
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.getElementById("messageDisplay");
	var h1Display = document.querySelector("h1");
	var resetButton = document.getElementById("btnReset");
	var modeButtons = document.querySelectorAll(".mode");

	init();

	function init() {
		setUpModeButtons();
		setUpSquares();
		reset();
	}

	function setUpModeButtons() {
		for (var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}

			reset();
			})
		}
	}

	function setUpSquares() {
		for (var i = 0; i < squares.length; i++) {
			squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				resetButton.textContent = "Play Again?";
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1Display.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}})
		}
	}

	function reset() {
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		for (var i = 0; i < squares.length; i++) {
			if (colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}

		h1Display.style.backgroundColor = "steelblue";
	}

	resetButton.addEventListener("click", function() {
		reset();
	});

	function changeColor(color) {
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor() {
		var randomNumber = Math.floor(Math.random() * colors.length);
		return colors[randomNumber];
	}

	function generateRandomColors(number) {
		var colors = [];
		for (var i = 0; i < number; i++) {
			colors.push(randomColor());
		}

		return colors;
	}

	function randomColor() {
		var redColor = Math.floor(Math.random() * 256);
		var greenColor = Math.floor(Math.random() * 256);
		var blueColor = Math.floor(Math.random() * 256);
		return "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";
	}
}