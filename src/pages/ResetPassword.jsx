import { useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../config/axios"


function ResetPassword() {
  const [correo, setCorreo] = useState('')

  const limpiarInputs = () => {
    setCorreo('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailCorrect = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (correo === '') {
      return swal({
        text: "Todos los campos son obligatorios",
        icon: "error",
        button: "OK",
      });
    }

    if (!emailCorrect.test(correo)) {
      return swal({
        text: "Formato de correo incorrecto",
        icon: "error",
        button: "OK",
      });
    }

    const url = '/auth/reset-password';

    try {
      const { data } = await clienteAxios.post(url, {
        correo
      })
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
      <h1 className="text-uppercase fw-bold color-unico">Recuperar Contraseña</h1>

      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
          <form
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="email">Correo</label>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Esciba su correo"
                value={correo}
                onChange={e => setCorreo(e.target.value)}
              />
            </div>


            <div className="d-flex justify-content-around">
              <input
                type="submit"
                value="Recuperar contraseña"
                className="btn btn-danger text-uppercase fw-bold"
              />
            </div>
          </form>

          <div className="d-flex flex-column align-items-center mt-3">
            <Link className="mt-2 text-white" to="/">¿Ya tienes una cuenta? Inicia sesion</Link>
            <Link className="mt-2 text-white" to="/register">¿Nuevo en GPE? Crea una cuenta</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword