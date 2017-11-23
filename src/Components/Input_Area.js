import React,{Component} from 'react'

class InputArea extends Component{
  constructor(props){
    super(props)
    this.state = {
      newList : ""
    }

  }

onChangeHandle(e){
  this.setState({
    newList: e.target.value
  })
}
onSubmitHandle(e){
  e.preventDefault();
  //set newlist to todo list
  this.props.addNewList(this.state.newList,this.props.currentID)
  //reset state.newList to ""
  this.setState({
    newList: ""
  })
}

  render(){
    return (
      <form onSubmit={this.onSubmitHandle.bind(this)}>
      <input type="text"
      onChange={this.onChangeHandle.bind(this)}
      value={this.state.newList}
      />
      <button type="submit"> Add new list</button>
      </form>
    )
  }
}

export default InputArea
