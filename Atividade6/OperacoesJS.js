function Calculadora() {
	var n1 = parseFloat(prompt("Digite o primeiro número:"));
	var n2 = parseFloat(prompt("Digite o segundo número:"));

	alert(
		"Soma: " + (n1+n2) + "\n" +
		"Subtração: " + (n1 - n2) + "\n" +
		"Produto: " + (n1 * n2) + "\n" +
		"Divisão: " + (n1 / n2) + "\n" +
		"Resto: " + (n1 % n2)
	);

	if (confirm("Deseja ir de novo?")) {	Calculadora();	}
}   