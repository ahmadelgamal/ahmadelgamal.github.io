import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section key="hero-resume" id="hero-resume" className="hero-images">
        <img
          src={ require(`../assets/images/hero/ahmad-nvis-min.jpg`).default }
          alt="Ahmad in a hard hat supervising the construction of New Vision International School in Giza, Egypt."
          width="1920px"
          height="900px"
        />
      </section>

      <section id="resume" className="container">
        <h1>Technical Skills</h1>

        <div id="skills">
          <div className="flex-list">
            <h3>Front‑End Languages:</h3>
            <ul>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Front‑End Libraries:</h3>
            <ul>
              <li>jQuery</li>
              <li>jQuery UI</li>
              <li>React</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Front‑End Frameworks:</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>UIkit</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Other Front‑End:</h3>
            <ul>
              <li>AJAX</li>
              <li>APIs</li>
              <li>GraphQL</li>
              <li>JSON</li>
              <li>Redux</li>
              <li>Regex</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Back‑End:</h3>
            <ul>
              <li>Embedded JavaScript Templates (EJS)</li>
              <li>Express.js</li>
              <li>Handlebars.js</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Authentication:</h3>
            <ul>
              <li>JWT</li>
              <li>OAuth</li>
              <li>Sessions</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Database:</h3>
            <ul>
              <li>MongoDB</li>
              <li>MongoDB Compass</li>
              <li>Mongoose</li>
              <li>MySQL</li>
              <li>MySQL Workbench</li>
              <li>NoSQL</li>
              <li>Sequelize</li>
              <li>SQL</li>
              <li>SQLite</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Web-Dev Tools:</h3>
            <ul>
              <li>Chrome DevTools</li>
              <li>GraphiQL</li>
              <li>Heroku</li>
              <li>Insomnia Core</li>
              <li>Jest</li>
              <li>npm</li>
              <li>Terminal</li>
              <li>VS Code</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Other Dev Tools:</h3>
            <ul>
              <li>Android Studio</li>
              <li>Brackets</li>
              <li>FileZilla (FTP)</li>
              <li>Google Analytics</li>
              <li>iTerm2</li>
              <li>Robo 3T</li>
              <li>Xamarin</li>
              <li>Xcode</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Other Tools:</h3>
            <ul>
              <li>Facebook Ads</li>
              <li>Photoshop</li>
              <li>QuickTime Player</li>
              <li>Screencastify</li>
              <li>Slack</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Version Control:</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
            </ul>
          </div>

          <div className="flex-list">
            <h3>Concepts &amp; Techniques:</h3>
            <ul>
              <li>Big O Notation</li>
              <li>Functional Programming</li>
              <li>MERN Stack</li>
              <li>Model‑View‑Controller (MVC) Paradigm</li>
              <li>Object Data Modeling (ODM)</li>
              <li>Object‑Oriented Programming (OOP)</li>
              <li>Object‑Relational Mapping (ORM)</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>Test-Driven Development (TDD)</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;