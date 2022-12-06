import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import useOrden from "../hooks/useOrden";


const OrderCreate = () => {
  const navigate = useNavigate();
  const { guardarOrden, orden,setOrden} = useOrden();
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('Mañana')
  const [delicado, setDelicado] = useState(false)
  const [largo, setLargo] = useState(0)
  const [ancho, setAncho] = useState(0)
  const [alto, setAlto] = useState(0)
  const [peso, setPeso] = useState(0)
  const [ciudad_Recogida, setCiudad_Recogida] = useState('')
  const [direccion_Recogida, setDireccion_Recogida] = useState('')
  const [nombre_destinatario, setNombre_destinatario] = useState('')
  const [nit_destinatario, setNit_destinatario] = useState('')
  const [direccion_entrega, setDireccion_entrega] = useState('')
  const [ciudad_entrega, setCiudad_entrega] = useState('')
  const [id, setId] = useState(orden._id);
  
  useEffect(() => {

    if (orden?._id) {
      setFecha(orden.fecha);
      setHora(orden.hora);
      setDelicado(orden.delicado);
      setLargo(orden.largo);
      setAncho(orden.ancho);
      setAlto(orden.alto);
      setPeso(orden.alto);
      setCiudad_Recogida(orden.ciudad_Recogida);
      setDireccion_Recogida(orden.direccion_Recogida);
      setNit_destinatario(orden.nit_destinatario);
      setNombre_destinatario(orden.nombre_destinatario);
      setDireccion_entrega(orden.direccion_entrega);
      setCiudad_entrega(orden.ciudad_entrega);
      setId(orden._id);
    }
  }, [orden])

  const limpiarInputs = () => {
    setFecha('');
    setHora('Mañana');
    setDelicado(false);
    setLargo(0);
    setAncho(0);
    setAlto(0);
    setPeso(0);
    setCiudad_Recogida('');
    setDireccion_Recogida('');
    setNit_destinatario('');
    setNombre_destinatario('');
    setDireccion_entrega('');
    setCiudad_entrega('');
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([fecha, hora, ciudad_Recogida, direccion_Recogida, nombre_destinatario, nit_destinatario, direccion_entrega, ciudad_entrega].includes('')) {
      return swal({
        text: "Todos los campos son obligatorios",
        icon: "error",
        button: "OK",
      });

    }

    if ([largo, ancho, alto, peso].includes(0)) {
      return swal({
        text: "Medidas o peso incorrecto",
        icon: "error",
        button: "OK",
      });
    }
    const datos = {
      fecha,
      hora,
      delicado,
      largo,
      ancho,
      alto,
      peso,
      ciudad_Recogida,
      direccion_Recogida,
      nombre_destinatario,
      nit_destinatario,
      direccion_entrega,
      ciudad_entrega,
      _id: id
    }

    await guardarOrden(datos);
    limpiarInputs();
    if (orden?._id) {
      navigate('/user')
    }

  }



  return (
    <>
      <h1 className=" text-center py-4  text-uppercase fw-bold color-unico">
        {id ? 'Editar Orden' : 'Crear Orden'}
      </h1>

      <div className="mt-3 w-75 d-flex flex-column align-items-center bg-color-unico rounded-4 mb-5 ">

        <div className="w-100 py-2 px-4">
          <form
            onSubmit={handleSubmit}
            className="p-2">

            <h6 className="text-center text-white text-uppercase">DISPONIBILIDAD PARA LA ENTREGA</h6>
            <div className="d-flex justify-content-around mb-3 border border-white py-3">

              <div>
                <label className="me-3 text-white fs-5" htmlFor="fecha">Fecha: </label>
                <input
                  id="fecha"
                  type="date"
                  value={fecha || ''}
                  onChange={e => setFecha(e.target.value)}
                />
              </div>

              <div>
                <label className="me-3 text-white fs-5" htmlFor="hora">Horario: </label>
                <select
                  name="hora"
                  id="hora"
                  onChange={e => setHora(e.target.value)}
                >
                  {hora
                    ?
                    (
                      <>
                        {hora == 'Mañana'
                          ?
                          (
                            <>
                              <option value="Mañana" selected>Mañana</option>
                              <option value="Tarde">Tarde</option>
                              <option value="Noche">Noche</option>
                            </>
                          )
                          : hora == 'Tarde'
                            ?
                            (
                              <>
                                <option value="Mañana">Mañana</option>
                                <option value="Tarde" selected>Tarde</option>
                                <option value="Noche">Noche</option>
                              </>
                            )
                            :
                            (
                              <>
                                <option value="Mañana">Mañana</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Noche" selected>Noche</option>
                              </>
                            )
                        }
                      </>
                    )
                    :
                    (
                      <>
                        <option value="Mañana">Mañana</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noche">Noche</option>
                      </>
                    )
                  }

                </select>
              </div>
            </div>


            <div className="d-flex justify-content-around my-3">

              <div>
                <label
                  className="me-3 text-white fs-5"
                  htmlFor="delicado"
                >Delicado: </label>
                <select onChange={e => setDelicado(e.target.value)} id="delicado">
                  {delicado
                    ?
                    (
                      <>
                        <option value="true" selected>Si</option>
                        <option value="false">No</option>
                      </>
                    )
                    :
                    (
                      <>
                        <option value="true">Si</option>
                        <option value="false" selected>No</option>
                      </>
                    )

                  }
                </select>


              </div>
            </div>




            <div className="d-flex justify-content-around my-3">
              <div>
                <label className="me-3 text-white fs-5" htmlFor="ancho">Ancho (Cm): </label>
                <input
                  className="w-12-vh"
                  id="ancho"
                  type="number"
                  value={ancho}
                  onChange={e => setAncho(e.target.value)}
                />
              </div>
              <div >
                <label className="me-3 text-white fs-5" htmlFor="alto">Alto (Cm): </label>
                <input
                  className="w-12-vh"
                  id="alto"
                  type="number"
                  value={alto}
                  onChange={e => setAlto(e.target.value)}
                />
              </div>
              <div >
                <label className="me-3 text-white fs-5" htmlFor="largo">Largo (Cm): </label>
                <input
                  className="w-12-vh"
                  id="largo"
                  type="number"
                  value={largo}
                  onChange={e => setLargo(e.target.value)}
                />
              </div>
              <div >
                <label className="me-3 text-white fs-5" htmlFor="peso">Peso (Kg): </label>
                <input
                  className="w-12-vh"
                  id="peso"
                  type="number"
                  value={peso}
                  onChange={e => setPeso(e.target.value)}
                />
              </div>
            </div>




            <div className="d-flex flex-column">

              <div className="d-flex justify-content-center my-2">
                <label
                  className="me-3 text-white fs-5 w-50-vh text-center"
                  htmlFor="ciudadRecogida"

                >Ciudad recogida: </label>

                <input
                  className="w-50-vh"
                  id="ciudadRecogida"
                  type="text"
                  value={ciudad_Recogida}
                  onChange={e => setCiudad_Recogida(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="direccionRecogida">Direccion recogida: </label>
                <input
                  className="w-50-vh"
                  id="direccionRecogida"
                  type="text"
                  value={direccion_Recogida}
                  onChange={e => setDireccion_Recogida(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="nombreDestinatario">Nombre destinatario: </label>
                <input
                  className="w-50-vh"
                  id="nombreDestinatario"
                  type="text"
                  value={nombre_destinatario}
                  onChange={e => setNombre_destinatario(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="idDestinatario">Cedula / Nit destinatario: </label>
                <input
                  className="w-50-vh"
                  id="idDestinatario"
                  type="text"
                  value={nit_destinatario}
                  onChange={e => setNit_destinatario(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="direccionEntrega">Direccion entrega: </label>
                <input
                  className="w-50-vh"
                  id="direccionEntrega"
                  type="text"
                  value={direccion_entrega}
                  onChange={e => setDireccion_entrega(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center my-2">
                <label className="me-3 text-white fs-5 w-50-vh text-center" htmlFor="ciudadEntrega">Ciudad entrega: </label>
                <input
                  className="w-50-vh"
                  id="ciudadEntrega"
                  type="text"
                  value={ciudad_entrega}
                  onChange={e => setCiudad_entrega(e.target.value)}
                />
              </div>

            </div>


            <div className="my-3 d-flex justify-content-around">
              <input
                type="submit"
                value={id ? "Actualizar Orden" : "CREAR ORDEN"}
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