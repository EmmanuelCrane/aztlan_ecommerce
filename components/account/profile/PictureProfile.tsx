import Image from 'next/image';

import utilities from '../../../styles/utilities/utilities.module.css';
import buttons from '../../../styles/components/buttons.module.css';

import imageUser from '../../../assets/images/user.webp';

const PictureProfile = () => {

  const styleClass = {
    containerPictureProfile: `${utilities.d_none} ${utilities.w_40} ${utilities.flex_wrap} ${utilities.justify_content_center} ${utilities.align_content_center} ${utilities.gap_1} ${utilities.md_d_flex}`,
    pictureProfileContentImage: `${utilities.w_40} ${utilities.border_secondary} ${utilities.rounded_fill} ${utilities.overflow_hidden}`,
  }

  return (
    <section className={styleClass.containerPictureProfile}>
      
      <article className={styleClass.pictureProfileContentImage}>
        <Image src={imageUser} alt="" width={100} height={100} className={utilities.img_full} />
      </article>

      <article className={`${utilities.w_100} ${utilities.d_grid} ${utilities.grid_place_items_center}`}>
        <button className={`${buttons.btn} ${buttons.btn_lg} ${utilities.text_light}`}>seleccionar imagen</button>
        <input type="file" name="" id="" hidden />
      </article>

      <article className={`${utilities.w_100} ${utilities.text_center}`}>
        <p className={utilities.text_muted}>Tamaño de archivo: máximo 1 MB</p>
        <p className={utilities.text_muted}>Extensión de archivo: .JPEG, .PNG</p>
      </article>

    </section>
  )
}

export default PictureProfile