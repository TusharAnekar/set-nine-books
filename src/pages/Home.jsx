import { useContext } from "react";

import { DataContext } from "../contexts/data-context";
import { FavBooksContext } from "../contexts/fav-books-context";

export function Home() {
  const { books, setBooks } = useContext(DataContext);
  const { favouriteBooks, setFavouriteBooks } = useContext(FavBooksContext);

  function addToFavourite(idToBeAdded) {
    if (!favouriteBooks.includes(books.find(({ id }) => id === idToBeAdded))) {
      setFavouriteBooks([
        ...favouriteBooks,
        books.find(({ id }) => id === idToBeAdded),
      ]);
    }
  }

  function markAsRead(idToBeRead) {
    setBooks(
      books.map((book) =>
        book.id === idToBeRead ? { ...book, read: true } : book
      )
    );
  }

  return (
    <>
      <h2>All Books</h2>

      {!books.length && <h2>Loading...</h2>}

      <div className="container">
        {books.map((book) => {
          const { id, title, author, image, read } = book;
          return (
            <div key={id} className="book-container">
              <img src={image} alt={`Book name ${title}`} />
              <div className="details">
                <p>{id}</p>
                <p>Title: {title}</p>
                <p>Author: {author}</p>
                <button disabled={read} onClick={() => markAsRead(id)}>
                  {read ? "Already read" : "Mark as read"}
                </button>
                <button onClick={() => addToFavourite(id)}>
                  {favouriteBooks.includes(
                    books.find(({ id }) => id === book.id)
                  )
                    ? "Go "
                    : "Add "}
                  to Favourites
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
