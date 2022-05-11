import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary upperCase text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;