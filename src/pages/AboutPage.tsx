import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react';
import { Context } from '..';

const AboutPage: FC = () => {
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

export default observer(AboutPage)