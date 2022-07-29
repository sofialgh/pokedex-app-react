import React, {Component} from 'react';
import Pokedex from './componentes/Pokedex';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="pokedex">
                <Pokedex/>
            </div>
        );
    }
}

export default App;
