import React, { Fragment } from 'react'
import ButtonRow from "../layout/ButtonRow";

const Main = () => {
    const buttons = ["About", "Contact", "Experience"];
    return (
        <Fragment>
            <div className="main">
                <h1>Andrew Lucero</h1>
                <p>I do software engineering and stuff</p>
            </div>
            <ButtonRow buttons={buttons}/>
        </Fragment>
        
    )
}

export default Main;