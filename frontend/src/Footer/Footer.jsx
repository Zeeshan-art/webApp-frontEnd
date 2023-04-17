import React from 'react'
import '../Footer/style.css'
import logo from '../asset/Group 2345.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='group-2442'>
                <div className='group-2437'>
                    <img src={logo} alt='' />
                    <span className='content'>Say cracking goal why burger do one happy days</span>
                    <span className='content' style={{ color: '#1F113A;', top: '152px', fontSize: '18px' }}>Social</span>
                    <img className='box' />
                    <img className='box' style={{ background: '#00ACED', left: '49px' }} />
                    <img className='box' style={{ background: '#F73434', left: '98px' }} />
                    <img className='box' style={{ background: '#0077B5', left: '147px' }} />
                </div>

                <div className='group-2437' style={{ width: '94', height: '223px', top: '0px', left: '400px' }}>
                    <span className='routes' style={{ top: '0px', color: '#2C2C51', fontSize: '18px' }}>Company</span>
                    <span className='routes' style={{ top: '43px' }}>About Us</span>
                    <span className='routes' style={{ top: '79px' }}>Careers</span>
                    <span className='routes' style={{ top: '115px', width: '92px' }}>How we Work</span>
                    <span className='routes' style={{ top: '151px', width: '94px' }}>Privacy Policy</span>
                    <span className='routes' style={{ top: '187px' }}>News</span>
                </div>
                <div className='group-2437' style={{ width: '94', height: '259px', top: '0px', left: '700px' }}>
                    <span className='routes' style={{ top: '0px', color: '#2C2C51', fontSize: '18px' }}>Products </span>
                    <span className='routes' style={{ top: '43px', width: '78px' }}>Wp Theme</span>
                    <span className='routes' style={{ top: '79px' }}>Business</span>
                    <span className='routes' style={{ top: '115px', width: '92px' }}>Developers</span>
                    <span className='routes' style={{ top: '151px', width: '94px' }}>App Theme</span>
                    <span className='routes' style={{ top: '187px' }}>Professional</span>
                    <span className='routes' style={{ top: '223px' }}>Enterprise</span>
                </div>
                <div className='group-2437' style={{ width: '94', height: '259px', top: '0px', left: '936px' }}>
                    <span className='routes' style={{ top: '0px', color: '#2C2C51', fontSize: '18px' }}>Office Info </span>
                    <span className='routes' style={{ top: '43px', width: '223px', lineHeight: '26px'}}>1200 Morton St
                        Lincoln, Nebraska(NE), 68521</span>
                    <span className='routes' style={{ top: '120px', width: '189px' , color: '#1ABF68' }}>+(364) 763 234 325</span>
                </div>
                <u className='bar'></u>
            </div>
        </div>
    )
}

export default Footer
