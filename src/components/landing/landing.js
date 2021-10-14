import React from 'react'
import Background from './background'
import Banner from './banner'
import Courses from './courses'
import Navbar from './navbar/navbar'
import Welcome from './popular'
import Testimonials from './testimonials'

const landing = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Welcome/>
            <Background/>
            <Courses/>
            <Testimonials/>
        </div>
    )
}

export default landing
