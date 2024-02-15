import React from 'react'
import { Route, Routes, redirect } from 'react-router-dom'
import { routesArray } from '../Utils/RoutesArray'
import { verifyToken } from '../Services/AuthService'

const RouterComponent = () => {
  return (
    <Routes>
        {
            routesArray.map((route) => {
                if(route.authenticationRequires){
                    return (
                        <Route 
                        key={route.path_url}
                        path={route.path_url} 
                        element={
                            verifyToken()?
                            <route.component />
                            :
                            redirect('/')
                        }/>
                    )
                }
                return <Route key={route.path_url} path={route.path_url} element={<route.component />} />
            })
        }
  </Routes>
  )
}

export default RouterComponent;
