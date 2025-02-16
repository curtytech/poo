import { Aluno } from "./aluno";

export class AlunoRegular extends Aluno {
  assistirAula(): string {
    return `${this.nome} está assistindo aula presencialmente.`;
  }

  fazerProva(): string {
    return `${this.nome} está realizando a prova na escola.`;
  }

  // Ao comentar um dos metodos acima dará erro pois como a classe Aluno é abstrata a classe AlunoRegular deve implementar todos os metodos abstratos da classe Aluno.
}