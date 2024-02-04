function CalculateThree({ setPercent, setNumber }) {
  return (
    <>
      <label
        class="numrange row-2 hideparts type4"
        style={{ display: "block" }}
      >
        <span>Число</span>
        <input
          type="number"
          class="input"
          id="fournum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div class="notation">&nbsp;</div>
      </label>
      <label
        class="numrange row-2 hideparts type4"
        style={{ display: "block" }}
      >
        <span>Вычесть процент</span>
        <input
          type="number"
          class="input"
          id="fournum2"
          onChange={(e) => setPercent(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
    </>
  );
}

export default CalculateThree;
