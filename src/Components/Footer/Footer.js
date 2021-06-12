import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark mt-5 p-3 text-light text-center'>
            <h3 className='mt-5'>Email Us</h3>
            <form action="">
                <label htmlFor="firstName">First Name</label><br/>
                <input type="text" name='first name' placeholder="First Name" id="firstName" style={{width:'20%'}}/><br/>
                <label htmlFor="lastName">Last Name</label><br />
                <input type="text" name="last name" placeholder="Last Name" id="lastName" style={{width:'20%'}}/><br/>
                <label htmlFor="email">Email Adress</label><br />
                <input type="email" name="email" placeholder="Email Adress" id="email" style={{width:'20%'}}/><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="message" cols="35" rows="3" placeholder="Write Something"></textarea>
            </form>
        </div>
    );
};

export default Footer;