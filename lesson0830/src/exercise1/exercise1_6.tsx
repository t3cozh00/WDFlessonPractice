/* Exercise 1_6: Define an array of names and render a list of greetings using JSX. The DOM structure of the output should be:
<div><p>Greetings Alice!</p><p>Greetings Bob!</p></div> */

function GreetingPersons() {
  const nameArray = ["Tom", "Alice", "Penny", "Rubby"];

  const greetName = nameArray.map((names, index) => (
    <p key={index}>Greetings {names}!</p>
  ));

  return <div>{greetName}</div>;
}

export default GreetingPersons;
