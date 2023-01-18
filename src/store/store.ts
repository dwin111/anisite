import axios from "axios";
import { makeAutoObservable } from "mobx"
import AuthService from "../hooks/AuthService";
import { API_URL } from "../http";
import { AuthResponce } from "../models";

export default class Store {

    isAuth = false
    userId:number = 0
    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool: boolean){
         this.isAuth = bool;
    }
    setUserID(id: number){
        this.userId = id;
   }
    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email,password);
            console.log(response)

            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            this.setUserID(Number(response.data.id))
        }
        catch(e){
            console.log("Error");
        }
    }
    async registration (email: string, password: string){
        try{
            const response = await AuthService.registration(email,password);
            console.log(response) 
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            this.setUserID(Number(response.data.id))
        }
        catch(e){
            console.log("Error");
        }
    }
}