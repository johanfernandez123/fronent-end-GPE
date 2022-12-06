import { useEffect,useState } from "react";
import TableHeaderAdmin from "../components/TableHeaderAdmin";
import TableBodyAdmin from "../components/TableBodyAdmin";
import useAdmin from "../hooks/useAdmin";

const ListarUsersAdmin = ({admin}) => {
    const {repartidores, administradores} = useAdmin();
    const [listado, setListado] = useState([]);

    useEffect(() => {
        if(admin){
            setListado(administradores)
        }else{
            setListado(repartidores)
        }
    },[admin,repartidores,administradores])

    return (
      <>
      <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >{admin?"Listado de Administradores":"Listado de Repartidores"}</h1>
      <div className="mt-3 w-75 d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 mod-991-container">
                  <div className="w-100 py-2 px-4">
                      <TableHeaderAdmin/>
  
                      <div className="d-flex  justify-content-around flex-column">
                          {
                              <>
                                  {listado.map(elem => 
                                      <TableBodyAdmin
                                          key={elem._id}
                                          cedula={elem.nit}
                                          nombres={elem.nombre}
                                          celular={elem.celular}
                                          correo={elem.email}
                                          _id ={elem._id}
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