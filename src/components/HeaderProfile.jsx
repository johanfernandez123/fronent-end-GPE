import { Link } from "react-router-dom"

const HeaderProfile = ({rol}) => {
  return (
        <>
            <nav className="w-100 p-3 pb-0">
               

                <Link className="p-3 fw-bold color-unico enlace fs-5" to={`/${rol}/profile`}>
                    Perfil
                </Link>
                <Link className="p-3 fw-bold color-unico enlace fs-5" to={`/${rol}/change-password`}>
                    Cambiar Contraseña
                </Link>
               
            </nav>
        </>
    )
}

export default HeaderProfile