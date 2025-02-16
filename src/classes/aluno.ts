import { Pessoa } from "./Pessoa";

export abstract class Aluno extends Pessoa { // Classe Aluno herda de os dados de Pessoa
// Aluno é abstrata, ou seja, não pode ser instanciada diretamente.

    // Atributos    
    nota: number;

    constructor(nome: string, idade: number, cargo: string, nota: number) {
      super(nome, idade, cargo);
      this.nota = nota;
    }   

    abstract assistirAula(): string;
    abstract fazerProva(): string;
    
    // Metodos
    apresentarAluno() {
      console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} `);
      return `Olá, eu sou ${this.nome} e tenho ${this.idade} `;
    }

    // Exemplo que o atributo cargo nao pode ser acessado pela classe aluno
    // apresentarAlunoComCargo() {
    //   console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} cargo ${this.cargo} `);
    //   return `Olá, eu sou ${this.nome} e tenho ${this.idade} cargo ${this.cargo} `;
    // }

    consultarNota() {
      console.log(`A nota do Aluno ${this.nome} é ${this.nota}.`);
      return `A nota do Aluno ${this.nome} é ${this.nota}.`;
    }
  }
  