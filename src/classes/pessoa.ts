export class Pessoa { // Classe Pessoa

  // Atributos
  nome: string;
  idade: number;
  private cargo: string; // Exemplo de encapsulamento

  constructor(nome: string, idade: number, cargo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  // Metodos
  apresentar() {
    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos e serei ${this.cargo}.`);
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos e serei ${this.cargo}.`;
  }
}

// Modificador	Pode ser acessado na própria classe?	Pode ser acessado por classes filhas?	Pode ser acessado fora da classe?
// private	    ✅ Sim	                              ❌ Não	                               ❌ Não
// protected	  ✅ Sim	                              ✅ Sim	                               ❌ Não
// public   	  ✅ Sim	                              ✅ Sim	                               ✅ Sim