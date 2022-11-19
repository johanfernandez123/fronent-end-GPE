import HeaderProfile from "../components/HeaderProfile"


const Profile = ({rol}) => {
  return (
    <>
      <HeaderProfile 
        rol={rol}
        />
      <h1 className="text-center py-3  text-uppercase fw-bold color-unico">Perfil</h1>
      <div className="mb-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
            <form>
                
                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="nombre">Nombres</label>
                    <input className="form-control" id="nombre" type="text" placeholder="Esciba sus nombres" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="ciudad">Ciudad</label>
                    <input className="form-control" id="ciudad" type="text" placeholder="Esciba sus Ciudad" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="direccion">Direccion</label>
                    <input className="form-control" id="direccion" type="text" placeholder="Esciba sus Direccion" />
                </div>

                <div className="d-flex flex-column mb-3">
                    <label className="form-label text-uppercase text-white fw-bold" htmlFor="email">Correo</label>
                    <input className="form-control" id="email" type="email" placeholder="Esciba su correo" />
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