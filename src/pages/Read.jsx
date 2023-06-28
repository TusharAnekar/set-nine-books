import { useContext } from "react";
import { DataContext } from "../contexts/data-context";

export function Read() {
  const { books } = useContext(DataContext);
  return (
    <>
      <h2>Read Books</h2>
      <div className="container">
        {books
          .filter(({ read }) => read)
          .map((book) => {
            const { id, title, author, image } = book;
            return (
              <div key={id} className="book-container">
                <img src={image} alt={`Book name ${title}`} />
                <div className="details">
                  <p>{id}</p>
                  <p>Title: {title}</p>
                  <p>Author: {author}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
