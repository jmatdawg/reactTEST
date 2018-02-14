import React from 'react';
import Person from '../components/Person';

function PeopleList(props) {
    const renderList = props.people.map((people) => {
        return (
            <Person key={people.id} card={people} />
        )});
    return (
        <div>
            { renderList }
        </div>
    )
  }

  export default PeopleList;