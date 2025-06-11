import resume from "../assets/Resume.pdf";
import htmlLogo from "../assets/html5_logo.png";
import cssLogo from "../assets/css_logo.png";
import jsLogo from "../assets/js_logo.webp";
import reactLogo from "../assets/react_logo.png";
import tailwindLogo from "../assets/tailwind_logo.png";
import bootstrapLogo from "../assets/bootstrap_logo.png";
import githubLogo from "../assets/github_logo.png";
export default function Section2() {
  return (
    <section id="section2">
      <h2 className="about">
        About me
        <div className="line"></div>
      </h2>
      <div className="description">
        Hi, I’m Abdullah Sajid, a detail-oriented Front-End Web Developer with a
        strong foundation in HTML, CSS, JavaScript, and modern frameworks like
        React.js and Tailwind CSS.
        <br /> I specialize in building accessible, responsive, and
        user-friendly web applications, component architecture, and state
        management. Through hands-on experience in projects, I have developed a
        solid understanding of React ecosystem tools, REST APIs, and front-end
        performance optimization.
        <br /> My work emphasizes clean code, modular design, and cross-device
        compatibility. I am focused on contributing to impactful projects and
        continuously refining my skills.
      </div>
      <div className="resume">
        <a href={resume} target="_blank">
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
        <li><img src={jsLogo} alt="logo" />Javascript</li>
        <li><img src={reactLogo} alt="logo" />React</li>
        <li><img src={tailwindLogo} alt="logo" />Tailwind CSS</li>
        <li><img src={bootstrapLogo} alt="logo" />Bootstrap</li>
        <li><img src={githubLogo} alt="logo" />GitHub</li>
      </ul>
    </section>
  );
}
