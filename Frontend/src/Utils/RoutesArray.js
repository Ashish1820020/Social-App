import { HomePage, LoginPage, PageNotFoundPage, ProfilePage } from "../Pages";

export const routesArray = [

    {
        path_url: '/',
        component: LoginPage,
        authenticationRequires: false
    },

    {
        path_url: '/login-signup',
        component: LoginPage,
        authenticationRequires: false
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
        path_url: '/404',
        component: PageNotFoundPage,
        authenticationRequires: false 
    },
]