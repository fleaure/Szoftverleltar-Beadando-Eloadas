// src/App.jsx
import { useState } from 'react';

function App() {
  const [gepek, setGepek] = useState([
    { id: 1, hely: "T403", tipus: "asztali", ipcim: "192.168.2.1" },
    { id: 2, hely: "T212", tipus: "asztali", ipcim: "192.168.2.2" },
            { id: 3, hely: "T302", tipus: "asztali", ipcim: "192.168.2.3" },
            { id: 4, hely: "T108", tipus: "notebook", ipcim: "192.168.1.1" },
            { id: 5, hely: "T301", tipus: "asztali", ipcim: "192.168.2.4" },
            { id: 6, hely: "T306", tipus: "asztali", ipcim: "192.168.2.5" },
            { id: 7, hely: "T209", tipus: "notebook", ipcim: "192.168.4.1" },
            { id: 8, hely: "T208", tipus: "notebook", ipcim: "192.168.4.2" },
            { id: 9, hely: "T110", tipus: "notebook", ipcim: "192.168.1.2" },
            { id: 10, hely: "T310", tipus: "asztali", ipcim: "192.168.2.6" },
            { id: 11, hely: "T207", tipus: "asztali", ipcim: "192.168.2.7" },
            { id: 12, hely: "T109", tipus: "notebook", ipcim: "192.168.1.3" },
            { id: 13, hely: "T104", tipus: "asztali", ipcim: "192.168.2.8" },
            { id: 14, hely: "T208", tipus: "notebook", ipcim: "192.168.4.3" },
            { id: 15, hely: "T106", tipus: "notebook", ipcim: "192.168.1.4" },
            { id: 16, hely: "T201", tipus: "asztali", ipcim: "192.168.2.9" },
            { id: 17, hely: "T309", tipus: "asztali", ipcim: "192.168.2.10" },
            { id: 18, hely: "T402", tipus: "asztali", ipcim: "192.168.2.11" },
            { id: 19, hely: "T404", tipus: "asztali", ipcim: "192.168.2.12" },
            { id: 20, hely: "T110", tipus: "notebook", ipcim: "192.168.1.5" },
            { id: 21, hely: "T107", tipus: "asztali", ipcim: "192.168.2.13" },
            { id: 22, hely: "T205", tipus: "notebook", ipcim: "192.168.1.6" },
            { id: 23, hely: "T010", tipus: "asztali", ipcim: "192.168.2.14" },
            { id: 24, hely: "T009", tipus: "asztali", ipcim: "192.168.2.15" },
            { id: 25, hely: "T001", tipus: "notebook", ipcim: "192.168.1.7" },
            { id: 26, hely: "T401", tipus: "notebook", ipcim: "192.168.1.8" },
            { id: 27, hely: "T305", tipus: "asztali", ipcim: "192.168.3.1" },
            { id: 28, hely: "T102", tipus: "notebook", ipcim: "192.168.1.9" },
            { id: 29, hely: "T208", tipus: "notebook", ipcim: "192.168.4.4" },
            { id: 30, hely: "T408", tipus: "asztali", ipcim: "192.168.2.16" },
            { id: 31, hely: "T007", tipus: "asztali", ipcim: "192.168.3.2" },
            { id: 32, hely: "T011", tipus: "notebook", ipcim: "192.168.1.10" },
            { id: 33, hely: "T004", tipus: "asztali", ipcim: "192.168.2.17" },
            { id: 34, hely: "T202", tipus: "asztali", ipcim: "192.168.2.18" },
            { id: 35, hely: "T006", tipus: "asztali", ipcim: "192.168.3.3" },
            { id: 36, hely: "T407", tipus: "asztali", ipcim: "192.168.2.19" },
            { id: 37, hely: "T304", tipus: "notebook", ipcim: "192.168.1.11" },
            { id: 38, hely: "T203", tipus: "notebook", ipcim: "192.168.1.12" },
            { id: 39, hely: "T105", tipus: "asztali", ipcim: "192.168.2.20" },
            { id: 40, hely: "T103", tipus: "asztali", ipcim: "192.168.2.21" },
            { id: 41, hely: "T003", tipus: "notebook", ipcim: "192.168.1.13" },
            { id: 42, hely: "T311", tipus: "asztali", ipcim: "192.168.2.22" },
            { id: 43, hely: "T007", tipus: "asztali", ipcim: "192.168.3.4" },
            { id: 44, hely: "T008", tipus: "asztali", ipcim: "192.168.2.23" },
            { id: 45, hely: "T206", tipus: "asztali", ipcim: "192.168.2.24" },
            { id: 46, hely: "T307", tipus: "asztali", ipcim: "192.168.2.25" },
            { id: 47, hely: "T106", tipus: "notebook", ipcim: "192.168.1.14" },
            { id: 48, hely: "T312", tipus: "asztali", ipcim: "192.168.2.26" },
            { id: 49, hely: "T308", tipus: "notebook", ipcim: "192.168.1.15" },
            { id: 50, hely: "T211", tipus: "notebook", ipcim: "192.168.1.16" },
            { id: 51, hely: "T406", tipus: "asztali", ipcim: "192.168.2.27" },
            { id: 52, hely: "T002", tipus: "asztali", ipcim: "192.168.2.28" },
            { id: 53, hely: "T012", tipus: "asztali", ipcim: "192.168.2.29" },
            { id: 54, hely: "T110", tipus: "notebook", ipcim: "192.168.1.17" },
            { id: 55, hely: "T102", tipus: "notebook", ipcim: "192.168.1.18" },
            { id: 56, hely: "T108", tipus: "notebook", ipcim: "192.168.1.19" },
            { id: 57, hely: "T303", tipus: "asztali", ipcim: "192.168.2.30" },
            { id: 58, hely: "T005", tipus: "notebook", ipcim: "192.168.1.20" },
            { id: 59, hely: "T006", tipus: "asztali", ipcim: "192.168.3.5" },
            { id: 60, hely: "T203", tipus: "notebook", ipcim: "192.168.1.21" },
            { id: 61, hely: "T111", tipus: "asztali", ipcim: "192.168.2.31" },
            { id: 62, hely: "T208", tipus: "notebook", ipcim: "192.168.4.5" },
            { id: 63, hely: "T106", tipus: "notebook", ipcim: "192.168.1.22" },
            { id: 64, hely: "T409", tipus: "notebook", ipcim: "192.168.1.23" },
            { id: 65, hely: "T005", tipus: "notebook", ipcim: "192.168.1.24" },
            { id: 66, hely: "T101", tipus: "asztali", ipcim: "192.168.2.32" },
            { id: 67, hely: "T005", tipus: "notebook", ipcim: "192.168.1.25" },
            { id: 68, hely: "T405", tipus: "asztali", ipcim: "192.168.2.33" },
            { id: 69, hely: "T305", tipus: "asztali", ipcim: "192.168.3.6" },
            { id: 70, hely: "T204", tipus: "asztali", ipcim: "192.168.2.34" },
            { id: 71, hely: "T112", tipus: "notebook", ipcim: "192.168.1.26" },
            { id: 72, hely: "T305", tipus: "asztali", ipcim: "192.168.3.7" },
            { id: 73, hely: "T003", tipus: "notebook", ipcim: "192.168.1.27" },
            { id: 74, hely: "T305", tipus: "asztali", ipcim: "192.168.3.8" },
            { id: 75, hely: "T210", tipus: "asztali", ipcim: "192.168.2.35" },
            { id: 76, hely: "T208", tipus: "notebook", ipcim: "192.168.4.6" }
  ]);

  const [formData, setFormData] = useState({ id: "", hely: "", tipus: "asztali", ipcim: "" });
  const [isEditing, setIsEditing] = useState(false);

  const resetForm = () => {
    setFormData({ id: "", hely: "", tipus: "asztali", ipcim: "" });
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isEditing) {
      setGepek(gepek.map(g => g.id === formData.id ? formData : g));
    } else {
      const nextId = gepek.length > 0 ? Math.max(...gepek.map(g => g.id)) + 1 : 1;
      setGepek([...gepek, { ...formData, id: nextId }]);
    }
    resetForm();
  };

  return (
    <div className="container mt-4 pb-5">
      <div className="card p-4 mb-4 bg-dark text-white border-secondary">
        <h3>{isEditing ? "Gép módosítása" : "Új gép felvétele"}</h3>
        <form onSubmit={handleSave} className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Helyszín</label>
            <input type="text" className="form-control bg-dark text-white border-secondary" 
              value={formData.hely} onChange={e => setFormData({...formData, hely: e.target.value})} required />
          </div>
          <div className="col-md-3">
            <label className="form-label">Típus</label>
            <select className="form-select bg-dark text-white border-secondary" 
              value={formData.tipus} onChange={e => setFormData({...formData, tipus: e.target.value})}>
              <option value="asztali">asztali</option>
              <option value="notebook">notebook</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">IP cím</label>
            <input type="text" className="form-control bg-dark text-white border-secondary" 
              value={formData.ipcim} onChange={e => setFormData({...formData, ipcim: e.target.value})} required />
          </div>
          <div className="col-md-3 d-flex align-items-end gap-2">
            <button type="submit" className="btn btn-primary flex-grow-1">{isEditing ? "Mentés" : "Hozzáadás"}</button>
            {isEditing && (
              <button type="button" className="btn btn-outline-light flex-grow-1" onClick={resetForm}>Mégse</button>
            )}
          </div>
        </form>
      </div>

      <div className="table-responsive bg-dark p-3 rounded shadow border border-secondary">
        <h4 className="text-white mb-3">Gép leltár ({gepek.length} db)</h4>
        <table className="table table-dark table-hover table-striped border-secondary">
          <thead>
            <tr><th>ID</th><th>Helyszín</th><th>Típus</th><th>IP</th><th className="text-center">Műveletek</th></tr>
          </thead>
          <tbody>
            {gepek.map(g => (
              <tr key={g.id}>
                <td>{g.id}</td><td>{g.hely}</td><td>{g.tipus}</td><td>{g.ipcim}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-warning me-2" onClick={() => {setFormData(g); setIsEditing(true);}}>Szerkeszt</button>
                  <button className="btn btn-sm btn-danger" onClick={() => setGepek(gepek.filter(item => item.id !== g.id))}>Töröl</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;