import React from "react";
import { blogContent } from "../constants/";
import Blogitem from "../components/Blogitem.jsx";

function Blog() {
  return (
    <section id="blog" className="p-5">
      <div className="justify-normal gap-10">
        {blogContent.map((content, i) => (
          <Blogitem key={i} content={content} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
