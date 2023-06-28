import { createContext, useState } from "react";

export const FavBooksContext = createContext();

export function FavBooksProvider({ children }) {
  const [favouriteBooks, setFavouriteBooks] = useState([]);

  return (
    <>
      <FavBooksContext.Provider value={{ favouriteBooks, setFavouriteBooks }}>
        {children}
      </FavBooksContext.Provider>
    </>
  );
}
