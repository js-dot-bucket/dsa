fizzBuzz = (n) => {
  for (let i=1; i<=n; i++) {
    if (i%3 != 0 && i%5 != 0) console.log(i);
    if (i%3 == 0 && i%5 == 0)
      console.log("FizzBuzz");
    else {
      if (i%3 == 0)
        console.log("Fizz");
      if (i%5 == 0)
        console.log("Buzz");
    }
  }
}

fizzBuzz(10);
