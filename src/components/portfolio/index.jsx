import React from 'react';
import ohmyfood from '../../assets/images/ohmyfood.png';


function Portfolio() {
  return (

    <div className='portfolio__container'>
      <div className='portfolio__card'>
        <img className='portfolio__img' src= {ohmyfood} alt="" />
        <div className='portfolio__content'>
            <h5 className='portfolio__title'>OhMyFood</h5>
            <p className='portfolio__text'>
             L'entreprise Oh My Food souhaitait un site 
             mobile-first qui répertorie
             les menus de restaurants gastronomiques. 
             Il fallait le développer pour mobile, tablette et desktop en s’appuyant rigoureusement sur
             les informations déterminées dans le brief créatif et inclure des animations soignées !</p>
             <div className='portfolio__btns'>
             <button className='portfolio__btn'>Voir site</button>
             <button className='portfolio__btn'>Voir code</button>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
