function MaiorTres() {
	let lista = new Array(3);
	for(i=0; i<3; i++) { while(!Number.isInteger(lista[i])) { lista[i] = parseInt(prompt(i+1 + "o numero:")) } }
	alert("O maior entre " + lista[0] + ", " + lista[1] + ", " + lista[2] + " é " + parseInt(Math.max(lista[0], lista[1], lista[2]) ) );
}

function CrescTres() {
	let lista = new Array(3);
	for(i=0; i<3; i++) { while(!Number.isInteger(lista[i])) { lista[i] = parseInt(prompt(i+1 + "o numero:")) } }
	lista.sort();
	alert("Ordem Crescente: " + lista[0] + ", " + lista[1] + ", " + lista[2]);
}

function Palindrom() {
	let a = prompt("Insira uma palavra...");
	let b = a.toUpperCase().replaceAll(" ", "");
	let c = "";
	for(i=b.length; i>=0; i--) { if(b[i] != null) {c = c + b[i]; } }
	alert(a + (b == c ? "" : " não") + " é um palindromo.");
}

function Subconjun() {
	let a = prompt("Insira a 1a palavra...");
	let b = prompt("Insira a 2a palavra...");
	
	if(!a  || !b)				{ alert("erro"); }
	else if ( a.includes(b) )	{ alert("é um subconjunto"); }
	else						{ alert("não é um subconjunto"); }
}

function DiaSemana() {
	let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	let ano, mes, dia = "";

	while(!Number.isInteger(ano)) { ano = parseInt(prompt("Insira o ano...")); }
	while(!Number.isInteger(mes)) { mes = parseInt(prompt("Insira o mes...")); }
	while(!Number.isInteger(dia)) { dia = parseInt(prompt("Insira o dia...")); }

	alert(ano + "/" + mes + "/" + dia + " é " + dias[new Date(ano + "-" + mes + "-" + dia).getDay()]);
}