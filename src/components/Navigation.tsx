import { observer } from 'mobx-react-lite';
import React, { FC, useContext } from 'react'           
import {Link} from 'react-router-dom'   
import { Context } from '..';
import { useUser } from '../hooks/user';

const Navigation: FC = () => {

    const {store} = useContext(Context);
    const {user} = useUser();
    const userIcon = user?.urlIcon
    return(
        <nav className="h-[80px] font-black flex flex-nowrap px-[49px] bg-[#202020] items-center text-white font-sans">

            <span
                className="text-[#E10000] text-[40px] text-weight-[900] line-height-[48px] aling-item-center italic  mr-[42px]"
            >SB</span>
       
            <div
                className="box-border h-13 w-40 p-5 text-[20px] mr-5">
                <Link to="/" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Головна</Link></div>
            <div
                className="box-border h-13 w-40 p-5 text-[20px]">
                <Link to="/about" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Релізи</Link></div>   
            <div
                className="box-border h-13 w-40 p-5 text-[20px] mr-5 ">
                <Link to="/about" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Онгоінги</Link></div>   
            <div
                className="box-border h-13 w-40 p-5 text-[20px] ">
                <Link to="/view" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Рандомне</Link></div>   
            <div
                className="box-border h-13 w-40 p-5 text-[20px] mr-5 ">
                <Link to="/about" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Релізи</Link></div>         

            {!store.isAuth && <><div
                className="box-border h-13 w-20 p-5 text-[15px] ">
                <Link to="/register" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Логін</Link></div>   
            <div
                className="box-border h-13 w-20 p-5 text-[15px] mr-20 ">
                <Link to="/register" className="hover:text-gray-300 hover:ease-in-out duration-100 hover:text-[21px]">Регістрация</Link></div></>}
            {store.isAuth && <><div
                className="box-border h-13 w-20 p-5 text-[15px] mr-20 ">
                <button onClick={() => store.logout()}><Link to="/">Виход</Link></button></div>
                <div
                className="box-border h-13 w-40 p-5 text-[20px] mr-5 ">

            <Link to="/user"><img src={userIcon} className="w-[60px] mr-10" alt={user?.name} /> </Link></div>
                </>}


        </nav>
    )
}   
export default observer(Navigation)
//<div className="w-[60px] h-[60px] bg-[#D9D9D9] rounded-[15px]"></div>