import React from "react";
import './stylesheet/style.css'


class App extends React.Component{
  constructor(props){
      super(props)
      this.state={
         active:'basketball.jpg'
      }
      
  }

  render(){
    let labels=['basketball.jpg','cricket.jpg','laptop.jpg','phone.jpg','pubg.jpeg','tiger.jpg']
      return (
        <>
          <div className="buttonBox">
            {labels.map((label)=><button className={this.state.active===label?'active':''} key={label} onClick={()=>{
              this.setState({
                active:label
              })
            }}>{label.split('.').slice(0,1)}</button>)}
          </div>
          <div>
              <img src={`./image/${this.state.active}`} alt={this.state.active}/>
          </div>
        </>
          
      )
  }
}


export default App;
