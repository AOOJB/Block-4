class ALU{
	constructor(){	
		var RegA = [];
		var RegB = [];

		document.getElementById("btnA").addEventListener("click", function(){
			if(RegA.length < 16){
				if(document.getElementById("inputA").value <= 0){
					RegA += 0;
				}
				else{
					RegA += document.getElementById("inputA").value;
				}
				document.getElementById("pA").innerHTML = RegA;
			}

		});

		document.getElementById("btnB").addEventListener("click", function(){
			if(RegB.length < 16){
				if(document.getElementById("inputB").value <= 0){
					RegB += 0;
				}
				else{
					RegB += document.getElementById("inputB").value;
				}
				document.getElementById("pB").innerHTML = RegB;
			}
		});

		document.getElementById("btnRST").addEventListener("click", function(){
			RegA = [];
			RegA.length = 0;
			RegB = [];
			RegB.length = 0;
			document.getElementById("pA").innerHTML = "A";
			document.getElementById("pB").innerHTML = "B";
		})
	}
}


var result = new ALU();

basomvandling(10000, 10, 12);

function basomvandling(nummer, inputbas, outputbas){
	var nummer;
	var inputbas;
	var outputbas;
	var outputnummer = [];

	for(nummer; nummer >= 1; nummer = nummer - (nummer - rest)){
		rest = nummer % outputbas;
		x = nummer - rest;
		x = x/outputbas;
		outputnummer += x;
	}
	console.log(outputnummer);
}