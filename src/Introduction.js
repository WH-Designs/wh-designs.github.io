import profileImg from "./images/profile-img.jpg";

const Introduction = () => {
  return (
    <div className="grid" style={{ marginTop: "10px" }}>
      <article
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <img src={profileImg} alt="me" style={{ maxWidth: "400px" }} />
      </article>
      <article
        style={{
          margin: "0 auto",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <h4 style={{ fontWeight: "normal", lineHeight: "30pt" }}>
          Hello, my name is Wyatt. I am a results-driven Software Developer with
          a passion for creating innovative solutions. With one year of
          professional experience, I have developed and refined my skills
          through meaningful and impactful projects. I hold a bachelor's degree
          in Computer Science from Western Oregon University, where I graduated
          Summa Cum Laude, specializing in software engineering. My dedication
          to continuous learning and my pursuit of new challenges underscore my
          commitment to advancing my technical expertise and delivering
          high-quality results.
        </h4>
      </article>
    </div>
  );
};

export default Introduction;
