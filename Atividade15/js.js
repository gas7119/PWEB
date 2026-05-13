const n = document.forms["formulario"].elements["n"];
const e = document.forms["formulario"].elements["e"];
const c = document.forms["formulario"].elements["c"];
const ps= document.getElementById("sim");
const pn= document.getElementById("nao");

function VerificarDados() {
	let S = ps.checked; let N = pn.checked; let erromsg = "";

	if (n.value.length < 10)	{ erromsg += "Nome precisa ter ao menos 10 caracteres.\n";			}
	if (e.value.length < 1)		{ erromsg += "E-mail inválido.\n";									}
	if (c.value.length < 20)	{ erromsg += "Comentário precisa ter ao menos 20 caracteres.\n";	}
	if (!S && !N) 				{ erromsg += "É obrigatório responder à pesquisa.\n";				}
	if (erromsg != "")			{ alert(erromsg); return false;}

	alert(S ? "Volte sempre à esta página!" : "Que bom que você voltou a visitar esta página!");
	return true;
}

function Limpar() { n.value = ""; e.value = ""; c.value = ""; ps.checked = false; pn.checked = false; }