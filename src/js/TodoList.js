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
      <div className="w3-container w3-center">
        <ul className="todo-list">
          {this.state.items.map((item ,index) => {
            return (
              <li className="todo-item" key={index}>
                <button className={item.checked ? "todo-checked w3-button w3-green" : "todo-not-checked  w3-button w3-blue"} onClick={() => this.changeItemStatus(index)}>
                  {item.checked ? "✅" : "⭕️"}
                </button>
                <input type="text" name="overview" className="w3-input w3-padding-16 w3-border" onChange={this.changeOverView}></input>
              </li>
            )
          })}
        </ul>
        <div class="todo-buttons">
          <button id="todo-add-item" className="w3-button w3-black" onClick={this.addItem}>
            ADD NEW ITEM
          </button>
        </div>
      </div>
    );
  }
}
export default TodoList;