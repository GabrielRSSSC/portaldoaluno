function CardAluno({ nome, curso, periodo }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
      <p>Período: {periodo}</p>
    </div>
  );
}

export default CardAluno;
