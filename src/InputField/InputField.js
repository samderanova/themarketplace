import React from 'react'

export default class InputField extends React.Component {
    render() {
        return(
            <div className="inputField">
                <label>{this.props.label}</label>
                <input type={this.props.type || "text"} className="inputInfo" id={this.props.id} />
                {this.props.additionalElements}
            </div>
        )
    }
}