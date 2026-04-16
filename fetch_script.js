let currentOffset = 0;
const LIMIT = 50; // Az api.php-ban is 50 van beállítva
const API_URL = 'api.php?table=telepites';

const form = document.getElementById('fetchForm');
const tableBody = document.getElementById('telepitesTable');
const formTitle = document.getElementById('formTitle');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const pageInfo = document.getElementById('pageInfo');

// 1. READ - Lapozott adatok lekérése az api.php-ból
async function loadTelepitesek() {
    try {
        // Az api.php-nak átadjuk az offset paramétert
        const response = await fetch(`${API_URL}&limit=${LIMIT}&offset=${currentOffset}`);
        const data = await response.json();
        
        // Mivel az api.php-d { "status": "...", "readData": [...] } formátumot küld:
        const telepitesek = data.readData;

        tableBody.innerHTML = '';
        
        if (!telepitesek || telepitesek.length === 0) {
            if (currentOffset > 0) {
                alert("Nincs több megjeleníthető adat ezen az oldalon.");
                changePage(-1);
            } else {
                tableBody.innerHTML = '<tr><td colspan="6" class="text-center">Nincs adat az adatbázisban.</td></tr>';
            }
            return;
        }

        // Itt már a tömbön futtatjuk a forEach-et
        telepitesek.forEach(item => {
            tableBody.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.gepid}</td>
                    <td>${item.szoftverid}</td>
                    <td>${item.verzio}</td>
                    <td>${item.datum}</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-warning me-1" onclick="editItem(${item.id}, ${item.gepid}, ${item.szoftverid}, '${item.verzio}', '${item.datum}')">Szerkeszt</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">Töröl</button>
                    </td>
                </tr>
            `;
        });
        
        // Oldalszám frissítése
        pageInfo.innerText = `${Math.floor(currentOffset / LIMIT) + 1}. oldal`;
    } catch (error) {
        console.error('Hiba a betöltéskor:', error);
        tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-danger">Szerver hiba történt az adatok lekérésekor.</td></tr>`;
    }
}

// Lapozás vezérlése
function changePage(direction) {
    const nextOffset = currentOffset + (direction * LIMIT);
    if (nextOffset >= 0) {
        currentOffset = nextOffset;
        loadTelepitesek();
        window.scrollTo(0, 0); // Visszaugrik a táblázat tetejére
    }
}

// 2. CREATE & UPDATE - Mentés (POST vagy PUT)
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = document.getElementById('telepitesId').value;
    const payload = {
        gepid: document.getElementById('gepid').value,
        szoftverid: document.getElementById('szoftverid').value,
        verzio: document.getElementById('verzio').value,
        datum: document.getElementById('datum').value
    };

    const method = id ? 'PUT' : 'POST';
    if (id) payload.id = id;

    try {
        const response = await fetch(API_URL, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.ok) {
            resetForm();
            loadTelepitesek();
            alert(result.status || 'Sikeres művelet!');
        } else {
            alert('Hiba történt: ' + (result.status || 'Ismeretlen hiba'));
        }
    } catch (error) {
        console.error('Mentési hiba:', error);
    }
});

// 3. DELETE - Törlés
async function deleteItem(id) {
    if (!confirm('Valóban törölni kívánja ezt a bejegyzést?')) return;

    try {
        const response = await fetch(API_URL, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        });

        const result = await response.json();

        if (response.ok) {
            loadTelepitesek();
            console.log(result.status);
        } else {
            alert('Hiba a törlés során!');
        }
    } catch (error) {
        console.error('Törlési hiba:', error);
    }
}

// Szerkesztés betöltése az űrlapba
function editItem(id, gepid, szoftverid, verzio, datum) {
    document.getElementById('telepitesId').value = id;
    document.getElementById('gepid').value = gepid;
    document.getElementById('szoftverid').value = szoftverid;
    document.getElementById('verzio').value = verzio;
    document.getElementById('datum').value = datum;

    formTitle.innerText = 'Telepítés módosítása';
    saveBtn.innerText = 'Mentés';
    cancelBtn.classList.remove('d-none');
    window.scrollTo(0, 0);
}

// Űrlap alaphelyzetbe állítása
function resetForm() {
    form.reset();
    document.getElementById('telepitesId').value = '';
    formTitle.innerText = 'Új telepítés rögzítése';
    saveBtn.innerText = 'Hozzáadás';
    cancelBtn.classList.add('d-none');
}

// Kezdő betöltés
loadTelepitesek();