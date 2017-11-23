import React,{Component} from 'react'
import ListItem from './List_Item'
class ShowList extends Component{
  // clickMe(ID){
  //   this.props.deleteList(ID)
  // }

  render(){
    let items = this.props.toDoList
    return(
      <div>
        <ul>
          {
            items.map((todo) =>
            <li key={todo.ID}>
              <ListItem data={todo}
              deleteList= {this.props.deleteList}
              toggleList = {this.props.toggleList}
              />
            </li> )
          }
        </ul>
      </div>
    )
  }
}

export default ShowList
