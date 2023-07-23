import style from "./index.module.css";

const Capa = () => {
  return (
    <div className={style.container}>
      <div className={style.modulo__capa}>
        <div className={style.capaEscura}>
          <div>
          <div>
            <p>Colaboradores</p>
            <span>+40</span>
          </div>
          <div>
            <p>Associados</p>
            <span>+30</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capa;
