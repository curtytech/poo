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


