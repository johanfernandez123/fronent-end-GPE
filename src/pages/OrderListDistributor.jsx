import TableHeaderDistributor from "../components/TableHeaderDistributor "
import TableBodyDistributor from "../components/TableBodyDistributor"
import useOrden from "../hooks/useOrden"
import { useEffect, useState } from "react";
const OrderListDistributor = ({ estadoactual }) => {

  
  const { ordenes, ordenesRecogidas, ordenesEntregadas } = useOrden();
  const [listado, setListado] = useState([]);


  useEffect(() => {
    if (estadoactual === 'guardado') {
      setListado(ordenes)
    }
    if (estadoactual === 'recogido') {
      setListado(ordenesRecogidas)
    }

    if (estadoactual === 'entregado') {
      setListado(ordenesEntregadas)
    }


  }, [estadoactual, ordenes, ordenesRecogidas, ordenesEntregadas])

  return (
    <>
      <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >Listado de ordenes</h1>
      <div className="mt-3 w-75  d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 mod-991-container">
        <div className="w-100 py-2 px-4">
          <TableHeaderDistributor estadoactual={estadoactual} />

          <div className="d-flex  justify-content-around flex-column">
            {
              <>
                {listado.map(elem =>
                  <TableBodyDistributor
                    estadoactual={estadoactual}
                    key={elem._id}
                    servicio={elem.nServicio}
                    fecha={elem.fecha}
                    ciudadE={elem.ciudad_entrega}
                    direccionE={elem.direccion_entrega}
                    estado={elem.estado}
                    _id={elem._id}
                    orden={elem}
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

export default OrderListDistributor