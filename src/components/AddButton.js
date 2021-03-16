import React from "react";

export default function AddButton({ setUpdate, update }) {
  async function handleNewBook() {
    let tit = document.getElementById("TitleInput").value;
    let aut = document.getElementById("AuthorInput").value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: tit, author: aut }),
    };
    await fetch("http://localhost:4000/books", requestOptions);
    tit = '';
    aut = '';
    setUpdate(!update);
  }

  return (
    <>
      <input type="text" id="TitleInput"></input> Title
      <input type="text" id="AuthorInput"></input> Author
      <button onClick={handleNewBook}>Submit</button>
    </>
  );
}
