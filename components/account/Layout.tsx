import Navigation from './Navigation';
import layout from '../../styles/components/account/layoutAcount.module.css';

interface Props {
    children: React.ReactNode
}

const Layout = ( { children }: Props ) => {
  return (
    <section className={layout.layout}>
        <Navigation />
        <article className={layout.layout__main}>
            { children }
        </article>
    </section>
  )
}

export default Layout
