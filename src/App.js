import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Home from './components/Home';
import Footer from './components/Footer';
import ListaServicos from './components/ListaServicos';


function App() {

  return (
    <div className="container">

      <Header />
      <Home />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />

    </div>
  );
}

export default App;