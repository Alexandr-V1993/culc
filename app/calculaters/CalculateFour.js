function CalculateFour({ setPercent, setNumber }) {
  return (
    <>
      <label
        class="numrange row-2 hideparts type3"
        style={{ display: "block " }}
      >
        <span>Число</span>
        <input
          type="number"
          class="input"
          id="threenum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div class="notation">&nbsp;</div>
      </label>
      <label
        class="numrange row-2 hideparts type3"
        style={{ display: "block" }}
      >
        <span>Состовляет</span>
        <input
          type="number"
          class="input"
          id="threenum2"
          onChange={(e) => setPercent(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
    </>
  );
}

export default CalculateFour;
