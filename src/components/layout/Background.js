import React, { Fragment } from 'react';

const Background = ({children}) => {
    return (
        <Fragment>
            <div className="background">
                <div className="overlay"/>
                {children}
            </div>
        </Fragment>
    )
}

export default Background;
