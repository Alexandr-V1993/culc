import "./input.css";
function Input({ labelTitle, max, type, notation, typeDispatch, hadleInput }) {
  return (
    <>
      <label class="numrange row-1 van">
        <span>{labelTitle}</span>
        <input
          type={type}
          class="input"
          min="0"
          max={max}
          onChange={(e) => hadleInput(e, typeDispatch)}
          required
        />
        <div class="notation">{notation}</div>
      </label>
    </>
  );
}

export default Input;

// function hadleInput(e, typeDispatch) {
//     dispatch({ type: typeDispatch, payload: e.target.value });
//   }
