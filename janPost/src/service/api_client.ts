import axios,{ CanceledError }  from "axios";
import useAuth from "../hooks/useAuthddd0ld";
import { useContext } from "react";
import { AuthContext } from "../hooks/auth/useAuth";

let storedToken = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken") || "{}")
    : null;
export default axios.create(
    {
        baseURL: "http://127.0.0.1:8000/",
        headers: {
            Authorization:storedToken? "JWT " + storedToken.access:""
        }
                    
        

    }
)
export { CanceledError }    