
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let runes = ["ᚠ🤠💰 fehu 💰🤠ᚠ", "ᚢ🐂💪 uruz 💪🐂ᚢ", "ᚦ🔨🛡️ thurisaz 🛡️🔨ᚦ", "ᚨ🧠👄 ansuz 👄🧠ᚨ", "ᚱ🦅🚗 raidho 🚗🦅ᚱ", "ᚲ🔦📚 kenaz 📚🔦ᚲ", "ᚷ🎁🤝 gifu 🤝🎁ᚷ", "ᚹ🎡😃 wunjo 😃🎡ᚹ", "ᚺ⏳🚧 hagall 🚧⏳ᚺ", "ᚾ🥫🚰 nied 🚰🥫ᚾ", "ᛁ❄️🗿 isa 🗿❄️ᛁ", "ᛃ🌼🌾 jera 🌾🌼ᛃ", "ᛈ🔀🎲 perdhro 🎲🔀ᛈ", "ᛇ💀🦋 eihwaz 🦋💀ᛇ", "ᛉ🦌🛡️ algiz 🛡️🦌ᛉ", "ᛊ🌞🎉 sigel 🎉🌞ᛊ", "ᛏ🗡️⚖️ tir ⚖️🗡️ᛏ", "ᛒ🌎👪 beorc 👪🌎ᛒ", "ᛖ🐎✈️ ehwaz ✈️🐎ᛖ", "ᛗ🧙🏮 mannaz 🏮🧙ᛗ", "ᛚ🌊🎢 lagaz 🎢🌊ᛚ", "ᛜ🥚🌱 ing 🌱🥚ᛜ", "ᛞ☀️🌙 daeg 🌙☀️ᛞ", "ᛟ👴💰 othel 💰👴ᛟ"];
shuffle(runes);


var runeone = document.getElementById("rune1");
var runetwo = document.getElementById("rune2");
var runethree = document.getElementById("rune3");
var butt = document.getElementById("butt");

butt.onclick = function() {
  shuffle(runes);
  let threerunes = runes.slice(0,3);
  runeone.innerHTML =  threerunes[0];
  runetwo.innerHTML = threerunes[1];
  runethree.innerHTML = threerunes[2];
};

