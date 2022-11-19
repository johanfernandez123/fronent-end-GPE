import { Link } from "react-router-dom"

const HeaderAdmin = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg px-5 bg-color-unico">
        <div className="container-fluid">
            <a className="navbar-brand me-5 text-danger fw-bold fs-3 " href="#">GPE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li className="nav-item">
                        <Link to="/admin" className="mx-4 px-2 fs-5 text-color-white-claro text-color-white-hover enlace" >Listar Repartidores</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/list-admins" className="mx-4 px-2 fs-5 text-color-white-claro text-color-white-hover enlace" >Listar Administradores</Link>

                    </li>

                    <li className="nav-item">
                        <Link to="/admin/crear-usuario" className="mx-4 px-2 fs-5 text-color-white-claro text-color-white-hover enlace" >Crear Usuario</Link>

                    </li>

                    <li className="nav-item">
                        <Link to="/admin/profile" className="mx-4 px-2 fs-5 text-color-white-claro text-color-white-hover enlace" >Perfil</Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/admin/profile"  className="mx-4 px-2 fs-5 text-color-white-claro text-color-white-hover enlace" >Cerrar Sesion</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</>
  )
}

export default HeaderAdmin