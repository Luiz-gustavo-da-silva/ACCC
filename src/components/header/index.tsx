// import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

  /*const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarClass = scrolled ? `${style.container} ${style.scrolled}` : style.container;*/


  return (
    <Navbar expand="lg" className={style.container}>
      <Container>
        <Navbar.Brand href="#home" id={style.logo}><img src="/assets/logo.svg" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={style.container__navbar}>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre nós</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#casa">Casa de sementes</Nav.Link>
            <Nav.Link href="#noticias">Notícias</Nav.Link>
            <Nav.Link href="#galeria">Galeria</Nav.Link>
            <Nav.Link href="#contatos">Contatos</Nav.Link>
            <Nav.Link href="#parceiros">Parceiros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
