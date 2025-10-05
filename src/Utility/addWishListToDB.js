import { toast } from "react-toastify";

export const getWishListData = () => {
  const storedSTRData = localStorage.getItem("wishlist");
  if (storedSTRData) return JSON.parse(storedSTRData);
  return [];
};

export const addWishListData = (id) => {
  const storedData = getWishListData();
  if (storedData.includes(id)) {
    // alert("Book Already Exits at Your Read List");
    toast.warn("This book already exits!");
    return;
  } else {
    storedData.push(id);
    const convertedData = JSON.stringify(storedData);
    localStorage.setItem("wishlist", convertedData);
    toast.success("Book add to the wishlist!");
  }
};
