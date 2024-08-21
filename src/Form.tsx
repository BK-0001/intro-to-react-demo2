import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
  // state is readonly
  const [inputValue, setInputValue] = useState("");
  // let inputValue = "";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = {
      email: inputValue
    };

    // send request to store data in the db
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "inside change handler");
    setInputValue(() => event.target.value);
  };

  console.log(inputValue, "outside");

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="form-input">Input</label>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        id="form-input"
      />
      <button>Submit</button>
    </form>
  );
}
