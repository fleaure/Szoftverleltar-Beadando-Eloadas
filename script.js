var selectedIndex = null;
var array1 = [
    {"id": 1, "nev": "AIR", "kategoria": "plug-in"},
    {"id": 2, "nev": "FastStone Image Viewer", "kategoria": "képkezelés"},
    {"id": 5, "nev": "InfraRecorder", "kategoria": "DVD-írás"},
    {"id": 7, "nev": "PDF Split And Merge Basic", "kategoria": "pdf-manipulálás"},
    {"id": 9, "nev": "CCleaner", "kategoria": "gépkarbantartás"},
    {"id": 11, "nev": "Tracker", "kategoria": "fizika oktatás"},
    {"id": 12, "nev": "Acrobat Reader", "kategoria": "pdf-olvasás"},
    {"id": 13, "nev": "Multivox 4 Magyar szövegfelolvasó", "kategoria": "szövegfelolvasó"},
    {"id": 14, "nev": "WinMerge", "kategoria": "fájlösszehasonlítás"},
    {"id": 15, "nev": "Free Pascal", "kategoria": "fejlesztő környezet"},
    {"id": 17, "nev": "Geany", "kategoria": "editor"},
    {"id": 18, "nev": "Euler3D", "kategoria": "matematika oktatás"},
    {"id": 19, "nev": "IrfanView", "kategoria": "képkezelés"},
    {"id": 20, "nev": "Blender", "kategoria": "modellezés"},
    {"id": 21, "nev": "Flash Player ActiveX", "kategoria": "plug-in"},
    {"id": 22, "nev": "CDBurnerXP", "kategoria": "DVD-írás"},
    {"id": 23, "nev": "Java SE Development Kit", "kategoria": "fejlesztő környezet"},
    {"id": 24, "nev": "Flash Player PPAPI", "kategoria": "plug-in"},
    {"id": 25, "nev": "SharePoint Designer 2007", "kategoria": "webszerkesztés"},
    {"id": 27, "nev": "K-Lite Mega Codec Pack", "kategoria": "médialejátszás"},
    {"id": 28, "nev": "Notepad++", "kategoria": "editor"},
    {"id": 29, "nev": "PatchCleaner", "kategoria": "gépkarbantartás"},
    {"id": 30, "nev": "Audacity", "kategoria": "hangszerkesztés"},
    {"id": 34, "nev": "Java", "kategoria": "plug-in"},
    {"id": 35, "nev": "Visual Studio 2013", "kategoria": "fejlesztő környezet"},
    {"id": 36, "nev": "Greenshot", "kategoria": "képernyőkép-készítés"},
    {"id": 38, "nev": "Lynx 4", "kategoria": "interaktív tábla"},
    {"id": 39, "nev": "PuTTY", "kategoria": "távoli terminál"},
    {"id": 40, "nev": "Google Föld", "kategoria": "virtuális földgömb"},
    {"id": 42, "nev": "PDFCreator", "kategoria": "pdf-generálás"},
    {"id": 44, "nev": "MuseScore", "kategoria": "kottaírás"},
    {"id": 45, "nev": "Disk Drill", "kategoria": "adathelyreállítás"},
    {"id": 46, "nev": "Flash Player NPAPI", "kategoria": "plug-in"},
    {"id": 48, "nev": "Google Drive", "kategoria": "online fájltárolás"},
    {"id": 49, "nev": "Google Earth", "kategoria": "virtuális földgömb"},
    {"id": 50, "nev": "Filzip", "kategoria": "tömörítés"},
    {"id": 51, "nev": "FreeCommander XE", "kategoria": "fájlkezelés"},
    {"id": 53, "nev": "Reader", "kategoria": "pdf-olvasás"},
    {"id": 54, "nev": "Wings 3D", "kategoria": "modellezés"},
    {"id": 55, "nev": "Windows Live Essentials", "kategoria": "alkalmazás gyűjtemény"},
    {"id": 56, "nev": "Imagine", "kategoria": "fejlesztő környezet"},
    {"id": 57, "nev": "LibreOffice", "kategoria": "irodai programcsomag"},
    {"id": 58, "nev": "Windows Live Messenger", "kategoria": "azonnali üzenetküldés"},
    {"id": 59, "nev": "Scratch 2 Offline Editor", "kategoria": "fejlesztő környezet"},
    {"id": 60, "nev": "Inkscape", "kategoria": "vektorgarfikus szerkesztés"},
    {"id": 61, "nev": "Adafor", "kategoria": "adminisztráció"},
    {"id": 62, "nev": "Skype", "kategoria": "azonnali üzenetküldés"},
    {"id": 63, "nev": "Mozilla Firefox", "kategoria": "böngészés"},
    {"id": 64, "nev": "Opera", "kategoria": "böngészés"},
    {"id": 65, "nev": "Dev-C++", "kategoria": "fejlesztő környezet"},
    {"id": 66, "nev": "NetBeans IDE", "kategoria": "fejlesztő környezet"},
    {"id": 67, "nev": "Shockwave Player", "kategoria": "plug-in"},
    {"id": 68, "nev": "Foxit Reader", "kategoria": "pdf-olvasás"},
    {"id": 69, "nev": "Movie Maker", "kategoria": "videószerkesztés"},
    {"id": 70, "nev": "Silverlight", "kategoria": "plug-in"},
    {"id": 71, "nev": "KompoZer", "kategoria": "webszerkesztés"},
    {"id": 72, "nev": "SMART Notebook Interactive Viewer", "kategoria": "interaktív tábla"},
    {"id": 73, "nev": "Euklides", "kategoria": "matematika oktatás"},
    {"id": 74, "nev": "paint.net", "kategoria": "képszerkesztés"},
    {"id": 75, "nev": "WinSCP", "kategoria": "távoli fájlhozzáférés"},
    {"id": 76, "nev": "SVG Viewer", "kategoria": "plug-in"},
    {"id": 78, "nev": "VUE", "kategoria": "gondolattérkép készítés"},
    {"id": 79, "nev": "mimio Studio", "kategoria": "interaktív tábla"},
    {"id": 80, "nev": "Real Alternative", "kategoria": "médialejátszás"},
    {"id": 81, "nev": "XnView", "kategoria": "képkezelés"},
    {"id": 82, "nev": "Windows Live Movie Maker", "kategoria": "videószerkesztés"},
    {"id": 83, "nev": "Picasa", "kategoria": "képszerkesztés"},
    {"id": 84, "nev": "SMART Notebook", "kategoria": "interaktív tábla"},
    {"id": 85, "nev": "Double Commander", "kategoria": "fájlkezelés"},
    {"id": 86, "nev": "ImgBurn", "kategoria": "DVD-írás"},
    {"id": 87, "nev": "Google Chrome", "kategoria": "böngészés"},
    {"id": 88, "nev": "VLC media player", "kategoria": "médialejátszás"},
    {"id": 89, "nev": "FileZilla Client", "kategoria": "távoli fájlhozzáférés"},
    {"id": 90, "nev": "GeoGebra", "kategoria": "matematika oktatás"},
    {"id": 91, "nev": "FFmpeg for Audacity", "kategoria": "hangszerkesztés"},
    {"id": 92, "nev": "BS.Player FREE", "kategoria": "médialejátszás"},
    {"id": 94, "nev": "Dia", "kategoria": "diagramkészítés"},
    {"id": 95, "nev": "Visual Studio 2015", "kategoria": "fejlesztő környezet"},
    {"id": 96, "nev": "Open-Sankoré", "kategoria": "interaktív tábla"},
    {"id": 97, "nev": "GIMP", "kategoria": "képszerkesztés"},
    {"id": 99, "nev": "Freeplane", "kategoria": "gondolattérkép készítés"},
    {"id": 101, "nev": "Dropbox", "kategoria": "online fájltárolás"},
    {"id": 102, "nev": "7-Zip", "kategoria": "tömörítés"},
    {"id": 103, "nev": "K-Lite Codec Pack", "kategoria": "médialejátszás"},
    {"id": 104, "nev": "EclipseCrossword", "kategoria": "keresztrejtvény készítés"},
    {"id": 105, "nev": "FreeMind", "kategoria": "gondolattérkép készítés"}
];

