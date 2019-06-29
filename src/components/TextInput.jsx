import React, { useState } from "react";

export const TextInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div>
      <h2>input your text:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
