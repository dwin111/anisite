import React from 'react';
import { LoginForm } from '../components/LoginForm';

export function Register(){
    return (
        <div>
            <div className='py-2 px-4 flex-col shadow-md mb-2 bg-[#232323] rounded-[20px]'>
                <LoginForm/>

            </div>
        </div>
    )
}