import  { AxiosError } from "axios";
import { useEffect, useState } from "react";
import $api from "../http";
import { IProduct } from "../models";
import { useUser } from "./user";

export function useVideos(){
    const [videos, setVideo] = useState<IProduct[]>([]);

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

  
    async function fetchProducts() {
      try 
      {
        setError('');
        setLoading(true);
        const response = await $api.get<IProduct[]>('http://localhost:5112/api/Auth/getFavorit');
        setVideo(response.data);
        setLoading(false);
      } 
      catch (e: unknown) 
      {
        const error = e as AxiosError
        setLoading(false);
        setError(error.message);
      }
    }
  
    useEffect(() => {
      fetchProducts();
    },[]);
  
    return { videos, loading, error }; 

}

