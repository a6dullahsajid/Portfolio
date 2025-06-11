import homeImage from "../assets/home.svg";
import aboutImage from "../assets/about.svg";
import projectsImage from "../assets/project.svg";
import contactImage from "../assets/contact.svg";
export default function NavBar() {
  return (
    <nav>
      <a href="#section1">
        <p>
          <img src={homeImage} alt="" />
          Home
        </p>
      </a>
      <a href="#section2">
        <p>
          <img src={aboutImage} alt="" />
          About
        </p>
      </a>
      <a href="#section3">
        <p>
          <img src={projectsImage} alt="" />
          Projects
        </p>
      </a>
      <a href="#section4">
        <p>
          <img src={contactImage} alt="" />
          Contact
        </p>
      </a>
    </nav>
  );
}
