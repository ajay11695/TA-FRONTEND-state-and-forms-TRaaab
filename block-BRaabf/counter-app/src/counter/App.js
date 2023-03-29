import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 5,
            step:5,
            max:15
        }
    }
    handleIncrement = () => {
        let {counter,step,max}=this.state
        this.setState({
            counter:counter+step>max?counter:counter+step
        })
    }
    handleDecrement = () => {
        this.setState({
            counter:this.state.counter-this.state.step
        })
    }
    handleReset = () => {
        this.setState({
            counter:0
        })
    }
    render() {
        return (
            <>
                <h1 className="textalign">Counter App</h1>
                <div className="container">
                    <h2 className="textalign">{this.state.counter}</h2>
                    <div className="flex">
                        <div className="flex-40">
                            <p className="textalign">Steps</p>
                            <div className="flex">
                                {[5, 10, 15].map((step) =>
                                    <button key={step} onClick={()=>this.setState({step:step})} className={this.state.step===step?'active':''}>
                                        {step}</button>
                                )}
                            </div>
                        </div>
                        <div className="flex-40">
                            <p className="textalign">Max value</p>
                            <div className="flex">
                                {[15, 100, 200].map((step) =>
                                    <button key={step} onClick={()=>this.setState({max:step})} className={this.state.max===step?'active':''}>
                                        {step}</button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="btn" onClick={this.handleIncrement}>Increment</button>
                        <button className="btn" onClick={this.handleDecrement}>Decrement</button>
                        <button className="btn" onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            </>
        )
    }
}

export default App