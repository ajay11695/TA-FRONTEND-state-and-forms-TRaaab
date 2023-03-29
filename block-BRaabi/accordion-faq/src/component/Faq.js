import React from 'react'
import questions from '../data.js'

class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: null
        }
    }



render() {
    return (
        <div className='container'>
            <h1>Accordion FAQ</h1>
            {questions.map((ques, i) => {
                return (
                    <>
                        <div className={this.state.activeIndex === i ? 'b-green flex' : 'b-yellow flex'}>
                            <h2>{ques.Q}</h2>
                            <p onClick={() =>{
                                this.setState({
                                     activeIndex: this.state.activeIndex===i?null:i
                                     })
                                }}>{this.state.activeIndex === i ? '👆' : '👇'}</p>
                        </div>
                        {this.state.activeIndex === i && <h3 >{ques.A}</h3>}
                    </>
                )
            })}
        </div>
    )
}
}

export default Faq