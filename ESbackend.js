var choice,enc,dec;
function setMethod(ch){
    document.getElementById("CaesarShift").style.display = "none";
    document.getElementById("VigenereShift").style.display = "none";
    document.getElementById("secondaryInput").style.display = "none";
    choice = ch;
    switch(choice){
        case 1: break;
        case 2: break;
        case 3: document.getElementById("CaesarShift").style.display = "block"; 
                document.getElementById("secondaryInput").style.display = "block";
                break;
        case 4: document.getElementById("VigenereShift").style.display = "block";
                document.getElementById("secondaryInput").style.display = "block";
                break;
    }


}
let b = document.getElementById("run");
b.addEventListener("click", execute);
function execute(){
    enc = document.getElementById("encoding");
    dec = document.getElementById("decoding");
    var i, o, is;
    if (enc.checked) {
    switch(choice){
        case 1: i = document.getElementById("input").value;
                o = base64Encode(i);
                document.getElementById("output").value = o;
                break;
        case 2: i = document.getElementById("input").value;
                o = base32Encode(i);
                document.getElementById("output").value = o;
                break;
        case 3: i = document.getElementById("input").value;
                is = document.getElementById("secondaryInput").value;
                o = caesarCipherEncode(i,is);
                document.getElementById("output").value = o;
                break;
        case 4: i = document.getElementById("input").value;
                is = document.getElementById("secondaryInput").value;
                o = vigenereCipherEncode(i,is);
                document.getElementById("output").value = o;
                break;
        case 5: i = document.getElementById("input").value;
                o = base8Encode(i);
                document.getElementById("output").value = o;
                break;
        case 6: i = document.getElementById("input").value;
                o = base16Encode(i);
                document.getElementById("output").value = o;
                break;
        case 7: i = document.getElementById("input").value;
                o = reverseEncode(i);
                document.getElementById("output").value = o;
                break;

    }
  }
  else if (dec.checked) {
    switch(choice){
      case 1: i = document.getElementById("input").value;
              o = base64Decode(i);
              document.getElementById("output").value = o;
              break;
      case 2: i = document.getElementById("input").value;
              o = base32Decode(i);
              document.getElementById("output").value = o;
              break;
      case 3: i = document.getElementById("input").value;
              is = document.getElementById("secondaryInput").value;
              o = caesarCipherDecode(i,is);
              document.getElementById("output").value = o;
              break;
      case 4: i = document.getElementById("input").value;
              is = document.getElementById("secondaryInput").value;
              o = vigenereCipherDecode(i,is);
              document.getElementById("output").value = o;
              break;
      case 5: i = document.getElementById("input").value;
              o = base8Decode(i);
              document.getElementById("output").value = o;
              break;
      case 6: i = document.getElementById("input").value;
              o = base16Decode(i);
              document.getElementById("output").value = o;
              break;
      case 7: i = document.getElementById("input").value;
              o = reverseDecode(i);
              document.getElementById("output").value = o;
              break;

  }
  }
}

function base64Encode(str){
  return btoa(str);
}

function base64Decode(str){
  return atob(str);
}

function base32Encode(str){
  const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = '';
  let encoded = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const binary = charCode.toString(2).padStart(8, '0');
    bits += binary;
  }

  while (bits.length >= 5) {
    const chunk = bits.substring(0, 5);
    bits = bits.substring(5);
    const index = parseInt(chunk, 2);
    encoded += base32Chars[index];
  }

  if (bits.length > 0) {
    const remaining = bits.padEnd(5, '0');
    const index = parseInt(remaining, 2);
    encoded += base32Chars[index];
  }

  return encoded;
}

function base32Decode(str){
  const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = '';
  let decoded = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = base32Chars.indexOf(char);
    const binary = index.toString(2).padStart(5, '0');
    bits += binary;
  }

  while (bits.length >= 8) {
    const chunk = bits.substring(0, 8);
    bits = bits.substring(8);
    const charCode = parseInt(chunk, 2);
    decoded += String.fromCharCode(charCode);
  }

  return decoded;
}

function caesarCipherEncode(str, shift) {
  let encoded = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    let shiftedCode = charCode;

    if (charCode >= 65 && charCode <= 90) {
      shiftedCode = ((charCode - 65 + shift) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      shiftedCode = ((charCode - 97 + shift) % 26) + 97;
    }

    encoded += String.fromCharCode(shiftedCode);
  }

  return encoded;
}
function caesarCipherDecode(str, shift) {
  return caesarCipherEncode(str, 26-shift);
}

function vigenereCipherEncode(str, key) {
  const baseCharCode = 'A'.charCodeAt(0);
  let encoded = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toUpperCase();
    const charCode = char.charCodeAt(0) - baseCharCode;
    const keyChar = key[i % key.length].toUpperCase();
    const keyCharCode = keyChar.charCodeAt(0) - baseCharCode;
    const shiftedCode = (charCode + keyCharCode) % 26;
    const encodedChar = String.fromCharCode(shiftedCode + baseCharCode);
    encoded += encodedChar;
  }

  return encoded;
}

function vigenereCipherDecode(str, key) {
  const baseCharCode = 'A'.charCodeAt(0);
  let decoded = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toUpperCase();
    const charCode = char.charCodeAt(0) - baseCharCode;
    const keyChar = key[i % key.length].toUpperCase();
    const keyCharCode = keyChar.charCodeAt(0) - baseCharCode;
    const shiftedCode = (charCode - keyCharCode + 26) % 26;
    const decodedChar = String.fromCharCode(shiftedCode + baseCharCode);
    decoded += decodedChar;
  }

  return decoded;
}
function base16Encode(text) {
  let encodedText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i).toString(16);
    encodedText += charCode.padStart(2, '0');
  }
  return encodedText;
}

function base16Decode(encodedText) {
  let decodedText = '';
  for (let i = 0; i < encodedText.length; i += 2) {
    const hexCode = encodedText.substr(i, 2);
    const char = String.fromCharCode(parseInt(hexCode, 16));
    decodedText += char;
  }
  return decodedText;
}

function base8Encode(text) {
  let encodedText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i).toString(8).padStart(3,'0');
    encodedText += charCode;
  }
  return encodedText;
}

function base8Decode(encodedText) {
  let decodedText = '';
  for (let i = 0; i < encodedText.length; i += 3) {
    const octalCode = parseInt(encodedText.substr(i, 3), 8);
    decodedText += String.fromCharCode(octalCode);
  }
  return decodedText;
}
function reverseEncode(str) {
  let encoded = '';
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  for(let i=0;i<reversed.length;i++){
    var charCode = reversed.charCodeAt(i);
    encoded+=String.fromCharCode((charCode+13)%128);
  }
  return encoded;
}

function reverseDecode(str) {
  let decoded = '';
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  for(let i=0;i<reversed.length;i++){
    var charCode = reversed.charCodeAt(i);
    decoded+=String.fromCharCode((charCode-13+128)%128);
  }
  return decoded;
}

  




