import React from 'react';

const Item = props => (
  <div
    onClick={props.onClick}
    className={"task " + (props.isActive ? 'active' : '')}
  >
    <span className="taskName">
      {props.name}
    </span>
      {props.comments ?
        <div className="counter">
          {props.comments.length}
        </div>
        : ''}
    <button
      className="delete-btn"
      onClick={props.deleteCard}
    >Delete</button>
    <hr/>
  </div>
)

export default Item;
