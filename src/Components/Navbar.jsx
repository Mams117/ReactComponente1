import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/login">Login</Link>
          <Link to="/info">Info</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </div>
  );
}
