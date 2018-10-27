import React from 'react';

const person = (props) => {
    return <div>
        <p onClick={props.click}>Name: {props.name} and Age : {props.age} </p>
    </div>
}

export default person;