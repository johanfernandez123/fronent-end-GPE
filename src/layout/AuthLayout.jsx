import { Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
function AuthLayout() {
  const {auth} = useAuth();
  return (
    <>
        <main className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout