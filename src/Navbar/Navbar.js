import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Navbar.scss'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSidebar: false
        }
        this.showSidebar = this.showSidebar.bind(this)
    }
    showSidebar() {
        this.setState( prevState => {
            return {showSidebar: !prevState.showSidebar}
        })
    }
    render() {
        return (
            <nav>
                <i className="material-icons menu" onClick={this.showSidebar}>menu</i>
                <Sidebar show={this.state.showSidebar} changeShow={this.showSidebar}/>
                <Link to="/" className="home">The Marketplace</Link>
                <Link to="/login" className="login"><i className="material-icons">person</i></Link>
            </nav>
        )
    }
}