import Card from "../components/Card";
import RowCards from '../components/rows/RowCards';

import utilities from '../styles/utilities/utilities.module.css';
import btn from '../styles/components/buttons.module.css';

import RowCardsCategory from '../components/rows/RowCategory';
import Carousel from '../components/Carousel';

const page = () => {

  const cards = [
    {
      category: "tec",
      id:1,
      description: "HUAWEI Matebook 16 - Laptop de 16'', AMD Ryzen 5 5600H, 512 GB ROM + 16 GB RAM, Gris, Teclado en español",
      price: 15999,
      image: "preview1_r2akr9.png",
      firstPurchase: '$50.00 de descuento en tu primera compra',
      interestFreeMonths: 'Hasta 12 meses sin intereses de $1,333.25',
      freeShipping: 'Envío GRATIS por Amazon México',
      deliveryDate: 'Recíbelo el domingo, 19 de febrero',
      offer: 36
    },
    {
      category: "tec",
      id:2,
      description: "HUAWEI Matebook 16 - Laptop de 16'', AMD Ryzen 5 5600H, 512 GB ROM + 16 GB RAM, Gris, Teclado en español",
      price: 15999,
      image: "preview1_r2akr9.png",
      firstPurchase: '$50.00 de descuento en tu primera compra',
      interestFreeMonths: 'Hasta 12 meses sin intereses de $1,333.25',
      freeShipping: 'Envío GRATIS por Amazon México',
      deliveryDate: 'Recíbelo el domingo, 19 de febrero',
      offer: 36
    },
    {
      category: "tec",
      id:3,
      description: "HUAWEI Matebook 16 - Laptop de 16'', AMD Ryzen 5 5600H, 512 GB ROM + 16 GB RAM, Gris, Teclado en español",
      price: 15999,
      image: "preview1_r2akr9.png",
      firstPurchase: '$50.00 de descuento en tu primera compra',
      interestFreeMonths: 'Hasta 12 meses sin intereses de $1,333.25',
      freeShipping: 'Envío GRATIS por Amazon México',
      deliveryDate: 'Recíbelo el domingo, 19 de febrero',
      offer: 36
    },
    {
      category: "tec",
      id:4,
      description: "HUAWEI Matebook 16 - Laptop de 16'', AMD Ryzen 5 5600H, 512 GB ROM + 16 GB RAM, Gris, Teclado en español",
      price: 15999,
      image: "preview1_r2akr9.png",
      firstPurchase: '$50.00 de descuento en tu primera compra',
      interestFreeMonths: 'Hasta 12 meses sin intereses de $1,333.25',
      freeShipping: 'Envío GRATIS por Amazon México',
      deliveryDate: 'Recíbelo el domingo, 19 de febrero',
      offer: 36
    },
    {
      category: "tec",
      id:5,
      description: "HUAWEI Matebook 16 - Laptop de 16'', AMD Ryzen 5 5600H, 512 GB ROM + 16 GB RAM, Gris, Teclado en español",
      price: 15999,
      image: "preview1_r2akr9.png",
      firstPurchase: '$50.00 de descuento en tu primera compra',
      interestFreeMonths: 'Hasta 12 meses sin intereses de $1,333.25',
      freeShipping: 'Envío GRATIS por Amazon México',
      deliveryDate: 'Recíbelo el domingo, 19 de febrero',
      offer: 36
    },
  ]

  return (
    <>
      <RowCards className={`${utilities.p_relative} ${utilities.top_3}`}>
        {cards.map((element,index) => <Card key={element.id} product={element} />)}
      </RowCards>

    <RowCardsCategory>
      <Card product={cards[0]} landscape={true} width_image={{width: '50%'}}>
        <button className={`${btn.btn} ${utilities.w_100} ${utilities.py_1} ${btn.btn_sm} ${btn.btn_warning} ${utilities.text_light}`}>agregar al carrito</button>
      </Card>
      <Card product={cards[0]} landscape={true} width_image={{width: '50%'}}>
        <button className={`${btn.btn} ${utilities.w_100} ${utilities.py_1} ${btn.btn_sm} ${btn.btn_warning} ${utilities.text_light}`}>agregar al carrito</button>
      </Card>
    </RowCardsCategory>
    <Carousel itemsCarousel={cards} />

    </>
  )
}

export default page