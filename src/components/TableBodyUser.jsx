const TableBodyUser = (props) => {
    const {servicio, fecha,ciudadE, direccionE,estado} = props
  return (
    <>
         <div className="d-flex  justify-content-around w-100 mod-991">
                <p className="text-white vh-width20 text-center">
                    <span className="d-none mod-991-span"># Servicio: </span>
                    {servicio}
                </p>
                <p className="text-white vh-width20 text-center">
                    <span className="d-none mod-991-span"> Fecha: </span>
                    {fecha}
                </p>
                <p className="text-white vh-width20 text-center">
                    <span className="d-none mod-991-span"> Ciudad Entrega: </span>
                    {ciudadE}
                </p>
                <p className="text-white vh-width20 text-center">
                    <span className="d-none mod-991-span"> Direccion Entrega: </span>
                    {direccionE}
                </p>
                <p className="text-white vh-width20 text-center">
                    <span className="d-none mod-991-span">Estado: </span>
                    {estado}
                </p>
                <p className="text-white vh-width20 text-center">
                    <button className="btn btn-outline-danger border-0 p-1">
                    <i className="text-white fs-3 fa-sharp fa-solid fa-pen-to-square"></i>
                    </button>
                </p>
                <p className="text-white vh-width20 text-center">
                    <button className="btn btn-outline-danger border-0 p-1">
                    <i className="text-white fs-3 fa-solid fa-trash-can"></i>
                    </button>
                </p>
                <p className="text-white vh-width20 text-center">
                    <button className="btn btn-outline-danger border-0 p-1">
                    <i className="text-white fs-3 fa-solid fa-message"></i>
                    </button>
                </p>

            </div>
    </>
  )
}

export default TableBodyUser