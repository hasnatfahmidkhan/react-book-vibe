import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => axios("/data/booksData.json"),
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
      {
        path: "/pages-to-read",
        Component: ListedBooks,
      },
    ],
  },
]);
