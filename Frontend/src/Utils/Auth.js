import Cookies from "js-cookie";

export function isValidToken(){
  const token = Cookies.get('token');
    if (!token) {
      return false;
    }
  
    const payload = token.split(".")[1];
    if (!payload) {
      return false;
    }
  
    const decodedPayload = JSON.parse(window.atob(payload));
    const expiryTime = decodedPayload?.exp * 1000;
    const currentTime = Date.now();

    return expiryTime> currentTime;
  };