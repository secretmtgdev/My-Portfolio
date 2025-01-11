import React from 'react';

const Education = () => {
    return (
        <>
            <h2>Education</h2>
            <div className='float-container'>
                <div className="left">
                    <div>University of Washington, Seattle</div>
                    <div>Professional Continuing Education in Computer Science</div>
                </div>
                <div className="right">01/2025 - present</div>
            </div>
            <div className='float-container'>
                <div className="left">
                    <div>University of Washington, Tacoma</div>
                    <div>BS in Computer Science</div>
                </div>
                <div className="right">01/26 - 12/2018</div>
            </div>
            <div className='float-container'>
                <div className="left">
                    <div>University of Washington, Seattle</div>
                    <div>Biophysics</div>
                </div>
                <div className="right">09/2014 - 12/2015</div>
            </div>
        </>
    )
}

export default Education;