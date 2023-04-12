import React from 'react';

const View = ({ view}) => {
    return (
        <div>
            <h1>{view.company_name}</h1>
            <img src={view.company_logo} alt="" />
        </div>
    );
};

export default View;