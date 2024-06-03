import React, { useContext } from "react";
import { data } from "../context/Context";

function BookCard({ book }) {
  const { mybooks, setmybooks } = useContext(data);

  return (
    <>
      <div className="flex flex-col max-w-sm border border-[2px] rounded-2xl ml-4 mr-4 mt-4 mb-4 bg-[#ffffff]">
        <div className="p-4">
          <div className="flex flex-row items-end pt-4 pb-4">
            <div className="text-[22px] pr-4">{book.title}</div>
            <div className="text-[16px] opacity-60">({book.type})</div>
          </div>
          <div className="flex flex-row items-end justify-between">
            <div className="text-[16px] pr-2 pb-4">{book.author_name}</div>
            <div className="text-[16px] pr-2 pb-4">
              {book.publish_year && typeof book.publish_year === "string"
                ? book.publish_year.split(",")[0]
                : Array.isArray(book.publish_year) &&
                  book.publish_year.length > 0
                ? book.publish_year[0]
                : ""}
            </div>
          </div>
          <button
            className="border rounded-2xl pt-2 pb-2 pr-4 pl-4 hover:shadow-xl"
            onClick={() => setmybooks([...mybooks, book])}
          >
            Add to Shelf
          </button>
        </div>
      </div>
    </>
  );
}

export default BookCard;