import Image from 'next/image';
import card from '../styles/components/card.module.css';
import teclado from '../assets/images/teclado.jpg'

const CardCategory = () => {

  return (
    <article className={card.cardCategory}>
      <Image src={teclado} alt="articulo" className={card.img} />
      <p className={card.cardHoverText}>Categoria</p>
    </article>
  )
}

export default CardCategory