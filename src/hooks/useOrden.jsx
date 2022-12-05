import { useContext } from 'react'
import OrdenContext from '../context/OrdenContext'

const useOrden = () => {
  return useContext(OrdenContext)
}

export default useOrden