function CheckBox({ titleCheck, typeDispatch, handleCheck }) {
  return (
    <>
      <label class="row-check">
        <span>{titleCheck}</span>
        <input
          type="checkbox"
          class="check"
          onClick={() => handleCheck(typeDispatch)}
        />
      </label>
    </>
  );
}

export default CheckBox;
// function handleCheck(typeDispatch) {
//   dispatch({type:typeDispatch})
// }
