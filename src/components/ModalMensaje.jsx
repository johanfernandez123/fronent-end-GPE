import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useOrden from '../hooks/useOrden';
import Mensaje from './Mensaje';
function ModalMensaje({ show, handleClose, orden }) {
  const { mensajes,crearMensaje } = useOrden();
  const [msg, setMsg] = useState('');

 const handeleSubmit = async (e) => {
    e.preventDefault();
    await crearMensaje({msg, orden})
    setMsg('')
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Novedades</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {mensajes.length ? (
            <>
              {mensajes.map((elem, index) =>

                <Mensaje
                  key={index}
                  mensaje={elem.mensaje}
                  creador={elem.creador}
                />

              )}
            </>

          ) :
            (
              <>
                <h2 className="text-center  mb-5">Sin mensajes</h2>
              </>
            )
          }

          <form
          onSubmit={handeleSubmit}
          >
            <div className='mt-4 d-flex justify-content-around'>
              <textarea value={msg} placeholder='Digita tu novedad' onChange={e => setMsg(e.target.value)} className='w-75' ></textarea>
              <button
                className="btn btn-outline-danger border-0 p-1"
                type="submit">
                <i className="p-3 fs-3 fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMensaje