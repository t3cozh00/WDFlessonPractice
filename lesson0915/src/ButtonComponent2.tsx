interface ButtonComponentProps2 {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => string;
}

export default function ButtonComponent2({
  label,
  onClick,
}: ButtonComponentProps2) {
  return (
    <div>
      <label>{label}</label>
      <button
        onClick={(e) => {
          const result = onClick(e);
          console.log(result); // 打印返回的字符串
        }}
      >
        Click2
      </button>
    </div>
  );
}
