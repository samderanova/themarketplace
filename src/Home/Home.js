import React from 'react'
import './Home.scss'

function renderSlide(slideNo, elements) {
    return (
        <div className="slide" id={slideNo}>
            {elements}
        </div>   
    ) 
}
var slides = 
[
    renderSlide(1, <h1>This is slide 1</h1>), 
    renderSlide(2, <h1>This is slide 2</h1>), 
    renderSlide(3, <h1>This is slide 3</h1>)
]
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: slides[0]
        }
        this.changeSlide = this.changeSlide.bind(this)
    }
    changeSlide(e) {
        if (e.target.id === "left") {
            this.setState(prevState => {
                var prevStateID = prevState.slide.props.id
                if (prevStateID === 1) {
                    return {slide: slides[slides.length-1]}
                }
                else {
                    return {slide: slides[prevStateID-1]}
                }
            })
        }
        else {
            this.setState(prevState => {
                var prevStateID = prevState.slide.props.id
                if (prevStateID === 3) {
                    return {slide: slides[0]}
                }
                else {
                    return {slide: slides[prevStateID]}
                }
            })
        }
    }
    render() {
        return (
            <div>
                <div className="slideshow">
                    <div id="slideToShow">
                        {this.state.slide}
                    </div>
                    <i className="material-icons" id="left" onClick={this.changeSlide}>keyboard_arrow_left</i>
                    <i className="material-icons" id="right" onClick={this.changeSlide}>keyboard_arrow_right</i>
                </div>
            </div>
        )
    }
}