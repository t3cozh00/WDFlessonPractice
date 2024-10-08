export default function Ex104ButtonSetValue({ dispatch }) {
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "SET", value: 10 });
        }}
      >
        Set counter to 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SET", value: 20 });
        }}
      >
        Set counter to 20
      </button>
    </div>
  );
}
