import React, {useState} from 'react'
import { IProduct } from '../models'

interface ProductProps{
    product: IProduct
}


export function Shearch(){
    return (
        <div className="flex mt-6 mb-11 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-[20px] text-sm shadow-sm w-[650px]">
            <input type="search" className="outline-0 w-[650px]" placeholder='Search text...'/>
            <button><img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/512/149/149309.png" alt="" /></button>
        </div>
    );
}


///className="border py-2 px-4 mb-2 w-full outline-0  bg-[#FFFFFF] rounded-[20px] h-[30px] text-size-[10]"