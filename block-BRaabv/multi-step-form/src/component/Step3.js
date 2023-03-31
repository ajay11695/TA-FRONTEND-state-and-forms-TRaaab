import React from "react"

class Step3 extends React.Component {
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
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
                        <spam><small >✅</small>SignUp</spam>
                        <spam><small >✅</small>Message</spam>
                        <spam><small className="s1">3</small>Checkbox</spam>
                    </div>
                    <hr />
                    <h3 className="font-2 margin-l-2 margin-b-1">Checkbox</h3>
                    <p className="font-1 margin-l-2">Step  {this.props.currentStep}</p>
                    <div className="form-group flex ">
                        <div className=" flex column">
                            <label htmlFor="gender">Gender</label>
                            <div className="">
                                <input
                                    type='radio'
                                    id="male"
                                    name="gender"
                                    placeholder="Enter message"
                                    value='male'
                                    onChange={this.props.handleChange}
                                />
                                <span>Male</span>
                            </div>
                            <div className="">
                                <input
                                    type='radio'
                                    id="female"
                                    name="gender"
                                    placeholder="Enter message"
                                    value='female'
                                    onChange={this.props.handleChange}
                                />
                                <span>Female</span>
                            </div>
                        </div>


                    </div>
                    <div className="textalign-end">
                        {this.props.prevButton}
                        <input type="submit" value='Submit' className="margin-l-2"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Step3