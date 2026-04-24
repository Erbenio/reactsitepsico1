import './index.css';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';

function App() {

  return (
    <div className="container">

      <Header />
      <Sobre />
      <Servicos />
      <Contato />

    </div>
  );
}

export default App;