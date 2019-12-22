
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let runes = ["fehu", "uruz", "thurisaz", "ansuz", "raidho", "kenaz", "gifu", "wunjo", "hagall", "nied", "isa", "jera", "eihwaz", "perdhro", "eolh", "sigel", "tir", "beorc", "ehwaz", "mannaz", "lagaz", "ing", "daeg", "othel"];
shuffle(runes);
console.log(runes);
