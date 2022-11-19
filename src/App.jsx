import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import PrivateUsers from "./layout/PrivateUsers"
import PrivateDistributor from "./layout/PrivateDistributor"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResetPassword from "./pages/ResetPassword"

import OrderListUser from "./pages/OrderListUser"
import OrderCreate from "./pages/OrderCreate"



import OrderListDistributor from "./pages/OrderListDistributor"



import Profile from "./pages/Profile"
import ChangePassword from "./pages/ChangePassword"
import PrivateAdmin from "./layout/PrivateAdmin"
import ListarUsersAdmin from "./pages/ListarUsersAdmin"
import { CrearUsiarioAdmin } from "./pages/CrearUsiarioAdmin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Area Publica */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
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
          <Route index element={<OrderListDistributor entregada={false}/>}/>
          <Route path="orden-delivered" element={<OrderListDistributor entregada={true}/>}/>
          <Route path="profile" element={<Profile rol='distributor' />} />
          <Route path="change-password" element={<ChangePassword rol="distributor" />} />
        </Route>

        {/* Area privada Admin */}
        <Route path="/admin" element={<PrivateAdmin/>}>
          <Route index element={<ListarUsersAdmin admin={false}/>}/>
          <Route path="list-admins" element={<ListarUsersAdmin admin={true}/>}/>
          <Route path="crear-usuario" element={<CrearUsiarioAdmin/>}/>
          <Route path="profile" element={<Profile rol='admin' />} />
          <Route path="change-password" element={<ChangePassword rol="admin" />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
