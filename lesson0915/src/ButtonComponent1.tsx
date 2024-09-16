interface ButtonComponentProps1 {
  label: string;
  onClick: () => void;
  text: string;
}

export default function ButtonComponent1({
  label,
  onClick,
  text,
}: ButtonComponentProps1) {
  return (
    <div>
      <label>{label}</label>
      <button onClick={onClick}>Click1</button>
      <p>{text}</p>
    </div>
  );
}
