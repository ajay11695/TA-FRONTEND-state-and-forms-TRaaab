import React from "react";

class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            errors: {
                username: '',
                email: '',
                password: '',
                confirmpassword: ''
            }
        }
    }

    validateEmail(email){
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;

        return regex.test(email)
    } 

    handleInput=({target})=>{
        // console.dir(target)
        let {name,value}=target
        let errors=this.state.errors

        switch (name) {
            case 'username':
                errors.username=value.length<4?'username must be at least 4 character':''
                break;
            case 'email':
                errors.email=this.validateEmail(value)?'':'Email is not valid'
                break;
            case 'password':
                errors.password=value.length<6?'password must be at least 6 character':''
                break;
            case 'confirmpassword':
                 errors.confirmpassword=value?this.state.password===value?'':'password is not match':'password2 is required'
                break;
        
            default:
                break;
        }

        this.setState({
            errors,[name]:value
        })
    }
   
     handleSubmit=(event)=>{
        event.preventDefault()
        alert('user information:-'+this.state.username+this.state.email)
     }

    render() {
        let {username ,email,password ,confirmpassword}=this.state.errors
        return (
            <section className="container">
                <form className="form1" onSubmit={this.handleSubmit}>
                    <h1 className="textalign">Register With Us</h1>
                    <div className="flex">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" onChange={this.handleInput} className={username&&'error'} placeholder="Enter username" />
                        <span>{username}</span>
                    </div>
                    <div className="flex">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleInput} className={email&&'error'} placeholder="Enter email" />
                        <span>{email}</span>
                    </div>
                    <div className="flex">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleInput} className={password&&'error'} placeholder="Enter password" />
                        <span>{password}</span>
                    </div>
                    <div className="flex">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="confirmpassword" name="confirmpassword" id="confirmpassword" onChange={this.handleInput} className={confirmpassword&&'error'} placeholder="Enter password again" />
                        <span>{confirmpassword}</span>
                    </div>
                    <div className="flex">
                        <input type="submit" value='Submit' />
                    </div>
                </form>
            </section>
        )
    }
}

export default Form1