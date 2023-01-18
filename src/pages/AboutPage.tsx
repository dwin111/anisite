import React, { useContext } from 'react';
import { Context } from '..';

export function AboutPage(){
    const {store} = useContext(Context);
    
    return (
        <div>
            <h1>About Page</h1>
            <p>{store.isAuth ? `Ви аворизовані ${store.userId}` : "Ви не авторізовані"}</p>
            <p>
                This is a sample page for demonstration purposes only.
            </p>
        </div>
    )
}