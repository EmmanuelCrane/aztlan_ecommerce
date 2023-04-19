import Image from 'next/image';

import Check from '../../components/cart/Checks';
import Count from '../../components/cart/Count';

import cart from '../../styles/components/cart.module.css';
import buttons from '../../styles/components/buttons.module.css';
import utilities from '../../styles/utilities/utilities.module.css';

import audifonos from '../../assets/images/audifonos.webp';
import alberca from '../../assets/images/alberca.webp';
import teclado from '../../assets/images/teclado.jpg';

const product = [
  {
    image: audifonos,
    title: "audifonos",
    price: 457.98,
    offer: 0.10,
  },
  {
    image: alberca,
    title: "alberca",
    price: 356.28,
    offer: 0.5,
  },
  {
    image: teclado,
    title: "teclado",
    price: 645.98,
    offer: 0.10,
  },
];

const page = () => {

  return (
    <section className={`${utilities.w_100} ${utilities.p_5}`}>
        <table className={cart.table}>
            <thead className={cart.thead}>
              <tr>
                <th scope='col' colSpan={4}>                 
                  <p className={`${utilities.container_inline_flex} ${utilities.pb_2} ${utilities.fs_6} ${utilities.text_capitalize} ${utilities.font_weight_lighter} ${utilities.text_mute}`}>
                    {/* <input className={cart.cart__input_check} type="checkbox" name="" id="check" hidden />
                    <label className={cart.cart__check_product} htmlFor="check"></label> */}
                    <Check id='check' />
                    producto
                  </p>
                </th>
                <th scope='col' className={''}><p className={`${utilities.fs_6} ${utilities.text_capitalize} ${utilities.font_weight_lighter} ${utilities.text_mute}`}>precio unitario</p></th>
                <th scope='col' className={''}><p className={`${utilities.fs_6} ${utilities.text_capitalize} ${utilities.font_weight_lighter} ${utilities.text_mute}`}>cantidad</p></th>
                <th scope='col' className={''}><p className={`${utilities.fs_6} ${utilities.text_capitalize} ${utilities.font_weight_lighter} ${utilities.text_mute}`}>precio total</p></th>
                <th scope='col' className={''}><p className={`${utilities.fs_6} ${utilities.text_capitalize} ${utilities.font_weight_lighter} ${utilities.text_mute}`}>acciones</p></th>
              </tr>
            </thead>

            <tbody>

              {
                product.map((element, index) => <tr key={index}>
                <td colSpan={4}>
                  <p className={`${utilities.container_inline_flex} ${utilities.pb_2}`}>
                    {/* <input className={cart.cart__input_check} type="checkbox" name="" id={`check${index}`} defaultChecked={true} hidden />
                    <label className={cart.cart__check_product} htmlFor={`check${index}`}></label> */}
                    <Check id={`check${index}`} />

                    <Image src={element.image} alt="" width={50} height={50} />
                    <span className={`${utilities.fs_7} ${utilities.text_capitalize}`}>{element.title}...</span>
                    {/* <span>variaciones</span> */}
                  </p>
                </td>
              
                <td className={utilities.text_center}>
                  <span className={`${utilities.fs_7} ${utilities.text_decoration_through}`}>${element.price} MXN</span>
                  <span className={utilities.fs_7}>${ (element.price - (element.price * element.offer)).toFixed(2) } MXN</span>
                </td>

                <td className={`${utilities.d_grid} ${utilities.grid_place_items_center}`}>
                  <Count />
                </td>
                <td className={utilities.text_center}><p className={utilities.fs_7}>${( element.price - (element.price * element.offer)).toFixed(2)} MXN</p></td>
                <td>
                  <p className={`${utilities.d_grid} ${utilities.grid_place_items_center}`}>
                    <button className={`${buttons.btn} ${buttons.btn_link_danger} ${buttons.btn_sm} ${utilities.text_center} ${utilities.fs_7}`}>eliminar</button>
                  </p>
                </td>
              </tr>)
              }

            </tbody>

        </table>
    </section>
  )
}

export default page