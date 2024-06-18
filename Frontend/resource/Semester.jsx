import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import One_1 from "./One_1";
import One_2 from "./One_2";
import Two_1 from "./Two_1";
import Two_2 from "./Two_2";
import Three_1 from "./Three_1";
import Three_2 from "./Three_2";
import Four_1 from "./Four_1";
import Four_2 from "./Four_2";
import { Context } from "../src/main";

function Semester() {
  const { mode } = useContext(Context);
  const { semester } = useParams();

  const getContent = () => {
    switch (semester) {
      case "1":
        return <One_1 />;
      case "2":
        return <One_2 />;
      case "3":
        return <Two_1 />;
      case "4":
        return <Two_2 />;
      case "5":
        return <Three_1 />;
      case "6":
        return <Three_2 />;
      case "7":
        return <Four_1 />;
      case "8":
        return <Four_2 />;
      default:
        return (
          <div className="">
            <p>{semester} Semester</p>
            <h1>Not found</h1>
          </div>
        );
    }
  };

  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      {getContent()}
    </article>
  );
}

export default Semester;
