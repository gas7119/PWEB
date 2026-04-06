function CalcularMedia() {
	var nome = prompt("Digite o nome do aluno:");
	var n1 = parseFloat(prompt("Digite a 1ª nota:"));	var n2 = parseFloat(prompt("Digite a 2ª nota:"));
	var n3 = parseFloat(prompt("Digite a 3ª nota:"));	var n4 = parseFloat(prompt("Digite a 4ª nota:"));
	var media = (n1 + n2 + n3 + n4) / 4;

	alert(
		"Aluno: " + nome + "\n" +
		"Nota 1: " + n1 + "\n" +
		"Nota 2: " + n2 + "\n" +
		"Nota 3: " + n3 + "\n" +
		"Nota 4: " + n4 + "\n\n" +
		"Média Final: " + media.toFixed(2)
	);

	if (confirm("Deseja ir de novo?")) {	CalcularMedia();	}
}