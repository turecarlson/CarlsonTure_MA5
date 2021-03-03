import React from 'react';
import './css/ChildCell.css';

export default class ChildCell extends React.Component {

    state = {
        cellColor: 'white'
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        if(this.state.cellColor == 'white') {
            this.setState({cellColor: 'black'});
            this.props.incFun();
        } else {
            this.setState({cellColor: 'white'});
            this.props.decFun();
        }
    }

    render() {
        return (
            <div onClick={this.handleClick} 
                className={'child-cell cell-color-' + this.state.cellColor}
            />
        );
    }
}