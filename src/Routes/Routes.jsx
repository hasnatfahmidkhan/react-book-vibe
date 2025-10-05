import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import axios from "axios";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        HydrateFallback: SpinnerCircle,
        loader: () => axios("/data/booksData.json"),
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
        HydrateFallback: SpinnerCircle,
        loader: () => axios("/data/booksData.json"),
      },
      {
        path: "/pages-to-read",
        Component: ListedBooks,
      },
      {
        path: "/book-details/:id",
        Component: BookDetails,
      },
    ],
  },
]);
