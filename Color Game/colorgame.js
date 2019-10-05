//all variable declarations:

var numofsquares = 6;
var colors = [];
var pickedcolor;

//all query selectors

var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetbutton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();


//all of my functions:

function init(){
	setupmode();
	setupsquares();
	reset();
}

function reset(){
	colors = generatecolors(numofsquares);
	pickedcolor = pickColor();                                              //pick a new random color from array
	colordisplay.textContent = pickedcolor;                                 //change color display to match picked color
	resetbutton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i< squares.length; i++){                                 //change colors of squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}

function setupmode(){
	for(var i = 0; i < modeButton.length; i++){                                     //mode button event listeners
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numofsquares = 3: numofsquares = 6;                  //we used ternary operator here
 
		// if(this.textContent === "Easy"){
		// 	numofsquares = 3;                                             //we can either use ternary operator or this if-else block
		// }else{
		// 	numofsquares = 6;
		// }

			reset();
		});
	}
}

function setupsquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){                 //add click listeners to squares
			var clickedcolor = this.style.backgroundColor;              //grab color of clicked square
			if(clickedcolor === pickedcolor){                          //compare color to pickedcolor
				messageDisplay.textContent = "Correct";
				resetbutton.textContent = "Play Again?";
				changeColors(clickedcolor);
				h1.style.backgroundColor = clickedcolor;
			} else{
				this.style.backgroundColor = "#232323"; 
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color){
	for(var i = 0; i< colors.length; i++){                 //loop through all squares
		squares[i].style.backgroundColor = color;          //chane each color  to match given color
	}
}

function generatecolors(num){
	var arr = [];                                          //make an array
	//add num random colors to arr
	for(var i = 0; i < num; i++){                          // repeat num times
		arr.push(randomcolor());                           //get random color and push into arr
	}
	return arr;                                            //return that arr
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



function randomcolor(){
	var r = Math.floor(Math.random() * 256);                       //pick a red from 0 to 255
	var g = Math.floor(Math.random() * 256);                       //pick a green to 0 to 255
	var b = Math.floor(Math.random() * 256);                       //pick a blue to 0 to 255
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


//all operations using variables and functions declared and defined above:

resetbutton.addEventListener("click", function(){
	reset();
});