import { Aluno } from "./aluno";

export class AlunoEAD extends Aluno {
  assistirAula(): string {
    return `${this.nome} está assistindo aula online.`;
  }

  fazerProva(): string {
    return `${this.nome} está realizando a prova pelo sistema virtual.`;
  }
}