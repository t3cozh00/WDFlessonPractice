export default function ColorList(props) {
  //or export default function ColorList({ color1, color2, color3 }) {
  // exercise3_2

  //   const color1 = props.color1;
  //   const color2 = props.color2;
  //   const color3 = props.color3;

  // object destructuring
  const { color1, color2, color3 } = props;

  return (
    <ul>
      <li>{color1}</li>
      <li>{color2}</li>
      <li>{color3}</li>
    </ul>
  );
}
