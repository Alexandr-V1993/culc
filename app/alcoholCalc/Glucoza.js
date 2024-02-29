import "./Glucoza.css";
function Glucoza({ setWeight }) {
  return (
    <>
      {" "}
      <label class="numrange row-1 van">
        <span>Количество сахара</span>
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
    </>
  );
}

export default Glucoza;
