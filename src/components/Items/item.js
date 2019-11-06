import React from 'react';

class Item extends React.Component{
  state = {
    active: false
  }
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div
        onClick={this.props.onClick}
        className={"task " + (this.props.isActive ? 'active' : '')}
      >
        <span className="taskName">
          {this.props.name}
        </span>
          {this.props.comments ?
            <div className="counter">
              {this.props.comments.length}
            </div>
            : ''}
        <button
          className="delete-btn"
          onClick={()=>{this.props.deleteCard()}}
        >Delete</button>
        <hr style={{width: '90%', height: '2px', backgroundColor: '#f8f8f8', border: 'none'}}/>
      </div>
    )
  }
}

export default Item;
