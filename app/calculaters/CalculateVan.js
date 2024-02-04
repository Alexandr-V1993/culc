function CalculateVan({ setNumber, setPercent }) {
  return (
    <>
      <label class="numrange row-2 hideparts active type1">
        <span>Число</span>
        <input
          type="number"
          class="input"
          id="onenum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div class="notation">&nbsp;</div>
      </label>
      <label class="numrange row-2  hideparts active type1">
        <span>Процент от числа</span>
        <input
          type="number"
          class="input"
          id="onenum2"
          onChange={(e) => setPercent(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
    </>
  );
}

export default CalculateVan;
