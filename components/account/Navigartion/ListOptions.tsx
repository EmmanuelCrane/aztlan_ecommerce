'use client'

import { useRef } from 'react';
import Link from 'next/link';

import navigation from '../../../styles/components/account/layoutAcount.module.css';

interface Props {
    children: React.ReactNode,
    typeList: string
}
const ListOptions = ({ children, typeList }: Props) => {

    const count = useRef<HTMLUListElement>(null);
    const notifications = useRef<HTMLUListElement>(null);

    const handleClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        if(event.target.id === 'count')
        {
            count.current?.classList.toggle(navigation.navigation__content_list__item__list___visible);
        }
        else
        {
            notifications.current?.classList.toggle(navigation.navigation__content_list__item__list___visible)
        }
    }

  return (
    <>
        {
            typeList === 'count' ?
                <>
                    <button id='count' onClick={handleClick}>
                        {children}
                    </button>
                    <ul ref={count} className={navigation.navigation__content_list__item__list}>
                        
                        <li className={navigation.navigation__content_list__item__list__item}>
                            <Link href="/user/account/profile">perfil</Link>
                        </li>
                        
                        <li className={navigation.navigation__content_list__item__list__item}>
                            <Link href="/user/account/address">direcciones</Link>
                        </li>
                        
                        <li className={navigation.navigation__content_list__item__list__item}>
                            <Link href="/user/account/password">cambiar contraceña</Link>
                        </li>
                    </ul>
                </>
            :
                (
                    <>
                        <button id='notifications' onClick={handleClick}>
                            {children}
                        </button>
                        <ul ref={notifications} className={navigation.navigation__content_list__item__list}>
                            <li className={navigation.navigation__content_list__item__list__item}>
                                <Link href="#">
                                    actualizaciones de pedidos
                                </Link>
                            </li>

                            <li className={navigation.navigation__content_list__item__list__item}>
                                <Link href="#">
                                    promociones
                                </Link>
                            </li>
                            
                        </ul>
                    </>
                )
        }
    </>
  )
}

export default ListOptions