import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          SWEConnect, the ultimate platform for members of the Software
          Engineering Society to connect, share achievements, and access
          valuable resources. Built with React.js for dynamic frontend
          interactions and Express.js for a robust backend infrastructure, our
          platform redefines how SWE society members collaborate online.

          </p>

          <p>
          It provides an intuitive interface for user registration,
          personalized profiles, and effortless blog creation and management.
          Users from swe society can share their insights and achievements, and
          the advanced search and filtering system allows members to find blogs
          by tags, ensuring they access relevant content quickly.
          </p>

          <p>
          Beyond blogging, SWEConnect is a hub for resource
          exchange. Members can share and access various resources, fostering a
          vibrant community where knowledge and tools are freely exchanged.
          </p>

          <p>
           SWEConnect caters to a diverse audience of software
          engineering professionals, students, educators, and enthusiasts who
          are part of the SWE society. Whether you're a seasoned developer
          sharing your latest project insights, a student looking for study
          resources, or an educator sharing best practices, SWEConnect provides
          a dedicated space for you to connect and contribute to the SWE
          community.

          </p>

      </div>
    </article>
  );
};

export default About;


