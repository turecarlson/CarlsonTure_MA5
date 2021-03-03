import React from 'react';
import ParentCell from './components/ParentCell';

import './App.css';

export default class App extends React.Component {

    render() {
        document.title = 'MA5 - Ture Carlson'; //Set the page title in the document
        return (
            <div className='app'>
                <ParentCell />
            </div>
        );
    }
}