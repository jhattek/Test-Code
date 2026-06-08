# CLAUDE.md

## Projektübersicht

Dieses Projekt ist ein einfaches Snake-Spiel, das mit React, HTML, CSS und JavaScript entwickelt wurde.

Ziele des Projekts:

- Einfache und verständliche Codebasis
- Gute Lesbarkeit
- Leicht erweiterbar
- Geeignet für Lernzwecke
- Keine zusätzlichen Frameworks außer React

---

## Technologien

- HTML5
- CSS3
- JavaScript (ES6+)
- React 18
- ReactDOM 18
- Babel Standalone

---

## Projektstruktur

```text
snake-game/
│
├── index.html
├── style.css
├── App.js
└── CLAUDE.md
```

---

## Spielbeschreibung

Das Spiel ist eine klassische Snake-Implementierung.

### Regeln

- Die Schlange wird mit den Pfeiltasten gesteuert.
- Die Schlange bewegt sich kontinuierlich.
- Rotes Futter erhöht den Punktestand.
- Nach jedem gefressenen Futter wächst die Schlange.
- Berührt die Schlange die Wand, endet das Spiel.
- Berührt die Schlange ihren eigenen Körper, endet das Spiel.
- Nach Game Over kann das Spiel neu gestartet werden.

---

## Architektur

### Hauptkomponente

Die gesamte Spiellogik befindet sich aktuell in:

```jsx
App()
```

Verantwortlichkeiten:

- Spielstatus verwalten
- Tastatureingaben verarbeiten
- Bewegung der Schlange berechnen
- Kollisionen erkennen
- Punkte zählen
- Spielfeld rendern
- Neustart ermöglichen

---

## State Management

### snake

Speichert alle Segmente der Schlange.

Beispiel:

```js
[
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 }
]
```

### food

Speichert die Position des Futters.

Beispiel:

```js
{
  x: 5,
  y: 7
}
```

### direction

Aktuelle Bewegungsrichtung.

Beispiel:

```js
{
  x: 1,
  y: 0
}
```

### score

Aktuelle Punktzahl.

```js
0
```

### gameOver

Status des Spiels.

```js
true
```

oder

```js
false
```

---

## Coding Guidelines

### Allgemein

- Modernes JavaScript verwenden.
- React Hooks bevorzugen.
- Lesbaren Code schreiben.
- Keine unnötigen Abhängigkeiten hinzufügen.
- Funktionen möglichst klein halten.
- Aussagekräftige Variablennamen verwenden.

### Bevorzugt

```jsx
useState()
useEffect()
```

### Vermeiden

- Klassenkomponenten
- Direkte DOM-Manipulation
- Globale Variablen
- Unnötig komplexe Logik

---

## CSS Richtlinien

- Klare Klassennamen verwenden.
- Layout möglichst über CSS lösen.
- Responsive Design berücksichtigen.
- Wiederverwendbare Klassen bevorzugen.

Beispiel:

```css
.board
.snake
.food
.container
.game-over
```

---

## Erweiterungsmöglichkeiten

### Gameplay

- Highscore
- Level-System
- Schwierigkeitsgrade
- Hindernisse
- Power-Ups
- Pause-Funktion

### Mobile

- Touch-Steuerung
- Swipe-Gesten
- Responsive Layout

### Audio

- Soundeffekte
- Hintergrundmusik

### Grafik

- Animationen
- Pixel-Art Design
- Partikeleffekte

### Speicherung

- localStorage für Highscore
- Einstellungen speichern

---

## Mögliche zukünftige Ordnerstruktur

Wenn das Projekt wächst:

```text
src/

├── components/
│   ├── Board.jsx
│   ├── Snake.jsx
│   ├── Food.jsx
│   ├── Score.jsx
│   └── GameOver.jsx
│
├── hooks/
│   ├── useSnake.js
│   ├── useKeyboard.js
│   └── useGameLoop.js
│
├── utils/
│   ├── collision.js
│   ├── food.js
│   └── constants.js
│
└── App.jsx
```

---

## Richtlinien für KI-Assistenten

Bei Änderungen am Projekt:

1. Vorhandene Funktionen nicht unnötig ersetzen.
2. Bestehende Spiellogik beibehalten.
3. React Hooks korrekt verwenden.
4. Lesbarkeit vor Optimierung priorisieren.
5. Neue Features modular entwickeln.
6. Keine zusätzlichen Frameworks ohne ausdrückliche Anforderung hinzufügen.
7. Browser-Kompatibilität berücksichtigen.
8. Kommentare nur dort einsetzen, wo die Logik nicht sofort verständlich ist.

---

## Ziel

Das Ziel ist ein einfaches, sauberes und erweiterbares Snake-Spiel, das als Lernprojekt und Grundlage für größere React-Spiele dienen kann.