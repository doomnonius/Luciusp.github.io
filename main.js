var unitArr = ["gf","pds","spacedock","fighter","destroyer","carrier","cruiser","dreadnaught","warsun"];
var tiUnit = function(unitName) {console.log("Initiated Unit");};

var spacedock = new tiUnit(); //read this please: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

var x = 0;

function roller(rollTime) {
	setTimeout(function() {var output = Math.floor(Math.random() * 10) + 0;
	document.getElementById("tester").innerHTML = output;
	x++;
		if(x<100) {
			roller();
		};
	}, rollTime)
}

function roll() {
	x = 0;
	roller(30);
}

function updateValue() {
	var nameOf = document.getElementById("spacedock").value;
	console.log(nameOf);
	if (nameOf == 0) {
	}
}
