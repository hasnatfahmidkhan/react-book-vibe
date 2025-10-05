import { useLocation } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { state: book } = useLocation();
  const {
    author,
    review,
    bookName,
    category,
    image,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    bookId,
  } = book;
  const handleMarkedAsRead = (id) => {
    addToStoredDB(id);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <figure className="bg-[#F3F3F3] py-10 md:py-0 rounded-2xl md:w-1/2 flex items-center justify-center">
          <img src={image} className="w-fit rounded-lg shadow-2xl" />
        </figure>
        <div className="p-4 md:w-1/2">
          <h1 className="text-5xl font-semibold">{bookName}</h1>
          <p className="text-xl font-medium pt-5">By: {author}</p>
          <div className="divider"></div>
          <p className="text-xl font-medium">{category}</p>
          <div className="divider"></div>
          <p className="text-[#131313b3] text-lg  text-justify">
            <span className="font-bold text-black">Review: </span>
            {review}
          </p>
          <div className="space-x-3.5 text-lg pt-3">
            <span className="font-bold">Tag</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-[#23be0a0d] font-medium my-3 text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="divider"></div>

          <table className="w-1/2 border-separate border-spacing-y-4">
            <thead className="text-[#131313b3]">
              <tr>
                <td>Number of Pages:</td>
                <td className="font-bold text-black">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-bold text-black">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-bold text-black">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className="font-bold text-black">{rating}</td>
              </tr>
            </thead>
          </table>
          <div className="space-x-6">
            <button
              onClick={() => handleMarkedAsRead(bookId)}
              className="btn p-6 rounded-md text-lg"
            >
              Mark as Read
            </button>
            <button className="btn p-6 rounded-md text-lg bg-[#50B1C9] hover:bg-[#3796ad] text-white">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
