import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="form-input">Input</label>
      <input type="text" id="form-input" />
      <button>Submit</button>
    </form>
  );
}
