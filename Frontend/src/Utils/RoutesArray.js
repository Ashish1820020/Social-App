import { Friends, HomePage, LoginPage, PageNotFoundPage, ProfilePage } from "../Pages";
import { links } from "./FriendsLeftLinkArray";

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
        path_url: '/friends',
        component: Friends,
        authenticationRequires:  true,
        subComponent: links
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