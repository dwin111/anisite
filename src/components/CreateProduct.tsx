import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IGenre, IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';
import Multiselect from "react-widgets/Multiselect";

import "react-widgets/styles.css";

const productData: IProduct = {
    id: 0,
    urlimg: '',
    name: 'Name',
    description: 'lorem ipsum set',
    urlVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    numberViews: 1000,
    rate: 10,
    rateCount: 100,
    tags: ["youtube"]

}



interface CreateProductProps{
    onCreate: (product: IProduct) => void
}

export  function CreateProduct({onCreate}: CreateProductProps){

    const [products, setProducts] = useState<IGenre[]>([]);

    const [loading, setLoading] = useState<boolean>(false)
    
    var tags = ['none'];
    var tags2 = products.map(product => tags.push(product.genre));
        
    async function fetchGenres() {
        try 
        {
            setLoading(true);
            const response = await axios.get<IGenre[]>('http://localhost:5112/api/Videos/getAllGenre');
            setProducts(response.data);
            setLoading(false);
            console.log(response.data);
        } 
        catch (e: unknown) 
        {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGenres();
    }, []);


    const [valueName, setValueName] = useState('')
    const [valueImg, setValueImg] = useState('')
    const [valueDes, setValueDes] = useState('')
    const [valueVideo, setValueVideo] = useState('')

    const [valueViews, setValueViews] = useState(1)
    const [valueRate, setValueRate] = useState(1)
    const [valueRateCount, setValueRateCount] = useState(1)

     const [valueTag, setValueTag] = useState<string[]>([''])

    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (valueName.trim().length === 0){
            setError('Please enter valid name')
            return
        }
        productData.urlimg = valueImg;
        productData.name = valueName;
        productData.description = valueDes;
        productData.urlVideo = valueVideo;
        productData.numberViews = valueViews;
        productData.rate = valueRate;
        productData.rateCount = valueRateCount;
        productData.tags = valueTag;


        const responce = await axios.post<IProduct>("http://localhost:5112/api/Videos/create", productData);
        console.log(responce)
        console.log(responce.data)
        console.log(productData)
       onCreate(responce.data);
    }

    const changeHendlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueName(event.target.value)
    }

    const changeHendlerImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueImg(event.target.value)
    }
    const changeHendlerDes = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueDes(event.target.value)
    }
    const changeHendlerVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueVideo(event.target.value)
    }

    
    const changeHendlerViews = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueViews(Number(event.target.value))
    }
    const changeHendlerRate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueRate(Number(event.target.value))
    }
    const changeHendlerRateCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueRateCount(Number(event.target.value))
    }

    return(
        <form onSubmit={submitHandler}>
            <input 
            type="text" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter URL image'
            value={valueImg}
            onChange={changeHendlerImg}
            />

            <input 
            type="text" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter name...'
            value={valueName}
            onChange={changeHendlerName}
            />

            <input 
            type="text" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter description...'
            value={valueDes}
            onChange={changeHendlerDes}
            />
            
            <input 
            type="text" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter URL video...'
            value={valueVideo}
            onChange={changeHendlerVideo}
            />
            <span>Enter Views...</span>

            <input 
            type="number" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter Views...'
            value={valueViews}
            onChange={changeHendlerViews}
            />
            <span>Enter Rate...</span>
            <input 
            type="number"  
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter Rate...'
            value={valueRate}
            onChange={changeHendlerRate}
            />
            <span>Enter Rate Count...</span>
           <input 
            type="number" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter Rate Count...'
            value={valueRateCount}
            onChange={changeHendlerRateCount}
            />

            <Multiselect                        
                data={tags}
                defaultValue={tags}
                    onChange={value => setValueTag(value)}
            />
            {error && <ErrorMessage error={error}/>}

            <button type="submit" className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
        </form>
    )
}

