var unitNameArr = [{name:"pds",hitsAt:6,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378192/Units/pds_mbkf73.png"},{name:"groundforce",hitsAt:8,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378190/Units/gf_vwdulh.png"},{name:"spacedock",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378192/Units/spacedock_qoxejy.png"},{name:"fighter",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378191/Units/fighter_a3hnqa.png"},{name:"carrier",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378188/Units/carrier_htzodi.png"},{name:"cruiser",hitsAt:7,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378191/Units/cruiser_orzbzd.png"},{name:"destroyer",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378190/Units/destroyer_yonst9.png"},{name:"dreadnought",hitsAt:5,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378186/Units/dreadnaught_hoiajy.png"},{name:"warsun",hitsAt:3,numShots:3,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378193/Units/warsun_tqrumm.png"}];
var br = document.createElement("br");
//to add: it's stupid to make a checkbox for each possible instance of fight affecting cards, so i will just right more one more box with a min of -3 and a max of 3 for overall and for each unit individually. so thats ten boxes overall; these boxes need to be added to the creation part of the document; next, look into structure stuff and make all this information into a table so it looks better

function decrementXxcha() { //ie hitsAt +1; add an if-else for each possible way of getting penalties
  if (document.getElementById("xxcha_check").checked) {
    for (var a = 0; a < 9; a++) {
      unitNameArr[a].hitsAt++;
      console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); 
    }
  } else {
    for (var a = 0; a < 9; a++) {
      unitNameArr[a].hitsAt--;
      console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); 
    }
  }
}

function remove() {
  body.removeChild(document.getElementById("para"));
  if (document.getElementById("para2")) {
    body.removeChild(document.getElementById("para2"));
  }
  if (document.getElementById("para3")) {
    body.removeChild(document.getElementById("para3"));
  }
  unitNameArr[0].hitsAt = 6;
  unitNameArr[1].hitsAt = 8;
  unitNameArr[2].hitsAt = 9;
  unitNameArr[3].hitsAt = 9;
  unitNameArr[4].hitsAt = 9;
  unitNameArr[5].hitsAt = 7;
  unitNameArr[6].hitsAt = 9;
  unitNameArr[7].hitsAt = 5;
  unitNameArr[8].hitsAt = 3;
}

