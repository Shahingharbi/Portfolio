import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className='contact' id='contact'>
        <h2 className='title'>Contact</h2>
        <div className='contact__container'>
            <div className='contact__content'>
                <div className='contact__left'>
                    <div className='contact__left-top'>
                        <h4 className='contact__title'>Shahin GHARBI</h4>
                        <p className='contact__subtitle'>N'hesitez pas à me contacter !</p>
                    </div>
                    <div className='contact__left-bottom'>
                        <div className='contact__info'>
                            <i className="fa-solid fa-location-dot  "></i> <Link  className='contact__text'> Chambéry, Savoie</Link>
                        </div>
                        <div className='contact__info'>
                            <i className="fa-solid fa-envelope"></i> <Link className='contact__text' to='mailto:shahingharbi73@yahoo.com'>shahingharbi73@yahoo.com</Link>
                        </div>
                        <div className='contact__info'>
                            <i className="fa-solid fa-phone "></i> <Link className='contact__text' to='tel:0782214993'>07 82 21 49 93</Link>
                        </div>
                    </div>
                    <div className='contact__icone'>
                        <Link to='https://www.linkedin.com/in/shahin-gharbi/'><i className="fa-brands fa-linkedin-in hover-color"></i> </Link>
                        <Link to='https://github.com/shahingharbi'><i className="fa-brands fa-github hover-color"></i></Link>
                        <Link to='mailto:shahingharbi73@yahoo.com'><i className="fa-solid fa-at hover-color"></i></Link>
                        <Link><i className="fa-solid fa-file hover-color"></i></Link>
                     
                    </div>
                </div>
                <div className='contact__right'>
                    <form action="" className='contact__form'>
                        <input className='contact__input' type="text" placeholder='Nom*' required/>
                        <input className='contact__input' type="email" placeholder='Email*' required/>
                        <input className='contact__input' type="tel" placeholder='Telephone' />
                        <textarea  className='contact__input' name="message" id="message" placeholder='Message*' rows="5" required></textarea>
                        <input type="submit" className='contact__button' value="Envoyer"/>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact