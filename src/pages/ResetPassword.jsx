import { Link } from "react-router-dom"


function ResetPassword() {
  return (
    <>
      <h1 className="text-uppercase fw-bold color-unico">Recuperar Contraseña</h1>

      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
          <form>
            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="email">Correo</label>
              <input className="form-control" id="email" type="email" placeholder="Esciba su correo" />
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