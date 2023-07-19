import { UserOutlined } from "@ant-design/icons";
import Button from "../button";
import style from "./index.module.css";

const SobreNos = () => {
  return (
    <div className={style.container}>
      <div className={style.container__grid}>
        <div id={style.modulo1} className={style.modulos}>
          <div>
            <div className={style.textosSuperior}>
              <h1>Associação Comunitária Catolé e Cabaceiras </h1>
              <p>
                Texto aleatório aqui Texto aleatório aqui Texto Texto aleatório
                aqui Texto aleatório aleatório aqui Texto aleatório aqui
                aleatório aqui Texto Texto aleatório aqui Texto aleatório aqui
                Texto Texto aleatório aqui Texto aleatório aleatório aqui Texto.
              </p>
            </div>

            <div className={style.container__infos}>
              <div className={style.container__infosParceirosAssociados}>
                <UserOutlined className={style.icon}/>
                <h3>Associados</h3>
                <p>
                  texto de exemplo aaaa atexto de exemplo aaaaa texto deexemplo
                  aaaa atexto de exemplo aaaaa
                </p>
              </div>

              <div className={style.container__infosParceirosAssociados}>
                <UserOutlined className={style.icon}/>
                <h3>Associados</h3>
                <p>
                  texto de exemplo aaaa atexto de exemplo aaaaa texto deexemplo
                  aaaa atexto de exemplo aaaaa
                </p>
              </div>
            </div>

            <div>
              <Button nome={"Entre em contato"} tipo={1} />
            </div>
          </div>
        </div>
        <div id={style.modulo2} className={style.modulos}>
          <div id={style.img1} className={style.imgs}>
            <img src="/assets/imgSobre.png" alt="" />
          </div>
          <div id={style.img2} className={style.imgs}>
            <img src="/assets/imgSobre.png" alt="" />
          </div>
          <div id={style.img3} className={style.imgs}>
            <img src="/assets/imgSobre.png" alt="" />
          </div>
          <div id={style.img4} className={style.imgs}>
            <img src="/assets/imgSobre.png" alt="" />
          </div>
          <div id={style.img5} className={style.imgs}>
            <img src="/assets/imgSobre.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
