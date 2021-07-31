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
    this.setState({items: currentItems})
  }
  changeItemStatus = (index) =>{
    const currentItems = [...this.state.items];
    currentItems[index].checked = !currentItems[index].checked;
    this.setState({items: currentItems})
  }
  changeOverView = () =>{

  }
  render(){
    return (
    <div id="todo-box">
      <ul className="todo-list">
        {this.state.items.map((item ,index) => {
          return (
            <li className="item" key={index}>
              <button className={"status" + item.checked ? "checked" : "not-checked"} onClick={() => this.changeItemStatus(index)}>{item.checked ? "✅" : "⭕️"}</button>
              <input type="text" name="overview" className="overview" onChange={this.changeOverView}></input>
            </li>
          )
        })}
      </ul>
      <div className="buttons">
        <button className="add-item" onClick={this.addItem}>
          ADD NEW ITEM
        </button>
      </div>
    </div>
    );
  }
}
export default TodoList;