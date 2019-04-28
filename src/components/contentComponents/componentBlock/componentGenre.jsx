import React from 'react';

function Genre(props) {
  // if props.genre.authority === complex
  if (props.genre.authority === undefined) {
  	const liArr = props.genre.map((item, index) => <li className="list-group-item" key={item + index}>{item.$}</li>);

    return (
      <ul className="list-group list-group-flush">
        <h5>Genre</h5>
        {liArr}
      </ul>
    );
  }

  // if props.genre.authority === simple;
  if (props.genre.authority !== undefined) { return (
    <li className="list-group-item">
    Genre: {props.genre.$}
    </li>);
  }

  return (
    <li className="list-group-item" />
  );
}

export default Genre;
