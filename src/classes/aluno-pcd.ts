import { Pessoa } from "./Pessoa";

export class AlunoPCD extends Pessoa {
  nota: number;

  constructor(nome: string, idade: number, cargo: string, nota: number) {
    super(nome, idade, cargo);
    this.nota = nota;
  }

  // 🔹 Polimorfismo: Sobrescrevendo o método apresentar() e consultarNota
  apresentar(): string {
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos, sou aluno PCD.`;
  }

  consultarNota(): string {
    return `A nota do aluno ${this.nome} é ${this.nota}. Obs: Aluno PCD`;
  }
}

// Testando o polimorfismo
const pessoa = new Pessoa("Carlos", 25, "Professor");
const alunoPCD = new AlunoPCD("Ana", 22, "Desenvolvedora", 9.5);

console.log(pessoa.apresentar());  
// Saída: "Olá, eu sou Carlos e tenho 25 anos e serei Professor."

console.log(alunoPCD.apresentar());  
// Saída: "Olá, eu sou Ana, tenho 22 anos, sou aluno PCD e serei Desenvolvedora."
