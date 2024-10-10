/*Exercise 7: Define an array of fruits and render a list of fruit names using JSX. The DOM structure of the output should be when oranges, apples and bananas are in the array as strings:

<p>My favorite fruits are: oranges, apples, bananas</p>; */

function Ex17FavoriteFruit() {
  const fruitsArray = ["oranges", "apples", "banans"];

  return <div>My favorite fruits are: {fruitsArray.join(", ")}</div>;
}

export default Ex17FavoriteFruit;
