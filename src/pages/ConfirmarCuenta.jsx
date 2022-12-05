import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import clienteAxios from '../config/axios';
const ConfirmarCuenta = () => {

  const [cargando, setCargando] = useState(true);
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [mensaje, setMensaje] = useState('');

  const params = useParams();

  const { token } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      const url = `/auth/confirmar-cuenta/${token}`
      try {
        const { data } = await clienteAxios.get(url);
        setMensaje(data.msg);
        setCargando(false);
        setCuentaConfirmada(true);
        return;
      } catch (error) {
        setMensaje(error.response.data.msg);
        setCargando(false);
        return;
      }
    }
    confirmarCuenta();
  }, []);


  return (

    <>
      <h1 className="text-uppercase fw-bold color-unico">Confirmar Cuenta</h1>

      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
          {cargando ?
            (
              <>
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </>
            )
            :

            (
              <>
                <h2 className='text-white text-center'>{mensaje}</h2>
                <div className="d-flex flex-column align-items-center mt-3">
                  {cuentaConfirmada ?
                    (
                      <>
                        <Link className="mt-2 text-white" to="/">Inicia sesion</Link>
                      </>
                    )
                    :
                    (
                      <>
                        <Link className="mt-2 text-white" to="/register">Crea una cuenta</Link>
                      </>
                    )
                  }

                </div>
              </>
            )

          }


        </div>
      </div>


    </>
  )
}

export default ConfirmarCuenta