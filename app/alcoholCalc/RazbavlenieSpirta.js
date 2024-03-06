import React from "react";
import "./razbav.css";
function RazbavlenieSpirta({ setVolume, setStrengthAfter, setStrengthBefore }) {
  return (
    <>
      <label class="numrange five">
        <span>Начальный объем спирта</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          onChange={(e) => setVolume(e.target.value)}
          required
        />
        <div class="notation">л.</div>
      </label>

      <label class="numrange five">
        <span>Крепость начального объема</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrengthBefore(e.target.value)}
          required
        />
        <div class="notation">%</div>
      </label>
      <label class="numrange five">
        <span>Требуемая крепость</span>
        <input
          type="number"
          class="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrengthAfter(e.target.value)}
          required
        />
        <div class="notation">%</div>
      </label>
    </>
  );
}

export default RazbavlenieSpirta;
