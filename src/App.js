import './App.css';
import Button from './components/Button';
import ColoredPencil from './components/ColoredPencil';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">

      <Paragraph
        text="Não fique pensando no que não tem, agradeça pelo que já conquistou, ainda que seja uma simples caixa de lápis de cor, com ela, dá para colorir o mundo."
      />

      <ColoredPencil />

      <Button label='Baixar CV' />
  
    </div>
  );
}

export default App;
