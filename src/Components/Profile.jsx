import { Outlet, Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <nav>
        <Link to="/ProfileDetails">Detalles del Perfil</Link>
        <Link to="/ProfileSettings">Configuracion del Perfil</Link>
      </nav>
      <Outlet />
    </div>
  );
}
