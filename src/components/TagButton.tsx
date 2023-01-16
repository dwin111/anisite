import React, {useState} from 'react'
import { IProduct } from '../models'
import { clickOptions } from '@testing-library/user-event/dist/click';

interface ProductProps{
}


export function TagButton() {
    const [clickOnButton, setClickOnButton] = useState(1);
    const styleBg = clickOnButton ? " bg-[#373737] text-[#FFFFFF] hover:bg-[#202020] border-[#4B4B4B]" : " bg-[#FFFFFF] text-[#373737] hover:bg-[#d2d2d2] border-[#FFFFFF]";
    const style = "font-black border-[1px] rounded-[18px] w-[170px] h-[30px] mr-5 " + styleBg;
    return (
        <div className="pt-3 flex">

            <button className={style}>Новинки</button>
            <button className={style}>Класика</button>
            <button className={style}>Популярне</button>
            <button className={style}>Топ</button>
        </div>
    );
}