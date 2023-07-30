import style from "./index.module.css";
import Container from "react-bootstrap/Container";

const Parceiros = () => {
  return (
    <Container fluid="md" className={style.container}>
      <div>
        <div className={style.container__p}>
          <p>
            Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório aqui
            Texto aleatório aleatório aqui Texto aleatório aqui aleatório aqui
            Texto
          </p>
        </div>
        <div className={style.container__grid}>
          <div id={style.parceiro1} className={style.celula}></div>
          <div id={style.parceiro2} className={style.celula}></div>
          <div id={style.parceiro3} className={style.celula}></div>
          <div id={style.parceiro4} className={style.celula}></div>
          <div id={style.parceiro5} className={style.celula}></div>
          <div id={style.parceiro6} className={style.celula}></div>
          <div id={style.parceiro7} className={style.celula}></div>
          <div id={style.parceiro8} className={style.celula}></div>
          <div id={style.parceiro9} className={style.celula}></div>
          <div id={style.parceiro10} className={style.celula}></div>
          <div id={style.parceiro11} className={style.celula}></div>
          <div id={style.parceiro12} className={style.celula}></div>
          <div id={style.parceiro13} className={style.celula}></div>
          <div id={style.parceiro14} className={style.celula}></div>
          <div id={style.parceiro15} className={style.celula}></div>
          <div id={style.parceiro16} className={style.celula}></div>
          <div id={style.parceiro17} className={style.celula}></div>
          <div id={style.parceiro18} className={style.celula}></div>
        </div>
      </div>
    </Container>
  );
};

export default Parceiros;
