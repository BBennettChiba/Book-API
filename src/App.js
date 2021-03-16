import "./App.css";
import BookList from "./components/BookList";
import AddButton from "./components/AddButton";
import { useState } from "react";
function App() {
  const [update, setUpdate] = useState(false);
  return (
    <>
      <p>This page was created by Bryson Bennett. It's linked to an API that allows you to add, delete, post and patch your personal book list linked to a database
      <a href="https://github.com/BBennettChiba/Book-API">"https://github.com/BBennettChiba/Book-API"</a>
      </p>
      <AddButton setUpdate={setUpdate} update={update}/>

      <BookList update={update} setUpdate={setUpdate} />
    </>
  );
}

export default App;
