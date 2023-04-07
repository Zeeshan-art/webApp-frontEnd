import React from 'react'
import logo from '../asset/Group 2345.png'
import image from '../asset/IMAGE.png'
import '../Banner/style.css'

const Banner = () => {
    return (
        <div className='rectangle-1'>
            <div className='banner'>
                <div className='group-2444'>
                    <div className='rect-1'>
                        <div className='header'>
                            <div className="logo">
                                <img src={logo} alt="" />
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

                    <div className='rect-2'>
                        <div className='group-2385'>
                            <div className='title'>
                                <span className='text-1'>Welcome to the</span>
                                <span className='text-2'>Figma Community</span>
                            </div>
                            <div className='group-2443'>
                                <img src={image} alt='Image' />
                                <div className='rect-search'></div>
                                <div className='side-rect'/>
                                <span className='hint-search'>Search</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Banner
