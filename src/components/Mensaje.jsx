import useAuth from "../hooks/useAuth"
const Mensaje = ({mensaje,creador}) => {
const {auth} = useAuth()
console.log(auth._id)
  return (
    <>
    
    {auth._id == creador
    ?
      (
        <>
        <div className="my-4 d-flex justify-content-end">
        <span className="bg-primary p-2 rounded-pill">{mensaje}
        </span>
      </div>
        </>
      )
    :
    (
      <>
       <div className="my-4">
      <span className="bg-info p-2 rounded-pill">{mensaje}
      </span>
      </div>
      
      </>
    )
    }
   
    </>
  )
}

export default Mensaje