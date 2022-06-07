import React, { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [response, setResponse] = useState();

  async function handlerSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name === "" || favoriteColor === "") {
      return;
    }
    const res = await fetch("/.netlify/functions/submit", {
      method: "POST",
      body: JSON.stringify({ name, favoriteColor }),
    }).then((res) => res.json());
    setResponse(res);
    setName("");
    setFavoriteColor("");
  }
  return (
    <>
      <pre>{JSON.stringify(response, null, 2)} </pre>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label htmlFor="favoriteColor">favorite Color</label>
        <input
          name="favoriteColor"
          id="favoriteColor"
          type="text"
          onChange={(e) => {
            setFavoriteColor(e.target.value);
          }}
          value={favoriteColor}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
