import { useContext } from "react";
import { FavBooksContext } from "../contexts/fav-books-context";

export function Favourite() {
  const { favouriteBooks } = useContext(FavBooksContext);
  return (
    <>
      <h2>Favourite Books</h2>
      {!favouriteBooks.length && <h3>No favourite books added.</h3>}

      <div className="container">
        {favouriteBooks.map(({ id, title, author, image, read }) => (
          <div key={id} className="book-container">
            <img src={image} alt={`Book name ${title}`} />
            <div className="details">
              <p>{id}</p>
              <p>Title: {title}</p>
              <p>Author: {author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
