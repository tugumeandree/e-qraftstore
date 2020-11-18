import React from 'react'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'

import './slider.scss'
const slider = () => {
    return (
            <div id="slider" className="slider">
                <figure>
                    <img src={banner1} alt="none"/>
                    <img src={banner2} alt="none"/>
                    <img src={banner3} alt="none"/>
                    <img src={banner4} alt="none"/>
                    <img src={banner5} alt="none"/>
                </figure>
            </div>
    )
}

export default slider
