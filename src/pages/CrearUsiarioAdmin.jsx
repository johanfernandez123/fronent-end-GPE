import React from 'react'
import { useState, useEffect } from 'react'
import useAdmin from '../hooks/useAdmin';
import swal from 'sweetalert';
export const CrearUsiarioAdmin = () => {
  const { crearUsiarioAdmin, usuario,modificarUsuario } = useAdmin();
  const [nit, setNit] = useState('');
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('2');
  const [_id, setId] = useState(usuario._id)

  const limpiarInputs = () => {
    setNit('');
    setNombre('');
    setCelular('');
    setEmail('');
    setPassword('');
    setRol('2');
  }

  useEffect(() => {
    if (_id) {
      setNit(usuario.nit);
      setNombre(usuario.nombre);
      setCelular(usuario.celular);
      setEmail(usuario.email);
      setRol(usuario.rol);
      setId(usuario._id)
    }

  }, [usuario])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailCorrect = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if ([nit, nombre, celular, email, rol].includes('')) {
      return swal({
        text: "Todos los campos son obligatorios",
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


    if(!_id){

      if (password.length < 6) {
        return swal({
          text: "La contraseña debe tener minimo 6 caracteres",
          icon: "error",
          button: "OK",
        });
      }
    }


    const datos = {
      nit,
      nombre,
      celular,
      email,
      password,
      rol,
    }


    if(_id){
      const datos = {
        nit,
        nombre,
        celular,
        email,
        rol,
        _id
      } 
      await modificarUsuario(datos)
      limpiarInputs();

    }else{
      const datos = {
        nit,
        nombre,
        celular,
        email,
        password,
        rol,
      }  
      await crearUsiarioAdmin(datos)
      limpiarInputs();
    }

  }

  return (
    <>
      <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >{_id ? 'Editar' : 'Crear'} Usuario</h1>
      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4 mb-3">
        <div className="w-75">
          <form
            onSubmit={handleSubmit}
          >

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="cedula">Cédula</label>
              <input value={nit} onChange={e => setNit(e.target.value)} className="form-control" id="cedula" type="text" placeholder="Esciba la cédula" />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="nombre">Nombres</label>
              <input value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" id="nombre" type="text" placeholder="Esciba el Nombre" />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="celular">Celular</label>
              <input value={celular} onChange={e => setCelular(e.target.value)} className="form-control" id="celular" type="text" placeholder="Esciba el celular" />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="correo">Correo</label>
              <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="correo" type="email" placeholder="Escriba el correo" />
            </div>

            {_id
              ?
              (
                <>
                </>
              )
              :
              (
                <>
                  <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="password">Contraseña</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" type="password" placeholder="Escriba la contraseña" />
                  </div>
                </>
              )
            }


            {_id
              ? rol == 2
                ?
                (
                  <>
                  <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="rol">Rol</label>
                    <select onChange={e => setRol(e.target.value)} id="rol" className="py-2 text-center">
                      <option value="2">Repartidor</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                  </>
                )
                :
                (
                  <>
                  <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="rol">Rol</label>
                    <select onChange={e => setRol(e.target.value)} id="rol" className="py-2 text-center">
                      <option value="3">Administrador</option>
                      <option value="2">Repartidor</option>
                    </select>
                  </div> 
                  </>
                )

              :
              (
                <>
                  <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="rol">Rol</label>
                    <select onChange={e => setRol(e.target.value)} id="rol" className="py-2 text-center">
                      <option value="2">Repartidor</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                </>
              )

            }




            <div className="d-flex justify-content-around">
              <input
                type="submit"
                value={_id ? 'Editar Usuario' : 'Crear Usuario'}
                className="btn btn-danger text-uppercase fw-bold"
              />
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
