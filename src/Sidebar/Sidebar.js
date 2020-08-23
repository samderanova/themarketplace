import React from 'react'
import Category from '../Category/Category'
import './Sidebar.scss'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showElectronics: false,
            showFoods: false,
            showHI: false
        }
        this.showSubcategory = this.showSubcategory.bind(this)
    }
    showSubcategory(id) {
        this.setState(prevState => {
            for (var property in prevState) {
                if (String(property) === id) {
                    return {[property]: !prevState[property]}
                }
            }
        })
    }
    render() {
        return (
            <div>
                {this.props.show ? 
                    <div id="sidebar">
                        <header>
                            <h1>Shop by Category</h1>
                            <i className="material-icons" onClick={this.props.changeShow}>arrow_back</i>
                        </header>
                        <Category 
                            category={this.state.showElectronics}
                            id="showElectronics"
                            title="Electronics"
                            show={this.showSubcategory}
                            subcategories={
                                <div>
                                    <li>PCs</li>
                                    <li>Laptops</li>
                                    <li>TVs</li>
                                    <li>Phones</li>
                                    <li>Tablets</li>
                                    <li>Accessories</li>
                                </div>
                            }
                        />
                        <Category
                            category={this.state.showFoods}
                            id="showFoods"
                            title="Food and Drink"
                            show={this.showSubcategory}
                            subcategories={
                                <div>
                                    <li>Meat</li>
                                    <li>Vegetables</li>
                                    <li>Wheats and Grains</li>
                                    <li>Fruits</li>
                                    <li>Snacks</li>
                                    <li>Water</li>
                                    <li>Sodas, Wines, and Other Beverages</li>
                                    <li>Other</li>
                                </div>
                            }
                        />
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}