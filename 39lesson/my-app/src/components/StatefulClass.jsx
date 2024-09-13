import React from 'react';

class StatefulClass extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'Class component text'
        }
    }
    updateMessage = (newmessage) => {
        this.setState({message: newmessage});
    }
    render() {
      return ( <div>
        <p>{this.state.message}</p>
        <input onChange={e => this.updateMessage(e.target.value)} />
    </div>)
    }
  }

  export default StatefulClass;