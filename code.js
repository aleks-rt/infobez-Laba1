function readFile(object) {
  var file = object.files[0]
  var reader = new FileReader()
  reader.onload = function() {
    document.getElementById('out').innerHTML = reader.result
    let a = document.getElementById('out').innerHTML;
    console.log(a);

  }
  reader.readAsText(file)
}


const ALPHABET = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function getEncodedAlphabet(alphabet, slip, keyWord) {
  let encodedAlphabet = alphabet;
  for (let i = 0; i < keyWord.length; ++i) {
      let indexLetter = encodedAlphabet.indexOf(keyWord.slice(i, i + 1));
      encodedAlphabet = encodedAlphabet.slice(0, i) + keyWord.slice(i, i + 1) 
          + encodedAlphabet.slice(i, indexLetter) 
          + encodedAlphabet.slice(indexLetter + 1);
  }

  encodedAlphabet = encodedAlphabet.slice(-slip) + encodedAlphabet.slice(0, encodedAlphabet.length - slip);

  return encodedAlphabet;
}

function transform(alphabet, encodedAlphabet, text) {
  let result = "";
  for (let i = 0; i < text.length; ++i) {
      let indexLetter = alphabet.indexOf(text.slice(i, i + 1));
      
      if (indexLetter === -1) {
          result += text.slice(i, i + 1);
      } else {
          result += encodedAlphabet.slice(indexLetter, indexLetter + 1);
      }
  }

  return result;
}

function encode(a, slip, keyWord) {
  let encodedAlphabet = getEncodedAlphabet(ALPHABET, slip, keyWord);

  return transform(ALPHABET, encodedAlphabet, a);
}

function decode(a, slip, keyWord) {
  let encodedAlphabet = getEncodedAlphabet(ALPHABET, slip, keyWord);

  return transform(encodedAlphabet, ALPHABET, a);
}



document.getElementById("text").addEventListener("input", function() {
  let a = document.getElementById('out').innerHTML;
  let text = this.value;
  let slip = document.getElementById("slip").value;
  let keyWord = document.getElementById("key-word").value;

  let encodedText = encode(a, slip, keyWord);
  let decodedText = decode(encodedText, slip, keyWord);

  document.getElementById("output-encoded").textContent = encodedText;
  document.getElementById("output-decoded").textContent = decodedText;
});

document.getElementById("slip").addEventListener("input", function() {
  let a = document.getElementById('out').innerHTML;
  let text = document.getElementById("text").value;
  let slip = this.value;
  let keyWord = document.getElementById("key-word").value;

  let encodedText = encode(a, slip, keyWord);
  let decodedText = decode(encodedText, slip, keyWord);

  document.getElementById("output-encoded").textContent = encodedText;
  document.getElementById("output-decoded").textContent = decodedText;
});

document.getElementById("key-word").addEventListener("input", function() {
  let a = document.getElementById('out').innerHTML;
  let text = document.getElementById("text").value;
  let slip = document.getElementById("slip").value;
  let keyWord = this.value;

  let encodedText = encode(a, slip, keyWord);
  let decodedText = decode(encodedText, slip, keyWord);

  document.getElementById("output-encoded").textContent = encodedText;
  document.getElementById("output-decoded").textContent = decodedText;
});


document.getElementById("button").addEventListener('click', function() {
  let a = document.getElementById('out').innerHTML;
  console.log(a);
  let slip = document.getElementById("slip").value;
  let keyWord = document.getElementById("key-word").value;

  let encodedText = encode(a, slip, keyWord);
  let decodedText = decode(encodedText, slip, keyWord);

  document.getElementById("output-encoded").textContent = encodedText;
  document.getElementById("output-decoded").textContent = decodedText;
});