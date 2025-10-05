import React from "react";
import { FileChartColumnIncreasing, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router";

const ReadListCard = ({ book }) => {
  const navigate = useNavigate();
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
  return (
    <div className="flex flex-col lg:flex-row  justify-start border border-[#13131326] rounded-3xl p-6 shadow-md gap-10">
      <figure className="bg-[#F3F3F3] p-10 md:w-[250px] h-fit rounded-2xl  flex items-center justify-center">
        <img
          src={image}
          className="max-w-[120px] h-fit rounded-lg shadow-2xl"
        />
      </figure>
      <div className="p-4 ">
        <h1 className="text-3xl playfair-font font-semibold">{bookName}</h1>
        <p className="font-medium pt-5">By : {author}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center py-4 gap-4">
          <div className="flex flex-wrap gap-4 items-center  md:text-lg">
            <span className="font-bold text-lg">Tag</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-[#23be0a0d] font-medium text-[#23BE0A] text-lg p-5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-[#131313b3] text-lg flex items-center gap-1">
            <MapPin />
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <span className="text-[#131313b3] text-lg flex items-center gap-1">
            <Users />
            Publisher: {publisher}
          </span>
          <span className="text-[#131313b3] text-lg flex items-center gap-1">
            <FileChartColumnIncreasing />
            Page {totalPages}
          </span>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="btn p-6 text-[#328EFF] rounded-full bg-[#328eff26] border-none font-normal text-lg">
            Catergory: <span>{category}</span>
          </button>
          <button className="btn font-normal p-6 rounded-full text-lg bg-[#FFAC3326] border-none text-[#FFAC33]">
            Ratings: <span>{rating}</span>
          </button>

          <button
            onClick={() => navigate(`/book-details/${bookId}`, { state: book })}
            className="font-normal btn p-6 rounded-full text-lg bg-[#23BE0A] border-none text-white "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadListCard;
