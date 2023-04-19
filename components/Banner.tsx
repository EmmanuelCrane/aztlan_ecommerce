'use client'
import { usePathname  } from 'next/navigation';

import banner from '../styles/components/banner.module.css';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

import Image, { StaticImageData } from 'next/image'
import { UncontrolledCarousel } from 'reactstrap';

import ima1 from '../assets/images/preview-baner1.jpg';
import ima2 from '../assets/images/preview-banner2.jpg';


interface Props {
    images:Array<StaticImageData | string>
}

const Banner = ( { images }: Props ) => {
    const namePath = usePathname();

  return (
    // "https://www.openstreetmap.org/search?query=cuernavaca#map=11/18.9219/-99.2342"
    <>
        {
            namePath === '/' && <section className={banner.banner}>
            <button className={banner.banner__btn__left}><BsChevronLeft /></button>
            <button className={banner.banner__btn__right}><BsChevronRight /></button>
    
            <div className={banner.banner__carousel}>
                {
                    images.map((element,index) =>
                        <Image
                            key={index}
                            width={100}
                            height={100}
                            className={banner.banner__carousel__image}
                            src={element}
                            alt="First slide"
                        />)
                }
            </div>
            
            </section>
        }
       
    </>

  )
}

export default Banner




