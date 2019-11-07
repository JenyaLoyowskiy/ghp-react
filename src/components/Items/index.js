import React from 'react';
import Item from './item.js';
import Comments from '../Comments';

export default class Items extends React.Component {
  state = {
    inputData: '',
    data: localStorage.getItem('tasks') ? localStorage.getItem('tasks').split(',') : '',
    activeItem: undefined
  }
  constructor(props){
    super(props);
  }
  updateState(text){
    this.setState({text})
  }
  addCard(){
    let { data, inputData } = this.state;
    if (inputData) {
      localStorage.setItem('tasks', data ? data+ ',' + inputData : inputData);
      this.setState({data: localStorage.getItem('tasks').split(','), inputData: ''});
    } else {
      alert('Enter the name of the task!');
    }
  }
  deleteCard(elem){
    localStorage.removeItem(elem);
    if (this.state.data.length > 1) {
      let newData = this.state.data.filter(el=>(el !== elem));
      this.setState({data: newData});
      localStorage.setItem('tasks', newData);
    }else {
      this.setState({data: ''});
      localStorage.removeItem('tasks');
    }
    if (elem === this.state.activeItem) {
      this.setState({activeItem: undefined})
    }
  }
  render(){
    return(
      <div style={{display: 'contents'}}>
        <div className="items-wrapper">
          <h1>Items</h1>
          <form
            style={{marginBottom: '10px'}}
            onSubmit={(event)=>{
              this.addCard();
              event.preventDefault();
            }}
          >
            <input
              type="text"
              value={this.state.inputData}
              placeholder="Type name here..."
              onChange={(event)=>{
                this.setState({inputData: event.target.value})
              }}
            />
            <button>Add new</button>
          </form>
          {
            this.state.data ? this.state.data.map(el=>{
              let comments = localStorage.getItem(el) ? localStorage.getItem(el).split('<break>') : null ;
              return(
                <Item
                  name={el}
                  comments={comments}
                  key={Math.random()}
                  deleteCard={()=>{this.deleteCard(el)}}
                  onClick={(event)=>{if(event.target.classList[0] !== 'delete-btn'){this.setState({activeItem: el})}}}
                  isActive={this.state.activeItem === el}
                />
              )
            }) : ''
          }
        </div>
        <Comments
          currentTask={this.state.activeItem}
          updateState={(text)=>{this.updateState(text)}}
        />
      </div>
    )
  }
}
