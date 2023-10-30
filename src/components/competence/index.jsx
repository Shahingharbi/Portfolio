import React from 'react';
import icone from "../../assets/data/card"


function Competence() {
  return (
    <section className='competence'>
      <div className='competence__container'>
        <h3 className='title'>Compétences</h3>
        <div className='competence__content'>
          {icone.map((competence, index) => (
            <div className='competence__card' key={index}>
              <div className='competence__card-content'>
                <img src= {competence.image} alt={competence.name} />
                <span>{competence.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competence;
