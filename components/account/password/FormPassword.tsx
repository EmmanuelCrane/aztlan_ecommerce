import HeaderAcount from '../HeaderAcount';
import LabelFloat from '../../forms/LabelFloat';

import utilities from '../../../styles/utilities/utilities.module.css';
import forms from '../../../styles/forms/forms.module.css';
import buttons from '../../../styles/components/buttons.module.css';
import InputSwitch from './InputSwitch';

const FormPassword = () => {

  return (
    <section className={utilities.container_flex}>

      
        <article className={`${utilities.w_100} ${utilities.p_1} ${utilities.md_w_50}`}>

          <HeaderAcount title='cambiar contraceña' subtitle='para la seguridad de tu cuenta no compartas tu contraceña con nadie' />
          <form className={`${forms.form} ${utilities.p_2}`}>

            <LabelFloat name='password' type='password' textLabel='contraceña actual' value="12345" />
            <LabelFloat name='new_password' type='password' textLabel='nueva contraceña' value="" />
            <LabelFloat name='confirm_password' type='password' textLabel='confirmar contraceña' value=""/>

            <div className={forms.form__content}>
              <button className={`${buttons.btn} ${buttons.btn_lg} ${buttons.btn_danger}`} type="submit">confirmar</button>
            </div>
            
          </form>
        </article>

        <article className={`${utilities.w_100} ${utilities.p_1} ${utilities.md_w_50}`}>

          <div className={`${utilities.container_flex} ${utilities.p_2} ${utilities.border_secondary} ${utilities.rounded_1}`}>
            <h2 className={`${utilities.w_100} ${utilities.fs_5}`}>Contraceña</h2>
            <InputSwitch className={`${utilities.w_80} ${utilities.md_w_50} ${utilities.ps_1} ${utilities.fs_3} ${utilities.border_bottom_secondary}`} value="123456" />
          </div>

        </article>

    </section>

  )
}

export default FormPassword