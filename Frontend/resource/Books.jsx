import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MiniCard from "../src/components/miniComponents/MiniCard";
import { Context } from "../src/main";

const Books = () => {
  const { mode } = useContext(Context);
  const { subject } = useParams();
  const subjectBooks = {
    EEE: [
      {
        title: "Fundamentals of Electric Circuits-5th Edition",
        link: "https://drive.google.com/file/d/1iUUYgxnCp69oWKcdCROQyDd942MuuIuc/view",
      },
      {
        title: "Solution of Fundamentals of Electric Circuits-4th Edition",
        link: "https://drive.google.com/file/d/1efySbTbBfGaqNleJt4m5cF6kDwURShTO/view",
      },
      {
        title: "Introductory Circuit Analysis",
        link: "https://drive.google.com/file/d/1dnVkTcWkl7i0hnvfMnf6QZ3QnmZlNeuz/view",
      },
      {
        title: "Solution of Introductory Circuit Analysis",
        link: "https://drive.google.com/file/d/1ce_yxZ3fjIQyrF1xPRaYJ1eFFtcG7A2k/view",
      }
      
    ],
  };

  const books = subjectBooks[subject] || [];

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
    <div className="book-container">
      <h1>Books</h1>
      <div className="book-section">
        {books.map((book, index) => (
          <MiniCard key={index} subject={book.title} link={book.link} />
        ))}
      </div>
    </div>
    </article>
  );
};

export default Books;
