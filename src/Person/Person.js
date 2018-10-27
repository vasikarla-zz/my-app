import React from 'react';

const person = (props) => {
    return <div>
        <p>Heading : {props.children}</p>
        <p>Name: {props.data.card.name}</p>
        <p>Email: {props.data.card.email}</p>
        <p>Phone: {props.data.card.phone}</p>
    </div>
}

export default person;