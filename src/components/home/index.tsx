import Button from "../button";
import style from "./index.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <h1>Associação Comunitária <br className={style.br}/>Catolé e Cabaceiras</h1>
      <p>
        Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório aqui
        Texto aleatório aleatório aqui Texto aleatório aqui aleatório aqui Texto
      </p>
      <Button nome={"Entre em contato"} tipo={1}/>
    </div>
  );
};

export default Home;
