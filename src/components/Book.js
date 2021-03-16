import React from "react";

export default function Book({ b, setUpdate, update }) {
  async function handleDelete(){
    await fetch('http://localhost:4000/books/' + b.id, {method: "DELETE"});
    setUpdate(!update)
  }

  let updateForm ;

  async function sendUpdate(){
    const author = document.getElementById(b.author.fullName + b.Title).value;
    const title = document.getElementById(b.Title).value;
    const method = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author}),
    }
    await fetch('http://localhost:4000/books/' + b.id, method)
    setUpdate(!update);
    updateForm.style.display = 'none';
  }

  function handleUpdate(){
    if (updateForm.style.display === 'none') updateForm.style.display = 'block';
    else updateForm.style.display = 'none';
  }

  React.useEffect(()=>{
    updateForm = document.getElementById('update' + b.Title)
    updateForm.style.display = 'none';
  }, [])

  return (
    <>
      <div>Title: {b.Title}</div>
      <div>Author: {b.author.fullName}</div>
      <button onClick={handleUpdate}>Update</button>
      <div className="updateForm" id={'update' + b.Title}>
        <input id={b.Title}/>Title
        <input id={b.author.fullName + b.Title}/>Author
        <button onClick={sendUpdate}>Submit</button>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
