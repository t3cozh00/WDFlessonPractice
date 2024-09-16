interface ButtonComponentProps3 {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // 修改为返回 void
}

export default function ButtonComponent3({
  label,
  onClick,
}: ButtonComponentProps3) {
  return (
    <div>
      <label>{label}</label>
      <button onClick={onClick}>Click3</button>
    </div>
  );
}
