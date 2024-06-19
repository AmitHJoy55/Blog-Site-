import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MiniCard from "../src/components/miniComponents/MiniCard";
import { Context } from "../src/main";

const Books = () => {
  const { mode } = useContext(Context);
  const { subject } = useParams();
  const subjectBooks = {
    EEE_101W: [
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
        link: "https://drive.google.com/file/d/1AKQgCMmL6T1SvZ3UF00I-BzhD4tCXyvI/view",
      }
    ],
    ENG_101W: [
      {
        title: "Subjunctive Exercise",
        link: "https://drive.google.com/file/d/1AKQgCMmL6T1SvZ3UF00I-BzhD4tCXyvI/view?usp=sharing",
      },
      {
        title: "Outline structure",
        link: "https://docs.google.com/document/d/1RMDW7eHy3wOzR-1RAYKw09z540f62PW0/edit?usp=drive_link",
      },
      {
        title: "Causative Exer",
        link: "https://drive.google.com/file/d/1g4018V_Pe2RTD7BuLxDM71bfhgs6bxGC/view?usp=drive_link",
      },
      {
        title: "Exercise",
        link: "https://drive.google.com/file/d/1PcMpVnSO7gMgz4tEztQhqBgHA_XGtgG0/view?usp=sharingps://drive.google.com/file/d/1ce_yxZ3fjIQyrF1xPRaYJ1eFFtcG7A2k/view",
      },
      {
        title: "Facebook-Should-be-Banned-sample-argumentative-essay",
        link: "https://docs.google.com/document/d/1gOmOezOZCve6HKliXoznCKT_T-Q_RmRM/edit?usp=sharing&ouid=114521500465570756019&rtpof=true&sd=true",
      }
    ],
    MAT_105W: [
      {
        title: "Thomas and finlaycalculus-and-analytic-geometry-ninth-edition",
        link: "https://drive.google.com/file/d/1Ryrwz26qnxQWghvoWRWiZNNaVUtw0luG/view?usp=sharing",
      }
    ],
    SWE_123 : [
      {
        title: "Discrete Mathematics and Its Applications - Kenneth Rosen (2012)",
        link: "https://drive.google.com/file/d/1ot4OC_XASOzdjafMYNGgTqYrNkk6V1MC/view?usp=sharing",
      },
      {
        title: "Susanna-S.-Epp-Discrete-Mathematics-with-Applications-Cengage-Learning-2019",
        link: "https://drive.google.com/file/d/1ot4OC_XASOzdjafMYNGgTqYrNkk6V1MC/view?usp=sharing",
      }
    ],
    SWE_121 : [
      {
        title: "সি প্রোগ্রামিং সুবিন",
        link: "https://drive.google.com/file/d/1899Wu4kp6sfcSC_ADU9bXVc4VYj47aBh/view?usp=sharing",
      },
      {
        title: "Teach yourself C",
        link: "https://drive.google.com/file/d/1Dwkc5eMmCYhl9jWWwvt9fAVb3xL_p27I/view?usp=sharing",
      },
      {
        title: "Dawn of Porgramming Contest (July, 2015)",
        link: "https://drive.google.com/file/d/1lOYdj6T4Ag82hs-IIeUZlGJLbUjgUFcb/view?usp=sharing",
      }
    ],
    PHY_103W : [
      {
        title: "Physics Textbook",
        link: "https://drive.google.com/file/d/1U6W3S4v9mTlLveVxoknFJl1CT8nz6FEI/view?usp=sharing",
      },
      {
        title: "Heat and Thermodynamics",
        link: "https://drive.google.com/file/d/1HLkLqe3NUekGsekPtHPPPGoqXDqu67cP/view?usp=sharing",
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
