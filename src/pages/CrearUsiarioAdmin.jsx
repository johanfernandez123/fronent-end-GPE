import React from 'react'

export const CrearUsiarioAdmin = () => {
  return (
    <>
    <h1 className="text-center py-4 text-uppercase fw-bold color-unico" >Crear Usuario</h1>
    <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4 mb-3">
        <div className="w-75">
            <form>
                
                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="cedula">Cédula</label>
                    <input className="form-control" id="cedula" type="text" placeholder="Esciba la cédula" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="nombre">Nombres</label>
                    <input className="form-control" id="nombre" type="text" placeholder="Esciba el Nombre" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="celular">Celular</label>
                    <input className="form-control" id="celular" type="text" placeholder="Esciba el celular" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="correo">Correo</label>
                    <input className="form-control" id="correo" type="email" placeholder="Escriba el correo" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="password">Contraseña</label>
                    <input className="form-control" id="password" type="password" placeholder="Escriba la contraseña" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="rol">Rol</label>
                    <select id="rol" className="py-2 text-center">
                        <option value="1">Repartidor</option>
                        <option value="2">Administrador</option>
                    </select>
                </div>


                <div className="d-flex justify-content-around">
                <input 
                    type="submit" 
                    value="Crear Usuario"
                    className="btn btn-danger text-uppercase fw-bold"
                />
                </div>
            </form>

        </div>
    </div>
</>
  )
}
