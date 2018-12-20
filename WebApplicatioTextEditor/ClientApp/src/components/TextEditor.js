import React, { Component } from 'react';
import './TextEditor.css';

export class TextEditor extends Component {
    displayName = TextEditor.name

    constructor(props) {
        super(props);
        this.state = {
            valueTextMain: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ valueTextMain: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.valueTextMain);
        event.preventDefault();//prevents reload
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea id='textAreaMain' value={this.state.valueTextMain} onChange={this.handleChange} />
                    <input type="submit" value="senden" />
                </form>
            </div>
            );
    }


}