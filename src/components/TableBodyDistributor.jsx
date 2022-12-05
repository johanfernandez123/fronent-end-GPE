import { useState } from "react";
import ModalMensaje from "./ModalMensaje";
import ModalVerMas from "./ModalVerMas";
import useOrden from "../hooks/useOrden";

const TableBodyDistributor = (props) => {
  const { listarMensajes, mensajes, recogerOrden, entregarOrden } = useOrden();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showMas, setShowMas] = useState(false);
  const handleCloseMas = () => setShowMas(false);
  const handleShowMas = () => setShowMas(true);

  const { servicio, fecha, ciudadE, direccionE, estado, estadoactual, _id,orden } = props
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


        {estadoactual === 'guardado'
          ?
          (
            <>
              <p className="text-white vh-width20 text-center">
                <button
                  onClick={() => recogerOrden(_id)}
                  className="btn btn-outline-danger border-0 p-1">
                  <i className="text-white fs-3 fa-solid fa-truck"></i>
                </button>
              </p>
            </>
          )
          : estadoactual === 'recogido'
            ?
            (
              <>
                <p className="text-white vh-width20 text-center">
                  <button
                    onClick={() => entregarOrden(_id)}
                    className="btn btn-outline-danger border-0 p-1">

                    <i className="text-white fs-3 fa-solid fa-box"></i>
                  </button>
                </p>
              </>
            )
            :
            (
              <>
              </>
            )
        }



        <p className="text-white vh-width20 text-center">
          <button
            onClick={() => {
              listarMensajes(_id)
              handleShow()
            }}
            className="btn btn-outline-danger border-0 p-1">
            <i className="text-white fs-3 fa-solid fa-message"></i>
          </button>
        </p>

        <p className="text-white vh-width20 text-center">
          <button
            onClick={() => {
              handleShowMas()
            }}
            className="btn btn-outline-danger border-0 p-1">
            <i className="text-white fs-3 fa-solid fa-plus"></i>
          </button>
        </p>
      </div>




      {show &&
        <ModalMensaje show={show} handleClose={handleClose} orden={_id} />
      }

      {showMas &&
        <ModalVerMas showMas={showMas} handleCloseMas={handleCloseMas} orden={orden} />
      }
    </>
  )
}

export default TableBodyDistributor