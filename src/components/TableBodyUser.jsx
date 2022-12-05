import React, { useState } from 'react';
import swal from 'sweetalert';
import useOrden from "../hooks/useOrden";
import ModalMensaje from "./ModalMensaje";
const TableBodyUser = (props) => {
  const { buscarOrden, editarEstado } = useOrden()
  const { servicio, fecha, ciudadE, direccionE, estado, _id } = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { listarMensajes, mensajes } = useOrden();

  const alertaModificacion = () => {
    return swal({
      text: "No lo puedes modificar, tu pedido ya fue entregado o va en camino!",
      icon: "info",
    });
  }

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

        {estado === 'guardado' || estado === 'cancelado'
            ?
            (
              <>
                 <button
            onClick={() => buscarOrden(_id)}
            className="btn btn-outline-danger border-0 p-1">
            <i className="text-white fs-3 fa-sharp fa-solid fa-pen-to-square"></i>
          </button>
              </>
            )
            :
            (
              <>
              <button
            onClick={alertaModificacion}
            className="btn btn-outline-danger border-0 p-1">
            <i className="text-white fs-3 fa-sharp fa-solid fa-pen-to-square"></i>
          </button>
              </>
            )
          }

        </p>
        <p className="text-white vh-width20 text-center">

          {estado === 'guardado' || estado === 'cancelado'
            ?
            (
              <>
                <button

                  onClick={() => editarEstado(_id, estado)}


                  className="btn btn-outline-danger border-0 p-1">


                  {estado == 'cancelado'
                    ?
                    <>
                      <i className=" text-white fs-3 fa-solid fa-check"></i>
                    </>
                    :
                    <>
                      <i className="text-white fs-3 fa-solid fa-trash-can"></i>
                    </>
                  }
                </button>
              </>
            )
            :
            (
              <>
                <button

                  onClick={alertaModificacion}


                  className="btn btn-outline-danger border-0 p-1">


                  {estado == 'cancelado'
                    ?
                    <>
                      <i className=" text-white fs-3 fa-solid fa-check"></i>
                    </>
                    :
                    <>
                      <i className="text-white fs-3 fa-solid fa-trash-can"></i>
                    </>
                  }
                </button>

              </>
            )
          }

        </p>
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
      </div>

      {show &&
        <ModalMensaje show={show} handleClose={handleClose} orden={_id} />
      }
    </>
  )

}

export default TableBodyUser