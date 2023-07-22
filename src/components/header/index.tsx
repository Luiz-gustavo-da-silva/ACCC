import style from "./index.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

  return (
    <Navbar expand="lg" className={style.container}>
      <Container>
        <Navbar.Brand href="#home" id={style.logo}><img src="/assets/logo.svg" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={style.container__navbar}>
          <Nav>
            <Nav.Link href="#home" className={style.link}>Home</Nav.Link>
            <Nav.Link href="#sobre" className={style.link}>Sobre nós</Nav.Link>
            <Nav.Link href="#produtos" className={style.link}>Produtos</Nav.Link>
            <Nav.Link href="#casa" className={style.link}>Casa de sementes</Nav.Link>
            <Nav.Link href="#noticias" className={style.link}>Notícias</Nav.Link>
            <Nav.Link href="#galeria" className={style.link}>Galeria</Nav.Link>
            <Nav.Link href="#contatos" className={style.link}>Contatos</Nav.Link>
            <Nav.Link href="#parceiros" className={style.link}>Parceiros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
