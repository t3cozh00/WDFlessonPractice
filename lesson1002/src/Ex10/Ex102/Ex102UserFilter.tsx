interface UserFilterProps {
  inputText: string;
  onInputChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export default function Ex102UserFilter({
  inputText,
  onInputChange,
  onSubmit,
}: UserFilterProps) {
  const handleOkButton = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  return (
    <div>
      <form onSubmit={handleOkButton}>
        {" "}
        <input
          type="text"
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button
          type="submit"
          // onClick={() => {
          //   onSubmit;
          // }}
          // The commented-out onClick handler on the button isn't necessary because the form's onSubmit event handler already takes care of the submission logic. Using a form also provides the benefit of handling both button clicks and Enter key presses for submission.
        >
          OK
        </button>
      </form>
    </div>
  );
}
