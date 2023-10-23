import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (

    <section className='hero'>

        <div className='hero__container'>
            <div className='hero__info'>
                <h1 className='hero__title'> Shahin Gharbi </h1>
                <p className='hero__subtitle'>Développeur Front-end.</p>
            </div>
            <Link className='hero__link'>Contactez moi</Link>
        </div>

    </section>
  )
}

export default Hero