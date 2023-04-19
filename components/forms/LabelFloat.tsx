'use client'
import { useRef, useEffect } from 'react'
import forms from '../../styles/forms/forms.module.css';
import utilities from '../../styles/utilities/utilities.module.css';
import InputSwitch from '../account/password/InputSwitch';

interface Props {
    name: string,
    type: string,
    textLabel: string,
    value: string | number
}

const LabelFloat = ({ name, type, textLabel, value }: Props) => {

    const labelFloat = useRef<HTMLLabelElement>(null);

    const handleFocus = (event?: React.FocusEvent<HTMLInputElement, Element>) => {
        
        if(value != "") {
            labelFloat.current?.classList.add(forms.form__label_float___focus);
        }
        else
        {
            labelFloat.current?.classList.toggle(forms.form__label_float___focus);
        }
    };

  return (
        <div className={forms.form__content__label_float}>
            <label ref={labelFloat} htmlFor={name} className={forms.form__label_float}>{textLabel}</label>
            {
                type === "password"
                    ?
                        <InputSwitch 
                            // className={`${utilities.w_80} ${utilities.md_w_50} ${utilities.ps_1} ${utilities.fs_3} ${utilities.border_secondary} `}
                            className={`${forms.form__content__control} ${utilities.p_1}`}
                            value={value}
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                        />
                    :
                        <input
                            type={type}
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            name={name} id={name}
                            className={forms.form__content__control}
                        />
            }
            

        </div>
  )
}

export default LabelFloat