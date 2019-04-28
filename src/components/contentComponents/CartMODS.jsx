import React from 'react';

import RightsStatement from './componentBlock/RightsStatement'


function CartMODS(props) {
  let obj = props.array.map((item) => {
    return (
      <div className="card col-12 row" key={item.uuid}>
        <div className="card-body col-4">
          <img alt="photo book"  src={`https://images.nypl.org/index.php?id=${item.imageID}&t=t`} />
          <h5 className="card-title" onClick={props.handleGetRequestItemsMods.bind(this,  item.uuid)}>{item.title}</h5>
          <RightsStatement rightsStatement={item.rightsStatement}/>
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">uuid: {item.uuid}</li>
            <li className="list-group-item">dateDigitized: {item.dateDigitized}</li>
          </ul>
        </div>
        <div className="col-4">
          <a className="card-link" href={item.apiItemDetailURL} >apiItemDetailURL</a>
          <a className="card-link" href={item.apiItemURL} >apiItemURL</a>
          <a className="card-link" href={item.apiUri} >apiUri</a>
          <a className="card-link" href={item.rightsStatementURI} >rightsStatementURI</a>
          <a className="card-link" href={item.itemLink} >item.itemLink</a>
        </div>
      </div>);
  });
  return (
    <div className="row">
      {obj}
    </div>
  );
}

export default CartMODS
