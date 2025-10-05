import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData } from "../../Utility/addToDB";
import ReadListCard from "../../Components/ReadListCard/ReadListCard";
const ListedBooks = () => {
  const { data: books } = useLoaderData();
  const [storedBooks, setstoredBooks] = useState([]);
  useEffect(() => {
    const booksId = getStoredData();
    const convertedBookId = booksId.map((id) => parseInt(id));
    const readbooks = books.filter((book) =>
      convertedBookId.includes(book.bookId)
    );

    setstoredBooks(readbooks);
  }, [books]);
  console.log(storedBooks);
  return (
    <section>
      <div className="bg-[#F3F3F3] text-center py-10 rounded-xl">
        <h2 className="text-4xl font-semibold">Books</h2>
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
            <h2>WishList Books</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooks;
