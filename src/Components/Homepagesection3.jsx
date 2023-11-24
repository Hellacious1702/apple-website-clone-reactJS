import React from 'react'
import './StyleSheets/Homepagesection3.css'
import CARD1 from './Assets/Images/HomeSection3Image-MACBOOKPRO.png'
import CARD2 from './Assets/Images/HomeSection3Image-IMAC.png'
import CARD3 from './Assets/Images/HomeSection3Image-IPADPRO.png'
import CARD4 from './Assets/Images/HomeSection3Image.png-APPLEWATCH.png'
import CARD5 from './Assets/Images/HomeSection3Image-AIRPODS.png'
import CARD6 from './Assets/Images/HomeSection3Image-TRADEIN.png'

const Homepagesection3 = () => {

    let productNameCard1 = "MacBook Air";
    let productDescriptionCard1 = "work, play or create anywhere.";
    let productNameCard2 = "iMac";
    let productDescriptionCard2 = "Packed with more juice.";
    let productNameCard3 = "iPad";
    let productDescriptionCard3 = "Lovable. Drawable. Magical.";
    let productNameCard4 = "Watch Ultra 2";
    let productDescriptionCard4 = "Next-level adventure.";
    let productNameCard5 = "AirPods Pro";
    let productDescriptionCard5 = "Adaptive Audio. Now playing.";

    let Button1 = "Learn More >";
    let Button2 = "Buy >";
    let Button3 = "See what your device is worth >";

  return (
    <div className='Main3'>
        <section className='Main3-section'>
            <div className="Main3-section-grid-wrapper" id='CARD1'>
                <div className="HomeSection3-Wrapper">
                    <h1>{productNameCard1}</h1>
                    <p>{productDescriptionCard1}</p>
                    <div className="HomeSection-Buttons">
                        <a href="">{Button1}</a>
                        <a href="">{Button2}</a>
                    </div>
                    <img src={CARD1}/>
                </div>
                <div className="HomeSection3-Wrapper" id='CARD2'>
                    <h1>{productNameCard2}</h1>
                    <p>{productDescriptionCard2}</p>
                    <div className="HomeSection-Buttons">
                        <a href="">{Button1}</a>
                        <a href="">{Button2}</a>
                    </div>
                    <img src={CARD2}/>
                </div>
            </div>
            <div className="Main3-section-grid-wrapper" id='CARD3'>
                <div className="HomeSection3-Wrapper">
                    <h1>{productNameCard3}</h1>
                    <p>{productDescriptionCard3}</p>
                    <div className="HomeSection-Buttons">
                        <a href="">{Button1}</a>
                        <a href="">{Button2}</a>
                    </div>
                    <img src={CARD3}/>
                </div>
                <div className="HomeSection3-Wrapper" id='CARD4'>
                    <h1>{productNameCard4}</h1>
                    <p>{productDescriptionCard4}</p>    
                    <div className="HomeSection-Buttons">
                        <a href="">{Button1}</a>
                        <a href="">{Button2}</a>
                    </div>
                    <img src={CARD4}/>
                </div>
            </div>
            <div className="Main3-section-grid-wrapper">
                <div className="HomeSection3-Wrapper" id='CARD5'>
                    <h1>{productNameCard5}</h1>
                    <p>{productDescriptionCard5}</p>
                    <div className="HomeSection-Buttons">
                        <a href="">{Button1}</a>
                        <a href="">{Button2}</a>
                    </div>
                    <img src={CARD5}/>
                </div>
                <div className="HomeSection3-Wrapper" id='CARD6'>
                    <h1>Trade In</h1>
                    <p>Upgrade and save. It's that easy.</p>
                    <div className="HomeSection-Buttons">
                        <a href="">{Button3}</a>
                    </div>
                    <img src={CARD6}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Homepagesection3