import "./RaschetSahar.css";
function RaschetSaharBraga({ setVolume, setWeight }) {
  return (
    <>
      <label class="numrange row-1 van">
        <span>Вес сахара</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <div class="notation">кг.</div>
      </label>

      <label class="numrange row-1 two">
        <span>Раствор, вода + сахар (Гидромодуль)</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          onChange={(e) => setVolume(e.target.value)}
          required
        />
        <div class="notation">л.</div>
      </label>
    </>
  );
}

export default RaschetSaharBraga;
