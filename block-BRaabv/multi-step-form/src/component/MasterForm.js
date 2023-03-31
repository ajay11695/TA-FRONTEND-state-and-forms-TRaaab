import React from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            email: '',
            username: '',
            password: '',
            message:'',
            gender:''
        }
    }

    // Use the submitted data to set the state
    handleChange=(event) =>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password ,message,gender} = this.state
        alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}\n
      Message:${message}\n
      Gender:${gender}`)
    }


    // _next and _previous functions will be called on button click

    next=() =>{
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    prev=() =>{
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    // The "next" and "previous" button functions

    get previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this.next}>
                    Next
                </button>
            )
        }
        return null;
    }

    // Render UI will go here...
    render() {
        let { username ,email ,password ,currentStep,message,gender}=this.state
        return (
            <React.Fragment>
                {/* <h1>Multi Step Form</h1> */}
               {/* <h3>Step {currentStep}</h3>  */}
                <form onSubmit={this.handleSubmit} className="form">

              {/* // Render the form steps and pass in the required props */}
                    <Step1
                        currentStep={currentStep}
                        handleChange={this.handleChange}
                        username={username}
                        email={email}
                        password={password}
                        nextButton={this.nextButton}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        message={message}
                        nextButton={this.nextButton}
                        prevButton={this.previousButton}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        gender={gender}
                        prevButton={this.previousButton}
                    />

                    {/* {this.previousButton}
                    {this.nextButton} */}
                </form>
            </React.Fragment>
        )
    }

}

export default MasterForm