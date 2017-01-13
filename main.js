var unitNameArr = [{name:"spacedock",hitsAt:6,numShots:1},{name:"pds",hitsAt:6,numShots:1},{name:"groundforce",hitsAt:8,numShots:1},{name:"fighter",hitsAt:9,numShots:1},{name:"carrier",hitsAt:9,numShots:1},{name:"cruiser",hitsAt:7,numShots:1},{name:"destroyer",hitsAt:9,numShots:1},{name:"dreadnought",hitsAt:5,numShots:1},{name:"warsun",hitsAt:3,numShots:3}];
//to add here: first, a switch statement for how each race affects the results based on a selection list in the html file (actually, two lists because some races can penalize their opponents rolls); second, we'll need some way to mark upgrades and action cards and political cards and etc. that can influence battles, and there will be another function here that correctly applies how each one affects the rolls
function updateValue() {
	
	for (var a = 0; a < 9; a++) { //this for loop creates the keys numUnits and allShots and gives them values based on data from the .html for each object in unitNameArr
	unitNameArr[a].numUnits = document.getElementById(unitNameArr[a].name).value;
	  if (unitNameArr[a].numUnits > 0) {
	    console.log("Instantiated " + unitNameArr[a].numUnits + " " + unitNameArr[a].name + "s"); //instantiates all unit objects
	    unitNameArr[a].allShots = (unitNameArr[a].numShots) * (unitNameArr[a].numUnits);
	  } else {  //this else loop hides all unit types (images, data entries, and dicerolls) that are not participating in the fight
      document.getElementById(unitNameArr[a].name).style.display = "none";
      document.getElementById(unitNameArr[a].name + "_img").setAttribute("class", "datalist");
      for (var i = 1; i < 31; i++) {
        document.getElementById(unitNameArr[a].name + "_roll" + i).setAttribute("class", "datalist");
      }
	  }
	}
}

/*----------------------------------*/
function roller(rollTime) { //rolls number from 1-10 with a delay to make clear it's a new roll
  setTimeout(function() {
	  var output = Math.floor(Math.random() * 10) + 1;
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
