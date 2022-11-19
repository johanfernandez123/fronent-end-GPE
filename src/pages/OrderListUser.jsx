import TableHeaderUser from "../components/TableHeaderUser"
import TableBodyUser from "../components/TableBodyUser"
const OrderListUser = () => {

    const array = [1, 2, 3, 4, 5];
    return (
        <>
            <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >Listado de ordenes</h1>

            <div className="mt-3 w-75 d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 mod-991-container">
                <div className="w-100 py-2 px-4">
                    <TableHeaderUser />

                    <div className="d-flex  justify-content-around flex-column">
                        {
                            <>
                                {array.map(elem => 
                                    <TableBodyUser
                                        key={elem}
                                        servicio={"1"}
                                        fecha={"10/12/2022"}
                                        ciudadE={"Medellin"}
                                        direccionE={"calle 23 #25-40"}
                                        estado={"Entregado"}
                                    />
                                
                                )}
                            </>
                        }


                        <TableBodyUser
                            servicio={"1"}
                            fecha={"10/12/2022"}
                            ciudadE={"Medellin"}
                            direccionE={"calle 23 #25-40"}
                            estado={"Entregado"}
                        />




                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderListUser