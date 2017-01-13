var unitNameArr = [{name:"spacedock",hitsAt:9,numShots:1},{name:"pds",hitsAt:6,numShots:1},{name:"groundforce",hitsAt:8,numShots:1},{name:"fighter",hitsAt:9,numShots:1},{name:"carrier",hitsAt:9,numShots:1},{name:"cruiser",hitsAt:7,numShots:1},{name:"destroyer",hitsAt:9,numShots:1},{name:"dreadnought",hitsAt:5,numShots:1},{name:"warsun",hitsAt:3,numShots:3}];
//to add: second, we'll need some way to mark upgrades and action cards and political cards and etc. that can influence battles, and there will be another function here that correctly applies how each one affects the rolls
function updateValue() {
	for (var a = 0; a < 9; a++) { //this for loop creates the keys numUnits and allShots and gives them values based on data from the .html for each object in unitNameArr
	unitNameArr[a].numUnits = document.getElementById(unitNameArr[a].name).value;
	  if (unitNameArr[a].numUnits > 0) {
	    console.log("Instantiated " + unitNameArr[a].numUnits + " " + unitNameArr[a].name + "s"); //instantiates all unit objects
	    unitNameArr[a].allShots = (unitNameArr[a].numShots) * (unitNameArr[a].numUnits);
	    allShots = unitNameArr[a].allShots;
	    console.log(allShots);
	  } else {  //this else loop hides all unit types (images, data entries, and dicerolls) that are not participating in the fight
      console.log("Hiding unused unit " + unitNameArr[a].name)
      document.getElementById(unitNameArr[a].name + "_div").setAttribute("hidden","");
	  }
	}
}

/*function shots() {
  for (var a = 0; a < 9; a++) {
   if (allShots > 0) {
      
	    allShots=allShots-1;
    }
    console.log(document.getElementById(unitNameArr[a].name + "_div").childElementCount);
  }
}
function checkBox() {
  if (document.getElementById("checkbox").checked) {
    for (var a = 0; a < 9; a++) {
      unitNameArr[a].hitsAt--;
      console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt)
    }
  }
}

function updateRace() {
  var race = document.getElementById("race").value;//here the race will be identified, and the switch statement that will account for each race's modifiers
  console.log(race);
  switch (race) { //a switch statement for how each race affects hitsAt, numShots, or allShots
      case "Letnev":
	      var para = document.createElement("p");
	      check = document.createElement("INPUT");
	      check.setAttribute("type", "checkbox");
	      check.setAttribute("onclick", "checkBox()");
	      check.setAttribute("id", "checkbox");
	      check.setAttribute("class","checkbox");
	      divSpace = document.getElementById("body");
	      divSpace.insertBefore(check, divSpace.childNodes[4]);
	      para.innerHTML = "I spend two trade goods to give my ships +1 or my groundforces +2.";
	      divSpace.insertBefore(para, divSpace.childNodes[5]);
	    case "Hacan":
	          
      case "Sol":
	          
	    case "L1Z1X":
	           
	    case "Mentak":
	          
	    case "Naalu":
	          
	    case "Sardakk":
	          
	    case "Jol-Nar":
	          
	    case "Xxcha":
	          
	    case "Yssaril":
	          
	    case "Saar":
	          
	    case "Muatt":
	          
	    case "Winnu":
	          
	    case "Yin":
	          
	    default:
	          
	  }
}*/
/*----------------------------------*/
function roller(rollTime) { //rolls number from 1-10 with a delay to make clear it's a new roll
  setTimeout(function() {
    for (a = 0; a < 9; a++) {
      if (unitNameArr[a].allShots> 0) {
	      var output = Math.floor(Math.random() * 10) + 0;
	      console.log(unitNameArr[a].allShots);
	      console.log(document.getElementById(unitNameArr[a].name + "_div").childElementCount);
        para = document.createElement("p");
  	    para.setAttribute("class","diceRoll");
  	    para.setAttribute("id",unitNameArr[a].name + "_roll" + unitNameArr[a].allShots.toString());
  	    div = document.getElementById(unitNameArr[a].name + "_div");
  	    div.appendChild(para);
  	    console.log(document.getElementById(unitNameArr[a].name + "_roll" + (unitNameArr[a].allShots).toString()));
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
