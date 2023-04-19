import forms from '../../../styles/forms/forms.module.css';

const SelectCountry = () => {

  return (
    <div className={forms.form__content}>
      <select name="country" id="" className={forms.form__content__select_control}>
        <option value="MX">Mexico</option>
      </select>
    </div>
  )
}

export default SelectCountry