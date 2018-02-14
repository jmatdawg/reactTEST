import React from 'react';

function Film(props) {
    return (
      <div className="list-group w-50 mx-auto">
        <h3 className="list-group-item list-group-item-success ">{props.card.title}</h3> 
        <p className="list-group-item p-0.5">Title: {props.card.title}</p>
          <p className="list-group-item p-0.5"> Year: {props.card.release_date}</p>
          <p className="list-group-item p-0.5"> Description: {props.card.description}</p>
      </div>
    )}

  export default Film;