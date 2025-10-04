import React from "react";
import heroImg from "../../assets/hero-img.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 py-20 rounded-2xl">
      <div className="hero-content w-full justify-around flex-col lg:flex-row-reverse">
        <img src={heroImg} />
        <div className="lg:space-y-10">
          <h1 className="text-6xl font-bold leading-20">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn rounded-lg bg-[#23BE0A] text-white text-xl font-semibold py-7 px-6">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
