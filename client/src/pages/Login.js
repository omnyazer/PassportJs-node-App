import Facebook from "../img/facebook.svg";
import GitHub from "../img/github.svg";
import Google from "../img/google.svg";

const Login = ({ apiBaseUrl }) => {
  const google = () => {
    window.open(`${apiBaseUrl}/auth/google`, "_self");
  };

  const facebook = () => {
    console.info("Facebook auth is not implemented in slides 74 to 102.");
  };

  const github = () => {
    window.open(`${apiBaseUrl}/auth/github`, "_self");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="login">
      <h1 className="loginTitle">Choisissez un mode de connexion</h1>
      <div className="wrapper">
        <div className="left">
          <button className="loginButton google" onClick={google} type="button">
            <img alt="Google" className="icon" src={Google} />
            Google
          </button>

          <button
            className="loginButton facebook"
            onClick={facebook}
            type="button"
          >
            <img alt="Facebook" className="icon" src={Facebook} />
            Facebook
          </button>

          <button className="loginButton github" onClick={github} type="button">
            <img alt="GitHub" className="icon" src={GitHub} />
            GitHub
          </button>
        </div>

        <div className="center">
          <div className="line" />
          <span className="or">OR</span>
        </div>

        <div className="right">
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="formInput"
              placeholder="Username"
              type="text"
            />
            <input
              className="formInput"
              placeholder="Password"
              type="password"
            />
            <button className="submit" type="submit">
              Login
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
