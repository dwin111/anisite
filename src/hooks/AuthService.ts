import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponce } from "../models";




export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponce>>{
        return $api.post('/Auth/login', {email,  password} );
    } 
    
    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponce>>{
        return $api.post('/Auth/registr', {email,  password} );
    }


}