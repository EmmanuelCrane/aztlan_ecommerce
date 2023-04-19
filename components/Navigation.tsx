'use client'
// import next
import Image from 'next/image';
import Link from 'next/link';
// import react
import { useRef } from 'react';
// import module.css
import nav from '../styles/components/navigation.module.css';
import form from '../styles/forms/forms.module.css';
import button from '../styles/components/buttons.module.css';
import utilities from '../styles/utilities/utilities.module.css';
// import icons
import { BsJustify, BsSearch, BsXLg, BsCart3 } from "react-icons/bs";
// import images
import iconAztlan from '../assets/images/icon.png';
import imagenPrueba from '../assets/images/audifonos.webp';

const Navigation = () => {

  const listCar = useRef<HTMLDivElement>(null);
  const arrowCar = useRef<HTMLDivElement>(null);

  // constantes que ordenan las clases que utilizan los botones de la navegacion
  const stylesBtnCollapse: string = `${button.btn} ${button.btn_lg} ${button.btn_border_secondary} ${utilities.text_success }`;
  const stylesBtnInput:string = `${button.btn} ${button.btn_lg} ${utilities.bg_warning} ${utilities.text_light}`;

  const nav_aside = useRef<HTMLDivElement>(null)

  const handleClickCollapse = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    nav_aside.current?.classList.toggle(`${nav.nav_aside___show}`)
  }
  
  const handleClick = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    listCar.current?.classList.toggle(`${nav.nav__shopping_cart__list___visible}`)
    arrowCar.current?.classList.toggle(`${nav.nav__shopping_cart___visible_arrow}`)
  }

  
  return (
    <div className={nav.content__nav}>
      <nav className={nav.nav}>

        <Link href='/' className={nav.nav__link}>
          <Image src={iconAztlan} width={100} height={100} className={utilities.img_full} alt="" />
        </Link>

        <form className={form.form_line}>
          <div className={form.form_line__content}>
            <input type="search" className={`${form.form__content__control} ${utilities.bg_light}`} placeholder="Buscar ../" />
            <button className={stylesBtnInput}><BsSearch /></button>
          </div>
        </form>

        <section className={utilities.d_flex}>
          <article ref={arrowCar} className={nav.nav__shopping_cart}>

            <button
              className={`${button.btn} ${utilities.bg_transparent} ${utilities.fs_4} ${utilities.text_light} ${utilities.me_1}`}
              onClick={handleClick}
            >
              <BsCart3 />
            </button>

            <section 
              ref={listCar}
              className={nav.nav__shopping_cart__list}
            >
              <article className={`${utilities.container_inline_flex} ${utilities.justify_content_between} ${utilities.px_1} ${utilities.mb_1}`}>
                <Image src={imagenPrueba} alt='' width={50} height={50} />
                <p className={`${utilities.fs_7} ${utilities.first_letter_upper}`}>titulo del producto abreviada...</p>
                <p className={`${utilities.fs_7} ${utilities.text_brand}`}>$365.00 MXN</p>
              </article>

              <article className={`${utilities.container_inline_flex} ${utilities.justify_content_between} ${utilities.px_1} ${utilities.mb_1}`}>
                <Image src={imagenPrueba} alt='' width={50} height={50} />
                <p className={`${utilities.fs_7} ${utilities.first_letter_upper}`}>titulo del producto abreviada...</p>
                <p className={`${utilities.fs_7} ${utilities.text_brand}`}>$365.00 MXN</p>
              </article>

              <article className={`${utilities.container_inline_flex} ${utilities.justify_content_end}`}>
                <Link href="/cart" className={`${button.btn} ${button.btn_lg} ${button.btn_brand} ${utilities.fs_6} ${utilities.rounded_0} ${utilities.text_capitalize}`}>
                  Ver mi carrito de compras
                </Link>
              </article>
            </section>

          </article>

          <button
            className={stylesBtnCollapse}
            onClick={handleClickCollapse}
          >
            <BsJustify />
          </button>
        </section>

      </nav>
      <aside className={nav.nav_aside} ref={nav_aside}>

        <div className={nav.nav__link}>
          <Image src={iconAztlan} width={100} height={100} className={utilities.img_full} alt="" />
        </div>

        <button
          className={stylesBtnCollapse}
          onClick={handleClickCollapse}
        >
          <BsXLg />
        </button>

        <ul className={nav.nav_aside__list}>
          <Link href="/user/account/profile"><li className={nav.nav_aside__list__item}>mi cuenta</li></Link>
          <Link href=""><li className={nav.nav_aside__list__item}>ayuda</li></Link>
          <Link href=""><li className={nav.nav_aside__list__item}>salir</li></Link>
          <li className={nav.nav_aside__list__item___title}>Redes sociales</li>
        </ul>
      
      </aside>
    </div>
  )
}


export default Navigation;