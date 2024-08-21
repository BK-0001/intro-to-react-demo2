import { Button } from "./Button";

function App() {
  const handleClick = () => {};

  const handleReset = () => {};

  const handleNext = () => {};
  const handlePrevious = () => {};

  return (
    <div>
      <input type="text" />
      <Button disabled={false} onClick={handleClick}>
        Click Me!
      </Button>
      <Button onClick={handleReset}>
        <div>Reset</div>
      </Button>
      <Button onClick={handlePrevious}>Previous Page</Button>
      <Button onClick={handleNext}>Next Page</Button>
    </div>
  );
}

export default App;
