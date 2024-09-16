/* Exercise 2_2: Create a new React component as a separate file called `ColorList` that renders an unordered list of three different colors, each color as a string in list item. The colors are defined in the ColorList component and are always the same. Import the component and render it in the main App component. */

function ColorList() {
  return (
    <div>
      <li>red</li>
      <li>white valkoinen</li>
      <li>blac musta</li>
    </div>
  );
}

export default ColorList;
