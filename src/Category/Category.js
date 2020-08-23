import React from 'react'

export default class Category extends React.Component {
    render() {
        return (
            <div className="category">
                {this.props.category ?
                    <div>
                        <i
                            className="material-icons"
                            id={this.props.id}
                            onClick={e => this.props.show(e.target.id)}
                        >keyboard_arrow_down</i>
                        <p>{this.props.title}</p>
                        <ul>
                            {this.props.subcategories}
                        </ul>
                    </div>
                    :
                    <div>
                        <i 
                            className="material-icons"
                            id={this.props.id}
                            onClick={e => this.props.show(e.target.id)}
                        >keyboard_arrow_right</i>
                        <p>{this.props.title}</p>
                    </div>
                }
            </div>
        )
    }
}