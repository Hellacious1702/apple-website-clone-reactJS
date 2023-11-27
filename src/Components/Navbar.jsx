import React from 'react'
import './StyleSheets/Navbar.css'
import AppleLogo from './Assets/Icons/appleLogo.svg'

import SearchIcon from './Assets/Icons/search_FILL0_wght400_GRAD0_opsz24.svg'
import CartIcon from './Assets/Icons/work.svg'

const Navbar = () => {
  return (
    <div className='Nav-Main'>
        <div className="Nav-Wrapper">
            <div className="Brand">
                <img src={AppleLogo}/>
            </div>
            <div className="Nav-Menus">
                <a href="">Store</a>
                <a href="">Mac</a>
                <a href="">iPad</a>
                <a href="">iPhone</a>
                <a href="">Watch</a>
                <a href="">AirPods</a>
                <a href="">TV & Home</a>
                <a href="">Entertainment</a>
                <a href="">Accessories</a>
                <a href="">Support</a>
            </div>
            <div className="Nav-Buttons">
                <img src={SearchIcon} className='icons'/>  
                <img src={CartIcon} className='icons'/> 
            </div>
        </div>
    </div>
  )
}

export default Navbar