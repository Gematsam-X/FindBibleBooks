function handleKeyDown(event) {
  // Verifica se il tasto premuto è Enter
  if (event.key === "Enter") {
    checkBibleBook();
  }
}

function checkBibleBook() {
  let input = document
    .getElementById("input")
    .value.toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
  let originalInput = document.getElementById("input").value;

  switch (input) {
    //SCRITTURE EBRAICO-ARAMAICHE
    case "gen":
    case "genesi":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/genesi">Genesi</a>';
      break;
    case "eso":
    case "esodo":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/esodo">Esodo</a>';
      break;
    case "levitico":
    case "lev":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/levitico">Levitico</a>';
      break;
    case "numeri":
    case "num":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/numeri">Numeri</a>';
      break;
    case "deuteronomio":
    case "deut":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/deuteronomio">Deuteronomio</a>';
      break;
    case "giosue":
    case "giosuè":
    case "giosué":
    case "gios":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giosue">Giosuè</a>';
      break;
    case "giudici":
    case "giud":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giudici">Giudici</a>';
      break;
    case "rut":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/rut">Rut</a>';
      break;
    case "1samuele":
    case "samuele 1":
    case "samuele1":
    case "1 samuele":
    case "1sam":
    case "sam 1":
    case "1 sam":
    case "sam1":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-samuele">1 Samuele</a>';
      break;
    case "2samuele":
    case "samuele 2":
    case "samuele2":
    case "2 samuele":
    case "2sam":
    case "sam 2":
    case "2 sam":
    case "sam2":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-samuele">2 Samuele</a>';
      break;
    case "1re":
    case "re1":
    case "re 1":
    case "1 re":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-re">1 Re</a>';
      break;
    case "2re":
    case "re2":
    case "re 2":
    case "2 re":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-re">2 Re</a>';
      break;
    case "1cronache":
    case "cronache1":
    case "cronache 1":
    case "1 cronache":
    case "1cron":
    case "cron1":
    case "cron 1":
    case "1 cron":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-cronache">1 Cronache</a>';
      break;
    case "2cronache":
    case "cronache2":
    case "cronache 2":
    case "2 cronache":
    case "2cron":
    case "cron2":
    case "cron 2":
    case "2 cron":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-cronache">2 Cronache</a>';
      break;
    case "esdra":
    case "esd":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/esdra">Esdra</a>';
      break;
    case "neemia":
    case "neem":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/neemia">Neemia</a>';
      break;
    case "ester":
    case "est":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/ester">Ester</a>';
      break;
    case "giobbe":
    case "giob":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giobbe">Giobbe</a>';
      break;
    case "salmi":
    case "salmo":
    case "sal":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/salmi">Salmi</a>';
      break;
    case "proverbi":
    case "prov":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/proverbi">Proverbi</a>';
      break;
    case "ecclesiaste":
    case "ecc":
      input;
    case "os":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/">Osea</a>';
      break;
    case "gioele":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/gioele">Gioele</a>';
      break;
    case "amos":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/amos">Amos</a>';
      break;
    case "abdia":
    case "abd":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/abdia">Abdia</a>';
      break;
    case "giona":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giona">Giona</a>';
      break;
    case "michea":
    case "mic":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/michea">Michea</a>';
      break;
    case "naum":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/naum">Naum</a>';
      break;
    case "abacuc":
    case "abac":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/abacuc">Abacuc</a>';
      break;
    case "sofonia":
    case "sof":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/sofonia">Sofonia</a>';
      break;
    case "aggeo":
    case "agg":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/">Aggeo</a>';
      break;
    case "zaccaria":
    case "zacc":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/zaccaria">Zaccaria</a>';
      break;
    case "malachia":
    case "mal":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/malachia">Malachia</a>';
      break;
    //SCRITTURE GRECHE CRISTIANE
    case "matteo":
    case "mat":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/matteo">Matteo</a>';
      break;
    case "marco":
    case "mar":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/marco">Marco</a>';
      break;
    case "luca":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/luca">Luca</a>';
      break;
    case "giovanni":
    case "giov":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giovanni">Giovanni</a>';
      break;
    case "atti":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/atti">Atti</a>';
      break;
    case "romani":
    case "rom":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/romani">Romani</a>';
      break;
    case "1corinti":
    case "corinti1":
    case "corinti 1":
    case "1 corinti":
    case "1cor":
    case "1 cor":
    case "cor1":
    case "cor 1":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-corinti">1 Corinti</a>';
      break;
    case "2corinti":
    case "corinti2":
    case "corinti 2":
    case "2 corinti":
    case "cor 2":
    case "cor2":
    case "2 cor":
    case "2cor":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-corinti">2 Corinti</a>';
      break;
    case "galati":
    case "gal":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/galati">Galati</a>';
      break;
    case "efesini":
    case "efes":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/efesini">Efesini</a>';
      break;
    case "filippesi":
    case "fil":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/filippesi">Filippesi</a>';
      break;
    case "colossesi":
    case "col":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/colossesi">Colossesi</a>';
      break;
    case "1tessalonicesi":
    case "tessalonicesi1":
    case "tessalonicesi 1":
    case "1 tessalonicesi":
    case "1tes":
    case "1 tes":
    case "tes1":
    case "tes 1":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-tessalonicesi">1 Tessalonicesi</a>';
      break;
    case "2tessalonicesi":
    case "tessalonicesi2":
    case "tessalonicesi 2":
    case "2 tessalonicesi":
    case "tes 2":
    case "2tes":
    case "2 tes":
    case "tes2":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-tessalonicesi">2 Tessalonicesi</a>';
      break;
    case "1timoteo":
    case "timoteo1":
    case "timoteo 1":
    case "1 timoteo":
    case "1tim":
    case "1 tim":
    case "tim1":
    case "tim 1":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-timoteo">1 Timoteo</a>';
      break;
    case "2timoteo":
    case "timoteo2":
    case "timoteo 2":
    case "2 timoteo":
    case "2tim":
    case "2 tim":
    case "tim2":
    case "tim 2":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-timoteo">2 Timoteo</a>';
      break;
    case "tito":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/tito">Tito</a>';
      break;
    case "filemone":
    case "filem":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/filemone">Filemone</a>';
      break;
    case "ebrei":
    case "eb":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/ebrei">Ebrei</a>';
      break;
    case "giacomo":
    case "giac":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giacomo">Giacomo</a>';
      break;
    case "1pietro":
    case "pietro1":
    case "pietro 1":
    case "1 pietro":
    case "1piet":
    case "1 piet":
    case "piet 1":
    case "piet1":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-pietro">1 Pietro</a>';
      break;
    case "2pietro":
    case "pietro2":
    case "pietro 2":
    case "2 pietro":
    case "2 piet":
    case "2piet":
    case "piet 2":
    case "piet2":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-pietro">2 Pietro</a>';
      break;
    case "1giovanni":
    case "giovanni1":
    case "giovanni 1":
    case "1 giovanni":
    case "1 giov":
    case "1giov":
    case "giov 1":
    case "giov1":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/1-giovanni">1 Giovanni</a>';
      break;
    case "2giovanni":
    case "giovanni2":
    case "giovanni 2":
    case "2 giovanni":
    case "2giov":
    case "2 giov":
    case "giov2":
    case "giov 2":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/2-giovanni">2 Giovanni</a>';
      break;
    case "3giovanni":
    case "giovanni3":
    case "giovanni 3":
    case "3 giovanni":
    case "3giov":
    case "3 giov":
    case "giov3":
    case "giov 3":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/3-giovanni">3 Giovanni</a>';
      break;
    case "giuda":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/giuda">Giuda</a>';
      break;
    case "rivelazione":
    case "riv":
    case "apoc":
    case "apocalisse":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/rivelazione">Rivelazione</a>';
      break;
    // casi speciali
    case "bibbia":
    case "tutti":
      document.getElementById("outputBibleBook").innerHTML =
        '<a style="font-size: 5rem;" href="https://www.jw.org/it/biblioteca-digitale/bibbia/bibbia-per-lo-studio/libri/">Bibbia</a>';
      break;
    case "reset":
    case "schermatadiinizio":
      input = input;
      document.getElementById("outputBibleBook").innerHTML =
        "Digita qui sopra il libro biblico per trovarlo più velocemente! Riceverai un link per il reindirizzamento.";
      break;
    case "":
    case " ":
      document.getElementById("outputBibleBook").innerHTML =
        "Per favore digita il libro biblico da cercare nell'input qua sopra.";
      break;
    case "clear":
      document.getElementById("outputBibleBook").innerHTML = "";
      break;
    default:
      document.getElementById(
        "outputBibleBook"
      ).innerHTML = `Ehm... mi sa che hai sbagliato qualcosa. ${originalInput} non è un libro della Bibbia.`;
      break;
  }
}
