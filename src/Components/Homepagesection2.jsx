import React from 'react'
import './StyleSheets/Homepagesection2.css'
import HeroImage from './Assets/Images/HomeSection2Image.png'

const Homepagesection2 = () => {

  let productName = "iPhone 15 Pro";
  let productDescription = "Titanium. So strong. So light. So Pro.";
  let Button1 = "Learn More >";
  let Button2 = "Buy >";

  return (
    <div className='Main2'>
        <section className='Main2-section'>
            <div className="HomeSection2-Wrapper">
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

export default Homepagesection2