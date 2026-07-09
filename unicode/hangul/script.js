function initPanel(id, valElem, prevElem, initIdx) {
  var chars = document.getElementById(id).getElementsByTagName("li");
  prevElem.elem = chars[initIdx];
  console.log(prevElem);
  prevElem.elem.classList.toggle("sel");
  valElem.innerHTML = initIdx;

  for (var i = 0; i < chars.length; i++) {
    chars[i].addEventListener("click", function() {
      if (this == prevElem) {
        return;
      }
      this.classList.toggle("sel");
      prevElem.elem.classList.toggle("sel");
      prevElem.elem = this;
      valElem.innerHTML = this.value;
      update();
    });
  }
}

function setupAccordion() {
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    var panel = acc[i].nextElementSibling;

    //open all panels by default
    acc[i].classList.add("active");
    panel.style.maxHeight = panel.scrollHeight + "px";

    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.borderWidth = 0;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.borderWidth= "0.25em";
      }
    });
  }
}

function compute() {
  console.log(prevInit);
  let init_val = parseInt(prevInit.elem.value, 10);
  let medial_val = parseInt(prevMedial.elem.value, 10);
  let final_val = parseInt(prevFinal.elem.value, 10);
  return init_val*588 + medial_val*28 + final_val + 44032;
}

function changeUnicodeDisplay(valDec) {
  console.log("pika");
  codeDecVal.innerHTML = valDec;
  codeHexVal.innerHTML = valDec.toString(16).toUpperCase();
}

function changeOutput(valDec) {
  let hex = valDec.toString(16).toUpperCase();
  outputUtf8.innerHTML = hex;
  outputHangul.innerHTML = "&#x" + hex;
  unicodeLink.href = "https://www.compart.com/en/unicode/U+" + hex;
}

function medialToVowel() {
  let medial_val = parseInt(prevMedial.elem.value, 10);
  switch(medial_val) {
    case 0:
      return 'a';
    case 1:
      return "ae";
    case 2:
      return "ya";
    case 3:
      return "yae";
    case 4:
      return "eo";
    case 5:
      return "e";
    case 6:
      return "yeo";
    case 7:
      return "ye";
    case 8:
      return "o";
    case 9:
      return "wa";
    case 10:
      return "wae";
    case 11:
      return "oe";
    case 12:
      return "yo";
    case 13:
      return "u";
    case 14:
      return "wo";
    case 15:
      return "we";
    case 16:
      return "wi";
    case 17:
      return "yu";
    case 18:
      return "eu";
    case 19:
      return "ui";
    case 20: 
      return "i";
  }
}

function toRoman() {
  let init_val = parseInt(prevInit.elem.value, 10);
  let final_val = parseInt(prevFinal.elem.value, 10);

  outputRoman.innerHTML = (INITIAL_ROMA[init_val] + medialToVowel() + FINAL_ROMA[final_val]).toUpperCase();
}

function update() {
  let valDec = compute();
  changeUnicodeDisplay(valDec);
  changeOutput(valDec);
  toRoman();
}

// 0–18: Initial consonants
const INITIAL_ROMA = [
  'g',  // ㄱ
  'kk', // ㄲ
  'n',  // ㄴ
  'd',  // ㄷ
  'tt', // ㄸ
  'r',  // ㄹ
  'm',  // ㅁ
  'b',  // ㅂ
  'pp', // ㅃ
  's',  // ㅅ
  'ss', // ㅆ
  '',   // ㅇ (silent initial)
  'j',  // ㅈ
  'jj', // ㅉ
  'ch', // ㅊ
  'k',  // ㅋ
  't',  // ㅌ
  'p',  // ㅍ
  'h'   // ㅎ
];

// 0–27: Final consonants (받침, includes null)
const FINAL_ROMA = [
  '',   // 0: (no final)
  'k',  // ㄱ
  'k',  // ㄲ
  'k',  // ㄳ → simplified to k in RRK
  'n',  // ㄴ
  'n',  // ㄵ → simplified to n
  'n',  // ㄶ → simplified to n
  't',  // ㄷ
  'l',  // ㄹ
  'lk', // ㄺ
  'lm', // ㄻ
  'lp', // ㄼ
  'lt', // ㄽ
  'lt', // ㄾ
  'lp', // ㄿ
  'lh', // ㅀ
  'm',  // ㅁ
  'p',  // ㅂ
  'p',  // ㅄ → simplified to p
  't',  // ㅅ
  't',  // ㅆ
  'ng', // ㅇ
  't',  // ㅈ
  't',  // ㅊ
  'k',  // ㅋ
  't',  // ㅌ
  'p',  // ㅍ
  't'   // ㅎ
];
