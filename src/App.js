import "./App.css";
import BookShelf from "./components/bookshelf/BookShelf";
import Context from "./components/context/Context";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/pages/HomePage";
import MyBooks from "./components/pages/MyBooks";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="allbooks" element={<BookShelf />} />
        <Route path="mybooks" element={<MyBooks />} />
      </Route>
    )
  );
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
