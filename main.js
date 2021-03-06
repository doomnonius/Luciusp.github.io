var unitNameArr = [{name:"pds",hitsAt:6,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378192/Units/pds_mbkf73.png"},{name:"groundforce",hitsAt:8,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378190/Units/gf_vwdulh.png"},{name:"spacedock",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378192/Units/spacedock_qoxejy.png"},{name:"fighter",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378191/Units/fighter_a3hnqa.png"},{name:"destroyer",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378190/Units/destroyer_yonst9.png"},{name:"cruiser",hitsAt:7,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378191/Units/cruiser_orzbzd.png"},{name:"dreadnought",hitsAt:5,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378186/Units/dreadnaught_hoiajy.png"},{name:"carrier",hitsAt:9,numShots:1,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,w_50/a_90/v1483378188/Units/carrier_htzodi.png"},{name:"warsun",hitsAt:3,numShots:3,image:"http://res.cloudinary.com/luciusp/image/upload/c_scale,h_50/v1483378193/Units/warsun_tqrumm.png"}];

function resetRolls() {
  for (var a = 0; a < 9; a++) {
    if (document.getElementById(unitNameArr[a].name)) {
      while (document.getElementById(unitNameArr[a].name + "_div").childElementCount > 3)
        document.getElementById(unitNameArr[a].name + "_div").removeChild((document.getElementById(unitNameArr[a].name + "_div")).childNodes[3]);
    }
  }
}

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
  unitNameArr[6].hitsAt = 5;
  unitNameArr[7].hitsAt = 9;
  unitNameArr[8].hitsAt = 3;
}

function noModifiers() {
  var para = document.createElement("p");
  para.setAttribute("fontsize","20");
  para.setAttribute("id","para");
  para.innerHTML = "My race does not give any combat modifiers.";
  body.insertBefore(para, body.childNodes[6]);
}

