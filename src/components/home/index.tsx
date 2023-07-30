import Button from "../button";
import style from "./index.module.css";
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container fluid="md" className={style.container}>
      <h1>Associação Comunitária <br className={style.br}/>Catolé e Cabaceiras</h1>
      <p>
        Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório aqui
        Texto aleatório aleatório aqui Texto aleatório aqui aleatório aqui Texto
      </p>
      <Button nome={"Entre em contato"} tipo={1}/>
    </Container>
  );
};

export default Home;
