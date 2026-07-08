import { Link } from "react-router-dom";

const fallbackAvatar =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' rx='60' fill='%23dbe4ff'/><circle cx='60' cy='46' r='22' fill='%234f5dbf'/><path d='M27 102c7-19 24-30 33-30s26 11 33 30' fill='%234f5dbf'/></svg>";

const Navbar = ({ apiBaseUrl, user }) => {
  const logout = () => {
    window.open(`${apiBaseUrl}/auth/logout`, "_self");
  };

  const username =
    user?.displayName ||
    user?.username ||
    user?.name?.givenName ||
    "Saikou";

  const avatarUrl = user?.photos?.[0]?.value || fallbackAvatar;

  return (
    <header className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          CC OAuth passportjs
        </Link>
      </span>

      {user ? (
        <ul className="list">
          <li className="listItem">
            <img alt={username} className="avatar" src={avatarUrl} />
          </li>
          <li className="listItem">{username}</li>
          <li className="listItem logoutButton" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link navLogin" to="/login">
          Login
        </Link>
      )}
    </header>
  );
};

export default Navbar;
