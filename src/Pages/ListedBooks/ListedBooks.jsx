import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData } from "../../Utility/addToDB";
import ReadListCard from "../../Components/ReadListCard/ReadListCard";
import WishListCard from "../../Components/WishListCard/WishListCard";
import { getWishListData } from "../../Utility/addWishListToDB";
import { ChevronDown } from "lucide-react";
const ListedBooks = () => {
  const { data: books } = useLoaderData();
  const [storedBooks, setstoredBooks] = useState([]);
  const [storedWishLists, setStoredWishLists] = useState([]);
  const [arrow, setArrow] = useState(false);
  const [selected, setSelected] = useState("Sort By");

  useEffect(() => {
    const booksId = getStoredData();
    const convertedBookId = booksId.map((id) => parseInt(id));
    const readbooks = books.filter((book) =>
      convertedBookId.includes(book.bookId)
    );

    setstoredBooks(readbooks);
  }, [books]);

  useEffect(() => {
    const booksId = getWishListData();
    const convertedBookId = booksId.map((id) => parseInt(id));
    const wishLists = books.filter((book) =>
      convertedBookId.includes(book.bookId)
    );

    setStoredWishLists(wishLists);
  }, [books]);

  const handleSelect = (option) => {
    setSelected(option);
    setArrow(false); // for close the dropdown content

    if (option === "Rating") {
      const sortedReadBooks = [...storedBooks].sort(
        (a, b) => b.rating - a.rating
      );
      setstoredBooks(sortedReadBooks);
      setStoredWishLists(sortedReadBooks);
    }

    if (option === "Number of pages") {
      const sortedReadBooks = [...storedBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setstoredBooks(sortedReadBooks);
      setStoredWishLists(sortedReadBooks);
    }
    if (option === "Publisher year") {
      const sortedReadBooks = [...storedBooks].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setstoredBooks(sortedReadBooks);
      setStoredWishLists(sortedReadBooks);
    }
  };
  return (
    <section>
      <div className="bg-[#F3F3F3] text-center py-10 rounded-xl">
        <h2 className="text-4xl font-semibold">Books</h2>
      </div>

      <div className="relative w-52 mt-10 mx-auto">
        <div
          onClick={() => setArrow(!arrow)}
          tabIndex={0}
          role="button"
          className="btn m-1 bg-[#23BE0A] text-white w-full text-base py-6 rounded-md flex items-center justify-center"
        >
          {selected} <ChevronDown />
        </div>

        {arrow && (
          <ul className="absolute top-full left-0 mt-2 menu bg-base-100 rounded-md z-10 w-full text-center p-2 shadow-md space-y-2 text-lg text-gray-700 cursor-pointer">
            <li
              className="hover:bg-gray-200 py-2 rounded"
              onClick={() => handleSelect("Rating")}
            >
              Rating
            </li>
            <li
              className="hover:bg-gray-200 py-2 rounded"
              onClick={() => handleSelect("Number of pages")}
            >
              Number of pages
            </li>
            <li
              className="hover:bg-gray-200 py-2 rounded"
              onClick={() => handleSelect("Publisher year")}
            >
              Publisher year
            </li>
          </ul>
        )}
      </div>
      <div className="py-10">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>WishList Books</Tab>
          </TabList>

          <TabPanel>
            <section className="my-8 space-y-5">
              {storedBooks.map((book) => (
                <ReadListCard key={book.bookId} book={book} />
              ))}
            </section>
          </TabPanel>

          <TabPanel>
            <section className="my-8 space-y-5">
              {storedWishLists.map((book) => (
                <WishListCard key={book.bookId} book={book} />
              ))}
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooks;
