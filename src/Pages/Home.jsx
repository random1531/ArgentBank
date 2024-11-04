import React from 'react'
import HeroBanner from '../Componement/Main/Banner/HeroBanner'
import Feature from '../Componement/Main/Feature/Feature'
import logoChat from '../assets/icon-chat.png'
import logoMoney from '../assets/icon-money.png'
import logoSecurity from '../assets/icon-security.png'

export default function Home() {
  return (
    <>
    <main>
    <HeroBanner />
    <section className="features">
        <h2 className="sr-only">Features</h2>
    <Feature 
    logopictures={logoChat}
    Title={"You are our #1 priority"}
    TextContent={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
    />
    <Feature
    logopictures={logoMoney}
    Title={"More savings means higher rates"}
    TextContent={"The more you save with us, the higher your interest rate will be!"}    
    />
    <Feature
    logopictures={logoSecurity}
    Title={"Security you can trust"}
    TextContent={"We use top of the line encryption to make sure your data and money is always safe."}
    />
    </section>
    </main>
    </>
  )
}
