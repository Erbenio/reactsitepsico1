import './index.css';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Home from './components/Home';
import Footer from './components/Footer';


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
