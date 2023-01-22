import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '..';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {store} = useContext( Context)

    return (
        <div>
                <input 
                onChange={e => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                className='border py-2 px-4 mb-2 outline-0'  
                placeholder='Enter email...'/><br/>
                <input 
                onChange={e => setPassword(e.target.value)} 
                value={password} 
                type="password" 
                className='border py-2 px-4 mb-2  outline-0' 
                placeholder='Enter password...'/><br/>
                <button 
                onClick={() => {store.login(email, password); }}
                type="submit" 
                className='py-2 px-4 border bg-yellow-400 hover:text-white'>Login</button>
                <button 
                onClick={() => store.registration(email,password)}
                type="submit" 
                className='py-2 px-4 border bg-yellow-400 hover:text-white'>Registr</button>
        </div>
    )
}

export default observer(LoginForm) 