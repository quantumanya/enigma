import React, { useState, useEffect } from 'react';
import './Signup.css';

const Signup = () => {
    useEffect(() => {
        // Ensure MailerLite script is loaded
        if (window.ml) {
            window.ml('account', '715471');
        }
    }, []);

    return (
        <div className="signup-container">
            <div className="ml-embedded" data-form="LzNfYU"></div>
        </div>
    );
};

export default Signup;