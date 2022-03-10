import React, { useState } from "react";


const FlavorFormHooks = () => {
  const handleChange = (event) => {
    changeFlavor(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Your favorite flavor is: " + flavor);
    changeFlavor(defaultFlavor);
    event.preventDefault();
  };

  const defaultFlavor = "mango";
  const [flavor, changeFlavor] = useState(defaultFlavor);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <p>Current: {flavor}</p>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FlavorFormHooks;
