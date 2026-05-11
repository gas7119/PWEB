const links = ["https://thumbs.dreamstime.com/z/%C3%ADcone-do-sensor-de-quebra-vidro-isolado-em-fundo-branco-logotipo-vetorial-simples-254988558.jpg?ct=jpeg", "https://thumbs.dreamstime.com/z/%C3%ADcone-de-glifo-do-sensor-quebra-vidro-isolado-em-fundo-branco-logotipo-vetorial-simples-221190224.jpg?ct=jpeg", "https://thumbs.dreamstime.com/z/%C3%ADcone-de-janela-quebrada-isolado-em-fundo-branco-logotipo-vetorial-simples-221193222.jpg"]
const descs = ["Aberta", "Fechada", "Quebrada", "Abra a Janela"]

function Janela(n) {
	if (document.getElementById("t").innerText != "Janela Quebrada") {
		document.getElementById("t").innerText = (n != 3 ? "Janela " : "") + descs[n];
		document.getElementById("j").src = n == 3 ? links[1] : links[n];
	}
}
