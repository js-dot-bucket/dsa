checkStringPalindrome = (stringValue) => {
  const value = stringValue;
  const reverseValue = stringValue.split('').reverse().join('');
  console.log(value == reverseValue);
}

checkNumberPalindrome = (number) => {
  let value = number;
  let result = 0;
  while(value) {
    result = (result * 10) + (value % 10);
    value = Math.floor(value / 10);
  }
  console.log(number == result);
}

checkStringPalindrome("WOW");
checkStringPalindrome("NONONS");

checkNumberPalindrome(4004);
checkNumberPalindrome(4589);
