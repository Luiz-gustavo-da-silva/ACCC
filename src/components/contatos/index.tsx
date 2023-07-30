import Button from "../button";
import style from "./index.module.css";
import Container from "react-bootstrap/Container";

const Contatos = () => {
  return (
    <Container fluid="md" className={style.container}>
      <div className={style.modulo__capa}>
        <div className={style.container__texto}>
          <p>Contato</p>
        </div>
        <div className={style.container__formGeral}>
          <form action="" className={style.container__form}>
            <div>
              <h1>Entre em contato</h1>
            </div>
            <div className={style.container__input}>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Nome" required />
            </div>
            <div className={style.container__textarea}>
              <textarea
                name=""
                cols={30}
                rows={10}
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>
            <div>
              <Button nome={"Enviar"} tipo={2} />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contatos;
