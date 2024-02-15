import { useCookies } from 'react-cookie';

export const verifyToken = () => {
    const [cookies] = useCookies(['token']);
    console.log(cookies.token);
    return true;
}