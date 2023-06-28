import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavBooksContext } from "../contexts/fav-books-context";
import { DataContext } from "../contexts/data-context";

export function Header() {
  const { favouriteBooks } = useContext(FavBooksContext);
  const { books } = useContext(DataContext);

  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "red",
    margin: "5px",
  });

  const readBooksLength = books.filter(({ read }) => read).length;

  return (
    <>
      <h1>Books Library</h1>
      <nav>
        <NavLink to={"/"} style={getActiveStyle}>
          All Books
        </NavLink>
        <NavLink to={"/favourites"} style={getActiveStyle}>
          Favourites{!!favouriteBooks.length && `(${favouriteBooks.length})`}
        </NavLink>
        <NavLink to={"/read"} style={getActiveStyle}>
          Read{!!readBooksLength && `(${readBooksLength})`}
        </NavLink>
        <NavLink to={"/profile"} style={getActiveStyle}>
          Profile
        </NavLink>
      </nav>
    </>
  );
}
