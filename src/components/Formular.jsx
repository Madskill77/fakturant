function Formular() {
  return (
    <>
      <label>Zákazník</label>
      <input type="text" />

      <label>Zákazka</label>
      <input type="text" />

      <label>Grafika</label>

      <div className="time">
        <input type="number" placeholder="hod." />
        <input type="number" placeholder="min." />
      </div>

      <label>Tlač</label>
      <textarea rows="4"></textarea>

      <label>Kalkulácia</label>
      <textarea rows="2"></textarea>

      <button>ULOŽIŤ</button>
    </>
  );
}

export default Formular;