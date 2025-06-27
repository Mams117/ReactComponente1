import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/login">login</Link>
      <Link to="/info">info</Link>
      <Link to="/profile">profile</Link>
    </nav>
  );
}
