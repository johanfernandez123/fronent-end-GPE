import { Outlet } from "react-router-dom"
import HeaderDistributor from "../components/HeaderDistributor"
const PrivateDistributor = () => {
  return (
    <>
        <HeaderDistributor/>
        <main className="d-flex flex-column align-items-center">
            <Outlet/>
        </main>
    </>
  )
}

export default PrivateDistributor