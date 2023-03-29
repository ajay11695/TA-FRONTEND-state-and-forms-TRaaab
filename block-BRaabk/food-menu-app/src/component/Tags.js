import React from "react";
// let data=require('../data.json')
import Data from '../data.json'

class Tags extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            activeTag:'all'
        }
    }

    handleTag=(category)=>{
        this.setState(()=>{
           return {
            activeTag:category
           }
        })
    }

    render() {
        let catagories=Data.map(category=>category.category)
        let allCategory=Array.from(new Set(catagories))
        allCategory.unshift('all')
        let alldis;
        console.log(this.state.activeTag)
        if(this.state.activeTag==='all'){
            alldis=Data
        }else{
             alldis=Data.filter(dis=>this.state.activeTag===dis.category)
        }

        return (
            <main className="container">
                <section className="container2">
                    <ul className="flex">
                        {allCategory.map((category)=>{
                            return(
                                <li key={category} className={this.state.activeTag===category?'active tag':'tag'} onClick={()=>{this.handleTag(category)}}>{category.toUpperCase()}</li>
                            )
                        })}
                    </ul>
                </section>
                <section className="">
                    <ul className="flex wrap">
                        {alldis.map((dis)=>{
                            return(
                                <li key={dis.id} className='dis'>
                                    <figure>
                                        <img src={dis.img} alt=''/>
                                    </figure>
                                    <div>
                                        <div className="flex">
                                            <h2>{dis.title}</h2>
                                            <h3 className="price">${dis.price}</h3>
                                        </div>
                                        <hr/>
                                        <p>{dis.desc}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </main>
        )
    }
}

export default Tags