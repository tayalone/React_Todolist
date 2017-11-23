import React,{Component} from 'react'

class ListItem extends Component{
  constructor(props){
    super(props)
    this.state ={
      done : this.props.data.done,
      ID : this.props.data.ID,
      ToDo : this.props.data.ToDo
    }
  }

  clickMe(ID){
    this.props.deleteList(ID)
  }
  handleInputChange(ID){
    console.log('clickcheckbook')
    let newDone  = !this.state.done
    this.setState({
      done : newDone
    })
    this.props.toggleList(ID,newDone)
  }
  render(){
    return <div>
    <input type="checkbox"
    checked={this.state.done}
    onChange={() => this.handleInputChange(this.state.ID)}
    />
      {this.state.done ? this.state.ToDo+" Jobs Done !!" : this.state.ToDo}
      <button onClick={ () =>this.clickMe(this.state.ID) }>delete</button>
    </div>
  }
}
export default ListItem
