// JavaScript function to replace each character of a given string with the next one. 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.
function alphabet_char_Shift(str) {
    var alpha = str.split("");
    for(var i = 0; i < alpha.length; i++) {
      var n = alpha[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + 1) % 26; 
      alpha[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return alpha.join("");
  }
  
  console.log(alphabet_char_Shift("abcdxyz"))