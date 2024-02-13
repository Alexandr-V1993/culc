import "./Smehivanie.css";
function SmehivanieSpitrov({
  setvolume1,
  setStrength1,
  setVolume2,
  settrength2,
}) {
  return (
    <>
      {" "}
      <label class="numrange row-1 van">
        <span>Объем первой жидкости</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          onChange={(e) => setvolume1(e.target.value)}
        />
        <div class="notation">л-в.</div>
      </label>
      <label class="numrange row-1 van">
        <span>Крепость первой жидкости</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          max="100"
          onChange={(e) => setStrength1(e.target.value)}
        />
        <div class="notation">°C</div>
      </label>
      <label class="numrange row-1 van">
        <span>Объем второй жидкости</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          onChange={(e) => setVolume2(e.target.value)}
        />
        <div class="notation">л-в</div>
      </label>
      <label class="numrange row-1 van">
        <span>Крепость второй жидкости</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          max="100"
          onChange={(e) => settrength2(e.target.value)}
        />
        <div class="notation">°С</div>
      </label>
    </>
  );
}

export default SmehivanieSpitrov;
