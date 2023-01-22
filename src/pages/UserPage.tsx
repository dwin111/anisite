import axios, { AxiosError } from 'axios';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '..';
import  Product  from '../components/Product';
import { useUser } from '../hooks/user';
import { useVideos } from '../hooks/videos';
import $api from '../http';
import { IAccount, IProduct, IUser } from '../models';

const UserPage: FC = () => {
    const {store} = useContext(Context);
    const {user} = useUser();
    const {videos} = useVideos();

    return (
        <>
        <div className="text-[#FFFFFF] p-4">
            
            {store.isAuth && <div className="flex">
                <img src={user?.urlIcon} className="w-[60px] mr-10" alt={user?.name} />   
                <h1>{user?.name}</h1>
            </div> }       
            <p>{store.isAuth ? `Ви аворизовані ${store.userId}` : "Ви не авторізовані"}</p>
            <p>
                This is a sample page for demonstration purposes only.
            </p>
            <button onClick={() => 
                {
                    
                }}>TESTBUTOOOOOOOON</button>

                
            <p>{}</p>


        </div>
         <div className="felx">{videos?.map(product => <Product product={product} key={product.id}/>)}</div>
         </>
    )
}

export default observer(UserPage)