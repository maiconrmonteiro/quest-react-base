import './App.css';
import Buttons from './components/Buttons';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      
        <Paragraph
        text="Não fique pensando no que não tem, agradeça pelo que já conquistou, ainda que seja uma simples caixa de lápis de cor, com ela, dá para colorir o mundo."
        />


        <Buttons />
    </div>
  );
}

export default App;
