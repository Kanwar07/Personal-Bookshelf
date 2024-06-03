import React, { useContext } from "react";
import { data } from "../context/Context";
import MyBookCard from "../card/MyBookCard";

function MyBooks() {
  const { mybooks } = useContext(data);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-[100%] p-8 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
        {mybooks &&
          mybooks.map((book, index) => {
            return (
              <div key={index}>
                <MyBookCard book={book} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default MyBooks;
