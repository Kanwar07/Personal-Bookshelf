import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const data = createContext();

function Context({ children }) {
  const [bookdata, setbookdata] = useState();
  const page = 1;
  const pagelimit = 10;
  const [mybooks, setmybooks] = useState([]);
  const [searchinput, setSearchinput] = useState("YOUR_QUERY");

  useEffect(() => {
    const getdata = async () => {
      try {
        const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
          searchinput
        )}&limit=${pagelimit}&page=${page}`;
        const response = await axios(url);
        setbookdata(response.data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [searchinput]);
  return (
    <data.Provider
      value={{ bookdata, mybooks, setmybooks, searchinput, setSearchinput }}
    >
      {children}
    </data.Provider>
  );
}

export default Context;
