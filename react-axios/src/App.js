import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [telepitesek, setTelepitesek] = useState([]);
  
  // --- KERESŐ ÁLLAPOTVÁLTOZÓK ---
  const [keresesiOszlop, setKeresesiOszlop] = useState('gepid'); // Alapértelmezetten Gép ID alapján keres
  const [keresoSzoveg, setKeresoSzoveg] = useState('');
  
  // --- LAPOZÁS ÁLLAPOTVÁLTOZÓK ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  
  const [formData, setFormData] = useState({ id: '', gepid: '', szoftverid: '', verzio: '', datum: '' });
  const [isEditing, setIsEditing] = useState(false);

  const apiUrl = 'http://szoftverleltarnje.nhely.hu/api.php';

  useEffect(() => { fetchData(); }, []);

  // Ha a keresési feltételek változnak, mindig ugorjunk vissza az 1. oldalra!
  useEffect(() => {
    setCurrentPage(1);
  }, [keresesiOszlop, keresoSzoveg]);

  const fetchData = () => {
    axios.get(apiUrl)
      .then(response => {
        if (response.data && response.data.readData) {
          setTelepitesek(response.data.readData);
        }
      })
      .catch(error => console.error("Hiba az adatok lekérésekor:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(apiUrl, formData).then(() => { fetchData(); resetForm(); });
    } else {
      axios.post(apiUrl, formData).then(() => { fetchData(); resetForm(); });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Biztosan törölni szeretnéd ezt a telepítést?")) {
      axios.delete(apiUrl, { data: { id: id } }).then(() => fetchData());
    }
  };

  const handleEditClick = (item) => {
    setFormData(item);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setFormData({ id: '', gepid: '', szoftverid: '', verzio: '', datum: '' });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- KERESÉS LOGIKÁJA ---
  const szurtAdatok = telepitesek.filter(item => {
    // Ha üres a kereső, mindent mutatunk
    if (!keresoSzoveg) return true;
    
    // A kiválasztott oszlop (keresesiOszlop) alapján szűrünk
    const adat = String(item[keresesiOszlop] || '').toLowerCase();
    return adat.includes(keresoSzoveg.toLowerCase());
  });

  // --- LAPOZÁS LOGIKÁJA (A már szűrt adatokon!) ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = szurtAdatok.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(szurtAdatok.length / itemsPerPage);

  const nextPage = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
  const prevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };

  return (
    <>
      <header>
        <h1>Web programozás-1 Előadás Házi feladat</h1>
      </header>
      
      <nav>
        <a href="/index.html">Főoldal</a>
        <a href="/javascript.html">JavaScript</a>
        <a href="/react.html">React</a>
        <a href="/spa.html">SPA</a>
        <a href="/fetchapi.html">Fetch API</a>
        <a href="/axios.html" className="active">Axios</a>
        <a href="/oojs.html">OOJS</a>
      </nav>

      <main className="container">
        <h2>Telepítések Adatbázis (React Axios CRUD)</h2>

        {/* ŰRLAP RÉSZ */}
        <form onSubmit={handleSubmit} className="crud-form" style={{ marginTop: '30px', marginBottom: '40px' }}>
          <div className="form-group">
            <label>Gép ID*</label>
            <input type="number" name="gepid" value={formData.gepid} onChange={handleInputChange} required placeholder="Pl: 14" />
          </div>
          <div className="form-group">
            <label>Szoftver ID*</label>
            <input type="number" name="szoftverid" value={formData.szoftverid} onChange={handleInputChange} required placeholder="Pl: 102" />
          </div>
          <div className="form-group">
            <label>Verzió</label>
            <input type="text" name="verzio" value={formData.verzio || ''} onChange={handleInputChange} placeholder="Pl: v2.1" />
          </div>
          <div className="form-group">
            <label>Dátum</label>
            <input type="date" name="datum" value={formData.datum || ''} onChange={handleInputChange} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit">{isEditing ? "Módosítás" : "Mentés"}</button>
            {isEditing && (
              <button type="button" onClick={resetForm} style={{ borderColor: 'var(--text-color)', color: 'var(--text-color)' }}>Mégse</button>
            )}
          </div>
        </form>

        {/* ÚJ KERESŐ SÁV ÉS TALÁLAT JELZŐ */}
        <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: 'var(--dark-blue)', borderRadius: '6px', border: '1px solid var(--accent-blue)' }}>
          <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-color)' }}>Keresés az adatbázisban:</label>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            
            {/* 1. Miben keresünk? (Legördülő) */}
            <select 
              value={keresesiOszlop} 
              onChange={(e) => setKeresesiOszlop(e.target.value)}
              style={{ padding: '10px', backgroundColor: 'var(--medium-blue)', color: 'var(--highlight-color)', border: '1px solid var(--accent-blue)', borderRadius: '4px', minWidth: '150px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              <option value="gepid">Gép ID</option>
              <option value="szoftverid">Szoftver ID</option>
              <option value="verzio">Verzió</option>
              <option value="datum">Dátum</option>
            </select>
            
            {/* 2. Mit keresünk? (Szövegmező) */}
            <input 
              type="text" 
              placeholder={`🔍 Írd be a keresett értéket...`}
              value={keresoSzoveg}
              onChange={(e) => setKeresoSzoveg(e.target.value)}
              style={{ flex: 1, minWidth: '250px', padding: '10px', backgroundColor: 'var(--medium-blue)', color: 'var(--text-color)', border: '1px solid var(--accent-blue)', borderRadius: '4px' }}
            />
          </div>
          <p style={{ color: 'var(--text-color)', margin: '15px 0 0 0', fontSize: '0.9rem' }}>
            Jelenlegi találatok száma: <span style={{ color: 'var(--highlight-color)', fontWeight: 'bold' }}>{szurtAdatok.length}</span> db
          </p>
        </div>

        {/* TÁBLÁZAT */}
        <table className="list">
          <thead>
            <tr>
              <th>ID</th>
              <th>Gép ID</th>
              <th>Szoftver ID</th>
              <th>Verzió</th>
              <th>Dátum</th>
              <th>Műveletek</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td style={{ color: 'var(--highlight-color)', fontWeight: 'bold' }}>{item.gepid}</td>
                  <td>{item.szoftverid}</td>
                  <td>{item.verzio || '-'}</td>
                  <td>{item.datum || '-'}</td>
                  <td>
                    <button onClick={() => handleEditClick(item)} style={{ marginRight: '8px' }}>Szerkesztés</button>
                    <button onClick={() => handleDelete(item.id)}>Törlés</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" style={{ textAlign: 'center', padding: '30px' }}>Nincs a keresésnek megfelelő találat.</td></tr>
            )}
          </tbody>
        </table>

        {/* ALSÓ LAPOZÓ GOMBOK (Csak akkor látszódik, ha több mint 1 oldal van) */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: '15px', backgroundColor: 'var(--dark-blue)', borderRadius: '6px', border: '1px solid var(--accent-blue)' }}>
            <button onClick={prevPage} disabled={currentPage === 1} style={{ opacity: currentPage === 1 ? 0.3 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
              &laquo; Előző 50
            </button>
            <span style={{ color: 'var(--text-color)', fontWeight: 'bold' }}>
              {currentPage}. oldal a(z) {totalPages}-ből
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages} style={{ opacity: currentPage === totalPages ? 0.3 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
              Következő 50 &raquo;
            </button>
          </div>
        )}

      </main>

      <footer>
        <p>Készítette: 
          <span className="neptun-info"> Matiszné Tóth Brigitta ([H0E8QF])</span> és 
          <span className="neptun-info"> Kovács Dániel ([Z2IGLN])</span>
        </p>
      </footer>
    </>
  );
}

export default App;