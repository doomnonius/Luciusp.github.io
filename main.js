var unitNameArr = [{name:"spacedock",hitsAt:6,numShots:1},{name:"pds",hitsAt:6,numShots:1},{name:"groundforce",hitsAt:8,numShots:1},{name:"fighter",hitsAt:9,numShots:1},{name:"carrier",hitsAt:9,numShots:1},{name:"cruiser",hitsAt:7,numShots:1},{name:"destroyer",hitsAt:9,numShots:1},{name:"dreadnought",hitsAt:5,numShots:1},{name:"warsun",hitsAt:3,numShots:3}];
//to add here: first, a switch statement for how each race affects the results based on a selection list in the html file (actually, two lists because some races can penalize their opponents rolls); second, we'll need some way to mark upgrades and action cards and political cards and etc. that can influence battles, and there will be another function here that correctly applies how each one affects the rolls
function updateValue() {
	for (var i = 0; i < 9; i++) {
	unitNameArr[i].numUnits = document.getElementById(unitNameArr[i].name).value;
	  if (unitNameArr[i].numUnits > 0) {
	    console.log("Instantiated " + unitNameArr[i].numUnits + " " + unitNameArr[i].name + "s"); //instantiates all unit objects
	    for (a = 0; a < 9; a++) {
        unitNameArr[a].allShots = (unitNameArr[a].numShots) * (unitNameArr[a].numUnits);
      }
	  } //else (build some sort of thing here that makes all the unused units disappear)
	}
}

/*----------------------------------*/
function roller(rollTime) { //rolls number from 0-9 with a delay to make clear it's a new roll; remember that 0=10, let's keep it like that to reflect what a d10 looks like
  setTimeout(function() {
	  var output = Math.floor(Math.random() * 10) + 0;
    for (a = 0; a < 9; a++) {
      if (unitNameArr[a].allShots> 0) {
	      console.log(unitNameArr[a].allShots);
	      console.log(unitNameArr[a].name + "_roll" + (unitNameArr[a].allShots).toString());
	      document.getElementById(unitNameArr[a].name + "_roll" + (unitNameArr[a].allShots).toString()).innerHTML = output;
	        for (i = 0; i < 100; i++) {
	          roller();
          }
   	      unitNameArr[a].allShots--;
      }
    }
  }, rollTime)
}

function roll() {
	updateValue();
	roller(30);
}
