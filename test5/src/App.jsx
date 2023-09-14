import './App.css';
import useChecked from './hooks/useChecked';

function App() {
  const { inputs, checked, setInputs } = useChecked()

  return (
    <div className="App">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {
          inputs.map((check, key) => <input type='checkbox' key={key} checked={check} onClick={() => setInputs(v => v.map((x, i) => i === key ? !x : x))} />)
        }
      </div>

      {checked && "All checkboxes are checked..."}
    </div>
  );
}

export default App;
