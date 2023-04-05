import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    if( !localStorage.getItem("token") ){
     return <Navigate to ='/'/>
    }else{
     return <Outlet/>
    }

  }

export default PrivateRoutes