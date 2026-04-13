const PEDRA   = 0;
const PAPEL   = 1;
const TESOURA = 2;
let vitorias = 0;
let percas = 0;
let ps = document.getElementById("P");
let gs = document.getElementById("G");

function Jogar(escolha) {
	let robo_escolha = Math.floor(Math.random()*3);
	let vitoria = "PERDEU!";

	if		(escolha == robo_escolha)		{	vitoria = "EMPATE!"; }
	else if	(Mata(escolha, robo_escolha))	{	vitoria = "GANHOU!"; }

	if		(vitoria == 'PERDEU!')	{ ps.innerHTML = "Humanoide: " + ++percas; }
	else if	(vitoria == 'GANHOU!')	{ gs.innerHTML = "Humano: " + ++vitorias; }

	alert("VOCÊ: " + Dizer(escolha) + "\nROBÔ: " + Dizer(robo_escolha) + "\n" + vitoria);
}

function Dizer(a) {
	switch(a) {
		case PEDRA:		return "PEDRA";
		case PAPEL:		return "PAPEL";
		case TESOURA:	return "TESOURA";
	}
}

function Mata(e1, e2) {
	return ( (e1 == PEDRA && e2 == TESOURA)	|| (e1 == TESOURA && e2 == PAPEL) || (e1 == PAPEL && e2 == PEDRA) );
}