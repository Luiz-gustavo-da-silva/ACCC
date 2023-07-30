import Button from "../button";
import style from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "react-bootstrap/Container";

const Galeria = () => {
  return (
    <Container fluid="md" className={style.container}>
      <div className={style.container__header}>
        <div className={style.container__tituloSessoes}>
          <h2>Galeria. </h2>
          <span> Veja alguns dos nossos registros.</span>
        </div>
        <div>
          <Button nome={"Vizualizar todas"} tipo={1} />
        </div>
      </div>

      <div className={style.container__grid}>
        <div id={style.img1} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
        <div id={style.img2} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
        <div id={style.img3} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
        <div id={style.img4} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
        <div id={style.img5} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
        <div id={style.img6} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
        <div id={style.img7} className={style.celula}>
          <img src="/assets/capa.png" alt="" />
        </div>
      </div>

      <div className={style.containerSlide}>
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
            <div>
              <img src="/assets/capa.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div>
              <img src="/assets/capa.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div>
              <img src="/assets/capa.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div>
              <img src="/assets/capa.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiper__slide}>
            <div>
              <img src="/assets/capa.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Galeria;
