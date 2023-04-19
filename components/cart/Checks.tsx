'use client'
import { useRef, useState } from 'react';
import cart from '../../styles/components/cart.module.css';

interface Props {
    id: string
}

const Check = ( { id }: Props ) => {

    const [ check, setCheck] = useState(false);

    const input = useRef<HTMLDivElement>(null)

    const handleChange = (event: React.MouseEvent<HTMLLabelElement, MouseEvent> ) => {
        
        console.log(event.target.previousSibling.checked)
        console.log(input)
        // if(event.target.id === 'check')
        // {
        //     setCheck(!check)
        // }
    }

    return (
        <>
            <input className={cart.cart__input_check} ref={input} type="checkbox" name="product[]" id={id} />
            <label className={cart.cart__check_product} onClick={handleChange} id={id} htmlFor={id}></label>
        </>
    )
}

export default Check