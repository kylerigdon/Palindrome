function getValues(){

  let inputString = document.getElementById('inputString').value;
  inputLower = inputString.toLowerCase().replace(/[\W_]/g, '');

  if (inputLower == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: 'Please enter text.',
      backdrop: false
    });
  } else {

    let reversedString = [];

  for (let i = inputLower.length - 1; i >= 0; i--){
    reversedString += inputLower[i];
  }
    let checkedPalindrome = checkForPalindrome(inputLower, reversedString);

    displayResults(checkedPalindrome, reversedString);
  }
}

function checkForPalindrome(inputLower, reversedString){

  let palindrome = ''

  if (reversedString == inputLower){
    palindrome = 'true'
  } else {
    palindrome = 'false'
  }

  return palindrome;
}

function displayResults(checked, reversed){

  if (checked == 'true'){
    Swal.fire({
      icon: "success",
      title: "Well done! You entered a Palindrome!",
      text: `Your text reversed is: ${reversed}`,
      backdrop: false
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Sorry. You did not enter a Palindrome.",
      text: `Your text reversed is: ${reversed}`,
      backdrop: false
     });
  }

}