/* Exercise 1_5: Create a function called `getRandomNumber` that returns a random number between 1 and 10.

You should use the function to achieve output of the following format, where the value 6 should be the random number:

<p>Your lucky number is 6!</p>  */

function GetRandomNumber() {
  const randomInteger = Math.floor(Math.random() * 10);
  let output;
  if (randomInteger == 6) {
    output = <p>Your lucky number is 6!</p>;
    return output;
  }

  return output;
}

export default GetRandomNumber;
