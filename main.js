var unitNameArr = [["spacedock",6,1],["pds",6,1],["groundforce",8,1],["fighter",9,1],["carrier",9,1],["cruiser",7,1],["destroyer",9,1],["dreadnought",5,1],["warsun",3,1]]; //unit, hit, attacks; order of units is matched to order in webapp
//to add here: first, a switch statement for how each race affects the results based on a selection list in the html file (actually, two lists because some races can penalize their opponents rolls); second, we'll need some way to mark upgrades and action cards and political cards and etc. that can influence battles, and there will be another function here that correctly applies how each one affects the rolls
var numUnits = unitNameArr.length-1;
var tiUnit = function(unitName,rollVal) { //unit object
	this.name = unitName;
	this.roll = rollVal;
	console.log("Instantiated " + unitName); //confirms all units instantiated
};

var unitList = createUnits(numUnits); //instantiates all unit objects


/*----------------------------------*/

var x = 0;
function roller(rollTime) { //rolls number from 0-9 with a delay to make clear it's a new roll; remember that 0=10, let's keep it like that to reflect what a d10 looks like
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
