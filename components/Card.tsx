import Image from 'next/image';
import Link from 'next/link';

// Css
import card from '../styles/components/card.module.css';
import utilities from '../styles/utilities/utilities.module.css'

// interface Props
interface Props {
  heightImage?: string,
  product: {
    category: string,
    id: number,
    description: string,
    price: number,
    image: string,
    firstPurchase: string,
    interestFreeMonths: string,
    freeShipping: string,
    deliveryDate: string,
    offer: number
  },
  children?: React.ReactNode,
  landscape?: boolean
  width_image?: {width: string}
}

const Card = ({ heightImage, product, children, landscape, width_image }: Props) => {

  const style_card = landscape ? `${card.card} ${utilities.container_inline_flex}` : card.card;

  return (

    <Link href={`/category/${product.id}`} className={style_card}>

      <div className={card.card__image_Top} style={width_image}>
        <Image
          src={`https://res.cloudinary.com/drebk8qrx/image/upload/w_150,h_150/v1677047064/aztlan/${product.image}`}
          alt="teclado"
          width={100}
          height={100}
          className={utilities.img_full}
        />
      </div>

      <div className={card.card__body}>
        <p className={card.card__body__title}>{product.description}</p>
        <div className={card.card__body__price}>
          { product.offer > 0 && <span className={card.card__body__price___offer}>-{product.offer}%</span> }
          <span className={`${utilities.container_flex} ${utilities.fs_6}`}>
          <sup className={utilities.align_items_start}>$</sup>
          {(product.price - (Math.floor((product.price * product.offer) / 100)) ).toFixed(3)}
          </span>
          <span className={`${utilities.fs_7} ${utilities.text_decoration_through}`}>${product.price}</span>
        </div>
        {/* <p className={`${utilities.mb_1} ${utilities.fs_7}`}>{product.firstPurchase}</p>
        <p className={`${utilities.mb_1} ${utilities.fs_7}`}>{product.interestFreeMonths}</p>
        <p className={`${utilities.mb_1} ${utilities.fs_7}`}>{product.deliveryDate}</p>
        <p className={`${utilities.mb_1} ${utilities.fs_7}`}>{product.freeShipping}</p> */}
        {children}
      </div>


    </Link>
  )
}

export default Card;