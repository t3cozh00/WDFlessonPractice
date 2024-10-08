export default function Ex104IncreaseCounter({ dispatch }) {
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
    </div>
  );
}
