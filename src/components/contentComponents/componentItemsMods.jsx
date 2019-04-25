import React from 'react';

import Genre from './componentBlock/componentGenre'

function componentItemsMods (props) {
  // better not to touch it :)
  let itemsMods = {
    title: props.itemsMods.mods.titleInfo.title.$,
    authority: props.itemsMods.mods.name ? props.itemsMods.mods.name.authority : " ",
    genre: props.itemsMods.mods.genre ? props.itemsMods.mods.genre : []
  };

  return (
    <div className="card col-12">
      <div className="row">
        <div className="card-body col-4">
          <img src="https://images.nypl.org/index.php?id=ps_rbk_675&t=f" />
          <h5 className="card-title"></h5>
          <p className="card-text">ComponentItemsMods</p>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush">
            <h4>Info</h4>
            <li className="list-group-item">
              <h5>title: {itemsMods.title}</h5>
            </li>
            <Genre genre={itemsMods.genre} />
          </ul>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a className="card-link" href="#" >link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// componentItemsMods.defaultProps = {
//   itemsMods: {
//     title: "",
//     authority: "",
//     genre: []
//   }
// }


export default componentItemsMods
