var unitNameArr = [["spacedock",6,1],["pds",6,1],["groundforce",8,1],["fighter",9,1],["carrier",9,1],["cruiser",7,1],["destroyer",9,1],["dreadnought",5,1],["warsun",3,3]]; //unit, hit, multiplier, number, attacks; order of units is matched to order in webapp
//to add here: first, a switch statement for how each race affects the results based on a selection list in the html file (actually, two lists because some races can penalize their opponents rolls); second, we'll need some way to mark upgrades and action cards and political cards and etc. that can influence battles, and there will be another function here that correctly applies how each one affects the rolls
function updateValue() {
	for (var i = 0; i < 9; i++) {
	unitNameArr[i][3] = document.getElementById(unitNameArr[i][0]).value;
	  if (unitNameArr[i][3] > 0) {
	    console.log("Instantiated " + unitNameArr[i][3] + " " + unitNameArr[i][0] + "s"); //instantiates all unit objects
	    for (a = 0; a < 9; a++) {
        unitNameArr[a][4] = (unitNameArr[a][3]) * (unitNameArr[a][2]);
      }
	  }
	}
}

/*----------------------------------*/
function roller(rollTime) { //rolls number from 0-9 with a delay to make clear it's a new roll; remember that 0=10, let's keep it like that to reflect what a d10 looks like
  setTimeout(function() {
	  var output = Math.floor(Math.random() * 10) + 0;
    for (a = 0; a < 9; a++) {
      if (unitNameArr[a][4]> 0) {
	      console.log(unitNameArr[a][4]);
	      console.log(unitNameArr[a][0] + "_roll" + (unitNameArr[a][4]).toString());
	      document.getElementById(unitNameArr[a][0] + "_roll" + (unitNameArr[a][4]).toString()).innerHTML = output;
	        for (i = 0; i < 100; i++) {
	          roller();
          }
   	      unitNameArr[a][4]--;
      }
    }
  }, rollTime)
}

function roll() {
	updateValue();
	roller(30);
}
