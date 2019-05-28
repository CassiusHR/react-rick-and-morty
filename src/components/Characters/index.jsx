import React from 'react'
import { useEffect } from 'react'
import anime from 'animejs'
import './style.scss'

const News = () => {
    useEffect(()=>{
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 600
        })
        .add({
            targets:'.wrapper',
        })
        .add({
            targets:'.news-item',
            opacity:[0,1],
            delay:anime.stagger(200)
        })
    },[])
    return(
        <div className="news-container page">
            <div className="wrapper">
                <div className="news-item"></div>
                <div className="news-item"></div>
                <div className="news-item"></div>
                <div className="news-item"></div>
            </div>
        </div>
    )
}
export default News