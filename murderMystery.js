

var suspect = "";
var room = "gallery";

var weapon = "";
var solved = true;


if (room === "gallery" && suspect === "Cleve"){
	weapon === "trophy"
	solved === true
}
	else if (room === "ballroom" && suspect === "Mr Kalehoff") {
		weapon === "poison"
		solved === true
	}
	else if (room === "billiards room" && suspect === "Mrs Sparr"){
		weapon === "pool stick"
		solved === true
	}
	else if(room === "dining room" && suspect ==="Mr. Parkes"){
		weapon === "knife"
		solved === true
	}	
	else
		solved === false

	if (solved){
		console.log("solved")
		console.log(suspect + "did it in the" + room + "with the" + weapon);
	}
	else
		console.log("unsolved")


	