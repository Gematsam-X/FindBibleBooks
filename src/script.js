const bibleBooks = [
  "Genesi",
  "Esodo",
  "Levitico",
  "Numeri",
  "Deuteronomio",
  "Giosuè",
  "Giudici",
  "Rut",
  "1 Samuele",
  "2 Samuele",
  "1 Re",
  "2 Re",
  "1 Cronache",
  "2 Cronache",
  "Esdra",
  "Neemia",
  "Ester",
  "Giobbe",
  "Salmi",
  "Proverbi",
  "Ecclesiaste",
  "Cantico dei Cantici",
  "Isaia",
  "Geremia",
  "Lamentazioni",
  "Ezechiele",
  "Daniele",
  "Osea",
  "Gioele",
  "Amos",
  "Abdia",
  "Giona",
  "Michea",
  "Naum",
  "Abacuc",
  "Sofonia",
  "Aggeo",
  "Zaccaria",
  "Malachia",
  "Matteo",
  "Marco",
  "Luca",
  "Giovanni",
  "Atti",
  "Romani",
  "1 Corinti",
  "2 Corinti",
  "Galati",
  "Efesini",
  "Filippesi",
  "Colossesi",
  "1 Tessalonicesi",
  "2 Tessalonicesi",
  "1 Timoteo",
  "2 Timoteo",
  "Tito",
  "Filemone",
  "Ebrei",
  "Giacomo",
  "1 Pietro",
  "2 Pietro",
  "1 Giovanni",
  "2 Giovanni",
  "3 Giovanni",
  "Giuda",
  "Rivelazione",
];
const outputParagraph = document.getElementById("output");
function injectOutput(inject) {
  outputParagraph.innerText = inject;
}

function checkBibleBook() {
  const originalInput = document.getElementById("input").value;
  const sanitizedInput = originalInput
    .toLowerCase()
    .replace(/\s+/g, "")
    .trim();

  // Trova tutti i libri che iniziano con la stringa inserita
  const matches = bibleBooks.filter((book) =>
    book.toLowerCase().replace(/\s+/g, "").startsWith(sanitizedInput)
  );

  if (matches.length === 1 || sanitizedInput === "salmo") {
    if (sanitizedInput === "salmo") {
      window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&book=19&pub=nwtsty`
    }
      
    // Un solo libro trovato: reindirizza
    const bookIndex = bibleBooks.indexOf(matches[0]);
    const bookNumber = bookIndex + 1; // Trasforma l'indice in numero (partendo da 1)
    window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&book=${bookNumber}&pub=nwtsty`
  } else if (matches.length > 1) {
    // Più libri trovati: mostra suggerimenti
    injectOutput(`Il testo che hai fornito non è sufficiente a determinare che libro della Bibbia stavi cercando. Forse ti riferivi a:\n${matches.join(" - ")}`);
  } else {
    // Nessun libro trovato
    injectOutput("Libro non trovato. Assicurati di aver digitato il libro o le sue iniziali correttamente.")
  }
}

// Event listener per il bottone "Cerca"
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", checkBibleBook);

// Permette la ricerca premendo "Invio"
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkBibleBook();
  }
});
