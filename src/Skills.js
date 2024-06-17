import languages from "./images/languages.png";
import communication from "./images/communication.png";
import frameworks from "./images/frameworks.png";
import graphic from "./images/graphic design.png";
import learning from "./images/learning.png";
import services from "./images/services.png";

const Skills = () => {
  return (
    <article>
      <div className="grid">
        <article>
          <details>
            <summary
              style={{
                fontSize: "20pt",
                fontWeight: "bold",
              }}
            >
              <span>
                <img
                  src={languages}
                  alt="languages"
                  style={{ width: "40px" }}
                />
              </span>
              &nbsp; Languages
            </summary>
            <p style={{ textAlign: "center" }}>
              I am deeply committed to continuously learning, growing, and
              maintaining my dedication and passion for software development. I
              possess a wealth of knowledge in coding concepts and languages,
              including C#, JavaScript, Python, and SQL. I prioritize building
              upon my understanding of fundamental principles and advanced
              techniques required for developing complex applications across
              both front-end and back-end development
            </p>
          </details>
        </article>
        <article>
          <details>
            <summary style={{ fontSize: "20pt", fontWeight: "bold" }}>
              <span>
                <img
                  src={frameworks}
                  alt="frameworks"
                  style={{ width: "40px" }}
                />
              </span>
              &nbsp; Frameworks
            </summary>
            <p style={{ textAlign: "center" }}>
              I have had the opportunity to gain experience working with a
              variety of frameworks, including ASP.NET, ASP.NET Core, Angular,
              Node.js, jQuery, Vite.js, React.js, and Tailwind CSS. Through my
              hands-on experience with these frameworks, I have developed a deep
              understanding of their functionalities and capabilities. This
              knowledge has allowed me to effectively design and build robust
              and efficient software applications, from web development to
              mobile applications
            </p>
          </details>
        </article>
        <article>
          <details>
            <summary style={{ fontSize: "20pt", fontWeight: "bold" }}>
              <span>
                <img src={services} alt="services" style={{ width: "40px" }} />
              </span>
              &nbsp;Services
            </summary>
            <p style={{ textAlign: "center" }}>
              I have gained experience working with a variety of services, with
              a particular focus on Git and Azure. I also have experience with
              web APIs, and AI services. As an expert in Git, I possess a deep
              understanding of its functionality and capabilities for version
              control, code collaboration, and management. Additionally, my
              experience with Azure has allowed me to develop a strong
              understanding of its cloud computing and infrastructure services,
              enabling me to deploy, manage, and monitor cloud-based
              applications with ease
            </p>
          </details>
        </article>
      </div>
      <div className="grid">
        <article>
          <details>
            <summary style={{ fontSize: "20pt", fontWeight: "bold" }}>
              <span>
                <img
                  src={graphic}
                  alt="graphic design"
                  style={{ width: "40px" }}
                />
              </span>
              &nbsp;Graphic Design
            </summary>
            <p style={{ textAlign: "center" }}>
              Accessibility and readability are fundamental aspects of my
              approach to developing websites. I am committed to ensuring that
              all the sites I develop are accessible to everyone, regardless of
              their abilities, by following the best practices for web
              accessibility. Additionally, I prioritize creating sites that are
              easy to read and navigate, with clean and modern designs that
              engage and inspire users
            </p>
          </details>
        </article>
        <article>
          <details>
            <summary style={{ fontSize: "20pt", fontWeight: "bold" }}>
              <span>
                <img
                  src={communication}
                  alt="communication"
                  style={{ width: "40px" }}
                />
              </span>{" "}
              &nbsp;Communication
            </summary>
            <p style={{ textAlign: "center" }}>
              I strive to have a natural ability to connect with others, express
              myself clearly, and actively listen to the perspectives around me.
              I also strive to be profecient in both verbal and non verbal
              communication which allows me to articulate complex concepts in a
              way that is easy for others to understand, which will make me an
              invaluable asset in any team setting
            </p>
          </details>
        </article>
        <article>
          <details>
            <summary style={{ fontSize: "20pt", fontWeight: "bold" }}>
              <span>
                <img
                  src={learning}
                  alt="learning and growth"
                  style={{ width: "40px" }}
                />
              </span>
              &nbsp;Learning and Growing
            </summary>
            <p style={{ textAlign: "center" }}>
              I am dedicated to continuously learning and growing, with a strong
              ability to adapt to new environments and technologies. With a
              passion for software development, I make it a priority to stay
              up-to-date with the latest industry trends and best practices,
              expanding my knowledge and skillset. I possess a natural aptitude
              for quickly learning new concepts and adapting to new
              technologies, allowing me to excel in any development environment
            </p>
          </details>
        </article>
      </div>
    </article>
  );
};

export default Skills;
