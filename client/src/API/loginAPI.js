import axios from "axios";
import APP_URL from "./config";
function LoginAPI(loginData){
    const result = axios.post(APP_URL+'/api/v1/login', loginData);
    return result;
}
export default LoginAPI;