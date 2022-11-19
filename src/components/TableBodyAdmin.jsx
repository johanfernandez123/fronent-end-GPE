
const TableBodyAdmin = (props) => {
    const {cedula,nombres,celular,correo} = props
    return (
      <>
           <div className="d-flex  justify-content-around w-100 mod-991">
                  <p className="text-white vh-width20 text-center">
                      <span className="d-none mod-991-span">Cédula: </span>
                      {cedula}
                  </p>
                  <p className="text-white vh-width20 text-center">
                      <span className="d-none mod-991-span"> Nombres: </span>
                      {nombres}
                  </p>
                  <p className="text-white vh-width20 text-center">
                      <span className="d-none mod-991-span"> Celular: </span>
                      {celular}
                  </p>
                  <p className="text-white vh-width20 text-center">
                      <span className="d-none mod-991-span"> Correo: </span>
                      {correo}
                  </p>
                 
                  <p className="text-white vh-width20 text-center">
                      <button className="btn btn-outline-danger border-0 p-1">
                      <i className="text-white fs-3 fa-sharp fa-solid fa-pen-to-square"></i>
                      </button>
                  </p>
  
              </div>
      </>
    )
}

export default TableBodyAdmin