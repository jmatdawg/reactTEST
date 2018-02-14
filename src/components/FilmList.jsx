import React from 'react';
import Film from '../components/Film';

function FilmList(props) {
    const renderList = props.films.map((film) => {
        return (
            <Film key={film.id} card={film} />
        )});
    return (
        <div>
            { renderList }
        </div>
    )
  }

  export default FilmList;
