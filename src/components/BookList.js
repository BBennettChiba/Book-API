import { useState, useEffect } from "react";
import Book from "./Book";

export default function BookList({ update, setUpdate }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      let bookFetch = await fetch("http://localhost:4000/books");
      bookFetch = await bookFetch.json();
      setBooks(bookFetch.map(b => <Book b={b} setUpdate={setUpdate} update={update}/>))
    }
    getBooks();
  }, [update, setUpdate]);

  return (
    <>
      {books}
    </>
  );
}
