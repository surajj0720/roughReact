import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            return setName(e.target.value);
          }}
        />
        <input type="email" placeholder="Email" />
      </form>
      <button
        onClick={() => {
          console.log(name);
        }}
      >
        Press
      </button>

      <p>{name}</p>
    </div>
  );
};

export default Contact;
