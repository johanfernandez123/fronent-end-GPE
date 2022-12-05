import { createContext, useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth,setAuth] = useState({});
    const [cargandoAuth, setCargandoAuth] = useState(true);

    useEffect(() => {

        const autenticarUsuario = async () => {
            const tokenAuth = localStorage.getItem('token');

        if(!tokenAuth){
            setCargandoAuth(false);
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenAuth}`
            }
        }

        try {
                const url = '/auth/perfil';
                const {data} = await clienteAxios(url,config)
                setAuth(data)
            } catch (error) {
                console.log(error);
                // console.log(error.response.data.msg)
                setAuth({})
            }

            setCargandoAuth(false)
        }
        autenticarUsuario();
    },[]);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({})
    }

    const actualizarPerfil = async (datos) => {

        const tokenL = localStorage.getItem('token');
        if(!tokenL){
            setCargando(false)
            return;
        }

       const { nombre,correo,direccion,ciudad,_id,token} = datos
        try {
      
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              }
            }
            const url = '/auth/perfil'
            const { data } = await clienteAxios.put(url, {
              nombre,
              correo,
              direccion,
              ciudad,
              _id
            },
              config
      
            )
            return swal({
              text: data.msg,
              icon: "success",
              button: "OK",
            });
          } catch (error) {
            console.log(error);
            return swal({
              text: error.response.data.msg,
              icon: "error",
              button: "OK",
            });
          }
      
    }

    const actualizarPassword = async (datos) => {
        const token = localStorage.getItem('token');
        if(!token){
            setCargando(false)
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        
        try {
            const url = '/auth/modificar-password';

            const {data} = await clienteAxios.put(url,datos,config)
            return swal({
                text: data.msg,
                icon: "success",
                button: "OK",
              });
        } catch (error) {
            console.log(error);
            return swal({
              text: error.response.data.msg,
              icon: "error",
              button: "OK",
            });
        }

    }

    return(
        <AuthContext.Provider
            value={{
                setAuth,
                auth,
                cargandoAuth,
                cerrarSesion,
                actualizarPerfil,
                actualizarPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
        

}

export {
    AuthProvider
}

export default AuthContext