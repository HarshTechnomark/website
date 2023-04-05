import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    // let auth = {'tokenAvail':true}

    // let token = localStorage.getItem('token');

    // {}
    // return (
    //   auth.tokenAvail ? <Outlet/> : <Navigate to='/'/>
    // )

    if( !localStorage.getItem("token") ){
     return <Navigate to ='/'/>
    }else{
     return <Outlet/>
    }

  }

export default PrivateRoutes