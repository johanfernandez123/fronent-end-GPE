import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../config/axios"

const CambiarPasswordReset = () => {
  const [password, setPassword] = useState('');
  const [cargando, setCargando] = useState(true);
  const [tokenCorrecto, setTokenCorrecto] = useState(false);
  const [mensage, setMensaje] = useState('');
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  const limpiarInputs = () => {
    setPassword('');
  }

  useEffect(() => {
    const comprobarToken = async () => {
      const url = `/auth/reset-password/${token}`
      try {
        const { data } = await clienteAxios(url);
        setMensaje(data.msg)
        setTokenCorrecto(true);
        setCargando(false);
        return;
      } catch (error) {
        console.log(error);
        setMensaje(error.response.data.msg);
        setCargando(false)
        return;
      }

    }
    comprobarToken();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === '') {
      return swal({
        text: 'Todos los campos son requeridos',
        icon: "error",
        button: "OK",
      });
    }

    if (password.length < 6) {
      return swal({
        text: "La contraseña debe tener minimo 6 caracteres",
        icon: "error",
        button: "OK",
      });
    }

    const url = `/auth/reset-password/${token}`

    try {
      const { data } = await clienteAxios.post(url, {
        password: password
      })
      setPasswordModificado(true)
      limpiarInputs();
      return swal({
        text: data.msg,
        icon: "success",
        button: "OK",
      });


    } catch (error) {
      console.log(error)
      limpiarInputs();
      return swal({
        text: error.response.data.msg,
        icon: "error",
        button: "OK",
      });
    }


  }

  return (
    <>
      <h1 className="text-uppercase fw-bold color-unico">Restablecer Contraseña</h1>
      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        {cargando
          ?
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
              {tokenCorrecto ? (
                <>
                  <div className="w-75">
                    <form
                      onSubmit={handleSubmit}
                    >
                      <div className="d-flex flex-column mb-3">
                        <label className="form-label text-uppercase text-white fw-bold text-center" htmlFor="password">{mensage}</label>
                        <input
                          className="form-control"
                          id="password"
                          type="password"
                          placeholder="Esciba nueva contraseña"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>


                      <div className="d-flex justify-content-around">
                        <input
                          type="submit"
                          value="Restablecer contraseña"
                          className="btn btn-danger text-uppercase fw-bold"
                        />
                      </div>
                    </form>

                  </div>

                  {passwordModificado &&

                    <div className="d-flex flex-column align-items-center mt-3">
                      <Link className="mt-2 text-white" to="/">Inicia sesion</Link>
                    </div>
                  }
                </>
              ) : (
                <>
                  <h2 className='text-white text-center'>{mensage}</h2>
                  <div className="d-flex flex-column align-items-center mt-3">
                    <Link className="mt-2 text-white" to="/reset-password">Recuperar contraseña</Link>
                  </div>
                </>
              )
              }
            </>
          )

        }



      </div>
    </>
  )
}

export default CambiarPasswordReset