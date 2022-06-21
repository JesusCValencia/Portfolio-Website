import React from 'react';
import './styles.css';

const About = () => {
    return (
        <>
        <header className='home-header'>
        <h2>Who Am I?</h2>
        <br/>
        <div className='infocontainer'>
            <br/>
            <div className = 'blogItem-wrap'>
                <img className='blogItem-coverAbout' src="Portfolio-Website/assets/images/lofi.gif" alt='about-coverImage' />
            </div>
            <br/>
            <br/>
            <p class = 'thick'>Caffeine free coder, pixel artist enthusiast with a nature of a calm tech practilist. 
                Currently finishing my bachelor's degree in Computer Information Systems at USC Upstate, with an end goal as a SWE.
                
                
                <br/>
                <br/> Will always keep website up to date.
                That being said feel free to test out my lofi themed portfolio website!   
            </p>
            <br/>
            <br/>
        </div>
        </header>
        </>
    )
}


export default About;