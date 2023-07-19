import style from "./index.module.css";

const Button = ({nome, tipo}: any) => {
  const classeBotao = `${style.button} ${tipo === 1 ? style.button : style.button2}`;
  return (
    <button className={classeBotao}>
        {nome}
    </button>
  );
};

export default Button;
