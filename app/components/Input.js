import "./input.css";
function Input({ labelTitle, max, type, typeDispatch, payloadType, notation }) {
  return (
    <>
      <label class="numrange row-1 van">
        <span>{labelTitle}</span>
        <input
          type={type}
          class="input"
          min="0"
          max={max}
          onChange={(e) =>
            dispatch({
              type: { typeDispatch },
              payload: { payloadType }(e.target.value),
            })
          }
          required
        />
        <div class="notation">{notation}</div>
      </label>
    </>
  );
}

export default Input;
