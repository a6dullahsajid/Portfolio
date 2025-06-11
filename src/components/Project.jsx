import previewSvg from "../assets/preview.svg";
import codeSvg from "../assets/code.svg";
export default function Project({ name, description, image, link, code, techUsed }) {
  return (
    <div className="project">
      <div className="projectImage">
        <img src={image} alt="" />
      </div>
      <div className="projectName">{name}</div>
      <div className="projectDescription">{description}</div>
      <div className="tech"><b>Tech Used:</b> {techUsed}</div>
      <div className="links">
        <a href={link} target="_blank">
          <img src={previewSvg} alt="svg" />
          Preview
        </a>
        <a href={code} target="_blank">
          <img src={codeSvg} alt="svg" />
          Code
        </a>
      </div>
    </div>
  );
}
