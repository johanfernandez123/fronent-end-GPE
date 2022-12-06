import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/axios';
import useAuth from '../hooks/useAuth';
import swal from 'sweetalert';
const AdminContext = createContext();

const AdminProvider = ({ children }) => {

    const { auth } = useAuth()
    const navigate = useNavigate();
    const [repartidores,setRepartidores] = useState([]);
    const [administradores,setAdministradores] = useState([]);
    const [usuario, setUsuario] = useState({})

    useEffect(() => {

        const listarDistribuidores = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const url = '/administrador'
   
            try {
                const { data } = await clienteAxios(url, config);
                setRepartidores(data)
                return;
            } catch (error) {
                console.log(error);
            }
        }

        const listarAdministradores = async () => {

            const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const url = '/administrador/listar-admins'
   
            try {
                const { data } = await clienteAxios(url, config);
                setAdministradores(data)
                return;
            } catch (error) {
                console.log(error);
            }
        }        

        if(auth.rol == 3){
            listarAdministradores();
            listarDistribuidores();
        }
    }, [auth])


    const crearUsiarioAdmin = async (datos) => {
        const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const url = '/administrador/crear'

            try {
                const { data } = await clienteAxios.post(url, datos, config);
                if(data.rol == 2){
                    setRepartidores([...repartidores,data])
                }else{
                    setAdministradores([...administradores,data])
                }

                return swal({
                    text: "Usuario creado correctamente",
                    icon: "success",
                    button: "OK",
                });

            } catch (error) {
                console.log(error)
            }
    }


    const buscarUsuario = async (_id) => {
        const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const url = `/administrador/buscar-usuario/${_id}`;
   
            try {
                const { data } = await clienteAxios(url, config);
                setUsuario(data);
                navigate('/admin/crear-usuario');
                return;
            } catch (error) {
                console.log(error);
            }
    }

    const modificarUsuario = async (datos) => {
        const token = localStorage.getItem('token');
            if (!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const url = '/administrador/modificar-usuario'

            try {
                const { data } = await clienteAxios.put(url, datos, config);
                
                
                if(data.rol == 2){
                    const nuevosAdministradores = administradores.filter(admi => admi._id != data._id);
                    setAdministradores(nuevosAdministradores);
                    
                    const nuevosRepartidores = repartidores.filter(repar => repar._id != data._id);
                    setRepartidores([...nuevosRepartidores,data])
                    navigate('/admin');
                }else{
                    const nuevosRepartidores = repartidores.filter(repar => repar._id != data._id);
                    setRepartidores(nuevosRepartidores);
                    
                    const nuevosAdministradores = administradores.filter(admi => admi._id != data._id);
                    setAdministradores([...nuevosAdministradores,data])
                    navigate('/admin/list-admins');
                }
                
                
                setUsuario({});

              

            } catch (error) {
                console.log(error)
            }
    }

    
    return (
        <AdminContext.Provider
            value={{
                repartidores,
                administradores,
                crearUsiarioAdmin,
                buscarUsuario,
                usuario,
                modificarUsuario
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export {
    AdminProvider
}

export default AdminContext;