import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A Lot is happening we are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article
            imgUrl={blog01}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, et!"
            date={"24 may 2021"}
          />
        </div>
        <div className="gpt3__blog-container-groupB">
          <Article
            imgUrl={blog02}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, et!"
            date={"24 may 2021"}
          />
          <Article
            imgUrl={blog03}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, et!"
            date={"24 may 2021"}
          />
          <Article
            imgUrl={blog04}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, et!"
            date={"24 may 2021"}
          />
          <Article
            imgUrl={blog05}
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, et!"
            date={"24 may 2021"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