function updateValue() {
  for (var a = 0; a < 9; a++) { //this for loop creates the keys numUnits and allShots and gives them values based on data from the .html for each object in unitNameArr
    if (document.getElementById(unitNameArr[a].name)) {
      unitNameArr[a].numUnits = document.getElementById(unitNameArr[a].name).value;
      if (unitNameArr[a].numUnits > 0) {
        console.log("Instantiated " + unitNameArr[a].numUnits + " " + unitNameArr[a].name + "s"); //instantiates all unit objects
        unitNameArr[a].allShots = (unitNameArr[a].numShots) * (unitNameArr[a].numUnits);
        allShots = unitNameArr[a].allShots;
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
  for (var a=0; a<9; a++){
    if (document.getElementById(unitNameArr[a].name + "_mods")) {
      console.log("Original: " + unitNameArr[a].hitsAt);
      unitNameArr[a].hitsAt -= ~~(document.getElementById(unitNameArr[a].name + "_mods").value);
      console.log("New: " + unitNameArr[a].hitsAt);
    }
  }
}

function createRow(a) {
  var tr = document.createElement("tr"); //create a div for the unit info
        tr.setAttribute("id", unitNameArr[a].name + "_div");
        var divBattle = document.getElementById("combat_div"); //put that div in the right spot
        divBattle.appendChild(tr);
        var td = document.createElement("td");
        var tdimage = document.createElement("td");
        var tdinput = document.createElement("td");
        var mods = document.createElement("input");
        mods.setAttribute("class", "picklist");
        mods.setAttribute("id", unitNameArr[a].name + "_mods");
        mods.setAttribute("type", "number");
        mods.setAttribute("value", 0);
        td.appendChild(mods);
        tr.appendChild(td);
        var image = document.createElement("img");//create image link
        image.setAttribute("id", unitNameArr[a].name + "_img");//add appropriate attributes
        image.setAttribute("alt", unitNameArr[a].name);
        image.setAttribute("src", unitNameArr[a].image);
        tdimage.appendChild(image);
        tr.appendChild(tdimage); //add image
        var inpt = document.createElement("input");//create entry box
        inpt.setAttribute("class", "picklist");//add appropriate attributes
        inpt.setAttribute("id", unitNameArr[a].name);
        inpt.setAttribute("type", "number");
        inpt.setAttribute("min","0");
        tdinput.appendChild(inpt);
        tr.appendChild(tdinput); //add input
}

function createCombat() { //this makes the elements for a space battle appear; practically this is going to involve putting the image links in the unit array
  if (!(document.getElementById("mods"))) {
      var thead = document.getElementById("theads");
      var header = document.createElement("th");
      header.setAttribute("id","mods");
      header.innerHTML = "Mods";
      thead.appendChild(header);
  }
  if (!(document.getElementById("type"))) {
      var thead = document.getElementById("theads");
      var header = document.createElement("th");
      header.setAttribute("id","type");
      header.innerHTML = "Type";
      thead.appendChild(header);
  }
  if (!(document.getElementById("count"))) {
      var thead = document.getElementById("theads");
      var header = document.createElement("th");
      header.setAttribute("id","count");
      header.innerHTML = "Count";
      thead.appendChild(header);
  }
  if (document.getElementById("space_battle").checked) { //create entry boxes for all space units
    for (var a = 2; a < 9; a++) {
      console.log(document.getElementById("space_battle").checked);
      if (!(document.getElementById(unitNameArr[a].name + "_div"))) {
        createRow(a);
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
        createRow(a);
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
          body.insertBefore(para, body.childNodes[6]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("para")) { if (document.getElementById("para").checked) { for (var a = 0; a < 9; a++) { unitNameArr[a].hitsAt--; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } } else { for (var a = 0; a < 9; a++) { unitNameArr[a].hitsAt++; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } } } });
          check.appendChild(scr);
          body.insertBefore(check, body.childNodes[6]);
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
          body.insertBefore(para, body.childNodes[6]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("para")) { if (document.getElementById("para").checked) { for (var a = 2; a < 9; a++) { unitNameArr[a].hitsAt--; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } unitNameArr[1].hitsAt = 6; } else { for (var a = 2; a < 9; a++) { unitNameArr[a].hitsAt++; console.log(unitNameArr[a].name + " now hits on " + unitNameArr[a].hitsAt); } unitNameArr[1].hitsAt = 8; } } });
          check.appendChild(scr);
          body.insertBefore(check, body.childNodes[6]);
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
          unitNameArr[5].hitsAt = 4;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[5].name + "s now have +1";
          body.insertBefore(para, body.childNodes[6]);
        } else {
          remove();
          unitNameArr[5].hitsAt = 4;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[5].name + "s now have +1. <br>";
          body.insertBefore(para, body.childNodes[6]);
        }
        console.log(unitNameArr[5].name + "s now hit at " + unitNameArr[5].hitsAt);
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
          body.insertBefore(para, body.childNodes[8]);
          var scr = document.createElement("script");
          scr.innerHTML = (function checkBox() { if (document.getElementById("para2")) { if (document.getElementById("para2").checked) { unitNameArr[1].hitsAt = 7; console.log(unitNameArr[1].name + " now hits on " + unitNameArr[1].hitsAt); } else { unitNameArr[1].hitsAt = 8; console.log(unitNameArr[1].name + " now hits on " + unitNameArr[1].hitsAt); } } } );
          check.appendChild(scr);
          body.insertBefore(check, body.childNodes[7]);
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
          body.insertBefore(para, body.childNodes[6]);
        } else {
          remove();
          unitNameArr[3].hitsAt = 8;
          var para = document.createElement("p");
          para.setAttribute("fontsize","20");
          para.setAttribute("id","para");
          para.setAttribute("display","block");
          para.innerHTML = "My " + unitNameArr[3].name + "s now have +1";
          body.insertBefore(para, body.childNodes[6]);
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
          body.insertBefore(para, body.childNodes[6]);
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
          body.insertBefore(para, body.childNodes[6]);
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
          body.insertBefore(para, body.childNodes[6]);
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
          body.insertBefore(para, body.childNodes[6]);
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
          para.innerHTML = "All units reset";
          body.insertBefore(para, body.childNodes[6]);
        }
        break;
    }
}
/*----------------------------------*/
function roller(rollTime) { //rolls number from 1-10 with a delay to make clear it's a new roll
  setTimeout(function() {
    if (!(document.getElementById("results"))) {
      var thead = document.getElementById("theads");
      var results = document.createElement("th");
      results.setAttribute("id","results");
      results.setAttribute("colspan", 30);
      results.innerHTML = "Results";
      thead.appendChild(results);
    }
    for (a = 0; a < 9; a++) {
      if (unitNameArr[a].allShots> 0) {
        var output = Math.floor(Math.random() * 10) + 0;
        console.log(unitNameArr[a].allShots);
        console.log(document.getElementById(unitNameArr[a].name + "_div").childElementCount);
        if (!(document.getElementById(unitNameArr[a].name + "_roll" + unitNameArr[a].allShots.toString()))) {
          var td = document.createElement("td");
          para = document.createElement("p");
          para.setAttribute("class","diceRoll");
          para.setAttribute("id",unitNameArr[a].name + "_roll" + unitNameArr[a].allShots.toString());
          var tr = document.getElementById(unitNameArr[a].name + "_div");
          td.appendChild(para);
          tr.appendChild(td);
        } 
        console.log(document.getElementById(unitNameArr[a].name + "_roll" + (unitNameArr[a].allShots).toString()));
        document.getElementById(unitNameArr[a].name + "_roll" + (unitNameArr[a].allShots).toString()).innerHTML = output;
        if (output>=unitNameArr[a].hitsAt) {
          document.getElementById(unitNameArr[a].name + "_roll" + (unitNameArr[a].allShots).toString()).style.color = "#F00";
        }
          for (i = 0; i < 100; i++) {
            roller();
          }
           unitNameArr[a].allShots--;
      }
    }
  }, rollTime)
}

function roll() {
  resetRolls();
  updateValue();
  roller(30);
}
