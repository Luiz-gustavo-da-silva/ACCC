import style from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../button";
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
                <p>Hortaliças</p>
                {/* <p>texto aleatório texto aleatório</p> */}
              </div>
              <div>
                <img src="/assets/horta.svg" alt="" className={style.imgSlide}/>
              </div>
              <div>
                <Button nome={"Compre agora"} tipo={1} />
              </div>
            </div>
            <div id={style.divHortalicas}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>Carnes e animais</p>
              </div>
              <div>
                <img src="/assets/carne.svg" alt="" className={style.imgSlide}/>
              </div>
              <div>
                <Button nome={"Compre agora"} tipo={1} />
              </div>
            </div>
            <div id={style.divCarnes} className={style.divConteudoCard}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>Frutas</p>
              </div>
              <div>
                <img src="/assets/fruta.svg" alt="" className={style.imgSlide}/>
              </div>
              <div>
                <Button nome={"Compre agora"} tipo={1} />
              </div>
            </div>
            <div id={style.divfrutas} className={style.divConteudoCard}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>Sementes</p>
              </div>
              <div>
                <img src="/assets/semente.svg" alt=""className={style.imgSlide} />
              </div>
              <div>
                <Button nome={"Compre agora"} tipo={1} />
              </div>
            </div>
            <div id={style.divSementes} className={style.divConteudoCard}></div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div className={style.capaEscura}>
              <div>
                <p>Ovos</p>
              </div>
              <div>
                <img src="/assets/ovo.svg" alt="" className={style.imgSlide}/>
              </div>
              <div>
                <Button nome={"Compre agora"} tipo={1} />
              </div>
            </div>
            <div id={style.divOvos} className={style.divConteudoCard}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Produtos;
