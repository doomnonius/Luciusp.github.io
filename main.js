var test = "Wassup, Bentleigh!";
var unitArr = ["gf","pds","spacedock","fighter","destroyer","carrier","cruiser","dreadnaught","warsun"];
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

roller(30);