import { Outlet, Navigate } from "react-router-dom"
import HeaderAdmin from "../components/HeaderAdmin"
import useAuth from "../hooks/useAuth"

const PrivateAdmin = () => {

  const { auth, cargandoAuth } = useAuth();
  if (cargandoAuth) {
    return (
      <>
        <h1 className="text-center text-uppercase mt-5">Cargando</h1>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    )
  }

  if (!(auth._id && auth.rol === 3)) {
    return <Navigate to="/" />
  }

  return (
    <>
      <HeaderAdmin />
      <main className="d-flex flex-column align-items-center">
        <Outlet />
      </main>
    </>
  )
}

export default PrivateAdmin