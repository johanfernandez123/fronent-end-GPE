import { useState } from "react"
import HeaderProfile from "../components/HeaderProfile"
import useAuth from "../hooks/useAuth"

const ChangePassword = ({ rol }) => {

  const limpiarInput = () => {
    setNuevoPassword('');
    setPassword('');
  }
  const [password, setPassword] = useState('')
  const [nuevopassword, setNuevoPassword] = useState('')

  const {actualizarPassword} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([password, nuevopassword].includes('')) {
      return swal({
        text: "Todos los campos son obligatorios",
        icon: "error",
        button: "OK",
      });
    }

    if (password.length < 6 && nuevopassword < 6) {
      return swal({
        text: "La contraseña debe tener minimo 6 caracteres",
        icon: "error",
        button: "OK",
      });
    }

    await actualizarPassword({password,nuevopassword});
    return limpiarInput();
  }
  return (
    <>
      <HeaderProfile
        rol={rol}
      />
      <h1 className=" text-center py-4  text-uppercase fw-bold color-unico">Cambiar Contraseña</h1>



      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
          <form
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="password-actual">Contraseña actual</label>
              <input
                className="form-control"
                id="password-actual"
                type="password"
                placeholder="Esciba su contraseña actual"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="password-nueva">Contraseña nueva</label>
              <input
                className="form-control"
                id="password-nueva"
                type="password"
                placeholder="Esciba su nueva contraseña"
                value={nuevopassword}
                onChange={e => setNuevoPassword(e.target.value)}
              />
            </div>


            <div className="d-flex justify-content-around">
              <input
                type="submit"
                value="Actualizar contraseña"
                className="btn btn-danger text-uppercase fw-bold"
              />
            </div>
          </form>

        </div>
      </div>
    </>

  )
}

export default ChangePassword