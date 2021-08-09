import React from 'react';

/**
 * Todoリスト作成
 */
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items :[]
    };
  }
  addItem = () => {
    // initialize variables
    const overview = "";
    const date = "";
    const checked = false;

    // add new item
    const currentItems = this.state.items;
    currentItems.push({overview ,date ,checked});
    this.setState({items: currentItems});
  }
  changeItemStatus = (index) =>{
    let currentItems = [...this.state.items];
    currentItems[index].checked = !currentItems[index].checked;
    this.setState({items: currentItems});
  }
  changeOverView = (e,index) =>{
    let currentItems = [...this.state.items];
    currentItems[index].overview = e.target.value;
    this.setState({items: currentItems});
  }
  removeItem = () => {
    let currentItems = [...this.state.items];

    let i;
    let removeTargetArray = [];
    for(i = 0; i<=currentItems.length - 1; i++){
      if(currentItems[i].checked){
        removeTargetArray.push(i);
      }
    }
    for(i = removeTargetArray.length; i--;){
      currentItems.splice(removeTargetArray[i],1);
    }
    this.setState({items: currentItems});
  }

  render(){
    const todoItems = this.state.items.map((item ,index) => {
      return (
        <li className="todo-item w3-row w3-padding-16" key={index}>
            <input type="checkbox" className="todo-status-button w3-col" checked={item.checked} onChange={() => this.changeItemStatus(index)}></input>
            <input type="text" name="overview" value={item.overview} className="todo-over-view w3-input w3-col w3-border" onChange={(e) => this.changeOverView(e,index)}></input>
        </li>
      )
    })
    return (
      <div className="w3-container w3-center">
        <div>
          <button id="todo-remove-item-image" className="w3-right w3-button todo-remove-item" onClick={this.removeItem}>
          </button>
        </div>
        <ul className="todo-list w3-table">
          {todoItems}
        </ul>
        <div className="todo-buttons">
          <button id="todo-add-item" className="w3-button w3-black" onClick={this.addItem}>
            ADD NEW ITEM
          </button>
        </div>
      </div>
    );
  }
}
export default TodoList;