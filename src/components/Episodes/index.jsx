import React from 'react'
import { useEffect } from 'react'
import anime from 'animejs'
import './style.scss'

const About = () => {
    useEffect(()=>{
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 600
        })
        .add({
            targets:'.box-container',
            opacity:[0,1]
        })
        .add({
            targets: '.box',
            delay: anime.stagger(200),
            translateY:[20,0],
            opacity: [0,1],
        })
    },[])
    return(
        <div className="about-container page">
            <div className="box-container wrapper">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    )
}
export default About