'use client'
import { useState } from "react";

function Atividades({ mensagens }) {
  const [atividade, setAtividade] = useState(0);

  const decrementar = () => {
    if (atividade > 0) {
      setAtividade(atividade - 1);
    }
  };

  const getMensagem = () => {
    if (!mensagens) return "";

    const regra = mensagens
      .slice()
      .sort((a, b) => b.min - a.min)
      .find((m) => atividade >= m.min);

    return regra ? regra.texto : "";
  };

  return (
    <div>
      <h1>{atividade}</h1>
      <p>{getMensagem()}</p>

      <button
        onClick={() => setAtividade(atividade + 1)}
        style={{ cursor: "pointer", padding: "10px 20px" }}
      >
        Incrementar
      </button>

      <button
        onClick={decrementar}
        style={{ cursor: "pointer", padding: "10px 20px" }}
      >
        Decrementar
      </button>

            <button
        onClick={() => setAtividade(atividade - atividade)}
        style={{ cursor: "pointer", padding: "10px 20px" }}
      >
        zerar
      </button>

    </div>
  );
}

export default Atividades;