import React from 'react'
import '../Services/style.css'
import icon from '../asset/icon1.png'
import icon2 from '../asset/icon2.png'
import icon3 from '../asset/26 1.png'
import icon4 from '../asset/27 3.png'
import icon5 from '../asset/28 1.png'
import icon6 from '../asset/29 1.png'

const Services = () => {
    return (
        <div className='services'>
            <div className='group-2445'>
                <span className='text-services'>services</span>
                <span className='get-involved'>Get Involved</span>

                <div className='group-2447'>
                    <span className='green-bar'></span>
                    <img className='icon' src={icon} />
                    <span className='heading'>Pixel Precision</span>
                    <span className='short-line'>Say cracking goal why burger do one happy days</span>
                </div>
                <div className='groups'>
                    <img className='icon' src={icon2} />
                    <span className='heading'>Attend an Event</span>
                    <span className='short-line'>Say cracking goal why burger do one happy days</span>
                </div>
                <div className='groups'style={{left: '790px'}}>
                    <img className='icon' src={icon3} alt='' />
                    <span className='heading'>Cloud Service</span>
                    <span className='short-line'>Say cracking goal why burger do one happy days</span>
                </div>

                <div className='groups' style={{top: '576px'}}>
                    <img className='icon' src={icon3} alt='' />
                    <span className='heading'>Content Analyzer</span>
                    <span className='short-line'>Say cracking goal why burger do one happy days</span>
                </div>


                <div className='groups' style={{top: '576px',left: '400px'}}>
                    <img className='icon' src={icon5} alt='' />
                    <span className='heading'>Custom Reports</span>
                    <span className='short-line'>Say cracking goal why burger do one happy days</span>
                </div>

                <div className='groups' style={{top: '576px', left:'790px'}}>
                    <img className='icon' src={icon6} alt='' />
                    <span className='heading'>Download Software</span>
                    <span className='short-line'>Say cracking goal why burger do one happy days</span>
                </div>
            </div>
        </div>      
  )
}

export default Services
