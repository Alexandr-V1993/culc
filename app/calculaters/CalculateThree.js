function CalculateThree({ setPercent, setNumber }) {
  return (
    <>
      <label
        className="numrange row-2 hideparts type4"
        style={{ display: "block" }}
      >
        <span>Число</span>
        <input
          type="number"
          className="input"
          id="fournum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>
      <label
        className="numrange row-2 hideparts type4"
        style={{ display: "block" }}
      >
        <span>Вычесть процент</span>
        <input
          type="number"
          className="input"
          id="fournum2"
          onChange={(e) => setPercent(e.target.value)}
        />
        <div className="notation">%</div>
      </label>
    </>
  );
}

export default CalculateThree;
