import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Img from IMG are accessible from "public" */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React Training</h3>
        </div>
    );
};

export default Logo;