import React, { useState } from 'react';

const Footer = () => {
    const [input, setInput] = useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });
    const handleChange = (e) => {
        const newForm = {...input};
        newForm[e.target.name] = e.target.value;
        
        setInput(newForm)
    }
    
    return (
        <div className='bg-dark mt-5 p-3 text-light text-center'>
            <h3 className='mt-5'>Email Us</h3>
            <form action='https://formspree.io/f/xbjqygpq' method="POST">
                <label htmlFor="firstName">First Name</label><br/>
                <input type="text" name='firstName' placeholder="First Name" id="firstName" style={{width:'20%'}} onChange={handleChange}/><br/>
                <label htmlFor="lastName">Last Name</label><br />
                <input type="text" name="lastName" placeholder="Last Name" id="lastName" style={{width:'20%'}} onChange={handleChange}/><br/>
                <label htmlFor="email">Email Adress</label><br />
                <input type="email" name="email" placeholder="Email Adress" id="email" style={{width:'20%'}} onChange={handleChange}/><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="message" cols="35" rows="3" placeholder="Write Something" style={{resize:'vartical'}} onChange={handleChange}></textarea>
                <br />
                <button className="btn btn-primary" type="submit">Submit</button>
                <div id="success" className='text-light'>success</div>
            </form>
        </div>
    );
};

export default Footer;