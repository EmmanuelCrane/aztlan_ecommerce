'use client'
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import utilities from '../styles/utilities/utilities.module.css';

import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import styleCarousel from '../styles/components/carousel.module.css';


interface Props {
  itemsCarousel: Array<{
    id: number,
    image:string
  }>
}


const Caroulsel = ({ itemsCarousel }: Props ) => {

  const carousel = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<SVGElement, MouseEvent>) => {

    const ancho = carousel.current?.offsetWidth;

    if(event.target.id == "btnLeft") {
      carousel.current.scrollLeft = carousel.current.scrollLeft - ancho;
    }else {
      carousel.current.scrollLeft = carousel.current.scrollLeft + ancho;
    }
  }

  return (
    <section className={`${utilities.w_100} ${utilities.p_1} ${utilities.bg_light}`}>
      <h2 className={`${utilities.w_100} ${utilities.ps_1} ${utilities.pb_2} ${utilities.fs_5}`}>Descubre las Ofertas Relámpago</h2>
      <article className={styleCarousel.carousel_container}>
        <button type="button" id="btnLeft" onClick={handleClick} className={styleCarousel.carousel__btn_left}>
            <BsChevronLeft id="btnLeft" />
        </button>
        
        <section className={styleCarousel.carousel} ref={carousel}>
          {itemsCarousel.map((element,index) => <Link href={`/category/${element.id}`} className={styleCarousel.carousel__item} key={index}>
            <Image
              // src={`https://res.cloudinary.com/drebk8qrx/image/upload/w_150,h_150/${element.image}`}
              src={`https://res.cloudinary.com/drebk8qrx/image/upload/w_150,h_150/v1677047064/aztlan/${element.image}`}
              alt=''
              width={100}
              height={100}
              className={utilities.img_full}
            />
          </Link>)}
        </section>

        <button type="button" id="btnRight" onClick={handleClick} className={styleCarousel.carousel__btn_right}>
            <BsChevronRight id="btnLeft" onClick={handleClick} />
        </button>
      </article>
    </section>
  )
}

export default Caroulsel