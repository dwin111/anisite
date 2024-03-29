import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import $api from "../http";
import { IProduct } from "../models";

export function useProducts(){
  const [products, setProducts] = useState<IProduct[]>([]);

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  function AddProduct(product: IProduct){
    setProducts(prev =>[...prev, product]);
  }

  async function fetchProducts() {
    try 
    {
      setError('');
      setLoading(true);
      const response = await $api.get<IProduct[]>('http://localhost:5112/api/Videos/getAll');
      setProducts(response.data);
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

  return { products, loading, error, AddProduct }; 

}