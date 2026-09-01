function CardDisciplina({ nome, professor, nota }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Professor: {professor}</p>
      <p>Nota: {nota}</p>
    </div>
  );
}

export default CardDisciplina;
