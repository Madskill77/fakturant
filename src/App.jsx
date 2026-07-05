import "./App.css";
import Formular from "./components/Formular";
import ZoznamZakaziek from "./components/ZoznamZakaziek";

function App() {
  return (
    <div className="container">
      <h1>FAKTURANT</h1>

      <input
        className="search"
        type="text"
        placeholder="🔍 Vyhľadať zákazníka alebo zákazku..."
      />

      <Formular />

      <hr />

      <ZoznamZakaziek />
    </div>
  );
}

export default App;