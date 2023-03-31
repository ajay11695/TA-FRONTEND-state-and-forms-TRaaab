import React from "react"

class Step2 extends React.Component {
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="flex">
                <figure className="flex-50">
                    <img src='./image/istoc.jpg' />
                </figure>
                <div className="flex-50 f-step-1">
                    <div className="flex justify-evenly">
                        <spam><small className="">✅</small>SignUp</spam>
                        <spam><small className="s1">2</small>Message</spam>
                        <spam><small>3</small>Checkbox</spam>
                    </div>
                    <hr />
                    <h3 className="font-2 margin-l-2 margin-b-1">Message</h3>
                    <p className="font-1 margin-l-2">Step  {this.props.currentStep}</p>
                    <div className="form-group flex">
                        <div className="flex column ">
                            <label htmlFor="message">Message</label>
                            <textarea  
                                rows={8}
                                cols={70}
                                id="message"
                                name="message"
                                placeholder="Enter message"
                                value={this.props.message}
                                onChange={this.props.handleChange}
                                ></textarea>
                        </div>


                    </div>
                    <div className="textalign-end">
                        {this.props.prevButton}
                        {this.props.nextButton}
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2