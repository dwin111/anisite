import axios from "axios";
import { makeAutoObservable } from "mobx"
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import AuthService from "../hooks/AuthService";
import $api, { API_URL } from "../http";
import { AuthResponce, IAccount, IUser } from "../models";

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
            localStorage.setItem('userId', String(response.data.id));
            this.setAuth(true);
            this.setUserID(Number(response.data.id))
            document.location.href = 'http://localhost:3000/';
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
            localStorage.setItem('userId', String(response.data.id));
            this.setAuth(true);
            this.setUserID(Number(response.data.id))
        }
        catch(e){
            console.log("Error");
        }
    }
    logout(){
        try {
            localStorage.clear()
            this.setAuth(false);
            this.setUserID(0)
        } catch (error) {
            console.log("Error");
        }
    }
    checkAuth (){
        try {
            if(localStorage.getItem('token') && localStorage.getItem('userId')){
                this.setAuth(true);
                this.setUserID(Number(localStorage.getItem('userId')))
            }else{
                redirect("/register")
            }

        } catch (error) {
            console.log("Error");
        }
    }



}