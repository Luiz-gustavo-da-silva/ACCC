import style from "./index.module.css";

const CasaSementes = () => {
  return (
    <div className={style.container}>
      <div>Casa de sementes</div>
      <div className={style.container__div}>
        <div className={style.container__grid}>
          <div id={style.modulo1} className={style.celula}>
            <div>
              <p>Tipos de sementes</p>
              <h1>
                <span className={style.mais}>+</span>50
              </h1>
              <p>
                Em maior quantidade:
                <span>Feijão</span>
                <span>Milho</span>
                <span>Fava</span> 
              </p>
            </div>
          </div>

          <div id={style.modulo2} className={style.celula}>
            <p>
              Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
              aqui Texto aleatório aleatório aqui Texto aleatório aqui aleatório
              aqui Texto Texto aleatório aqui Texto aleatório aqui Texto Texto
              aleatório aqui Texto aleatório aleatório aqui Texto.
            </p>
            <p>
              Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
              aqui Texto aleatório aleatório aqui Texto aleatório aqui aleatório
              aqui Texto Texto aleatório aqui Texto aleatório aqui Texto Texto
              aleatório aqui Texto aleatório aleatório aqui Texto.
            </p>
            <p>
              Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
              aqui Texto aleatório aleatório aqui Texto aleatório aqui aleatório
              aqui Texto Texto aleatório aqui Texto aleatório aqui Texto Texto
              aleatório aqui Texto aleatório aleatório aqui Texto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasaSementes;
