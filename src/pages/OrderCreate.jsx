

const OrderCreate = () => {
  const id = '';
  return (
    <>
      <h1 className=" text-center py-4  text-uppercase fw-bold color-unico">
        {id ? 'Editar Orden' : 'Crear Orden'}
      </h1>

      <div className="mt-3 w-75 d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 ">

        <div className="w-100 py-2 px-4">
          <form className="p-2">

            <h6 className="text-center text-white text-uppercase">DISPONIBILIDAD PARA LA ENTREGA</h6>
            <div className="d-flex justify-content-around mb-3 border border-white py-3">
            
              <div>
                <label className="me-3 text-white fs-5" htmlFor="fecha">Fecha: </label>
                <input id="fecha" type="date" />
              </div>

              <div>
                <label className="me-3 text-white fs-5" htmlFor="hora">Horario: </label>
                <select name="hora" id="hora">
                  <option value="1">Mañana</option>
                  <option value="2">Tarde</option>
                  <option value="3">Noche</option>
                </select>
              </div>
            </div>


            <div className="d-flex justify-content-around my-3">
              {/* <div>
                <label className="me-3 text-white fs-5" htmlFor="estado">Estado: </label>
                <select id="estado">
                  <option value="1">Guardado</option>
                  <option value="2">Cumplido</option>
                  <option value="3">Cancelado</option>
                </select>
              </div> */}

              <div>
                <label className="me-3 text-white fs-5" htmlFor="delicado">Delicado: </label>
                <select id="delicado">
                  <option value="1">Si</option>
                  <option value="2">No</option>
                </select>
              </div>
            </div>




            <div className="d-flex justify-content-around my-3">
              <div>
                <label className="me-3 text-white fs-5" htmlFor="ancho">Ancho (Cm): </label>
                <input className="w-12-vh" id="ancho" type="number" />
              </div>
              <div >
                <label className="me-3 text-white fs-5" htmlFor="alto">Alto (Cm): </label>
                <input className="w-12-vh" id="alto" type="number" />
              </div>
              <div >
                <label className="me-3 text-white fs-5" htmlFor="largo">Largo (Cm): </label>
                <input className="w-12-vh" id="largo" type="number" />
              </div>
              <div >
                <label className="me-3 text-white fs-5" htmlFor="peso">Peso (Kg): </label>
                <input className="w-12-vh" id="peso" type="number" />
              </div>
            </div>




            <div className="d-flex flex-column">

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="ciudadRecogida">Ciudad recogida: </label>
                <input className="w-50-vh" id="ciudadRecogida" type="text" />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="direccionRecogida">Direccion recogida: </label>
                <input className="w-50-vh" id="direccionRecogida" type="text" />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="nombreDestinatario">Nombre destinatario: </label>
                <input className="w-50-vh" id="nombreDestinatario" type="text" />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="idDestinatario">Cedula / Nit destinatario: </label>
                <input className="w-50-vh" id="idDestinatario" type="text" />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="direccionEntrega">Direccion entrega: </label>
                <input className="w-50-vh" id="direccionEntrega" type="text" />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="ciudadEntrega">Ciudad entrega: </label>
                <input className="w-50-vh" id="ciudadEntrega" type="text" />
              </div>

            </div>


            <div className="my-3 d-flex justify-content-around">
              <input
                type="submit"
                value={id?"Actualizar Orden": "CREAR ORDEN"}
                className="btn btn-danger text-uppercase fw-bold"
              />
            </div>


          </form>
        </div>
      </div>

    </>

  )
}

export default OrderCreate