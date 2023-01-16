import React, { useRef, useState } from 'react'
import { IProduct } from '../models'

interface ProductProps{
    product: IProduct
}


export function Product({product}: ProductProps){
    const [details, setDetails] = useState(false)
    const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
    const btnClasses = ['py-2 px-4 border', btnClassName];


    // const videoURL = "https://player.vimeo.com/video/786310495?h=ecd1af0c84";
    return (
        
        <div className='py-2 px-4 flex-col shadow-md mb-2 bg-[#232323] rounded-[20px]'>
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

                {/* <iframe className="flex-col aspect-video" src={product.urlVideo} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
        </div>
        
    )
}