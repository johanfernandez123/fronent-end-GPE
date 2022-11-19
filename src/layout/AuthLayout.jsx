import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <>
        <main className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout