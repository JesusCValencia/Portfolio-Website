import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <>
        <header className='home-header'>
        <h2>Contact Information</h2>
        <br/>
        <div className='infocontainer'>
            <br/>
            <ul>
                <li>Email: <a className = "socialLinks"  href = "mailto: jesuscalvalencia@gmail.com">jesuscalvalencia@gmail.com</a></li>
                <br/>
                <br/>
                <li>Github: <a className = "socialLinks" href = "https://github.com/JesusCValencia">JesusCValencia</a></li>
                <br/>
                <br/>        
            </ul>
        </div>
        </header>
        </>
    )
}

export default Contact;
