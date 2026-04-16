import React, { useState } from 'react';

function App() {
  const [activeView, setActiveView] = useState('fooldal');

  // --- TIC-TAC-TOE LOGIKA ---
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleTicTacClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const status = winner 
    ? `Győztes: ${winner}` 
    : board.every(Boolean) ? "Döntetlen!" : `Következő játékos: ${xIsNext ? 'X' : 'O'}`;

  // --- SZÁMOLÓGÉP LOGIKA ---
  const [calcInput, setCalcInput] = useState("");
  const handleCalcClick = (val) => {
    if (val === 'C') setCalcInput("");
    else if (val === '=') {
      try { 
        // eslint-disable-next-line no-eval
        setCalcInput(String(eval(calcInput))); 
      } 
      catch { setCalcInput("Hiba"); }
    } 
    else setCalcInput((prev) => prev + val);
  };

  const renderView = () => {
    switch (activeView) {
      case 'fooldal':
        return (
          <div className="text-center py-3">
            <h4 style={{ color: 'var(--highlight-color)' }}>Üdvözöllek az alkalmazásban!</h4>
            <p className="mb-4" style={{ color: 'var(--text-color)' }}>Kérlek, válassz az alábbi lehetőségek közül:</p>
            <div className="row justify-content-center g-4">
              <div className="col-md-5">
                <div className="p-3 rounded" style={{ backgroundColor: 'var(--dark-blue)', border: '1px solid var(--accent-blue)' }}>
                  <h5 style={{ color: 'var(--text-color)' }}>Tic-Tac-Toe</h5>
                  <p style={{ color: 'var(--text-color)', fontSize: '0.9rem' }}>Hagyományos amőba játék két játékos részére.</p>
                  <button 
                    className="w-100 py-2 rounded mt-2" 
                    onClick={() => setActiveView('tictactoe')}
                    style={{ backgroundColor: 'transparent', color: 'var(--highlight-color)', border: '1px solid var(--highlight-color)', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Indítás
                  </button>
                </div>
              </div>
              <div className="col-md-5">
                <div className="p-3 rounded" style={{ backgroundColor: 'var(--dark-blue)', border: '1px solid var(--accent-blue)' }}>
                  <h5 style={{ color: 'var(--text-color)' }}>Számológép</h5>
                  <p style={{ color: 'var(--text-color)', fontSize: '0.9rem' }}>Alapvető matematikai műveletek elvégzése.</p>
                  <button 
                    className="w-100 py-2 rounded mt-2" 
                    onClick={() => setActiveView('szamologep')}
                    style={{ backgroundColor: 'transparent', color: 'var(--highlight-color)', border: '1px solid var(--highlight-color)', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Megnyitás
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tictactoe':
        return (
          <div className="text-center">
            <h4 style={{ color: 'var(--text-color)' }}>Tic-Tac-Toe</h4>
            <p className="mb-3" style={{ color: winner ? 'var(--highlight-color)' : 'var(--text-color)', fontWeight: 'bold' }}>{status}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 70px)', gap: '8px', justifyContent: 'center' }}>
              {board.map((sq, i) => (
                <button key={i} onClick={() => handleTicTacClick(i)} 
                  style={{ height: '70px', fontSize: '1.5rem', backgroundColor: 'var(--medium-blue)', color: sq === 'X' ? 'var(--highlight-color)' : 'var(--error-color)', border: '1px solid var(--accent-blue)', cursor: 'pointer' }}>
                  {sq}
                </button>
              ))}
            </div>
            <button 
              className="py-2 px-4 rounded mt-4" 
              onClick={() => { setBoard(Array(9).fill(null)); setXIsNext(true); }}
              style={{ backgroundColor: 'transparent', color: 'var(--highlight-color)', border: '1px solid var(--highlight-color)', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Új játék
            </button>
          </div>
        );

      case 'szamologep':
        return (
          <div style={{ maxWidth: '280px', margin: '0 auto' }}>
            <h4 className="text-center mb-3" style={{ color: 'var(--text-color)' }}>Számológép</h4>
            <div className="p-2 mb-3 text-end rounded" style={{ backgroundColor: '#051021', border: '1px solid var(--highlight-color)', fontSize: '1.3rem', minHeight: '50px', color: 'var(--highlight-color)' }}>
              {calcInput || "0"}
            </div>
            <div className="row g-2">
              {['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'].map(btn => (
                <div key={btn} className="col-3">
                  <button 
                    className="w-100 py-2 rounded" 
                    style={{ backgroundColor: 'var(--medium-blue)', color: 'var(--text-color)', border: '1px solid var(--accent-blue)', cursor: 'pointer', fontSize: '1.1rem' }} 
                    onClick={() => handleCalcClick(btn)}
                  >
                    {btn}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Vékony Fejléc - Kivettem a .container osztályt, ami a hibát okozta! */}
      <header className="py-3 border-bottom" style={{ backgroundColor: 'var(--medium-blue)', borderColor: 'var(--accent-blue)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
          <h2 style={{ color: 'var(--text-color)', margin: 0, fontSize: '1.5rem' }}>Web programozás-1 Házi feladat</h2>
        </div>
      </header>

      {/* Vékony Navigáció Vissza gombbal - Itt is eltávolítottam a .container-t! */}
      <nav className="py-2" style={{ backgroundColor: 'var(--accent-blue)', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          
          <a href="/" style={{ color: 'var(--error-color)', textDecoration: 'none', fontWeight: 'bold', marginRight: '30px', border: '1px solid var(--error-color)', padding: '5px 15px', borderRadius: '4px', fontSize: '0.9rem' }}>
            &larr; Vissza a HTML oldalakra
          </a>

          <button 
            onClick={() => setActiveView('fooldal')}
            style={{ background: 'none', border: 'none', color: activeView === 'fooldal' ? 'var(--highlight-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', margin: '0 10px' }}
          >
            Főoldal
          </button>
          <button 
            onClick={() => setActiveView('tictactoe')}
            style={{ background: 'none', border: 'none', color: activeView === 'tictactoe' ? 'var(--highlight-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', margin: '0 10px' }}
          >
            Tic-Tac-Toe
          </button>
          <button 
            onClick={() => setActiveView('szamologep')}
            style={{ background: 'none', border: 'none', color: activeView === 'szamologep' ? 'var(--highlight-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', margin: '0 10px' }}
          >
            Számológép
          </button>
        </div>
      </nav>

      {/* A Fő tartalom marad .container, mert ezt a dobozt akarjuk látni! */}
      <main className="container mt-4 p-4 rounded shadow flex-grow-1" style={{ backgroundColor: 'var(--medium-blue)', border: '1px solid var(--accent-blue)', maxWidth: '800px' }}>
        {renderView()}
      </main>

      <footer className="py-3 mt-4 text-center border-top" style={{ backgroundColor: 'var(--medium-blue)', borderColor: 'var(--accent-blue)' }}>
        <p className="mb-0" style={{ color: 'var(--text-color)', fontSize: '0.9rem' }}>
        Készítette: <span style={{ color: 'var(--highlight-color)', fontWeight: 'bold' }}>Matiszné Tóth Brigitta ([H0E8QF])</span> és <span style={{ color: 'var(--highlight-color)', fontWeight: 'bold' }}>Kovács Dániel ([Z2IGLN])</span>
        </p>
      </footer>
    </div>
  );
}

export default App;







