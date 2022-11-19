import { Outlet } from "react-router-dom"
import HeaderUser from "../components/HeaderUsers"
function PrivateUsers() {
    return (
      <>
        <HeaderUser/>
            <main className="d-flex flex-column align-items-center">
                <Outlet/>
            </main>
      </>
    )
  }
  
  export default PrivateUsers