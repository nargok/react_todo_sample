import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      tasks: [
        { title: "デフォルトタスク", done: false }
      ]
    }
  }

  handleChangeInput = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleAddButton = () => {
    const title = this.state.inputValue
    this.addTask(title)
  }

  addTask = (title) => {
    const item = { title: title, done: false }
    const tasks = this.state.tasks
    tasks.push(item)
    this.updateTasks(tasks)
    this.clearInputValue()
  }

  handleResetButton = () => {
    const tasks = []
    this.updateTasks(tasks)
    this.clearInputValue()
  }

  handleClickItem = (index) => {
    const tasks = this.state.tasks
    tasks[index].done = !tasks[index].done
    this.updateTasks(tasks)
  }

  updateTasks = (tasks) => {
    this.setState({ tasks: tasks })
  }

  clearInputValue = () => {
    this.setState({ inputValue: "" })
  }

  render() {
    const items = this.state.tasks.map((task, index) => {
      if (task.done === true) {
        return <s key={index} onClick={() => this.handleClickItem(index)}><li>{task.title}</li></s>
      } else {
        return <li key={index} onClick={() => this.handleClickItem(index)}>{task.title}</li>
      }
    })

    return(
      <React.Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput} />
          <button onClick={this.handleAddButton}>Add</button>
          <button onClick={this.handleResetButton}>Reset</button>
        </div>
        <ul>
          {items}
        </ul>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
