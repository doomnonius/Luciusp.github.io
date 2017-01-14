var unitNameArr = [{name:"pds",hitsAt:6,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378192/Units/pds_mbkf73.png"},{name:"groundforce",hitsAt:8,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378190/Units/gf_vwdulh.png"},{name:"spacedock",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378192/Units/spacedock_qoxejy.png"},{name:"fighter",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378191/Units/fighter_a3hnqa.png"},{name:"carrier",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378188/Units/carrier_htzodi.png"},{name:"cruiser",hitsAt:7,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378191/Units/cruiser_orzbzd.png"},{name:"destroyer",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378190/Units/destroyer_yonst9.png"},{name:"dreadnought",hitsAt:5,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378186/Units/dreadnaught_hoiajy.png"},{name:"warsun",hitsAt:3,numShots:3,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378193/Units/warsun_tqrumm.png"}];
var br = document.createElement("br");
//to add: second, we'll need some way to mark upgrades and action cards and political cards and etc. that can influence battles, and there will be another function here that correctly applies how each one affects the rolls. I'm thinking of using checkboxes in a hidden menu.
function updateValue() {
  for (var a = 0; a < 9; a++) { //this for loop creates the keys numUnits and allShots and gives them values based on data from the .html for each object in unitNameArr
    if (document.getElementById(unitNameArr[a].name)) {
      unitNameArr[a].numUnits = document.getElementById(unitNameArr[a].name).value;
      if (unitNameArr[a].numUnits > 0) {
        console.log("Instantiated " + unitNameArr[a].numUnits + " " + unitNameArr[a].name + "s"); //instantiates all unit objects
        unitNameArr[a].allShots = (unitNameArr[a].numShots) * (unitNameArr[a].numUnits);
        allShots = unitNameArr[a].allShots;
        console.log(allShots);
      } else {  //this else loop hides all unit types (images, data entries, and dicerolls) that are not participating in the fight
        console.log("Hiding unused unit " + unitNameArr[a].name)
        if (document.getElementById(unitNameArr[a].name + "_div")) {
          var div = document.getElementById(unitNameArr[a].name + "_div");
          var divBattle = document.getElementById("combat_div");
          divBattle.removeChild(div);
        }
      }
    }
  }
}

function createCombat() { //this makes the elements for a space battle appear; practically this is going to involve putting the image links in the unit array
  if (document.getElementById("space_battle").checked) { //create entry boxes for all space units
    for (var a = 2; a < 9; a++) {
      console.log(document.getElementById("space_battle").checked);
      if (!(document.getElementById(unitNameArr[a].name + "_div"))) {
        var div = document.createElement("div"); //create a div for the unit info
        div.setAttribute("id", unitNameArr[a].name + "_div");
        var divBattle = document.getElementById("combat_div"); //put that div in the right spot
        divBattle.appendChild(div);
        var image = document.createElement("img");//create image link
        image.setAttribute("id", unitNameArr[a].name + "_img");//add appropriate attributes
        image.setAttribute("alt", unitNameArr[a].name);
        image.setAttribute("src", unitNameArr[a].image);
        var inpt = document.createElement("input");//create entry box
        inpt.setAttribute("class", "picklist");//add appropriate attributes
        inpt.setAttribute("id", unitNameArr[a].name);
        inpt.setAttribute("type", "number");
        inpt.setAttribute("min","0");
        div.appendChild(image); //add image
        div.appendChild(inpt); //add input
      }
    }
  } else { //remove all spacebattle boxes
    console.log(document.getElementById("space_battle").checked);
    for (var a = 2; a < 9; a++) {
      if (document.getElementById(unitNameArr[a].name + "_div")) {
        console.log(document.getElementById(unitNameArr[a].name + "_div"));
        var divBattle = document.getElementById("combat_div");
        divBattle.removeChild(document.getElementById(unitNameArr[a].name + "_div"));
      }
    }
  }
  if (document.getElementById("invasion_combat").checked) {
    for (a=0; a<2; a++) {
      console.log(document.getElementById("invasion_combat").checked);
      if (!(document.getElementById(unitNameArr[a].name + "_div"))) {
        var div = document.createElement("div"); //create a div for the unit info
        div.setAttribute("id", unitNameArr[a].name + "_div");
        var divBattle = document.getElementById("combat_div"); //put that div in the right spot
        divBattle.appendChild(div);
        var image = document.createElement("img");//create image link
        image.setAttribute("id", unitNameArr[a].name + "_img");//add appropriate attributes
        image.setAttribute("alt", unitNameArr[a].name);
        image.setAttribute("src", unitNameArr[a].image);
        var inpt = document.createElement("input");//create entry box
        inpt.setAttribute("class", "picklist");//add appropriate attributes
        inpt.setAttribute("id", unitNameArr[a].name);
        inpt.setAttribute("type", "number");
        inpt.setAttribute("min","0");
        div.appendChild(image); //add image
        div.appendChild(inpt); //add input
      }
    }
  } else {
    console.log(document.getElementById("invasion_combat").checked);
    for (a=0; a<2; a++) {
      if (document.getElementById(unitNameArr[a].name + "_div")) {
        console.log(document.getElementById(unitNameArr[a].name + "_div"));
        var divBattle = document.getElementById("combat_div");
        divBattle.removeChild(document.getElementById(unitNameArr[a].name + "_div"));
      }
    }
  }
}

function updateRace() { //let's not make "no race modifiers" the default, rather let's make the default to remove any extra elements that may have been produced
  var race = document.getElementById("race").value;//here the race will be identified, and the switch statement that will account for each race's modifiers
  console.log(race);
  switch (race) { //a switch statement for how each race affects hitsAt, numShots, or allShots
      case "Letnev":
        if (!(document.getElementById("checkbox_Letnev"))) {
          var para = document.createElement("p");
          check = document.createElement("INPUT");
          check.setAttribute("type", "checkbox");
          check.setAttribute("onclick", "checkBox()");
          check.setAttribute("id", "checkbox_Letnev");
          check.setAttribute("class","checkbox");
          divSpace = document.getElementById("body");
          divSpace.insertBefore(check, divSpace.childNodes[4]);
          para.innerHTML = "I spend two trade goods to give my ships +1 or my groundforces +2.";
          divSpace.insertBefore(para, divSpace.childNodes[5]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("checkbox_Letnev")) { if (document.getElementById("checkbox_Letnev").checked) { for (var a = 0; a < 9; a++) { unitNameArr[a].hitsAt--; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } } else { for (var a = 0; a < 9; a++) { unitNameArr[a].hitsAt++; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } } } });
          divSpace.insertBefore(scr, divSpace.childNodes[6]);
          divSpace.insertBefore(br, divSpace.childNodes[7]);
          divSpace.insertBefore(br, divSpace.childNodes[8]);
        }
        break;
      case "Hacan":
        if (!(document.getElementById("para"))) {
        var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.innerHTML = "Your class does not give any combat modifiers.";
          body.insertBefore(para, body.childNodes[4]);
        }
        break;
      case "Sol":
        if (!(document.getElementById("para"))) {
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.innerHTML = "Your class does not give any combat modifiers.";
          body.insertBefore(para, body.childNodes[4]);
        }
        break;
      case "L1Z1X":
        if (!(document.getElementById("para"))) {
          unitNameArr[7].hitsAt--;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.innerHTML = "Your " + unitNameArr[7].name + "s now hit at " + unitNameArr[7].hitsAt;
          body.insertBefore(para, body.childNodes[4]);
        }
        console.log("Your " + unitNameArr[7].name + "s now hit at " + unitNameArr[7].hitsAt);
        //groundforces get +1 when attacking only; add another checkbox
        break;
      case "Mentak":
            
      case "Naalu":
            
      case "Sardakk":
            
      case "Jol-Nar":
            
      case "Xxcha":
            
      case "Yssaril":
            
      case "Saar":
        if (!(document.getElementById("para"))) {
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.innerHTML = "Your class does not give any combat modifiers.";
          body.insertBefore(para, body.childNodes[4]);
        }
        break;
      case "Muatt":
        if (!(document.getElementById("para"))) {
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.innerHTML = "Your class does not give any combat modifiers.";
          body.insertBefore(para, body.childNodes[4]);
        }
        break;
      case "Winnu":
            
      case "Yin":
            
      default: //deletes any elements created with the "para" id; resets all thingy stats to base value
        var para = document.createElement("p");
        para.setAttribute("fontsize","20");
        para.innerHTML = "Your class does not give any combat modifiers.";
        body.insertBefore(para, body.childNodes[4]);
        break;
    }
}
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
