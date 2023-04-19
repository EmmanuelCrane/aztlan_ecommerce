'use client'
import { useState } from 'react'
import { BsPlusLg, BsDashLg } from "react-icons/bs";

import buttons from '../../styles/components/buttons.module.css';
import utilities from '../../styles/utilities/utilities.module.css';

const Count = () => {
    const [ count, setCount ] = useState(1);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<SVGElement, MouseEvent>) => {
        event.preventDefault();
        
        if(event.target.id === "plus") {
            setCount(count + 1);
        }
        if(event.target.id === "dash" && count >= 1) {
            setCount(count - 1);
        }

    }
  return (
    <div className={`${utilities.container_inline_flex} ${utilities.gap_none}` }>
        <button onClick={handleClick} id="plus" className={`${buttons.btn} ${buttons.btn_sm} ${buttons.btn_link_dark} ${utilities.fs_4}`}>
            +
        </button>
        <p>
            {count}
        </p>
        <button onClick={handleClick} id="dash" className={`${buttons.btn} ${buttons.btn_sm} ${buttons.btn_link_dark} ${utilities.fs_4}`}>
            -
        </button>
    </div>
  )
}

export default Count