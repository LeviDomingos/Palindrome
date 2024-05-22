
window.onload = function() {

    const checkBtn = document.getElementById("check-btn");
    const result = document.getElementById("result");
    
    checkBtn.addEventListener("click", getTextInput);
    
    function getTextInput() {
     const textInput = document.getElementById("text-input");

     if(textInput.value === "") {
       alert("Please input a value");
     } else {
       result.innerText = polindrome(textInput.value);
     }
    }
    
    const evenOrOdd = (text) => text.length % 2 === 0 ? true : false;
    
    function polindrome(text) {
      const verifyFirstPalindrome = loopThrough(returnEvenText(removeSpaceInText(text)), splitIntoTwoText(removeSpaceInText(text)));
      const verifySecondPalindrome = loopThrough(returnOddText(removeSpaceInText(text)), splitIntoTwoText(removeSpaceInText(text)));
      if(verifyFirstPalindrome || verifySecondPalindrome) {
        return text + " " + " is palindrome";
      } else {
        return text + " " + " is not palindrome"
      }
    }

    function returnOddText(text) {
      let half = text.length / 2;
      return text.slice(0, half--);
    }

    function returnEvenText(text) {
      let half = text.length / 2;
      return text.slice(0, half);
    }

    const removeSpaceInText = (text) => {
      let finalText = text.replace(/[\s . _  : ) ( ,]+/g, "");
      finalText = finalText.replace(/-/g, "");
      return finalText.toLowerCase().split("");
    }

    const splitIntoTwoText = (text) => {
      let half = parseInt(Math.floor(text.length / 2));
      let reminder = text.length % 2 + half;
      if(evenOrOdd(text)) {
        return text.slice(half, text.length).reverse();
      } else {
        return text.slice(reminder, text.length).reverse();
      }
    }

    function loopThrough(textOne, textTwo) {
      const x = textOne.length;
      let count = 0;
      for(let i = 0;  i < x; i++) {
        if(textOne[i]=== textTwo[i]) {
          count++;
        }
      }
      if(count === x) {
        return true;
      } else {
        return false;
      }
    }
}
