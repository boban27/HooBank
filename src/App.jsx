import React from 'react'
import styles from './style'

import {Navbar,Bilnih,Busnies,Button,CardDeal,
  Clients,CTA,FedbackCard,Footer,GetStarted,
  Hero,Stats,Testimonials} from './componets'

function App() {
  return (
    <div className="bg-primary w-full overflow-hiden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary${styles.flexStart}`}>
        <div className= {`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className= {`${styles.boxWidth}`}>
          <Stats />
          <Busnies />
          <Bilnih />
          <CardDeal />
          <Testimonials />
          <Clients />
           <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App