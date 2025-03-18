import profileImg from "./images/profile-img2.jpg";

const Introduction = () => {
  return (
    <div>
      <article
        style={{
          margin: "0 auto",
          alignContent: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          src={profileImg}
          alt="me"
          style={{
            maxWidth: "460px",
            borderRadius: "50%",
          }}
        />
        <article
          style={{
            margin: "0 auto",
            alignContent: "center",
            textAlign: "center",
            maxWidth: "70%",
            backgroundColor: "#13171f",
          }}
        >
          <h1 style={{ fontWeight: "normal", lineHeight: "50pt" }}>
            A results-driven Software Engineer with 2-3 years of professional
            experience, specializing in software engineering. Holds a bachelor's
            degree in Computer Science from Western Oregon University and is
            passionate about innovation and continuous learning. Dedicated to
            creating impactful solutions and advancing technical expertise.
          </h1>
        </article>
      </article>
    </div>
  );
};

export default Introduction;
