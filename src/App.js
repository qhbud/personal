import React from "react";
import { useSpring, animated } from '@react-spring/web'
import "./App.css";

const App = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <div className="app">
      <header className="header">
        <h1>Quinn Budnick</h1>
        <p>Third Year Studying Computer Science</p>
        <p>
          <a href="mailto:quinnbudnick@gmail.com">quinnbudnick@gmail.com</a>
        </p>
        <p>(401) 787-2195</p>
        <p>Worcester, MA</p>
        <a href="https://www.linkedin.com">LinkedIn</a>
      </header>
      <animated.div style={fadeIn} className="content">
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor of Science</strong>, Major in Computer Science, Minor in Data Science
              <br />
              Worcester Polytechnic Institute (2022 - 2026)
            </li>
            <li>
              <strong>High School Diploma</strong>, Highest Honors
              <br />
              The Greene School (2018 - 2022)
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Object-Oriented: Java, C#, C++, Python</li>
            <li>Front-end: React, JS, HTML, CSS</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Data Visualization: R, Tableau, Excel</li>
            <li>Communication: Research, Writing</li>
            <li>Creative: Premiere, Photoshop</li>
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>
              <strong>Independent Video Producer</strong>, YouTube (May 2023 - Current)
              <br />
              Developed content across successful channels, with over 5M views.
            </li>
            <li>
              <strong>Summer Intern</strong>, Johnson and Wales University (June 2021 - July 2021)
              <br />
              Contributed to a team developing a marketing plan.
            </li>
            <li>
              <strong>Trail & Campus Landscaper</strong>, The Greene School (July 2018 - August 2019)
              <br />
              Maintained campus and restored hiking trails.
            </li>
          </ul>
        </section>
        <section>
          <h2>Ongoing Projects</h2>
          <ul>
            <li>
              <strong>Interactive Qualifying Project</strong>
              <br />
              Modeling User Quality of Experience for Cloud Streaming Systems.
            </li>
            <li>
              <strong>Spy Lens Extension</strong>
              <br />
              Developing a productivity tool using Google's Gemini API.
            </li>
          </ul>
        </section>
      </animated.div>
    </div>
  );
};

export default App;
