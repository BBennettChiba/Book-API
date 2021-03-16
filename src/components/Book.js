import React from "react";

export default function Book({ b, setUpdate, update }) {
  async function handleDelete(){
    await fetch('http://localhost:4000/books/' + b.id, {method: "DELETE"});
    setUpdate(!update)
  }

  let reference = React.useRef(null);

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
  }

  function handleUpdate(e){
    if (reference.current.className === 'hidden' ) reference.current.className = 'shown';
    else reference.current.className = 'hidden';
  }

  return (
    <>
      <div>Title: {b.Title}</div>
      <div>Author: {b.author.fullName}</div>
      <button onClick={handleUpdate}>Update</button>
      <div className='hidden' ref={reference}>
        <input id={b.Title}/>Title
        <input id={b.author.fullName + b.Title}/>Author
        <button onClick={sendUpdate}>Submit</button>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
