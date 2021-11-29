function calculate() {
	let num1 = parseInt(document.querySelector("#value1").value);
	let num2 = parseInt(document.querySelector("#value2").value);
	let operator = document.querySelector("#operator").value;
	var calculate;
	
	if(operator == "add") {
		calculate = num1 + num2;
	} else if(operator == "subtract") {
		calculate = num1 - num2;
	} else if(operator == "divide") {
		calculate = num1 / num2;
	} else if(operator == "multiply") {
		calculate = num1 * num2;
	} else if(operator == "modulus") {
		calculate = num1 % num2;
	}
	document.querySelector(".result").innerHTML = calculate;
	document.querySelector(".result").classList.add("display-result");
}