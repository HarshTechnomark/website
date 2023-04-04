import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'tokenAvail':true}

    let token = localStorage.getItem('token');

    {}
    return (
      auth.tokenAvail ? <Outlet/> : <Navigate to='/'/>
    )
  }

export default PrivateRoutes