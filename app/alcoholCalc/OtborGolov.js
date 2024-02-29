import "./Otbor.css";
function OtborGolov({ setVolume, setStrength, setHeads }) {
  return (
    <>
      <label class="numrange row-1 van">
        <span>Объем спирта-сырца</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          max="250"
          onChange={(e) => setVolume(e.target.value)}
          required
        />
        <div class="notation">л.</div>
      </label>

      <label class="numrange row-1 two">
        <span>Крепость спирта-сырца</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrength(e.target.value)}
          required
        />
        <div class="notation"> °</div>
      </label>
      <label class="numrange row-1 two">
        <span>Доля «голов»</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setHeads(e.target.value)}
          required
        />
        <div class="notation">% от общего объема</div>
      </label>
    </>
  );
}

export default OtborGolov;
