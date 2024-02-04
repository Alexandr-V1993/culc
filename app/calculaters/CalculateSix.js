function CalculateSix({ setnumberTwo, setNumber }) {
  return (
    <>
      <label
        class="numrange row-2 hideparts type6"
        style={{ display: "block" }}
      >
        <span>Меньшее число</span>
        <input
          type="number"
          class="input"
          id="sixnum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div class="notation">&nbsp;</div>
      </label>
      <label
        class="numrange row-2 hideparts type6"
        style={{ display: "block" }}
      >
        <span>Большее число</span>
        <input
          type="number"
          class="input"
          id="sixnum2"
          onChange={(e) => setnumberTwo(e.target.value)}
        />
        <div class="notation">&nbsp;</div>
      </label>
    </>
  );
}

export default CalculateSix;
