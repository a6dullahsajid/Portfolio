import resume from "../assets/Resume.pdf";
import htmlLogo from "../assets/logos/html5_logo.png";
import cssLogo from "../assets/logos/css_logo.png";
import jsLogo from "../assets/logos/js_logo.webp";
import reactLogo from "../assets/logos/react_logo.png";
import tailwindLogo from "../assets/logos/tailwind_logo.png";
import bootstrapLogo from "../assets/logos/bootstrap_logo.png";
import githubLogo from "../assets/logos/github_logo.png";
import reduxLogo from "../assets/logos/redux_logo.png";
import nextLogo from "../assets/logos/next_logo.png";
import nextAuthLogo from "../assets/logos/next_auth_logo.png";
import firebaseLogo from "../assets/logos/firebase_logo.png";

export default function Section2() {
  return (
    <section id="section2">
      <h2 className="about">
        About me
        <div className="line"></div>
      </h2>
      <div className="description">
        <span>
          Hi, I&apos;m Abdullah Sajid — a Full Stack Developer skilled in JavaScript,
          React.js, Next.js, Node.js, Express.js, MongoDB, HTML, CSS, and
          Tailwind CSS. I build scalable, responsive web applications across the
          entire development stack, from intuitive user interfaces to secure
          backend services and databases. My experience includes RESTful API
          development, JWT authentication, Redux Toolkit, NextAuth, MongoDB
          Atlas, and cloud-based integrations. I focus on writing clean,
          maintainable code, optimizing application performance, and delivering
          reliable solutions that solve real-world problems.
        </span>
        I specialize in building responsive, accessible, and user-friendly web
        applications with a focus on component architecture, state management,
        and performance optimization. I value clean, modular code and enjoy
        contributing to meaningful, real-world projects.
      </div>
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/1CT2jKSwnWqRNdpkqs0QmmHRRxX1ftWUC/view?usp=drive_link"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <h3>Key Skills</h3>
      <ul className="skills">
        <li>
          <img src={htmlLogo} alt="logo" />
          HTML
        </li>
        <li>
          <img src={cssLogo} alt="logo" />
          CSS
        </li>
        <li>
          <img src={jsLogo} alt="logo" />
          Javascript
        </li>
        <li>
          <img src={reactLogo} alt="logo" />
          React
        </li>
        <li>
          <img src={reduxLogo} alt="logo" />
          Redux
        </li>
        <li>
          <img src={nextLogo} alt="logo" />
          Next.js
        </li>
        <li>
          <img src={nextAuthLogo} alt="logo" />
          Next Auth
        </li>
        <li>
          <img src={firebaseLogo} alt="logo" />
          Firebase
        </li>
        <li>
          <img src={tailwindLogo} alt="logo" />
          Tailwind CSS
        </li>
        <li>
          <img src={bootstrapLogo} alt="logo" />
          Bootstrap
        </li>
        <li>
          <img src={githubLogo} alt="logo" />
          GitHub
        </li>
      </ul>
    </section>
  );
}
