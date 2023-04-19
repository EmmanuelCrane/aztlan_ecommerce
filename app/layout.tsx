import '../styles/globals.css';

import Navigation from '../components/Navigation'
import stylesGrid from '../styles/components/grid.module.css';
import Banner from '../components/Banner';

import img1 from '../assets/images/preview-baner1.jpg'
import img2 from '../assets/images/preview-banner2.jpg'

interface Props {
  children: React.ReactNode,
}

function RootLayout({ children, }:Props) {

  const card2 = [
    img1,
    img2
  ]

  return (
      <html>
        <head />
        <body>
          <Navigation />
          <header>
            <Banner images={card2} />
          </header>
          
          <main className={stylesGrid.main}>
            {children}
          </main>
        
        </body>
      </html>
  )
}

export default RootLayout;