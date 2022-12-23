import React from "react";
import "./App.css";

function App() {
  return (
    <div id="background">
      <div className="App">
        <header>
          <h1>Serge John Mahinay</h1>
          <h2>Junior Software Engineer</h2>
        </header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main>
          <section id="about">
            <h3>About Me</h3>
            <p>
              Hi there! My name is Serge John S. Mahinay and I am a self-taught
              programmer with a passion for creating innovative and efficient
              software solutions. With my dedication to continuous learning and
              improvement, I have honed my skills in a variety of programming
              languages and frameworks. I pride myself on my ability to quickly
              understand and solve complex problems, and I am always looking for
              new challenges to tackle. Whether it's developing a new
              application or streamlining an existing one, I am committed to
              delivering high-quality results that exceed my clients'
              expectations. I am excited to share my knowledge and skills with
              others and help them achieve their goals through the power of
              programming. A systematic approach to maintaining the safety,
              efficiency, and responsiveness of websites. A diligent,
              well-prepared, and meticulous employee. Meets strict deadlines by
              moving rapidly. Team player ready to help the company succeed.
            </p>
          </section>
          <section id="projects">
            <h3>Projects</h3>
            <ul>
              <li>
                <h4>Project 1</h4>
                <p>Insert a brief description of your project here.</p>
              </li>
              <li>
                <h4>Project 2</h4>
                <p>Insert a brief description of your project here.</p>
              </li>
              {/* Add more project items here */}
            </ul>
          </section>
          <section id="contact">
            <h3>Contact</h3>
            <p>Email: your@email.com</p>
            <p>GitHub: https://github.com/your-username</p>
            {/* Add additional contact information here */}
          </section>
        </main>
        <footer>
          <p>Copyright © {new Date().getFullYear()} Serge John Mahinay</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
