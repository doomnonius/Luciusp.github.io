var unitNameArr = [["groundforce",8],["pds",6],["spacedock",6],["fighter",9],["destroyer",9],["carrier",9],["cruiser",7],["dreadnought",5],["warsun",3]];
var numUnits = unitNameArr.length-1;
var tiUnit = function(unitName,rollVal) { //unit object
	this.name = unitName;
	this.roll = rollVal;
	console.log("Instantiated " + unitName); //confirms all units instantiated
};

var unitList = createUnits(numUnits); //instantiates all unit objects


/*----------------------------------*/

var x = 0;
function roller(rollTime) { //rolls number from 0-9 with a delay to make clear it's a new roll
	setTimeout(function() {var output = Math.floor(Math.random() * 10) + 0;
	document.getElementById("spacedock_roll0").innerHTML = output;
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

function createUnits(n) {
	var arr = [];
	while (n >= 0) {
		arr.push(new tiUnit(unitNameArr[n][0],unitNameArr[n][1]));
		n--;
	}
	console.log('Success!');
	return arr;
}