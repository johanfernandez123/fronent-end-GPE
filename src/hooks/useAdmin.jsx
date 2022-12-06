import { useContext } from 'react'
import AdminContext from '../context/AdminContex'

const useAdmin = () => {
  return useContext(AdminContext)
}

export default useAdmin