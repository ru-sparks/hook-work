import React, { useState } from "react";
import useInputState from './customHooks/useInputState';


const FlavorFormHooks2 = () => {


  const handleSubmit = (event) => {
    alert("Your favorite flavor is: " + flavor + " " + email);
    reset();
    resetEmail();
    event.preventDefault();
  };

  const defaultFlavor = "mango";
  const [flavor, changeFlavor, reset] = useInputState(defaultFlavor);
  const [email, changeEmail, resetEmail] = useInputState("Ted");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={changeFlavor}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
          <option value="grapes">Grapes</option>
        </select>
      </label>
      <input type="text" value={email} onChange={changeEmail}></input>

      <p>Current: {flavor + " " + email}</p>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FlavorFormHooks2;
