import React from 'react';
import {skills} from "../../Data";
import "./skills.css"

function Skills() {
  return (
    <section className='skills section' id='skills'>
         <h2 className="section__title text-cs">
          Professional Skills
        </h2>
        <p className="section__subtitle">
          My <span>Talent</span>
        </p>
        <div className="skills__container container grid">
           {
            skills.map((e, index)=>{
              return(
                <div className="skills__item" key={index}>
                  <div className="skills__title">
                    <h3 className="skills__name">{e.name}</h3>
                    <span className='skills__number'>
                      {e.percentage} <span>%</span>
                    </span>
                  </div>
                  <p className="skills__description">{e.description}</p>
                  <div className='skills__bar'>
                    <span className="skills__percentage" style={{width: `${e.percentage}%`}}>
                      <span></span>
                    </span>
                  </div>
                </div>
              )
            })
           }
        </div>
    </section>
  )
}

export default Skills