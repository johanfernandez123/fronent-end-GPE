import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalVerMas = ({ showMas, handleCloseMas, orden }) => {

    return (
        <>
            <Modal show={showMas} onHide={handleCloseMas}>
                <Modal.Header closeButton>
                    <Modal.Title>Datos Completos</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p># Servicio: {orden.nServicio}</p>
                    <p>Fecha: {orden.fecha}</p>
                    <p>Hora: {orden.hora}</p>

                    hora
                    :
                    "Mañana"
                    delicado
                    :
                    false
                    largo
                    :
                    30
                    ancho
                    :
                    10
                    alto
                    :
                    20
                    peso
                    :
                    20
                    direccion_Recogida
                    :
                    "Calle 22"
                    ciudad_Recogida
                    :
                    "Medellin"
                    nombre_destinatario
                    :
                    "Johan"
                    nit_destinatario
                    :
                    "1041530468"
                    direccion_entrega
                    :
                    "Calle 23"
                    ciudad_entrega
                    :
                    "Betulia"
                    estado
                    :
                    "entregado"
                    {orden._id}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMas}>
                        cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalVerMas