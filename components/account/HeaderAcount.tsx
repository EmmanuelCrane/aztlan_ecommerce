import utilities from '../../styles/utilities/utilities.module.css';

interface Props {
    title: string,
    subtitle?: string
}
const HeaderAcount = ({ title, subtitle }: Props) => {
  return (
    <section className={`${utilities.w_100} ${utilities.border_bottom_secondary} ${utilities.p_1}`}>
        <h2 className={`${utilities.fs_5} ${utilities.first_letter_upper}`}>{ title }</h2>
        {
          subtitle  && <p className={`${utilities.py_1} ${utilities.first_letter_upper} ${utilities.fs_7}`}>{ subtitle }</p>
        }
    </section>
  )
}

export default HeaderAcount