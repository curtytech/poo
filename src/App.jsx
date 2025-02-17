import { useState } from "react";
import { Pessoa } from "./classes/Pessoa";
import { Aluno } from "./classes/aluno";
import { AlunoPCD } from "./classes/aluno-pcd";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AlunoRegular } from "./classes/aluno-regular";
import { AlunoEAD } from "./classes/aluno-ead";

function App() {
  const [mensagem, setMensagem] = useState("");
  const [studentMsg, setStudentMsg] = useState("");
  const [studentMsgPCD, setStudentMsgPCD] = useState("");
  const [studentMsgAbstractExample, setStudentMsgAbstractExample] = useState("");

  function clearStates() {
    setMensagem("");
    setStudentMsg("");
    setStudentMsgPCD("");
    setStudentMsgAbstractExample("");
  }
  function handleApresentar() {
    const pessoa = new Pessoa("Phelipe Curty", 30, "Professor do SENAI");
    setMensagem(pessoa.apresentar()); 
  }
  function handleConsultarNota() {
    const aluno = new Aluno("Gustavo Silva", 15, "", 7);
    setStudentMsg(aluno.consultarNota()); 
  }

  function handleConsultarNotaPCD() {
    const aluno = new AlunoPCD("Juliana Costa", 15, "", 7);
    setStudentMsgPCD(aluno.consultarNota()); 
  }

  function handleAlunoRegular() {
    const aluno = new AlunoRegular("André Pereira", 18, "");
    // let msg = aluno.apresentar() + "\n";
    let msg = aluno.assistirAula() + "\n";
    msg += aluno.fazerProva();
    setStudentMsgAbstractExample(msg);
  }

  function handleAlunoEAD() {
    const aluno = new AlunoEAD("Mariana Batista", 22, "");
    // let msg = aluno.apresentar() + "\n";
    let msg = aluno.assistirAula() + "\n";
    msg += aluno.fazerProva();
    setStudentMsgAbstractExample(msg);
  }


  return (
    <>
      <div>
        <a href="https://firjan.com.br/pagina-inicial.htm" target="_blank">
          <img src="../public/firjan.png" className="logo" alt="SENAI LOGO" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={clearStates}>Limpar</button>
      <h1>Programação Orientada a Objetos</h1>
      <button onClick={handleApresentar}>Apresentar futuro professor</button>
      <h3>{mensagem}</h3>
      <br />

      <button onClick={handleConsultarNota}>Consultar Nota</button>
      <h3>{studentMsg}</h3>
      <br />

      <button onClick={handleConsultarNotaPCD}>Consultar Nota PCD</button>
      <h3>{studentMsgPCD}</h3>
      <br />

      <button style={{ marginRight: "10px" }} onClick={handleAlunoRegular}>Aluno Presencial</button>
      <button onClick={handleAlunoEAD}>Aluno EAD</button>
      <h3>{studentMsgAbstractExample}</h3>
    </>
  );
}

export default App;
