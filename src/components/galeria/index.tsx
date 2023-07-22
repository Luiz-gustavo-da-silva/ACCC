import Button  from "../button";
import style from "./index.module.css";

const Galeria = () => {
  return (
    <div className={style.container}>
        <div className={style.container__header}>
            <div className={style.container__tituloSessoes}><h2>Galeria. </h2><span> Veja alguns dos nossos registros.</span></div>
            <div><Button nome={"Vizualizar todas"} tipo={1}/></div>
        </div>

        <div className={style.container__grid}>
            <div id={style.img1} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
            <div id={style.img2} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
            <div id={style.img3} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
            <div id={style.img4} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
            <div id={style.img5} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
            <div id={style.img6} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
            <div id={style.img7} className={style.celula}><img src="/assets/capa.png" alt="" /></div>
        </div>
    </div>
  );
};

export default Galeria;
