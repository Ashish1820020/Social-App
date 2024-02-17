import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { routesArray } from '../Utils/RoutesArray';
import { isValidToken } from '../Utils/Auth';
import { useSelector } from 'react-redux';

const RouterComponent = () => { 
    const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Routes>
        {
            routesArray.map((route) => {
                const { component, authenticationRequires, path_url, redirectTo } = route;
                if(authenticationRequires){
                    return (
                        <Route 
                        key={path_url}
                        path={path_url} 
                        element={
                          isLoggedIn && component && isValidToken()?
                            <route.component />
                            :
                            <Navigate replace to={'/login-signup'}/>
                        }
                        />
                    )
                }
                if(isLoggedIn && isValidToken() && redirectTo === '/home'){
                    return <Route key={route.path_url} path={route.path_url} element={<Navigate to={'/home'} />} />
                }
                return <Route key={route.path_url} path={route.path_url} element={<route.component />} />
            })
        }
  </Routes>
  )
}

export default RouterComponent;
