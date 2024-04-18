//Get user input 
//Using Regex convert to lowercase with no spaces or special characters
//Reverse the string
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

//check if the reversed string is a palindrome by comparing it to the mutated inputString
//If they are equal then it will return true, if not it will return false
function checkForPalindrome(inputLower, reversedString){
//Uses a boolean expression for true or false
  let palindrome;

  if (reversedString == inputLower){
    palindrome = true;
  } else {
    palindrome = false;
  }

  return palindrome;
}

//Display a message saying whether or not its a palindrome
function displayResults(checked, reversed){

  if (checked == true){
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

//using object-oriented version
// function getValues() {

//   document.getElementById('alert').classList.add('invisible');
//   let inputString = document.getElementById('inputString').value;

//   if (inputString == ''|| inputString == 0){
//     Swal.fire({
//              icon: "error",
//              title: "Oops!",
//              text: 'Please enter text.',
//              backdrop: false
//           });
//   } else {
//   let returnObj = checkForPalindrome(inputString);
//   displayString(returnObj);
//   }
// }

// function reverseString(inputString) {
//   let results = '';

//      for (let i = inputString.length - 1; i >= 0; i--){
//       results += inputString[i];
// }

// return results;
// }

// function checkForPalindrome(inputString) {
//   userString = inputString.toLowerCase();

//   const regex = /[\W_]/gi;
//   inputString = inputString.replace(regex, '');

//   let revString = '';

//   // introducing ... the OBJECT!!!
//   let returnObj = { msg:'', reversed:''};

//   revString =  reverseString(inputString);

//   if(inputString === revString) {
//     returnObj.msg = 'Well done! You have a palindrome'
//   } else {
//     returnObj.msg = 'Sorry! You do not have a palindrome'
//   }

//   returnObj.reversed = revString;

//   return returnObj;
// }

// function displayString(returnObj){
//   let msgAlert = document.getElementById('alert');
//   let alertHeader = document.getElementById('alertHeader');

//   if(returnObj.msg.includes('Sorry')){
//     msgAlert.classList.remove('alert-success');
//     msgAlert.classList.add('alert-danger');
//   }else {
//     msgAlert.classList.remove('alert-danger');
//     msgAlert.classList.add('alert-success');
//   }

//   alertHeader.innerHTML = returnObj.msg;
//   document.getElementById('msg').innerHTML = `Your word reversed is: <strong>${returnObj.reversed}</strong>`;

//   msgAlert.classList.remove('invisible');
// }

// function resetValues(){

// }