window.onload = function() {
    printArray();
};

function printArray() {
    var table = document.getElementById("szoftverList").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    for (var i = 0; i < array1.length; i++) {
        var newRow = table.insertRow(table.rows.length);
        newRow.insertCell(0).innerHTML = array1[i].id;
        newRow.insertCell(1).innerHTML = array1[i].nev;
        newRow.insertCell(2).innerHTML = array1[i].kategoria;
        
        var cellAction = newRow.insertCell(3);
        cellAction.innerHTML = `<button onClick="onEdit(${i})">Szerkeszt</button> 
                                <button onClick="onDelete(${i})">Töröl</button>`;
    }
}

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedIndex == null) {
            array1.push(formData);
        } else {
            array1[selectedIndex] = formData;
        }
        resetForm();
        printArray();
    }
}

function readFormData() {
    return {
        id: document.getElementById("szoftverId").value,
        nev: document.getElementById("szoftverNev").value,
        kategoria: document.getElementById("kategoria").value
    };
}

function onEdit(index) {
    selectedIndex = index;
    var data = array1[index];
    document.getElementById("szoftverId").value = data.id;
    document.getElementById("szoftverNev").value = data.nev;
    document.getElementById("kategoria").value = data.kategoria;
}

function onDelete(index) {
    if (confirm('Biztosan törölni szeretnéd ezt a szoftvert?')) {
        array1.splice(index, 1);
        printArray();
        resetForm();
    }
}

function resetForm() {
    document.getElementById("szoftverId").value = "";
    document.getElementById("szoftverNev").value = "";
    document.getElementById("kategoria").value = "";
    selectedIndex = null;
}

function validate() {
    var isValid = true;
    if (document.getElementById("szoftverNev").value == "") {
        isValid = false;
        document.getElementById("nevValidationError").classList.remove("hide");
    } else {
        document.getElementById("nevValidationError").classList.add("hide");
    }
    return isValid;
}