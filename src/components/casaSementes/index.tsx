import style from "./index.module.css";
import Container from "react-bootstrap/Container";
import { Collapse } from "antd";
const { Panel } = Collapse;

const CasaSementes = () => {
  return (
    <Container fluid="md" className={style.container}>
      <div className={style.container__tituloSessoes}>
        <h2>Casa de sementes. </h2>
        <span>Conheça nossa iniciativa de auto-suficiência.</span>
      </div>

      <div className={style.container__collapse}>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          className={style.collapse}
        >
          <Panel
            header={
              <div className={style.header}>
                <div>
                  <p >Feijão</p>
                </div>
                <div>
                  <span>15</span> Espécies
                </div>
              </div>
            }
            key="1"
          >
            <div style={{ display: "flex" }}>
              <div>
                <span>14</span> espécies
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <div className={style.header}>
                <div>
                  <p style={{ paddingLeft: 24 }}>Milho</p>
                </div>
                <div>
                  <span>15</span> Espécies
                </div>
              </div>
            }
            key="2"
          >
            <div style={{ display: "flex" }}>
              <p style={{ paddingLeft: 24 }}>Feijão</p>
              <div>
                <span>14</span> espécies
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <div className={style.header}>
                <div>
                  <p style={{ paddingLeft: 24 }}>Fava</p>
                </div>
                <div>
                  <span>15</span> Espécies
                </div>
              </div>
            }
            key="3"
          >
            <div style={{ display: "flex" }}>
              <p style={{ paddingLeft: 24 }}>Feijão</p>
              <div>
                <span>14</span> espécies
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <div className={style.header}>
                <div>
                  <p style={{ paddingLeft: 24 }}>Algodão</p>
                </div>
                <div>
                  <span>15</span> Espécies
                </div>
              </div>
            }
            key="4"
          >
            <div style={{ display: "flex" }}>
              <p style={{ paddingLeft: 24 }}>Hotaliças</p>
              <div>
                <span>14</span> espécies
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <div className={style.header}>
                <div>
                  <p style={{ paddingLeft: 24 }}>Tomate</p>
                </div>
                <div>
                  <span>15</span> Espécies
                </div>
              </div>
            }
            key="5"
          >
            <div style={{ display: "flex" }}>
              <p style={{ paddingLeft: 24 }}>Feijão</p>
              <div>
                <span>14</span> espécies
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <div className={style.header}>
                <div>
                  <p style={{ paddingLeft: 24 }}>Feijão</p>
                </div>
                <div>
                  <span>15</span> Espécies
                </div>
              </div>
            }
            key="6"
          >
            <div style={{ display: "flex" }}>
              <p style={{ paddingLeft: 24 }}>Feijão</p>
              <div>
                <span>14</span> espécies
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Container>
  );
};

export default CasaSementes;
