import React from 'react';
import Button from './Button';

const ButtonRow = ({buttons}) => {
    return (
        <div className="button-row">
            {buttons.map((name) => <Button name={name}/>)}
        </div>
    )
}

export default ButtonRow;
