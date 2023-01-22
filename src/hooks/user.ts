import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import $api from "../http";
import { IAccount, IUser } from "../models";

export function useUser(){
  
    const [user, setUser] = useState<IUser>()

    async function fetchGenres() {
        try 
        {
            const response = await $api.get<IAccount>('http://localhost:5112/api/Auth/getUser');
            setUser(response.data.user)
            console.log(response.data.user);
            console.log(response.data);
        } 
        catch (e: unknown) 
        {
        }
    }

    useEffect(() => {
        fetchGenres();
    }, []);
    
  return { user }; 

}