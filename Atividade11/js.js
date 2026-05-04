function OBJ(tipo) {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let f = document.getElementById("f").value;

	let Funcionario1;

    switch (tipo) {
        case 1:
            Funcionario1 = { matricula: m,	nome: n,	funcao: f	};
            break;

        case 2:
            Funcionario1 = {};
            Funcionario1["matricula"] = m;
            Funcionario1["nome"] = n;
            Funcionario1["funcao"] = f;
            break;

        case 3:
            Funcionario1 = {};
			Funcionario1.matricula = m;
			Funcionario1.nome = n;
			Funcionario1.funcao = f;
            break;
    }
	console.log(Funcionario1);
}