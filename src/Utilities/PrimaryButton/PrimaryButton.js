import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white hover:bg-gradient-to-r hover:from-accent hover:to-info">{children}</button>
    );
};

export default PrimaryButton;