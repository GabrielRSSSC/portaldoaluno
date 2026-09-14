
import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import CardAluno from "@/components/perfil/perfil";
import CardDisciplina from "@/components/props/CardDisciplinas";
import Botao from "@/components/button/button";
import Footer from "@/components/footer/footer";
import Incrementador from "@/components/incrementador/Incrementador";
import Atividades from "@/components/atividades/Atividades";




export default function Page() { 
  
  return (
    <div>
      <Header />
      <Menu />
      <CardAluno nome="João" curso="Ciência da Computação" periodo="3º" />
      <CardDisciplina nome="Front-End Frameworks" professor="Luciana" nota="9,0" />
      <CardDisciplina nome="Algoritmos" professor="Professor X" nota="8,5" />
      <CardDisciplina nome="Banco de Dados" professor="Professor Y" nota="7,8" />
      <Incrementador />
      <h1>Atividades</h1>
      <Atividades
        mensagens={[
          { min: 0, texto: "Nenhuma atividade cadastrada." },
          { min: 1, texto: "Você tem poucas atividades." },
          { min: 5, texto: "Boa quantidade de atividades!" },
          { min: 10, texto: "Muitas atividades, cuidado com a sobrecarga!" },
  ]}
/>
      <Botao texto="Entrar" />
      <Footer />
    </div>
  );
}
