function IMC() {
	let altura = parseFloat(document.getElementById("altura").value);
	let peso = parseFloat(document.getElementById("peso").value);

	if (altura && peso) {
		let imc = peso / (altura * altura);

		document.getElementById("r1").innerText = imc.toFixed(2);
		document.getElementById("r2").innerText = classificarIMC(imc);
		document.getElementById("r3").innerText = classificarObesidade(imc);
	}
}

function classificarIMC(imc) {
	switch (true) {
		case (imc < 18.5):	return "Magreza";
		case (imc < 25):	return "Normal";
		case (imc < 30):	return "Sobrepeso";
		case (imc < 40):	return "Obesidade";
		default:			return "Obesidade Grave";
	}
}

function classificarObesidade(imc) {
	switch (true) {
		case (imc < 18.5):	return "0";
		case (imc < 25):	return "0";
		case (imc < 30):	return "I";
		case (imc < 40):	return "II";
		default:			return "III";
	}
}