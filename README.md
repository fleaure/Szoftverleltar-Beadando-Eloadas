# 🎓 Web programozás-1 Házi feladat - Szoftverleltár

> Egyetemi projektmunka a "Web programozás-1" tantárgyhoz. A projekt egy több modulos, komplex webalapú alkalmazás,
>  amely bemutatja a modern webfejlesztési technológiák (HTML, CSS, JavaScript, React, PHP) gyakorlati alkalmazását.

🌍 **Éles weboldal:** [http://szoftverleltarnje.nhely.hu/]

---

## 🚀 A projekt moduljai (Funkciók)

Az alkalmazás egy egységes, sötétkék-cián (Navy & Teal) dizájnra épül, és az alábbi aloldalakat, illetve technológiai megoldásokat tartalmazza:

1. **Főoldal (`index.html`):** A projekt bemutatása, reszponzív felépítés, egyedi CSS változók használatával.
2. **JavaScript CRUD (`javascript.html`):** Natív JS-ben írt kliensoldali szoftverkezelő alkalmazás (Create, Read, Update, Delete).
3. **React CRUD (`react.html`):** React-ben megvalósított, állapotkezelt (useState) szoftver adatbázis kezelő.
4. **SPA (Single Page Application):** Két önálló React modul (Tic-Tac-Toe és Számológép) egyoldalas alkalmazásba ágyazva.
5. **Fetch API (`fetchapi.html`):** Aszinkron JavaScript (Fetch API) kommunikáció a PHP szerverrel.
6. **Axios CRUD (`axios.html`):** Egy fejlett, önálló React alkalmazás (`react-axios`), amely Axios segítségével kommunikál az adatbázissal. 
   - *Extrák:* 50 elemes kliensoldali lapozás (pagination) és dinamikus, valós idejű keresőrendszer.
7. **OOJS (`oojs.html`):** Objektumorientált JavaScript (osztályok, öröklődés, konstruktorok) bemutatása egy grafikus felületen.

---

## 🛠️ Használt technológiák

**Frontend:**
* HTML5 & CSS3 (Egyedi dizájnrendszer CSS változókkal)
* Vanilla JavaScript (ES6+)
* React.js (Create React App, Hooks: `useState`, `useEffect`)
* Bootstrap 5 (Reszponzív rácsrendszer és segédosztályok)
* Axios (HTTP kérések kezelése)

**Backend & Adatbázis:**
* PHP 8.0
* PDO (PHP Data Objects) a biztonságos adatbázis-kapcsolatért
* MySQL (Nethely szerveren futtatva)

---

## ⚙️ Telepítés és Futtatás (Lokális fejlesztés)

A projekt teljes futtatásához szerverkörnyezet (pl. XAMPP) és Node.js szükséges.
2. React alkalmazások (Axios és SPA) buildelése:
Mivel a React modulok Babel/standalone nélkül készültek, a futtatáshoz le kell őket fordítani:

    Nyiss egy terminált a react-axios (vagy az SPA) mappában.

    Telepítsd a függőségeket:
    Bash

    npm install

    Fordítsd le a projektet:
    Bash

    npm run build

    A generált build mappa tartalmát töltsd fel a webszerverre az adott HTML fájl mellé.
