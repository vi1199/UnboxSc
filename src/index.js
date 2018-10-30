import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from './routes/Root';

class App extends Component {
    render() {
        return(
            <Root/>
        )
    }
}

export default App