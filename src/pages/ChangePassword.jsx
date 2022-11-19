import HeaderProfile from "../components/HeaderProfile"

const ChangePassword = ({rol}) => {
  return (
    <>
        <HeaderProfile
            rol={rol}
            />
         <h1 className=" text-center py-4  text-uppercase fw-bold color-unico">Cambiar Contraseña</h1>



      <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
        <div className="w-75">
          <form>
            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="password-actual">Contraseña actual</label>
              <input className="form-control" id="password-actual" type="password" placeholder="Esciba su contraseña actual" />
            </div>

            <div className="d-flex flex-column mb-3">
              <label className="form-label text-uppercase text-white fw-bold" htmlFor="password-nueva">Contraseña nueva</label>
              <input className="form-control" id="password-nueva" type="password" placeholder="Esciba su nueva contraseña" />
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