import { HomePage, LoginPage, PageNotFoundPage, ProfilePage } from "../Pages";

export const routesArray = [

    {
        path_url: '/',
        component: LoginPage,
        authenticationRequires: false,
        redirectTo: '/home'
    },
    
    {
        path_url: '/login-signup',
        component: LoginPage,
        authenticationRequires: false,
        redirectTo: '/home'
    },

    {
        path_url: '/home',
        component: HomePage,
        authenticationRequires:  true
    },

    {
        path_url: '/profile/:userId',
        component: ProfilePage,
        authenticationRequires: true 
    },
    {
        path_url: '*',
        component: PageNotFoundPage,
        authenticationRequires: false 
    },
]