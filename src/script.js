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

function normalizeNumber(number, digits) {
  return number.toString().padStart(digits, '0');
}

function checkBibleBook() {
  const originalInput = document.getElementById("input").value.trim();
  const [bookInput, chapterInput] = originalInput.split(" ").map(part => part.trim());

  if (!bookInput) {
    injectOutput("Inserisci il nome di un libro della Bibbia per continuare.");
    return;
  }

  const sanitizedInput = bookInput
    .toLowerCase()
    .replace(/\s+/g, "");

  const matches = bibleBooks.filter((book) =>
    book.toLowerCase().replace(/\s+/g, "").startsWith(sanitizedInput)
  );

  if (matches.length === 1 || sanitizedInput === "salmo") {
    const bookName = sanitizedInput === "salmo" ? "Salmi" : matches[0];
    const bookIndex = bibleBooks.indexOf(bookName);
    const bookNumber = normalizeNumber(bookIndex + 1, 2);

    if (!chapterInput || isNaN(chapterInput)) {
      // Nessun capitolo specificato o valore non numerico, reindirizza solo al libro
      window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&book=${bookNumber}&pub=nwtsty`;
    } else {
      // Capitolo specificato
      const chapterNumber = normalizeNumber(parseInt(chapterInput), 3);
      window.location.href = `https://www.jw.org/finder?wtlocale=I&prefer=lang&bible=${bookNumber}${chapterNumber}000-${bookNumber}${chapterNumber}999&pub=nwtsty`;
    }
  } else if (matches.length > 1) {
    // Più libri trovati
    injectOutput(
      `Il testo fornito non è sufficiente a identificare un libro univoco. Forse intendevi: ${matches.join(" - ")}`
    );
  } else {
    // Nessuna corrispondenza
    injectOutput(
      "Il libro non è stato trovato. Verifica di aver scritto il nome del libro correttamente."
    );
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
