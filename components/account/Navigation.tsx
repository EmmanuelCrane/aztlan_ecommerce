import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import utilities from '../../styles/utilities/utilities.module.css'
import navigation from '../../styles/components/account/layoutAcount.module.css';
import { BsCaretDownFill, BsFillPencilFill, BsPerson, BsBag, BsChat, BsReceipt } from 'react-icons/bs'

import imgUser from '../../assets/images/user.webp';
import ListOptions from './Navigartion/ListOptions';

const Navigation = () => {


  
  return (
    <aside className={navigation.aside_navigation}>
      <nav className={navigation.navigation}>

        <div className={navigation.navigation__content_profile}>

          <p className={navigation.navigation__content_profile__preview}>
            <Image src={imgUser} className={utilities.img_full} width={100} height={100} alt="" />
          </p>

          <p className={navigation.navigation__content_profile__information}>
            <span>salazarycarvajal</span><br />
            <Link href="/user/account/profile"><BsFillPencilFill /> editar perfil</Link>
          </p>

        </div>

        <ul className={navigation.navigation__content_list}>
        
          <li className={navigation.navigation__content_list__item}>

            <ListOptions typeList='count'><BsPerson />mi cuenta <BsCaretDownFill/></ListOptions>

          </li>

          <li className={navigation.navigation__content_list__item}><Link href=""><BsBag />mi compra</Link></li>

          <li className={navigation.navigation__content_list__item }>

            <ListOptions typeList='notifications'><BsChat />notificaciones <BsCaretDownFill/></ListOptions>

          </li>

          <li className={navigation.navigation__content_list__item}><Link href=""><BsReceipt />mis cupones</Link></li>

        </ul>

      </nav>
    </aside>
  )
}

export default Navigation