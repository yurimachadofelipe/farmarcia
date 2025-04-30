import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tempoRestante, setTempoRestante] = useState('');
  const [mensagem, setMensagem] = useState('');
  const confirmarPresenca = () => {
    setMensagem("Presença confirmada! Esperamos por você na inauguração 🎉");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Farmácia ReInova</h1>
        <p>A farmácia da vizinhança com um novo começo!</p>
      </header>

      <div className="banner" />

      <main className="content">
        <h2>Nova Direção, Mesmo Compromisso</h2>
        <p>
          Agora sob nova administração, a Farmácia ReInova continua cuidando da saúde do nosso bairro com carinho e profissionalismo.
        </p>
        <p>
          <strong>Inauguração neste sábado!</strong> Venha conhecer o novo espaço e aproveite brindes, promoções e um café da manhã especial.
        </p>

        <button className="cta" onClick={confirmarPresenca}>Confirmar Presença</button>
        {mensagem && <p className="mensagem">{mensagem}</p>}

        <div className="countdown">{tempoRestante}</div>
      </main>

      <footer>
        &copy; 2025 Farmácia ReInova – Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;