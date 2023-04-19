import HeaderAcount from "../HeaderAcount"
import LabelFloat from "../../forms/LabelFloat";

import forms from '../../../styles/forms/forms.module.css';
import utilities from '../../../styles/utilities/utilities.module.css';
import btn from '../../../styles/components/buttons.module.css';
import SelectCountry from "./SelectCountry";

const Addres = () => {
  return (
    <section className={utilities.container_flex}>
        <article className={`${utilities.w_100} ${utilities.p_1} ${utilities.md_w_50}`}>
            <HeaderAcount title="agregar una nueva direccion" subtitle="" />
            <form className={`${forms.form} ${utilities.p_2}`}>
              <h5 className={`${utilities.w_100} ${utilities.fs_7}`}>País o región</h5>
              <SelectCountry />
              <LabelFloat name="name" type="text" textLabel="nombre completo" />
              <LabelFloat name="street" type="text" textLabel="calle y número" />
              <LabelFloat name="zip_code" type="text" textLabel="código postal" />
              <LabelFloat name="telephone_number" type="tel" textLabel="número de teléfono" />
              <p className={utilities.w_100}>Puede ser utilizado durante la entrega</p>
              <LabelFloat name="additional_address" type="text" textLabel="¿Alguna instrucción adicional?(Opcional)" />
              <div className={forms.form__content}>
                  <button className={`${btn.btn} ${btn.btn_lg} ${btn.btn_primary}`} type="submit">Agregar direccion</button>
              </div>
            </form>
        </article>
        <article className={`${utilities.w_100} ${utilities.p_1} ${utilities.md_w_50}`}>
        <HeaderAcount title="tus direcciones" subtitle="" />
        </article>
    </section>
  )
}

export default Addres