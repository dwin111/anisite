import React from 'react'           
import {Link} from 'react-router-dom'   

export function Navigation(){
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

            

        </nav>
    )
}   