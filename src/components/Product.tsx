import { BlobOptions } from 'buffer';
import { observer } from 'mobx-react-lite';
import { makeAutoObservable } from "mobx"
import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '..';
import { useUser } from '../hooks/user';
import $api from '../http';
import { IProduct } from '../models'

interface ProductProps{
    product: IProduct
}


const Product:FC<ProductProps> = ({product}: ProductProps) =>{

    const {store} = useContext(Context);
    const {user} = useUser();
    const [isFavorite, setFavorite] = useState<boolean>(false);
    const [isClick, setIsClick] = useState(false)
    const isFavor = user?.favoritesId.some(u => u == product.id);
    if(isFavor){
    localStorage.setItem(`video${product.id}`, JSON.stringify(isFavor))  
    }  
    async function fetchAddFavor() {
        try 
        {
            const response = await $api.get(`http://localhost:5112/api/Auth/addFavor/${user?.id}/${product.id}`); 
            localStorage.setItem(`video${product.id}`, JSON.stringify(true))   
            setFavorite(true);        
            console.log(response.data);
        } 
        catch (e: unknown) 
        {
        }
    }
    async function fetchRemoveFavor() {
        try 
        {
            const response = await $api.get(`http://localhost:5112/api/Auth/removeFavor/${user?.id}/${product.id}`);  
            localStorage.removeItem(`video${product.id}`)
            setFavorite(false);        
            console.log(response.data);
        } 
        catch (e: unknown) 
        {
        }
    }
    function isF () : boolean{
        return isFavorite
    }

    useEffect(() => {  
        setFavorite(JSON.parse(localStorage.getItem(`video${product.id}`)!));
    },[]);

    // const videoURL = "https://player.vimeo.com/video/786310495?h=ecd1af0c84";
    return (
        <div className="text-[#FFFFFF]  mb-10 shadow-md mb-2 bg-[#232323] rounded-[20px]">
        {!isF() &&<button className={`ml-[550px] mt-3`}  onClick={() => {fetchAddFavor(); setIsClick(true); setFavorite(true); }}>{store.isAuth && "Add to Favorit"}</button>}
        {isF() && <button type="submit" className={`ml-[550px] mt-3`} onClick={() => {fetchRemoveFavor(); setIsClick(true); setFavorite(false);  }}>{store.isAuth && "Remove in Favorit"}</button>}
        <Link to={`/view/${product.id}`}>
            <div className='py-2 px-4 flex-col '>
            <div className="flex">
                <div className="flex-col">
                    <img src={product.urlimg} className="w-[1000px]" alt={product.name} />    
                    <div className="text-center">
                    <span className='text-[#FBFBFB] font-light text-[12px] text-[#AAAAAA] '>Rate: 
                        <span >{product?.rate}</span>
                    </span>
                    </div>
                </div> 
                <div className="flex-col ">
                    <p className="text-[#FBFBFB] p-3 text-[15px] text-center">{product.name}</p>
                    <div>
                    <p className='text-[#FBFBFB] p-3 text-[10px]'>{product.description}</p>
                    </div>
                </div>
                <span className='text-[#FBFBFB] font-light text-[12px] flex items-end text-[#AAAAAA]'>{product?.numberViews}  
                    <span> переглядів</span>
                </span>       
            </div>
            </div>
        </Link> 
        </div>
    )
}

export default observer(Product)