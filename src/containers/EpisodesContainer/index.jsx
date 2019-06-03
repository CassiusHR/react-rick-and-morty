import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEpisodes } from '../../redux/episodes/thunks'
import anime from 'animejs'

const EpisodesContainer = props => {
    const {
        getEpisodes,
        loading,
        episodes,
        error,
        fetched
    } = props

    useEffect(()=>{
        !fetched && getEpisodes()
    },[])
    useEffect(()=>{
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 600
        })
        .add({
            targets:'.wrapper',
        })
        .add({
            targets:'.episode-item',
            opacity:[0,1],
            translateY: [20,0],
            delay:anime.stagger(100)
        })
    })
    
    return (
        
        <div className="episodes-container page">
            <div className="wrapper">
            <header className="container-header">
                {error}
            </header>
            {loading && (
                <div className="loading-container">
                    Cargando Episodios
                </div>
            )}
            {!loading && episodes.map((episode, index) => (
                
                <div className="episode-item" key={index}>
                    <div>
                        name: {episode.name}
                    </div>
                    <div>
                        episode: {episode.episode}
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const {
        loading,
        entities,
        error,
        fetched
    } = state.episodes

    return {
        loading,
        episodes: entities,
        error,
        fetched
    }
}
const mapDispatchToProps = {
    getEpisodes
}
export default connect(mapStateToProps,mapDispatchToProps)(EpisodesContainer);