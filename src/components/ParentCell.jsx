import React from 'react';
import ChildCell from './ChildCell';
import './css/ParentCell.css';

export default class ParentCell extends React.Component {
    
    state = {
        activeCellCount: 0
    };

    constructor(props) {
        super(props);
        this.incCount = this.incCount.bind(this);
        this.decCount = this.decCount.bind(this);
    }

    getActiveCellCount() {
        return this.state.activeCellCount;
    }

    incCount() {
        this.setState({
            activeCellCount: ++this.state.activeCellCount
        });
    }

    decCount() {
        this.setState({
            activeCellCount: --this.state.activeCellCount
        });
    }

    render() {
        return(
            <div className='parent-cell'>
                <h1>Count: {this.getActiveCellCount()}</h1>
                <div className='child-containter'>
                    <ChildCell incFun={this.incCount} decFun={this.decCount} />
                    <ChildCell incFun={this.incCount} decFun={this.decCount} />
                    <ChildCell incFun={this.incCount} decFun={this.decCount} />
                    <ChildCell incFun={this.incCount} decFun={this.decCount} />
                </div>
            </div>
        )
    }

}
