import { useEffect, useState } from "react";
import swal from "sweetalert";
import HeaderProfile from "../components/HeaderProfile"
import useAuth from "../hooks/useAuth"
import clienteAxios from "../config/axios";

const Profile = ({ rol }) => {
  const { auth,actualizarPerfil } = useAuth();

  const [nombre, setNombre] = useState(auth.nombre)
  const [ciudad, setCiudad] = useState(auth.ciudad)
  const [direccion, setDireccion] = useState(auth.direccion)
  const [email, setEmail] = useState(auth.email)
  const _id = auth._id;
  const token = auth.token;
  

  const handleSubmit = async (e) => {

    e.preventDefault();
    const emailCorrect = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if ([nombre, email].includes('')) {
      return swal({
        text: "Nombre y correo son obligatorios",
        icon: "error",
        button: "OK",
      });
    }

    if (!emailCorrect.test(email)) {
      return swal({
        text: "Formato de correo incorrecto",
        icon: "error",
        button: "OK",
      });
    }

   const datos = {
    nombre,
    correo: email,
    direccion,
    ciudad,
    _id,
    token
   }

   await actualizarPerfil(datos);

  }
  return (
    <>
      <HeaderProfile
        rol={rol}
      />
      <h1 className="text-center py-3  text-uppercase fw-bold color-unico">Perfil</h1>
      <div className="mb-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
          <form
            onSubmit={handleSubmit}
          >

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="nombre">Nombres</label>
              <input
                className="form-control"
                id="nombre"
                type="text"
                placeholder="Esciba sus nombres"
                value={ nombre || ''}
                onChange={e => setNombre(e.target.value)}
              />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="ciudad">Ciudad</label>
              <input
                className="form-control"
                id="ciudad"
                type="text"
                placeholder="Esciba sus Ciudad"
                value={ciudad || ''}
                onChange={e => setCiudad(e.target.value)}
              />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="direccion">Direccion</label>
              <input
                className="form-control"
                id="direccion"
                type="text"
                placeholder="Esciba sus Direccion"
                value={direccion || ''}
                onChange={e => setDireccion(e.target.value)}
              />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="email">Correo</label>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Esciba su correo"
                value={email || ''}
                onChange={e => setEmail(e.target.value)}
              />
            </div>



            <div className="d-flex justify-content-around">
              <input
                type="submit"
                value="Guardar Cambios"
                className="btn btn-danger text-uppercase fw-bold"
              />
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Profile