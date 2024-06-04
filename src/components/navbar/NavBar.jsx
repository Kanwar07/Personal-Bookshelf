import React, { useContext } from "react";
import { data } from "../context/Context";
import { NavLink, Outlet } from "react-router-dom";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

function NavBar() {
  const { setSearchinput } = useContext(data);

  return (
    <>
      <div className="flex flex-row justify-around max-sm:flex-col max-sm:items-center">
        <NavLink to="/">
          <div className="flex flex-row items-center">
            <div>
              <BookmarksIcon />
            </div>
            <div className="pt-8 pr-8 pb-8 pl-2">BookShelf</div>
          </div>
        </NavLink>
        <div className="flex flex-row">
          <NavLink to="/allbooks">
            <div className="p-8">
              <button
                className="pt-2 pb-2 pr-6 pl-6 border rounded-2xl pt-2 pb-2 pr-4 pl-4 hover:shadow-2xl"
                onClick={() => setSearchinput("mystery")}
              >
                All Books
              </button>
            </div>
          </NavLink>
          <NavLink to="/mybooks">
            <div className="p-8">
              <button className="pt-2 pb-2 pr-6 pl-6 border rounded-2xl pt-2 pb-2 pr-4 pl-4 hover:shadow-2xl">
                My BookShelf
              </button>
            </div>
          </NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
