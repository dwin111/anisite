import React, {useState} from 'react'
import { IProduct } from '../models'

interface ProductProps{
    product: IProduct
}


export function FilmPage({product}: ProductProps){
    return (
        <div className="pt-3 flex-col ">
            <img src={product.urlimg} className="" alt={product.name} />
            <div className="flex ml-1">
                <span className='text-[#FBFBFB] font-light text-[8px]  text-[#AAAAAA] mr-12'>{product?.numberViews} 
                    <span> переглядів</span>
                </span>
                <span className='text-[#FBFBFB] font-light text-[8px]  text-[#AAAAAA] '>Rate:
                    <span >{product?.rate}</span>
                </span>
            </div>
            </div>
    );
}