import React from 'react'
import './StyleSheets/Homepagesection1.css'
import HeroImage from './Assets/Images/HomeSection1Image.png'

const Homepagesection1 = () => {

  let productName = "Macbook Pro";
  let productDescription = "Mind-blowing. Head-turning.";
  let Button1 = "Learn More >";
  let Button2 = "Buy >";

  return (
    <div className='Main1'>
        <section className='Main1-section'>
            <div className="HomeSection1-Wrapper">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className="HomeSection-Buttons">
                    <a href="">{Button1}</a>
                    <a href="">{Button2}</a>
                </div>
                <img src={HeroImage}/>
            </div>
        </section>
    </div>
  )
}

export default Homepagesection1