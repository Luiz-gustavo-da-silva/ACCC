import style from "./index.module.css";
import Container from 'react-bootstrap/Container';

const Capa = () => {
  return (
    <Container fluid="md" className={style.container}>
    {/* <div className={style.container}> */}
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
    {/* </div> */}
    </Container>
  );
};

export default Capa;
