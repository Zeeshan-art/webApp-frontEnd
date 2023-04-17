import React from 'react'
import '../Posts/style.css'
import image from '../asset/IMAGES.png'

const Post = () => {
  return (
    <div className='help-center'>
      <div className='group-2386'>
        <span className='cetagory-posts'>CATEGORIES POSTS</span>
        <span className='help-center-text'>Help Center</span>
      </div>
      <div className='group-2387'>
        <img className='circles' style={{background: '#F1A614'}} />
        <span className='textforPosts'> Grow Your Business </span>
        <span className='posts' style={{color: '#F1A614'}}>406 Posts</span>
        <img src={image} className='images'  alt='image'/>
      </div>
      <div className='group-2388'>
        <img className='circles' style={{background: '#F83B6B'}}/>
        <span className='textforPosts'>Working with Docs</span>
        <span className='posts' style={{color: '#F83B6B'}}>147 Posts</span>
        <img src={image} className='images'  alt='image'/>
      </div>

      <div className='group-2389'>
        <img className='circles' style={{background: '#554BFE'}}/>
        <span className='textforPosts'>Creative Astriol</span>
        <span className='posts' style={{color: '#554BFE'}}>124 Posts</span>
        <img src={image} className='images'  alt='image'/>

      </div>
    </div>
  )
}

export default Post
