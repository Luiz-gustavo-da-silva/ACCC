import Blog from '../components/blog';
import Capa from '../components/capa';
import Contatos from '../components/contatos';
import Footer from '../components/footer';
import Galeria from '../components/galeria';
import Header from '../components/header';
import Home from '../components/home';
import Parceiros from '../components/parceiros';
import Produtos from '../components/produtos';
import CasaSementes from '../components/casaSementes';
import SobreNos from '../components/sobreNos';
import '../styles/App.css';


function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Capa/>
      <SobreNos/>
      <Produtos/>
      <CasaSementes/>
      <Blog/>
      <Galeria/>
      <Contatos/>
      <Parceiros/>
      <Footer/>
    </>
  )
}

export default App
