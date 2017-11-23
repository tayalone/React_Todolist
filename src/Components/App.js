import React, { Component } from 'react';

import InputArea from './Input_Area'
import ShowList from './Show_List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDoList : [],
      ID : 1
    }
  }

  addNewList(ToDo,ID){
    let done = false
    this.setState({
      toDoList: [{ID,ToDo,done},...this.state.toDoList],
      ID: ID+1,
    })
  }
  deleteList(ID){
    //console.log("log from app: "+ID)
    let newToDoList = this.state.toDoList.filter(list => {
      return list.ID !== ID
    })
    this.setState({
      toDoList: newToDoList
    })
  }
  toggleList(ID,Done){
    //console.log("toggleList: "+ID+" "+Done)
    let tmpToDoList = this.state.toDoList
    let listIndex = tmpToDoList.findIndex((list => list.ID == ID));

    tmpToDoList[listIndex].done = Done
    this.setState({
      toDoList: tmpToDoList
    })
  }
  render() {
    return (
      <div>
        <h1>My To Do List</h1>
          <InputArea addNewList={this.addNewList.bind(this)}
          currentID={this.state.ID}/>
          <ShowList toDoList={this.state.toDoList}
          deleteList={this.deleteList.bind(this)}
          toggleList={this.toggleList.bind(this)}
          />
      </div>
    );
  }
}

export default App;
