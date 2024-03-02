function Select({
  dispatch,
  typeDispatch,
  payloadType,
  optionVan,
  optionTwo,
  optionThree,
  optionFour,
  optionFive,
}) {
  return (
    <>
      <select
        onChange={(e) =>
          dispatch({
            type: { typeDispatch },
            payload: { payloadType }(e.target.value),
          })
        }
      >
        <option value="">{optionVan}</option>
        <option value="">{optionTwo}</option>
        <option value="">{optionThree}</option>
        <option value="">{optionFour}</option>
        <option value="">{optionFive}</option>
      </select>
    </>
  );
}

export default Select;
