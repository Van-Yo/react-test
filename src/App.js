import React, { Component } from 'react'
import {LightsStar} from './components'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            foodList : [
                {id:1,name:'黄焖鸡米饭',price:16},
                {id:2,name:'河南羊肉烩面',price:18}
            ]
        }
    }
    addNewFood = (data)=>{
        let newFoodItem = {
            id:Math.random(),
            name:data,
            price:15
        }
        this.setState({
            foodList:this.state.foodList.concat(newFoodItem)
        })
    }
    render() {
        return (
            <div className="App">
                <h1>Hello, React!123</h1>
                <LightsStar foodList={this.state.foodList} clickToAddFood={this.addNewFood}/>
            </div>
        )
    }
}
