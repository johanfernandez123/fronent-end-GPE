import { Outlet } from "react-router-dom"
import HeaderAdmin from "../components/HeaderAdmin"
const PrivateAdmin = () => {
  return (
    <>
    <HeaderAdmin/>
    <main className="d-flex flex-column align-items-center">
        <Outlet/>
    </main>
</>
  )
}

export default PrivateAdmin