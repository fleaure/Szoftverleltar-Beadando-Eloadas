// oojs_script.js
const PC_IMAGE_URL = 'gep.png'; 

// 1. Alaposztály: Minden grafikus elemnek van pozíciója
class VisualElement {
    constructor(x, y) {
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
        this.element.style.zIndex = "100";
        
        // JAVÍTÁS: Megkeressük a konténert. Ha nincs, csak akkor megy a body-ba.
        const container = document.getElementById('monitor-space');
        if (container) {
            container.appendChild(this.element);
        } else {
            document.body.appendChild(this.element);
        }
    }

    // Metódus az elem pozicionálására
    putAt(x, y) {
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    }
}

// 2. Öröklődés: A Szamitogep kiterjeszti a VisualElement osztályt
class Szamitogep extends VisualElement {
    constructor(id, hely, x, y) {
        // 3. Super hívása
        super(x, y);
        this.id = id;
        this.hely = hely;

        // Monitor grafika beállítása
        this.element.style.width = "220px";
        this.element.style.height = "200px";
        this.element.style.backgroundImage = `url('${PC_IMAGE_URL}')`;
        this.element.style.backgroundSize = "contain";
        this.element.style.backgroundRepeat = "no-repeat";
        this.element.style.backgroundPosition = "center top";
        this.element.style.transition = "all 0.5s ease-out";

        // Belső "képernyő" a szoftvereknek
        this.screen = document.createElement("div");
        this.screen.style.position = "absolute";
        this.screen.style.top = "22px";   
        this.screen.style.left = "38px";  
        this.screen.style.width = "118px"; 
        this.screen.style.height = "85px";
        this.screen.style.overflowY = "auto"; 
        this.screen.style.padding = "4px";
        this.screen.style.backgroundColor = "rgba(0,0,0,0.85)"; 
        this.screen.style.fontSize = "9px"; 
        this.screen.style.color = "#00ff00"; 
        this.screen.style.fontFamily = "'Courier New', monospace";
        
        this.element.appendChild(this.screen);
        this.updateScreen();
    }

    updateScreen() {
        this.screen.innerHTML = `<strong style="font-size:10px">> GÉP_${this.id}</strong><br>> LOC: ${this.hely}<hr style="border-color: #00ff00; margin: 3px 0;">`;
    }

    addSzoftver(nev, verzio) {
        const p = document.createElement("p");
        p.style.margin = "1px 0";
        let rovidNev = nev.length > 15 ? nev.substring(0, 12) + "..." : nev;
        p.innerText = `+ ${rovidNev}`;
        this.screen.appendChild(p);
    }

    // Kijelölés effektus
    highlight() {
        this.element.style.filter = "drop-shadow(0 0 25px #00ff00) brightness(1.2)";
        this.element.style.transform = "translateY(-10px)";
        setTimeout(() => {
            this.element.style.filter = "none";
            this.element.style.transform = "translateY(0)";
        }, 2000);
    }
}