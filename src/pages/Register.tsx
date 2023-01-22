import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';

const Register: FC = () => {
    return (
        <div>
            <div className='py-2 px-4 flex-col shadow-md mb-2 bg-[#232323] rounded-[20px]'>
                <LoginForm/>

            </div>
        </div>
    )
}
export default observer(Register)