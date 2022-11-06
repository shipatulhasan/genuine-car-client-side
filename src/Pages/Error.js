import React from 'react';
import img from '../asset/Error.png'

const Error = () => {
    return (
        <div className='min-h-[96h] md:min-h-screen flex items-center justify-center'>
            <img src={img} alt="" />
        </div>
    );
};

export default Error;