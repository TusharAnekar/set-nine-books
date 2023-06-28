import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakefetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});

  async function getBooks() {
    try {
      const {
        status,
        data: { books, user },
      } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setBooks(books);
        setUser(user);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ books, setBooks, user }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
