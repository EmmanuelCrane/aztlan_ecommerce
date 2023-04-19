'use client'
import React, { useState } from 'react';
import utilities from '../../../styles/utilities/utilities.module.css';
import btn from '../../../styles/components/buttons.module.css';

import { BsEyeSlash, BsEye} from "react-icons/bs";

interface Props {
    className: string,
    value: string | number,
    onFocus?: Function,
    onBlur?: Function
}

const InputSwitch = ( { className, value, onFocus, onBlur }: Props ) => {
    const [ type, setType] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.preventDefault();
        setType(!type);
    }

  return (
    <div className={`${utilities.w_100} ${utilities.container_inline_flex}`}>
        {
            type
                ?
                    <input className={className} onFocus={onFocus} onBlur={onBlur} type="text" defaultValue={value} />
                :
                    <input className={className} onFocus={onFocus} onBlur={onBlur} type="password" defaultValue={value} />
        }
        <button className={`${btn.btn} ${btn.btn_link_dark} ${utilities.fs_5}`} onClick={handleClick}>
            {
                type
                ?
                    <BsEye />
                :
                    <BsEyeSlash />
            }
        </button>
    </div>
  )
}

export default InputSwitch