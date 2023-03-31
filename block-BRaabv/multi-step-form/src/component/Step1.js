import React from "react"

class Step1 extends React.Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
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
                        <spam><small className="s1">1</small>SignUp</spam>
                        <spam><small>2</small>Message</spam>
                        <spam><small>3</small>Checkbox</spam>
                    </div>
                    <hr />
                    <h3 className="font-2 margin-l-2 margin-b-1">SignUp</h3>
                    <p className="font-1 margin-l-2">Step  {this.props.currentStep}</p>
                    <div className="form-group flex wrap justify-evenly">
                        <div className="flex column flex-45">
                            <label htmlFor="username">Username</label>
                            <input
                            
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter username"
                                value={this.props.username}
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className="flex column flex-45">
                            <label htmlFor="email">Email </label>
                            <input
                                
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter email"
                                value={this.props.email}
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className="flex column flex-45">
                            <label htmlFor="password">Password</label>
                            <input
                                
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                value={this.props.password}
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className="flex column flex-45">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                value={this.props.password}
                                onChange={this.props.handleChange}
                            />
                        </div>
                    </div>
                    <div className="textalign-end">
                        {this.props.nextButton}
                    </div>
                </div>
            </div>

        )
    }
}
export default Step1