import React, { useContext } from "react";
import { data } from "../context/Context";
import { NavLink } from "react-router-dom";

function HomePage() {
  const { setSearchinput } = useContext(data);
  return (
    <>
      <div className="flex justify-center items-center w-full mt-60">
        <NavLink to="/allbooks">
          <button
            className="pt-2 pb-2 pr-6 pl-6 border rounded-2xl pt-2 pb-2 pr-4 pl-4 hover:shadow-2xl"
            onClick={() => setSearchinput("YOUR_QUERY")}
          >
            Click to start Surfing for Books
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
