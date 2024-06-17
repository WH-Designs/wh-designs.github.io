import github from "./images/github-icon.svg";
import linkedin from "./images/linkedin-icon.svg";
import logo from "./images/logo2.jpg";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <span>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "100px",
                  paddingRight: "10px",
                  borderRadius: "50%",
                }}
              />
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <h1
              style={{
                marginTop: "10px",
              }}
            >
              Wyatt Haak
            </h1>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/WH-Designs"
              target="_blank"
              class="secondary"
            >
              <img
                src={github}
                alt="github"
                style={{
                  width: "45px",
                  height: "45px",
                }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wyatt-haak-ba3816203/"
              target="_blank"
              class="secondary"
            >
              <img
                src={linkedin}
                alt="linkedin"
                style={{
                  width: "45px",
                  height: "45px",
                }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
