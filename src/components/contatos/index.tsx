import Button  from "../button";
import style from "./index.module.css";

const Contatos = () => {
  return (
    <div className={style.container}>
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
              <input type="email" placeholder="Email" required/>
              <input type="text" placeholder="Nome" required/>
            </div>
            <div className={style.container__textarea}>
              <textarea name="" cols={30} rows={10} placeholder="Sua mensagem" required></textarea>
            </div>
            <div>
                <Button nome={"Enviar"} tipo={2}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contatos;
