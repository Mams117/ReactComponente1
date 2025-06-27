import { Outlet, Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      <nav className="profile-nav">
        <Link to="/ProfileDetails">Detalles del Perfil</Link>
        <Link to="/ProfileSettings">Configuración del Perfil</Link>
      </nav>
      <Outlet />
    </div>
  );
}
