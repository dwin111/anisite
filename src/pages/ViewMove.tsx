import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/products';

import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";

import "react-widgets/styles.css";

export function ViewMove() {

    const { id } = useParams();
    const [rate, setRate] = useState(0)
    //const [product, setProduct] = useState<IProduct>()
    const {loading,error,products, AddProduct} = useProducts();
    const [valueImg, setValueImg] = useState('');
    var product;
     const [errorLoad, setError] = useState('')

    async function fetchProducts() {
        try 
        {
        setError('');
        const response = await axios.put<boolean>(`http://localhost:5112/api/Videos/addOneRate/${id}/${rate}`);
        } 
        catch (e: unknown) 
        {
        setError(errorLoad);
        }
    }
    if (product == undefined) {
        product = products.find(product => product.id == id);
    }

    return (

            <div>
                <div>
                    <div className="flex">
                    <div className="flex-col">
                        <img src={product?.urlimg} className="w-[1000px]" alt={product?.name} />    
                        <div className="">
                            <div className="flex"> 
                                <DropdownList
                                defaultValue="4"
                                data={[1, 2, 3, 4, 5]}
                                onChange={value => {
                                    setRate(Number(value));
                                }}
                                />
                                <button type="button" className='py-2 px-4 border bg-yellow-400 hover:text-white' onClick={() => fetchProducts()}>Create</button>
                            </div>
                        </div>
                    </div> 
                    <div className="flex-col ">
                        <p className="text-[#FBFBFB] p-3 text-[15px] text-center">{product?.name}</p>
                        <span className='text-[#FBFBFB] font-light text-[12px] text-[#AAAAAA] '>Rate: 
                            <span >{product?.rate}</span>
                        </span>
                        <div>
                            <p className='text-[#FBFBFB] p-3 text-[10px]'>{product?.description}</p>                          
                        </div>
                        <Multiselect                        
                        data={product?.tags}
                        defaultValue={product?.tags}
/>
                    </div>
                    <span className='text-[#FBFBFB] font-light text-[12px] flex items-end text-[#AAAAAA]'>{product?.numberViews}  
                        <span> переглядів</span>
                    </span>
                </div>
                    <iframe className="flex-col aspect-video" src={product?.urlVideo} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div> 
            </div>
    );

}
