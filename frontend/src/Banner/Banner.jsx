import React from 'react'
import logo from '../asset/Group 2345.png'
import '../Banner/style.css'

const Banner = () => {
    return ( 
        <div className='rectangle-1'>
            <div className='banner'>
                <div className='group-2444'>
                    <div className='rect-1'>
                        <div className='header'>
                            <div className="logo">
                                <img src={logo} alt=""/>
                            </div>

                                <ul className='header-menu'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Pages</li>
                                    <li>Contact</li>

                                </ul>


                            <div className='help-btn'>
                                <span className='btn-text'>Looking for help</span>
                            </div>

                            <div className='login-btn'>
                                <span className='log-btn-text'>Login</span>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