function noModifiers() {
  var para = document.createElement("p");
  para.setAttribute("fontsize","20");
  para.setAttribute("id","para");
  para.innerHTML = "My race does not give any combat modifiers.";
  body.insertBefore(para, body.childNodes[8]);
}

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
//  for (var a=0; a<9; a++){
//    unitNameArr[a].hitsAt = document.getElementById(unitNameArr[a].name + "_modify")
//  }
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
        if (!(document.getElementById("para"))) {
          var para = document.createElement("p");
          check = document.createElement("INPUT");
          check.setAttribute("type", "checkbox");
          check.setAttribute("onclick", "checkBox()");
          check.setAttribute("id", "para");
          check.setAttribute("class","checkbox");
          para.setAttribute("id","para2");
          para.innerHTML = "I spend two trade goods to give my ships +1 or my groundforces +2.";
          body.insertBefore(para, body.childNodes[8]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("para")) { if (document.getElementById("para").checked) { for (var a = 0; a < 9; a++) { unitNameArr[a].hitsAt--; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } } else { for (var a = 0; a < 9; a++) { unitNameArr[a].hitsAt++; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } } } });
          check.appendChild(scr);
          body.insertBefore(check, body.childNodes[8]);
        } else {
          remove();
          var para = document.createElement("p");
          check = document.createElement("INPUT");
          check.setAttribute("type", "checkbox");
          check.setAttribute("onclick", "checkBox()");
          check.setAttribute("id", "para");
          check.setAttribute("class","checkbox");
          para.setAttribute("id","para2");
          para.innerHTML = "I spend two trade goods to give my ships +1 or my groundforces +2.";
          body.insertBefore(para, body.childNodes[8]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("para")) { if (document.getElementById("para").checked) { for (var a = 2; a < 9; a++) { unitNameArr[a].hitsAt--; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } unitNameArr[1].hitsAt = 6; } else { for (var a = 2; a < 9; a++) { unitNameArr[a].hitsAt++; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } unitNameArr[1].hitsAt = 8; } } });
          check.appendChild(scr);
          body.insertBefore(check, body.childNodes[8]);
        }
        break;
      case "Hacan":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Sol":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "L1Z1X":
        if (!(document.getElementById("para"))) {
          unitNameArr[7].hitsAt = 4;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[7].name + "s now have +1";
          body.insertBefore(para, body.childNodes[8]);
        } else {
          remove();
          unitNameArr[7].hitsAt = 4;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[7].name + "s now have +1. <br>";
          body.insertBefore(para, body.childNodes[8]);
        }
        console.log(unitNameArr[7].name + "s now hit at " + unitNameArr[7].hitsAt);
        if (document.getElementById("invasion_combat").checked) {
          var para = document.createElement("p");
          check = document.createElement("INPUT");
          check.setAttribute("type", "checkbox");
          check.setAttribute("onclick", "checkBox()");
          check.setAttribute("id", "para2");
          check.setAttribute("class","checkbox");
          para.setAttribute("id","para3");
          para.setAttribute("display","block");
          para.innerHTML = "My groundforces are invading and therefore get +1.";
          body.insertBefore(para, body.childNodes[10]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("para2")) { if (document.getElementById("para2").checked) { unitNameArr[1].hitsAt = 7; console.log(unitNameArr[1].name + " now hits on " + unitNameArr[1].hitsAt); } else { unitNameArr[1].hitsAt = 8; console.log(unitNameArr[1].name + " now hits on " + unitNameArr[1].hitsAt); } } } );
          check.appendChild(scr);
          body.insertBefore(check, body.childNodes[9]);
        }
        break;
      case "Mentak":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Naalu":
        if (!(document.getElementById("para"))) {
          unitNameArr[3].hitsAt = 8;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[3].name + "s now have +1";
          body.insertBefore(para, body.childNodes[8]);
        } else {
          remove();
          unitNameArr[3].hitsAt = 8;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[3].name + "s now have +1";
          body.insertBefore(para, body.childNodes[8]);
        }
        break;
      case "Sardakk":
        if (!(document.getElementById("para"))) {
          for (var a = 0; a < 9; a++) { 
            unitNameArr[a].hitsAt--; 
            console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); 
          }
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "All my units now have +1";
          body.insertBefore(para, body.childNodes[8]);
        } else { 
          remove();
          for (var a = 0; a < 9; a++) { 
            unitNameArr[a].hitsAt--; 
            console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); 
          }
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "All my units now have +1";
          body.insertBefore(para, body.childNodes[8]);
        }
      break;
      case "Jol-Nar":
        if (!(document.getElementById("para"))) {
          for (var a = 0; a < 9; a++) { 
            unitNameArr[a].hitsAt++; 
            console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); 
          }
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "All my units now have -1";
          body.insertBefore(para, body.childNodes[8]);
        } else { 
          remove();
          for (var a = 0; a < 9; a++) { 
            unitNameArr[a].hitsAt++; 
            console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); 
          }
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "All my units now have -1";
          body.insertBefore(para, body.childNodes[8]);
        }
      break;
      case "Xxcha":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Yssaril":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Saar":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Muatt":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Winnu":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      case "Yin":
        if (!(document.getElementById("para"))) {
          noModifiers();
        } else {
          remove();
          noModifiers();
        }
        break;
      default: //deletes any elements created with the "para" id; resets all thingy stats to base value
        if (document.getElementById("para")) {
          remove();
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "All units reset"; //this is currently a lie
          body.insertBefore(para, body.childNodes[8]);
        }
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
