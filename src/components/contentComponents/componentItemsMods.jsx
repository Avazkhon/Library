import React from 'react';

import Genre from './componentBlock/componentGenre'

function componentItemsMods (props) {
  // better not to touch it :)
  let itemsMods = {
    imageID: props.itemsMods.imm_captures.capture.imageID ? props.itemsMods.imm_captures.capture.imageID.$ : props.itemsMods.imm_captures.capture[0].imageID.$,
    title: props.itemsMods.mods.titleInfo.title ? props.itemsMods.mods.titleInfo.title.$ : props.itemsMods.mods.titleInfo[0].title.$,
    authority: props.itemsMods.mods.name ? props.itemsMods.mods.name.authority : " ",
    genre: props.itemsMods.mods.genre ? props.itemsMods.mods.genre : [],
    uuid: props.itemsMods.imm_captures.capture.uuid ? props.itemsMods.imm_captures.capture.uuid.$ : props.itemsMods.imm_captures.capture[0].uuid.$,
    itemLink: props.itemsMods.root_captures.capture.itemLink ? props.itemsMods.root_captures.capture.itemLink.$ :props.itemsMods.root_captures.capture[0].itemLink.$,
    rightsStatementURI: props.itemsMods.sibling_captures.capture.rightsStatementURI ? props.itemsMods.sibling_captures.capture.rightsStatementURI.$ : props.itemsMods.sibling_captures.capture[0].rightsStatementURI.$
  };

  return (
    <div className="card col-12">
      <div className="row">
        <div className="card-body col-4">
          <img src={`https://images.nypl.org/index.php?id=${itemsMods.imageID}&t=r`} /><br />
          <a className="card-link" target="_blank" href={itemsMods.itemLink}>more image</a>
          <p className="card-text">ComponentItemsMods</p>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush">
            <h4>Info</h4>
            <li className="list-group-item">
              <h5>Title:</h5> {itemsMods.title}
            </li>

            <Genre genre={itemsMods.genre} />

            <li className="list-group-item">
              <h5>uuid:</h5> {itemsMods.uuid}
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush">
            <h4>Linck</h4>
            <li className="list-group-item">
              <a className="card-link" target="_blank" href={itemsMods.rightsStatementURI} >Rights statement</a>
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
