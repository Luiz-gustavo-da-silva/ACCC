import Button from "../button";
import style from "./index.module.css";
import { CalendarOutlined } from "@ant-design/icons";
import Container from "react-bootstrap/Container";

const Blog = () => {
  return (
    <Container fluid="md" className={style.container}>
      <div className={style.container__header}>
        <div className={style.container__tituloSessoes}>
          <h2>Blog. </h2> <span> Fique por dentro dos nossos eventos.</span>
        </div>
        <div>
          <Button nome={"Visualizar todas"} tipo={1} />
        </div>
      </div>

      <div className={style.container__grid}>
        <div className={style.celula} id={style.modulo1}>
          <div className={style.container__imgCapa}>
            <img src="/assets/capa.png" alt="" />
          </div>

          <div className={style.container__infomacao}>
            <div className={style.container__textosTop}>
              <h3>Evento</h3>
              <h2>Festa do milho</h2>
              <p>
                Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
                aqui Texto aleatório aleatório aqui Texto aleatório aqui
                aleatório aqui Texto Texto aleatório aqui Texto aleatório aqui
                Texto Texto aleatório aqui Texto aleatório aleatório aqui Texto.
              </p>
              <p>
                Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
                aqui Texto aleatório aleatório aqui Texto aleatório aqui
                aleatório aqui Texto Texto aleatório aqui Texto aleatório aqui
                Texto Texto aleatório aqui Texto aleatório aleatório aqui Texto.
              </p>
            </div>

            <div className={style.container__infoInferior}>
              <div className={style.containerAutor}>
                <div className={style.foto__autor}></div>
                <div>
                  <p>Luiz Gustavo da silva</p>
                  <p>jun 27, 2020</p>
                </div>
              </div>

              <div className={style.moduloDataEvento}>
                <div>
                  <CalendarOutlined className={style.iconCalendario} />
                </div>
                <div>
                  <p>mai 17, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.celula2} id={style.modulo2}>
          <div className={style.container__imgNoticias}>
            <img src="/assets/capa.png" alt="" />
          </div>

          <div className={style.container__moduloNoticia}>
            <div className={style.container__textosNoticias}>
              <h3>Evento</h3>
              <h2>Festa do milho</h2>
              <p>
                Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
                aqui Texto aleatório aleatório aqui Texto aleatório aqui
                aleatório aqui Texto Texto aleatório aqui Texto aleatório aqui
                Texto Texto aleatório aqui Texto aleatório aleatório aqui Texto.
              </p>
            </div>

            <div className={style.container__infoInferior}>
              <div className={style.containerAutorNoticia}>
                <div className={style.foto__autorNoticias}></div>
                <div>
                  <p>Luiz Gustavo da silva</p>
                  <p>jun 27, 2020</p>
                </div>
              </div>
              <div className={style.moduloDataEvento}>
                <div>
                  <CalendarOutlined className={style.iconCalendario} />
                </div>
                <div>
                  <p>mai 17, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.celula2} id={style.modulo3}>
          <div className={style.container__imgNoticias}>
            <img src="/assets/capa.png" alt="" />
          </div>

          <div className={style.container__moduloNoticia}>
            <div className={style.container__textosNoticias}>
              <h3>Evento</h3>
              <h2>Festa do milho</h2>
              <p>
                Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
                aqui Texto aleatório aleatório aqui Texto aleatório aqui
                aleatório aqui Texto Texto aleatório aqui Texto aleatório aqui
                Texto Texto aleatório aqui Texto aleatório aleatório aqui Texto.
              </p>
            </div>

            <div className={style.container__infoInferior}>
              <div className={style.containerAutorNoticia}>
                <div className={style.foto__autorNoticias}></div>
                <div>
                  <p>Luiz Gustavo da silva</p>
                  <p>jun 27, 2020</p>
                </div>
              </div>
              <div className={style.moduloDataEvento}>
                <div>
                  <CalendarOutlined className={style.iconCalendario} />
                </div>
                <div>
                  <p>mai 17, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.celula2} id={style.modulo4}>
          <div className={style.container__imgNoticias}>
            <img src="/assets/capa.png" alt="" />
          </div>

          <div className={style.container__moduloNoticia}>
            <div className={style.container__textosNoticias}>
              <h3>Evento</h3>
              <h2>Festa do milho</h2>
              <p>
                Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
                aqui Texto aleatório aleatório aqui Texto aleatório aqui
                aleatório aqui Texto Texto aleatório aqui Texto aleatório aqui
                Texto Texto aleatório aqui Texto aleatório aleatório aqui Texto.
              </p>
            </div>

            <div className={style.container__infoInferior}>
              <div className={style.containerAutorNoticia}>
                <div className={style.foto__autorNoticias}></div>
                <div>
                  <p>Luiz Gustavo da silva</p>
                  <p>jun 27, 2020</p>
                </div>
              </div>
              <div className={style.moduloDataEvento}>
                <div>
                  <CalendarOutlined className={style.iconCalendario} />
                </div>
                <div>
                  <p>mai 17, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
