import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/axios';
import useAuth from '../hooks/useAuth';
const OrdenContext = createContext();

const OrdenProvider = ({ children }) => {

  const {auth} = useAuth()
  const navigate = useNavigate();
  const [ordenes, setOrdenes] = useState([]);
  const [ordenesRecogidas, setOrdenesRecogidas] = useState([]);
  const [ordenesEntregadas, setOrdenesEntregadas] = useState([]);
  const [mensajes,setMensajes] = useState([])
  const [orden, setOrden] = useState({});

  useEffect(() => {
    const listarUsuarios = async () => {
      if(auth.rol == 1){
        try {
          const token = localStorage.getItem('token');
          if (!token) return;
  
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          const url = '/usuario/orden'
          const { data } = await clienteAxios(url, config);
          setOrdenes(data)
          return;
        } catch (error) {
          console.log(error);
        }
      }

      if(auth.rol == 2){
        try {
          const token = localStorage.getItem('token');
          if (!token) return;
  
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          const url = '/repartidor'
          const { data } = await clienteAxios(url, config);
          setOrdenes(data)
          return;
        } catch (error) {
          console.log(error)
        }
      }
     
    }

   
    const listarOrdenRecogidas = async () => {
      if(auth.rol == 2){
        try {
          const token = localStorage.getItem('token');
          if (!token) return;
  
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          const url = '/repartidor/ordenes-recogidas'
          const { data } = await clienteAxios(url, config);
          setOrdenesRecogidas(data)
          return;
        } catch (error) {
          console.log(error)
        }
      }
      return;
    }

    const listarOrdenEntregadas = async () => {
      if(auth.rol == 2){
        try {
          const token = localStorage.getItem('token');
          if (!token) return;
  
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
          const url = '/repartidor/ordenes-entregadas'
          const { data } = await clienteAxios(url, config);
          setOrdenesEntregadas(data)
          return;
        } catch (error) {
          console.log(error)
        }
      }
      return;
    }

    listarOrdenEntregadas();
    listarOrdenRecogidas();
    listarUsuarios();
  }, [auth]);




  const guardarOrden = async (datos) => {

    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    if (datos._id) {

      try {

        const url = '/usuario/orden'
        const { data } = await clienteAxios.put(url, datos, config)
        const ordenesActualizadas = ordenes.map(ordenState => ordenState._id === data._id ? data : ordenState);
        setOrdenes(ordenesActualizadas);
        setOrden({})
        return swal({
          text: "Orden actualizada correctamente",
          icon: "success",
          button: "OK",
        });

      } catch (error) {
        return swal({
          text: error.response.data.msg,
          icon: "error",
          button: "OK",
        });
      }


    } else {

      try {
        const url = '/usuario/orden'
        const { data } = await clienteAxios.post(url, datos, config)
        console.log(data);
        setOrdenes([...ordenes, data])
        return swal({
          text: "Orden creada correctamente",
          icon: "success",
          button: "OK",
        });
      } catch (error) {

        return swal({
          text: error.response.data.msg,
          icon: "error",
          button: "OK",
        });

      }
    }


  }


  const buscarOrden = async (_id) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }


    try {
      const url = `/usuario/orden/${_id}`;
      const { data } = await clienteAxios.get(url, config)
      setOrden(data)
      navigate('/user/orden-create');

    } catch (error) {
      console.log(error)
    }
  }


  const editarEstado = async (_id, estado) => {

    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    let frase ;
    if(estado == 'guardado'){
      frase = "cancelar"
    }else{
      frase = "activar"
    }


   const respuesta = await swal({
      title: `Seguro que deceas ${frase} la orden?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

    if(respuesta){
      try {
        const url = '/usuario/editar-estado';
  
        const {data} = await clienteAxios.put(url,{_id,estado},config)
        const [{msg},ordenEstado] = data;
  
        const ordenesActualizadas = ordenes.map(ordenState => ordenState._id === ordenEstado._id ? ordenEstado : ordenState);
        setOrdenes(ordenesActualizadas);
        return swal({
          text: msg,
          icon: "success",
          button: "OK",
        });
  
  
      } catch (error) {
        console.log(error)
      }
  
    }

  }

  const listarMensajes = async (orden) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    
    const url = `/msg/${orden}`

    try {
      const {data} = await clienteAxios.get(url,config)
      setMensajes(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  const crearMensaje = async (datos) => {

    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    try {
      const url = '/msg/create'
      const {data} = await clienteAxios.post(url,datos,config)
      setMensajes([...mensajes, data]);
    } catch (error) {
      console.log(error)
    }
  }

  const recogerOrden = async (_id) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    const respuesta = await swal({
      title: `Seguro que deceas recoger la orden?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

    if(respuesta){
      try {
        const url = '/repartidor/recoger-orden';
        const {data} = await clienteAxios.put(url,{_id},config)
        
        const ordenesActualizadas = ordenes.filter(elem => elem._id != data._id)
        setOrdenes(ordenesActualizadas);
        setOrdenesRecogidas([...ordenesRecogidas,data]);
        return swal({
          text: "Orden registrada como recogida",
          icon: "success",
          button: "OK",
        });
      } catch (error) {
        console.log(error)
      }
  
    }
  }

  const entregarOrden = async (_id) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }

    const respuesta = await swal({
      title: `Seguro que deceas entregar la orden?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

    if(respuesta){
      try {
        const url = '/repartidor/entregar-orden';
        const {data} = await clienteAxios.put(url,{_id},config)
        
        const ordenesActualizadas = ordenesRecogidas.filter(elem => elem._id != data._id)
        setOrdenesRecogidas(ordenesActualizadas);
        setOrdenesEntregadas([...ordenesEntregadas,data]);
        return swal({
          text: "Orden registrada como entregada",
          icon: "success",
          button: "OK",
        });
      } catch (error) {
        console.log(error)
      }
  
    }
  }

  return (
    <OrdenContext.Provider
      value={{
        ordenes,
        guardarOrden,
        buscarOrden,
        orden,
        setOrden,
        editarEstado,
        listarMensajes,
        mensajes,
        crearMensaje,
        ordenesRecogidas,
        ordenesEntregadas,
        recogerOrden,
        entregarOrden
        
      }}
    >
      {children}
    </OrdenContext.Provider>
  )
}


export { OrdenProvider }

export default OrdenContext