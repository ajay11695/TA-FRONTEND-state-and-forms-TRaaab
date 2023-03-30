import React from "react"
// import { Slider } from 'react-semantic-ui-range'
// import { Segment, Grid, Label } from 'semantic-ui-react';

class Font extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            inputRange: 50
        }
    }

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    handleOnChangeOnSlider = (event) => {
        // console.log(event.target.value);
        this.setState({
            inputRange: event.target.value,
        })

    }

    render() {
        return (
            <main className="container">
                <div className="input-box ">
                    <input placeholder="Enter the text" onChange={this.handleChange} className='text' />

                    <div className="select">
                        <label>{this.state.inputRange}px ^</label>
                        <input type='range' onChange={this.handleOnChangeOnSlider}  min='50' max='300'/>
                    </div>
                    {/* <Grid.Column width={16}>
                        <Segment>
                            <h1>Select the font size</h1>
                            <p>
                                <Slider color="red" inverted={false}
                                    settings={{
                                        start: this.state.inputRange,
                                        min: 1,
                                        max: 100,
                                        step: 1,
                                        onChange: (value) => {
                                            this.handleOnChangeOnSlider(value)
                                        }
                                    }} />
                            </p>
                            <Label color="red">{this.state.inputRange}px</Label>
                        </Segment>
                    </Grid.Column> */}

                </div>
                <div className="all-box">
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>Open-Sans</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="open-sans">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>roboto</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="roboto">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>poppins</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="poppins">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>oxygen</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="oxygen">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>nunito</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="nunito">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>plus</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="plus">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>inter</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="inter">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>barlow</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="barlow">{this.state.inputText}</h2>
                    </div>
                    <div className="font-box">
                        <div className="flex space-between"><span>font-family</span> <span>bitter</span></div>
                        <h2 style={{ fontSize: this.state.inputRange+'px' }} className="bitter">{this.state.inputText}</h2>
                    </div>
                </div>

            </main>
        )
    }
}

export default Font