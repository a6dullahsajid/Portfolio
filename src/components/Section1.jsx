import photo from "../assets/photo2.png";
export default function Section1() {
  return (
    <section id="section1">
      <div className="designation">
        <div className="name">Abdullah Sajid</div>
        <div className="profession">Frontend Developer</div>
      </div>
      <div className="profile">
        <img src={photo} alt="Profile Photo" />
      </div>
    </section>
  );
}
