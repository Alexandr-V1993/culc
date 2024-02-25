import React from "react";
import "./razbav.css";
function RazbavlenieSpirta({ setVolume, setStrengthAfter, setStrengthBefore }) {
  return (
    <>
      <label class="numrange row-1 five">
        <span>Начальный объем спирта</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          max="250"
          onChange={(e) => setVolume(e.target.value)}
        />
        <div class="notation">л.</div>
      </label>

      <label class="numrange row-1 five five-left">
        <span>Крепость начального объема</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrengthBefore(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
      <label class="numrange row-1 five">
        <span>Требуемая крепость</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrengthAfter(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
    </>
  );
}

export default RazbavlenieSpirta;