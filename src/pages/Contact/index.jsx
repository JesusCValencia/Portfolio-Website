import React from 'react';
import './styles.css';

let LogoList = [
    {src: '/Portfolio-Website/assets/images/EmailIcon.png', link: "mailto: jesuscalvalencia@gmail.com"},
    {src: '/Portfolio-Website/assets/images/LinkedinIcon.png', link: "LinkedInIcon"},
    {src: '/Portfolio-Website/assets/images/GithubIcon.png', link: "https://github.com/JesusCValencia"},
];

const Contact = () => {
    return (
        <>
        <header className = 'home-header'><h2>Contact Information</h2>
            <br/>
            <div className='infocontainer'>
                    {
                    LogoList.map((index) => 
                        <a className ='logoStyle' href={index.link}> 
                            <img src={index.src} alt="LogoImage" height = {200} width= {200}/>
                        </a>)
                    }
            </div>
        </header>
        </>
    )
}

export default Contact;
