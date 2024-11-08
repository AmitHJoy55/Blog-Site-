import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../main";

const LatestBlogs = ({ heading, newClass, blogs }) => {

  const {keyword } = useContext(Context);

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section
      className={
        newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"
      }
    >
      <h3>{heading}</h3>
      <div className="container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((element) => (
            <Link to={`/blog/${element._id}`} className="card" key={element._id}>
              <img src={element.mainImage.url} alt="blog" />
              <span className="category">{element.category}</span>
              <h4>{element.title}</h4>
              <div className="writer_section">
                <div className="author">
                  <img src={element.adminAvatar} alt="author_avatar" />
                  <p>{element.adminName}</p>
                  
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
