import React, { useEffect } from 'react';

function About(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section key="hero-about" id="hero-about" className="hero-images">
        <img
          src={ require(`../assets/images/hero/ahmad-ca-min.jpg`).default }
          alt="Ahmad El Gamal in his office in Irvine, CA."
          width="1920px"
          height="900px"
        />
      </section>

      <section id="about" className="container limit-width">
        <h1>About Ahmad El Gamal</h1>
        <p>
          Entrepreneur, strategic planner, software developer and civil engineer. Imam, educator and lifelong learner. Ahmad is a highly effective and experienced leader with excellent communication skills, strong attention to detail and a remarkable ability to patiently organize and sort almost anything!
        </p>
        <p>
          Ahmad founded and led many businesses in the fields of software development, education, construction, trade, retail and advertising.
        </p>
        <p>
          He continuously studies in multiple disciplines. In the specialty of software development, Ahmad studied several mobile-app design &amp; development courses at the University of California, Irvine (UCI), extension. He also successfully completed a 24-week online coding bootcamp at the University of California, Berkeley (UCB), extension. He is certified by UCB as a full-stack (MERN) web-developer.
        </p>
        <p>
          Samples of his work can be seen in the <a href="#Portfolio" onClick={ () => props.handlePageChange('Portfolio') }>Portfolio</a> section of this website, which demonstrate proficiency in both the front‑end and back‑end stacks. Please feel free to visit the deployed website of each project and browse its code repository on <a href="https://github.com/ahmadelgamal" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
        <p>
          Ahmad was born in Egypt and is also a United States citizen. He lives
          in Irvine, California, with his wife and five children.
        </p>
      </section>
    </>
  )
}

export default About;