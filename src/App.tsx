import { ChangeEvent } from "react";

function App() {
  const handleClick = () => {
    alert("clicked");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(`changing... ${event.target.value}`);
  };

  return (
    <div>
      <input
        type="password"
        onFocus={() => {
          console.log("input focused");
        }}
        onBlur={() => {
          console.log("input element is no longer focused");
        }}
      />
      <input type="text" onChange={handleChange} />

      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
