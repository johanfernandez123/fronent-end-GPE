import TableHeaderAdmin from "../components/TableHeaderAdmin";
import TableBodyAdmin from "../components/TableBodyAdmin";
const ListarUsersAdmin = ({admin}) => {
    const array = [1, 2, 3, 4, 5];
    return (
      <>
      <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >{admin?"Listado de Administradores":"Listado de Repartidores"}</h1>
      <div className="mt-3 w-75 d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 mod-991-container">
                  <div className="w-100 py-2 px-4">
                      <TableHeaderAdmin/>
  
                      <div className="d-flex  justify-content-around flex-column">
                          {
                              <>
                                  {array.map(elem => 
                                      <TableBodyAdmin
                                          key={elem}
                                          cedula={"1041530468"}
                                          nombres={"JOhan Camilo Fernandez"}
                                          celular={"3227261710"}
                                          correo={"johanfg32@gmail.com"}
                                      />
                                  
                                  )}
                              </>
                          }
  
  
  
                      </div>
                  </div>
              </div>
      </>
    )
}

export default ListarUsersAdmin