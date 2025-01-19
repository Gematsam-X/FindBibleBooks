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

function injectOutput(message) {
  outputParagraph.innerText = message;
}

function normalizeNumber(number, digits) {
  return number.toString().padStart(digits, "0");
}

function checkBibleBook() {
  const originalInput = document.getElementById("input").value.trim();
  if (!originalInput) {
    injectOutput("Inserisci un riferimento biblico valido (es. Genesi 1:1 o Genesi 1 1).");
    return;
  }

  const parts = originalInput.split(/[\s:]+/); // Dividi su spazio o ":"
  const bookInput = parts[0].trim(); // Primo elemento: libro
  const chapterInput = parts[1]?.trim(); // Secondo elemento: capitolo (se fornito)
  const verseInput = parts[2]?.trim(); // Terzo elemento: versetto (se fornito)

  // Validazione dell'input
  const sanitizedInput = bookInput.toLowerCase().replace(/\s+/g, "");
  const matches = bibleBooks.filter((book) =>
    book.toLowerCase().replace(/\s+/g, "").startsWith(sanitizedInput)
  );

  if (matches.length === 1 || sanitizedInput === "salmo") {
    const bookName = sanitizedInput === "salmo" ? "Salmi" : matches[0];
    const bookIndex = bibleBooks.indexOf(bookName);
    const bookNumber = normalizeNumber(bookIndex + 1, 2);

    if (!chapterInput || isNaN(chapterInput)) {
      // Nessun capitolo specificato o non valido
      window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&book=${bookNumber}&pub=nwtsty`;
    } else if (!verseInput || isNaN(verseInput)) {
      // Capitolo fornito senza versetto
      const chapterNumber = normalizeNumber(parseInt(chapterInput), 3);
      window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&bible=${bookNumber}${chapterNumber}000-${bookNumber}${chapterNumber}999&pub=nwtsty`;
    } else {
      // Capitolo e versetto forniti
      const chapterNumber = normalizeNumber(parseInt(chapterInput), 3);
      const verseNumber = normalizeNumber(parseInt(verseInput), 3);
      window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&bible=${bookNumber}${chapterNumber}${verseNumber}&pub=nwtsty`;
    }
  } else if (matches.length > 1) {
    // Più libri trovati
    injectOutput(`Il testo fornito non è univoco. Forse intendevi: ${matches.join(" - ")}`);
  } else {
    // Nessun libro trovato
    injectOutput("Il libro non è stato trovato. Verifica di aver scritto correttamente il nome del libro.");
  }
}

// Event listener per il bottone "Cerca"
document.getElementById("searchButton").addEventListener("click", checkBibleBook);

// Permette la ricerca premendo "Invio"
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkBibleBook();
  }
});
