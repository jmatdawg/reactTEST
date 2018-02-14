import React from 'react';

function Person(props) {
    return (
        <div className="list-group w-50 mx-auto">
        <h3 className="list-group-item list-group-item-warning ">{props.card.name}</h3> 
          <p className="list-group-item p-0.5">Age: {props.card.age}</p>
          <p className="list-group-item p-0.5"> Gender: {props.card.gender}</p>
          <p className="list-group-item p-0.5"> Eye-Color: {props.card.eye_color}</p>
      </div>
    )}

  export default Person;