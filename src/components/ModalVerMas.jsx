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

                    <p className='text-center'># Servicio: {orden.nServicio}</p>
                    <p className='text-center'>Fecha: {orden.fecha}</p>
                    <p className='text-center'>Hora: {orden.hora}</p>
                    <p className='text-center'>Delicado: {orden.delicado?'Si':'No'}</p>
                    <p className='text-center'>Largo: {orden.largo}</p>
                    <p className='text-center'>Ancho: {orden.ancho}</p>
                    <p className='text-center'>Alto: {orden.alto}</p>
                    <p className='text-center'>Peso: {orden.peso}</p>
                    <p className='text-center'>Direccion_Recogida: {orden.direccion_Recogida}</p>
                    <p className='text-center'>Ciudad de Recogida: {orden.ciudad_Recogida}</p>
                    <p className='text-center'>Nombre del Destinatario: {orden.nombre_destinatario}</p>
                    <p className='text-center'>Nit del Destinatario: {orden.nit_destinatario}</p>
                    <p className='text-center'>Direccion de Entrega: {orden.direccion_entrega}</p>
                    <p className='text-center'>Ciudad de Entrega: {orden.ciudad_entrega}</p>
                    <p className='text-center'>Estado: {orden.estado}</p>
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