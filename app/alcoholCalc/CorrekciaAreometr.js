import "./Correkcia.css";
function CorrekciaAreometr({ setTemperature, setStrength }) {
  return (
    <>
      {" "}
      <label class="numrange row-1 van">
        <span>Температура спирта</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          max="100"
          onChange={(e) => setTemperature(e.target.value)}
        />
        <div class="notation">°C</div>
      </label>
      <label class="numrange row-1 two">
        <span>Показание ареометра</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrength(e.target.value)}
        />
        <div class="notation">°</div>
      </label>
    </>
  );
}

export default CorrekciaAreometr;
