import style from "./index.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <ul>
          <li>
            <a href=""><img src="/assets/logo.svg" alt="" /></a>
          </li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">WhatsApp</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>
      <div className={style.container__direitos}>
        <p>©2023 Luiz Silva. Todos os direitos reservados.</p>
      </div>
    </>
  );
};

export default Footer;
