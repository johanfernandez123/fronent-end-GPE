import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import PrivateUsers from "./layout/PrivateUsers"
import PrivateDistributor from "./layout/PrivateDistributor"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"
import ResetPassword from "./pages/ResetPassword"
import CambiarPasswordReset from "./pages/CambiarPasswordReset"

import OrderListUser from "./pages/OrderListUser"
import OrderCreate from "./pages/OrderCreate"



import OrderListDistributor from "./pages/OrderListDistributor"



import Profile from "./pages/Profile"
import ChangePassword from "./pages/ChangePassword"
import PrivateAdmin from "./layout/PrivateAdmin"
import ListarUsersAdmin from "./pages/ListarUsersAdmin"
import { CrearUsiarioAdmin } from "./pages/CrearUsiarioAdmin"


import { AuthProvider } from "./context/AuthContext"
import { OrdenProvider } from "./context/OrdenContext"
import { AdminProvider } from "./context/AdminContex"

function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <OrdenProvider>
          <AdminProvider>
            <Routes>

              {/* Area Publica */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="confirmar-cuenta/:token" element={<ConfirmarCuenta />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="cambiar-password/:token" element={<CambiarPasswordReset />} />
              </Route>

              {/* Area privada usuario */}
              <Route path="/user" element={<PrivateUsers />}>
                <Route index element={<OrderListUser />} />
                <Route path="orden-create" element={<OrderCreate />} />
                <Route path="profile" element={<Profile rol='user' />} />
                <Route path="change-password" element={<ChangePassword rol="user" />} />
              </Route>

              {/* Area Privada distribuidor */}
              <Route path="/distributor" element={<PrivateDistributor />}>
                <Route index element={<OrderListDistributor estadoactual="guardado" />} />
                <Route path="orden-recogida" element={<OrderListDistributor estadoactual="recogido" />} />
                <Route path="orden-delivered" element={<OrderListDistributor estadoactual="entregado" />} />
                <Route path="profile" element={<Profile rol='distributor' />} />
                <Route path="change-password" element={<ChangePassword rol="distributor" />} />
              </Route>

              {/* Area privada Admin */}
              <Route path="/admin" element={<PrivateAdmin />}>
                <Route index element={<ListarUsersAdmin admin={false} />} />
                <Route path="list-admins" element={<ListarUsersAdmin admin={true} />} />
                <Route path="crear-usuario" element={<CrearUsiarioAdmin admin={false} />} />
                <Route path="profile" element={<Profile rol='admin' />} />
                <Route path="change-password" element={<ChangePassword rol="admin" />} />
              </Route>

            </Routes>
          </AdminProvider>
        </OrdenProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
