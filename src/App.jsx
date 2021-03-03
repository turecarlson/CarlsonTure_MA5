import React from 'react';
import ParentCell from './components/ParentCell';

import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <ParentCell />
            </div>
        );
    }
}