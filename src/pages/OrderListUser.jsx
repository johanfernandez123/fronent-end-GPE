import TableHeaderUser from "../components/TableHeaderUser"
import TableBodyUser from "../components/TableBodyUser"
import useOrden from "../hooks/useOrden";
import { useEffect, useState } from "react";
const OrderListUser = () => {
    const {ordenes, orden} = useOrden();
    return (
        <>
            <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >Listado de ordenes</h1>

            <div className="mt-3 w-75 d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 mod-991-container">
                <div className="w-100 py-2 px-4">
                    <TableHeaderUser />

                    <div className="d-flex  justify-content-around flex-column">
                        {ordenes.length ? (
                            <>
                                {ordenes.map(elem => 
                                
                                    <TableBodyUser
                                        key={elem._id}
                                        servicio={elem.nServicio}
                                        fecha={elem.fecha}
                                        ciudadE={elem.ciudad_entrega}
                                        direccionE={elem.direccion_entrega}
                                        estado={elem.estado}
                                        _id={elem._id}
                                    />
                                    
                                )}
                            </>

                        ):
                        (
                            <>
                                <h2 className="text-center text-white mb-5">No hay ordenes para mostrar</h2>
                            </>
                        )
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderListUser