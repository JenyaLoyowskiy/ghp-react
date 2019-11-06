import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <hr className="bottom-line" style={{width: '100%', height: '2px', backgroundColor: '#f8f8f8', border: 'none'}}/>
        <div className={"profile-image " + this.props.color}></div>
        <div className="message">{this.props.message}</div>
      </div>
    )
  }
}

export default class Comments extends React.Component {
  state = {
    inputData: '',
  }
  constructor(props) {
    super(props)
    this.state = {
        text: "Initial State"
    }
  }
  addComment(event){
    event.preventDefault();
    let { currentTask } = this.props;
    if (currentTask) {
      if (this.state.inputData) {
        console.log(localStorage.getItem(currentTask));
        localStorage.setItem(currentTask, localStorage.getItem(currentTask) ? localStorage.getItem(currentTask) + '<break>' + this.state.inputData : this.state.inputData);
        this.setState({currentComment: this.state.inputData, inputData: ''});
        this.props.updateState('comment');
      }else{
        alert('Enter the message please')
      }
    } else {
      alert('Please select a task!')
    }
  }
  renderTaskName(){
    console.log(this.props.currentTask);
    return this.props.currentTask ? this.props.currentTask : '';
  }
  renderComments(){
    const { currentTask } = this.props;
    if (currentTask) {
      let comments = localStorage.getItem(currentTask) ? localStorage.getItem(currentTask).split('<break>') : '';
      if (comments) {
        let color = 'purple';
        return(
          comments.map(el=>{
            color === 'purple' ? color = 'orange' : color = 'purple'
            return(
              <Comment
                message={el}
                color={color}
              />
            )
          })
        )
      }
    }
  }
  render(){
    return(
      <div className="comments">
        <h1>{this.renderTaskName()}</h1>
        <div className="comment-wrapper">
          {
            this.renderComments()
          }
        </div>
        <form
        className="comment-subm"
        onSubmit={(event)=>{
          this.addComment(event);
        }}
        >
          <input
            type="text"
            value={this.state.inputData}
            onChange={(event)=>{
              this.setState({inputData: event.target.value})
            }}
          />
        </form>
      </div>
    )
  }
}
