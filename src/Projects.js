import oregonTurtles from "./images/OregonTurtlesSite.jpg";
import MCM from "./images/MCMDashboard.png";
import gamingLib from "./images/1.png";

const Projects = () => {
  return (
    <article
      style={{
        maxHeight: "600px",
        overflowY: "auto",
        padding: "30px",
        marginTop: "80px",
      }}
    >
      <article
        className="grid"
        style={{
          paddingTop: "30px",
          backgroundColor: "#171D2A",
          alignItems: "center",
        }}
      >
        <img src={gamingLib} alt="Gaming Library" style={{}} />
        <article>
          <h2>Gaming Library</h2>
          <h4>React | Express.js | Notion API | PicoCSS</h4>
          <ul>
            <li>
              This site helps me maintain and better visualize my gaming library
              database on the organizational tool Notion using their JavaScript
              SDK to grab all of the game data. This site also helped me learn
              React and the way it functions.
            </li>
            <li>
              Used react and an express server to connect to the Notion API to
              be able to read and write to the database and visualize the
              changes in real time on the front end, I am still adding new
              feautres to it and maintaining the site. I learned a lot from this
              project and I made a few mistakes and used those mistakes to
              re-write the app and learn from them.
            </li>
            <li>
              Developed and maintained the application using React, Express.js,
              External Notion API, and PicoCSS
            </li>
          </ul>
        </article>
      </article>
      <article
        className="grid"
        style={{
          paddingTop: "30px",
          backgroundColor: "#171D2A",
        }}
      >
        <img
          src={oregonTurtles}
          alt="Oregon Turtles"
          style={{ marginTop: "20px" }}
        />
        <article>
          <h2>Oregon Turtles</h2>
          <h4>C# | ASP.NET Core | Xamarin | MAUI</h4>
          <ul>
            <li>
              Lead developer on the Development team for Turtle App, an app and
              website developed for the Oregon Department of Fish and Wildlife
            </li>
            <li>
              Contributed to the creation of an innovative platform allowing
              users to observe and record turtle sightings in Oregon,
              facilitating the identification and relocation of invasive species
            </li>
            <li>
              Developed and maintained the application using C#, ASP.NET Core,
              External API's, Xamarin, and MAUI
            </li>
          </ul>
        </article>
      </article>
      <article
        className="grid"
        style={{
          alignItems: "center",
          paddingTop: "30px",
          backgroundColor: "#171D2A",
        }}
      >
        <img src={MCM} alt="Music Collaboration Manager" style={{}} />
        <article>
          <h2>Music Collaboration Manager</h2>
          <h4>C# | ASP.NET Core | Javascript | Tailwind CSS</h4>
          <ul>
            <li>
              Collaborated as part of a 4-member development team to create the
              Music Collaboration Manager, a senior capstone project.
            </li>
            <li>
              Assumed the role of GIT manager, overseeing the team's workflow,
              pull requests, and source code management.
            </li>
            <li>
              Employed a diverse tech stack including ASP.NET 7, JavaScript,
              Ajax, Tailwind CSS, web APIs, and AI technologies to deliver a
              cohesive and responsive website.
            </li>
            <li>
              Developed and integrated unique features to enhance the user
              experience and facilitate efficient music collaboration.
            </li>
          </ul>
        </article>
      </article>
    </article>
  );
};

export default Projects;
