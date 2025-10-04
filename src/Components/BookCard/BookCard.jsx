import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const BookCard = ({ book }) => {
  const { author, bookId, bookName, category, image, rating, tags } = book;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/book-details/${bookId}`, { state: book })}
      className="card bg-base-100 shadow-sm cursor-pointer"
    >
      <div className="card-body">
        <figure className="py-12 bg-[#F3F3F3] rounded-2xl">
          <img className="h-52" src={image} alt={bookName} loading="lazy" />
        </figure>
        <div className="space-x-3.5">
          {tags.map((tag,index) => (
            <span key={index} className="badge bg-[#23be0a0d] font-medium my-3 text-[#23BE0A]">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-semibold">{bookName}</h2>
        <p className="text-lg text-[#131313]">By: {author}</p>
        <div className="card-actions justify-between">
          <div className="font-medium">{category}</div>
          <div className="flex items-center gap-1 font-medium">
            <span>{rating}</span> <Star size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
