import React from 'react'
import { Carousel } from 'antd';

const HomeCarousel = () => {
  return (
    <div>
        <Carousel>
            <div className='bg-slate-500'><h1>Slide 1</h1></div>
            <div className='bg-slate-500'><h1>Slide 2</h1></div>
            <div className='bg-slate-500'><h1>Slide 3</h1></div>
        </Carousel>
    </div>
  )
}

export default HomeCarousel