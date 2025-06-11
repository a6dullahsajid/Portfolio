import githubLogo from "../assets/github_logo.png";
import xLogo from "../assets/x_logo.png";
import linkedinLogo from "../assets/linkedin.png";
export default function section4() {
  return (
    <section id="section4">
      <h2 className="contact">
        Let's connect
        <div className="line"></div>
      </h2>
      <div className="description">
        I’m always open to collaborating, learning, and exploring new
        opportunities — from creative collaborations to building meaningful
        digital experiences. Whether you’re looking for a dedicated Front-End
        Web Developer to bring ideas to life, a reliable problem solver, or
        simply want to connect and exchange thoughts on web technologies and
        design, feel free to reach out.
      </div>
      <div className="connect">
        <a
          href="https://github.com/a6dullahsajid"
          target="_blank"
          className="github"
        >
          <img src={githubLogo} alt="" />
        
        </a>
        <a href="https://x.com/a6dullahsajid" target="_blank" className="x">
          <img src={xLogo} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/a6dullahsajid/"
          target="_blank"
          className="linkedin"
        >
          <img src={linkedinLogo} alt="" />
        </a>
      </div>
      <div className="mail">
        Email: abdullahsajid1029@gmail.com
      </div>
      <a className="msgbtn" href="mailto:abdullahsajid1029@gmail.com" target="_blank">Contact Me</a>
    </section>
  );
}
