import Header from '../../components/account/HeaderAcount';

import utilities from '../../styles/utilities/utilities.module.css';

interface Props {
    params: {category: string}
}
const page = ({ params }:Props) => {
  return (
    <section className={`${utilities.w_100} ${utilities.px_5}`}>
        <article className={`${utilities.w_100} ${utilities.mb_3} ${utilities.py_1} ${utilities.px_2} ${utilities.border_bottom_secondary}`}>
            <p className={`${utilities.w_100} ${utilities.pb_1} ${utilities.fs_3} ${utilities.text_capitalize}`}>seguir comprando</p>
            <h2 className={`${utilities.w_100} ${utilities.fs_4} ${utilities.text_capitalize}`}>{params.category}</h2>
        </article>
    </section>
  )
}

export default page