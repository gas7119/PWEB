const r = document.getElementById("ret");
const x = document.getElementById("base");
const y = document.getElementById("altura");

function CriarRetangulo() {
	let ret = new Retangulo(x.value, y.value);
	console.log(ret);
}

function AltRetangulo() {
	r.style.width = x.value + "px";
	r.style.height = y.value + "px";
}

class Retangulo {
	constructor(base, altura) {
		this.base = base;
		this.altura = altura;
		this.areaRet = this.calcularArea();
	}
	
	getBase()	{ return this.base;   }

	getAltura()	{ return this.altura; }

	calcularArea() {
		return (this.getBase() * this.getAltura());
	}
}

function CriarCorrente() {
	let nome			= document.getElementById("noC").value;
	let correntista		= document.getElementById("coC").value;
	let banco			= document.getElementById("baC").value;
	let idConta			= document.getElementById("ncC").value;
	let saldo			= document.getElementById("saC").value;
	let saldoEspecial	= document.getElementById("seC").value;

	let conCor = new Corrente(nome, correntista, banco, idConta, saldo, saldoEspecial);
	console.log(conCor);
}

function CriarPoupanca() {
	let nome			= document.getElementById("noP").value;
	let correntista		= document.getElementById("coP").value;
	let banco			= document.getElementById("baP").value;
	let idConta			= document.getElementById("ncP").value;
	let saldo			= document.getElementById("saP").value;
	let juros			= document.getElementById("juP").value;
	let dataVenc		= document.getElementById("dvP").value;

	let conPou = new Poupanca(nome, correntista, banco, idConta, saldo, juros, dataVenc);
	console.log(conPou);
}

class Conta {
	constructor(nome, correntista, banco, idConta, saldo) {
		this.setNome(nome);
		this.setCorrentista(correntista);
		this.setBanco(banco);
		this.setIdConta(idConta);
		this.setSaldo(saldo);
	}
	
	setNome(n)			{ this.nome = n; }
	setCorrentista(c)	{ this.correntista = c; }
	setBanco(b)			{ this.banco = b; }
	setIdConta(i)		{ this.idConta = i; }
	setSaldo(s)			{ this.saldo = s; }

	getNome()			{ return this.nome; }
	getCorrentista()	{ return this.correntista; }
	getBanco()			{ return this.banco; }
	getIdConta()		{ return this.idConta; }
	getSaldo()			{ return this.saldo; }
}

class Corrente extends Conta {
	constructor(nome, correntista, banco, idConta, saldo, saldoEspecial) {
		super(nome, correntista, banco, idConta, saldo);
		this.setSaldoEspecial(saldoEspecial);
	}
	
	setSaldoEspecial(s)			{ this.saldoEspecial = s; }

	getSaldoEspecial()			{ return this.saldoEspecial; }
}

class Poupanca extends Conta {
	constructor(nome, correntista, banco, idConta, saldo, juros, dataVenc) {
		super(nome, correntista, banco, idConta, saldo);
		this.setJuros(juros);
		this.setDataVenc(dataVenc);
	}
	
	setJuros(j)		{ this.juros = j; }
	setDataVenc(d)	{ this.dataVenc = d; }

	getJuros()		{ return this.juros; }
	getDataVenc()	{ return this.dataVenc; }
}
