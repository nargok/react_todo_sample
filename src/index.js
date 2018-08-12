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

  render() {
    const items = this.state.tasks.map((task, index) => {
      return <li key={index}>{task.title}</li>
    })

    return(
      <React.Fragment>
        <div>
          <input type="text" />
          <button>Add</button>
          <button>Reset</button>
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
