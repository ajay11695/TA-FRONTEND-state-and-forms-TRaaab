import React from "react";

class Form2 extends React.Component{
    constructor(props){
        super(props)
        this.fileInput=React.createRef()
        this.state={
            text:'',
            date:'',
            area:''
        }
    }

    handleInput=({target})=>{
        let {name,value}=target
        this.setState({[name]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault() 
        alert(this.fileInput.current.files[0].name)
    }

    render(){
        return (
            <section className="container">
            <form className="form1" onSubmit={this.handleSubmit}>
            
                <div className="flex">
                    <label htmlFor="text">Text Input</label>
                    <input type="text" name="text" id="text" onChange={this.handleInput}  placeholder="Enter text" />
                </div>
                <div className="flex">
                    <label htmlFor="date">Date Input</label>
                    <input type="date" name="date" id="date" onChange={this.handleInput}  />
                </div>
                <div className="flex">
                    <label htmlFor="file">File Input</label>
                    <input type="file" name="file" id="file" ref={this.fileInput}   />
                </div>
                <div className="flex">
                    <label htmlFor="read">Read-Only Input</label>
                    <input type="text" name="read" id="read"   placeholder="This can only be copied" />
                </div>
                <div className="flex">
                    <label htmlFor="file">Disabled Input</label>
                    <input disabled />
                </div>
                <div className="flex">
                    <label htmlFor="area">Textarea</label>
                    <textarea  name="area" id="area" rows={5} onChange={this.handleChange}  ></textarea>
                </div>
                <div className="flex">
                    <label htmlFor="area">Textarea Disabled</label>
                    <textarea disabled rows={5}></textarea>
                </div>
                
            </form>
        </section>
        )
    }
}

export default Form2