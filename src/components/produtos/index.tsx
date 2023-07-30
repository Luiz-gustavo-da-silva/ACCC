import style from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Button from "../button";
import { Navigation } from "swiper/modules";

const Produtos = () => {
  return (
    <>
      <div className={style.container__tituloSessoes}>
        <h2>Produtos. </h2> <span>Compre já os nossos produtos.</span>
      </div>
      <div className={style.container}>
        <Swiper
          breakpoints={{
            // Configurações para dispositivos de tela grande (desktop)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // Configurações para dispositivos de tela média e pequena
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>HORTALIÇAS</p>
              </div>
              <div>
                <img
                  src="/assets/horta.svg"
                  alt=""
                  className={style.imgSlide}
                />
              </div>
              <div>
                <p>
                  Somos produtores de hortaliças. Coentro, cebolinha, cenoura,
                  pimentão, beterraba e, entre outros.
                </p>
                {/* <Button nome={"Compre agora"} tipo={1} /> */}
              </div>
            </div>
            <div id={style.divHortalicas}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>CARNES E ANIMAIS</p>
              </div>
              <div>
                <img
                  src="/assets/carne.svg"
                  alt=""
                  className={style.imgSlide}
                />
              </div>
              <div>
                <p>
                  Somos criadores de animais. Aves, suínos, bovinos e caprinos.
                </p>
                {/* <Button nome={"Compre agora"} tipo={1} /> */}
              </div>
            </div>
            <div id={style.divCarnes} ></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>FRUTAS</p>
              </div>
              <div>
                <img
                  src="/assets/fruta.svg"
                  alt=""
                  className={style.imgSlide}
                />
              </div>
              <div>
                <p>
                  Plantamos e cuidamos de espécies frutíferas. Caju, umbu,
                  maracujá, mamão, pinha, banana, tomate.
                </p>
                {/* <Button nome={"Compre agora"} tipo={1} /> */}
              </div>
            </div>
            <div id={style.divfrutas}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>SEMENTES</p>
              </div>
              <div>
                <img
                  src="/assets/semente.svg"
                  alt=""
                  className={style.imgSlide}
                />
              </div>
              <div>
                <p>
                  Plantamos e colhemos sementes nas suas estaçoes. Milho,
                  feijão, fava e, entre outros.
                </p>
                {/* <Button nome={"Compre agora"} tipo={1} /> */}
              </div>
            </div>
            <div id={style.divSementes}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>OVOS</p>
              </div>
              <div>
                <img src="/assets/ovo.svg" alt="" className={style.imgSlide} />
              </div>
              <div>
                <p>
                  Criamos aves para venda e produção de ovos. Ovo caipira de
                  galinha, codornae, entre outros.
                </p>
                {/* <Button nome={"Compre agora"} tipo={2} /> */}
              </div>
            </div>
            <div id={style.divOvos}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Produtos;
