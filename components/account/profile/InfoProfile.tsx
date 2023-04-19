import PictureProfile from '../profile/PictureProfile';
import LabelFloat from '../../forms/LabelFloat';
import HeaderAcount from '../HeaderAcount';

import utilities from '../../../styles/utilities/utilities.module.css';
import forms from '../../../styles/forms/forms.module.css';
import buttons from '../../../styles/components/buttons.module.css';

const InfoProfile = () => {
  
  return (
    <article className={`${utilities.w_100} ${utilities.p_1}`}>

      <HeaderAcount title='mi perfil' subtitle='adminstra y protege tu cuenta' />

      <section className={`${utilities.w_100} ${utilities.py_1} ${utilities.md_d_flex}`}>

        <form className={forms.form}>

          <LabelFloat name='nameUser' type='text' textLabel='nombre de usuario' />
          <LabelFloat name='name' type='text' textLabel='nombre' />
          <LabelFloat name='emailUser' type='text' textLabel='correo electronico' />
          <LabelFloat name='phoneUser' type='tel' textLabel='numero de telefono' />

          <div className={`${forms.form__content} ${utilities.gap_1}`}>
            <label className={forms.form__label_radio}>genero</label>
            <label htmlFor="m" className={forms.form__label_radio}> <input type="radio" name="genere" id="m" />masculino</label>
            <label htmlFor="f" className={forms.form__label_radio}> <input type="radio" name="genere" id="f" />femenino</label>
            <label htmlFor="o" className={forms.form__label_radio}> <input type="radio" name="genere" id="o" />otro</label>
          </div>

          <div className={forms.form__content}>
            <button className={`${buttons.btn} ${buttons.btn_lg} ${buttons.btn_primary} ${utilities.md_ms_1}`} type="submit">guardar</button>
          </div>
          
        </form>

        <PictureProfile />
      </section>

    </article>
  )
}

export default InfoProfile