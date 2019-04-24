import React from 'react';


function CartMODS (props) {
  let obj = props.array.map((item)=>{
    return (
      <div className="card col-4" key={item.uuid}>
        <div className="card-body">
          <img src="https://images.nypl.org/index.php?id=ps_rbk_675&t=f"  alt="photo book" />
          <h5 className="card-title" onClick={props.handleGetRequestItemsMods.bind(this,  item.uuid)}>{item.title}</h5>
          <p className="card-text">{item.rightsStatement}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">imageID: {item.imageID}</li>
          <li className="list-group-item">uuid: {item.uuid}</li>
          <li className="list-group-item">dateDigitized: {item.dateDigitized}</li>
        </ul>
        <div className="card-body">
          <a className="card-link" href={item.apiItemDetailURL} >apiItemDetailURL</a>
          <a className="card-link" href={item.apiItemURL} >apiItemURL</a>
          <a className="card-link" href={item.apiUri} >apiUri</a>
          <a className="card-link" href={item.rightsStatementURI} >rightsStatementURI</a>
          <a className="card-link" href={item.itemLink} >item.itemLink</a>
        </div>
      </div>
    )
  })
  
  return (
    <div className="row">
      {obj}
    </div>
  )
}

export default CartMODS
