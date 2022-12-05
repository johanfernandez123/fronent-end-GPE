import { Link } from "react-router-dom"
import { useState } from "react"
import swal from 'sweetalert';
import clienteAxios from "../config/axios";

function Register() {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const limpiarInputs = () => {
        setNombre('');
        setCorreo('');
        setPassword('');
        setRepassword('');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailCorrect = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        // comprobaciones
        if ([nombre, correo, password, repassword].includes('')) {
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

        if (password.length < 6) {
            return swal({
                text: "La contraseña debe tener minimo 6 caracteres",
                icon: "error",
                button: "OK",
            });
        }

        if (password !== repassword) {
            return swal({
                text: "La contraseñas no coinciden",
                icon: "error",
                button: "OK",
            });
        }

        // registrar

        const url = '/auth/register'
        try {
            const { data } = await clienteAxios.post(url, {
                nombre,
                correo,
                password
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
            <h1 className="text-uppercase fw-bold color-unico">Crear Cuenta</h1>
            
            <div className="mt-3 w-50 d-flex flex-column align-items-center bg-color-unico p-5 rounded-4">
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
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="d-flex flex-column mb-3">
                            <label className="form-label text-uppercase text-white fw-bold" htmlFor="email">Correo</label>
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                placeholder="Esciba su correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </div>

                        <div className="d-flex flex-column mb-3">
                            <label className="form-label text-uppercase text-white fw-bold" htmlFor="password">Contraseña</label>
                            <input
                                className="form-control"
                                id="password"
                                type="password"
                                placeholder="Esciba su contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="d-flex flex-column mb-3">
                            <label className="form-label text-uppercase text-white fw-bold" htmlFor="repassword">Confirmar Contraseña</label>
                            <input
                                className="form-control"
                                id="repassword"
                                type="password"
                                placeholder="Confirme su contraseña"
                                value={repassword}
                                onChange={(e) => setRepassword(e.target.value)}
                            />
                        </div>


                        <div className="d-flex justify-content-around">
                            <input
                                type="submit"
                                value="Crear"
                                className="btn btn-danger text-uppercase fw-bold"
                            />
                        </div>
                    </form>

                    <div className="d-flex flex-column align-items-center mt-3">
                        <Link className="mt-2 text-white" to="/reset-password">¿Se te olvido tu contraseña?</Link>
                        <Link className="mt-2 text-white" to="/">¿Ya tienes una cuenta? Inicia sesion</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register