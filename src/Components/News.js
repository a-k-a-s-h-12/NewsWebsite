import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../Store";
import Loading from "./Loading";
const News = (props) => {
  const { category, country } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles({ country, category }));
  }, [country, category, dispatch]);
  const articles = useSelector((store) => store.article.articles);
  const loading = useSelector((store) => store.article.LoadingFinished);
  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <div className="Container w-screen h-full bg-gray-300 pb-12">
            <h1 className="text-center font-bold text-[35px] uppercase pt-[50px]">
              {category} HeadLines
            </h1>
            <div className="news-items flex flex-wrap gap-[2rem] justify-center items-start mt-[50px]">
              {articles.map((article, index) => {
                return <NewsItems article={article} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
