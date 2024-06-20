import React from "react";
const NewsItems = (props) => {
  const { article } = props;
  const {  description, title, source, image, url } =
    article;

  function handleClick() {
    window.location.href = url;
  }
  return (
    <div>
      <div
        className="newsItem_contaier flex-col w-[400px] h-max bg-gray-400 rounded-[4%] border-1 b transition ease-in-out delay-150 hover:cursor-pointer hover:scale-105 duration-300"
        onClick={handleClick}
      >
        <div className="image">
          <img
            src={image}
            alt="articleimage"
            className="w-[400px] h-[250px] object-cover rounded-l-[5%] rounded-r-[5%] "
          />
        </div>
        <div className="content flex flex-col pl-3 pr-3 pt-3">
          <p className="font-bold text-[16px]">{title}</p>
          <p className="text-[15px] pt-3 max-h-[100px] overflow-hidden">
            {description}
          </p>
          <p className="pt-2 font-bold">Published by: {source.name}</p>
          <button
            className="mb-3 mt-3 bg-gray-700 p-2 rounded-lg text-slate-200 font-bold transition ease-in-out delay-100 hover:scale-95 duration-300"
            onClick={handleClick}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
