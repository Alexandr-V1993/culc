function FtoraiaPeregonka({
  setVolume,
  setStrenghtStart,
  setStrenghtEnd,
  setHeads,
  setTails,
}) {
  return (
    <div className="label-row">
      <label class="numrange five">
        <span>Объем спирта-сырца</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min="0"
          required
          onChange={(e) => setVolume(e.target.value)}
        />
        <div class="notation">л.</div>
      </label>
      <label class="numrange five">
        <span>Крепость спирта-сырца</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min={0}
          max={100}
          required
          onChange={(e) => setStrenghtStart(e.target.value)}
        />
        <div class="notation">°</div>
      </label>
      <label class="numrange five">
        <span>Крепость на выходе</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min={0}
          max={100}
          required
          onChange={(e) => setStrenghtEnd(e.target.value)}
        />
        <div class="notation">°</div>
      </label>
      <label class="numrange five">
        <span>Доля «голов»</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min={0}
          max={100}
          required
          onChange={(e) => setHeads(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
      <label class="numrange five">
        <span>Доля «хвостов» »</span>
        <input
          type="number"
          class="input"
          id="nheight"
          min={0}
          max={100}
          required
          onChange={(e) => setTails(e.target.value)}
        />
        <div class="notation">%</div>
      </label>
    </div>
  );
}

export default FtoraiaPeregonka;
