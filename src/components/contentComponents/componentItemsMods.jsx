import React from 'react';


function componentItemsMods (props) {
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
            <li className="list-group-item">item</li>
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

export default componentItemsMods
