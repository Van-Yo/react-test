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
    render() {
        return (
            <div className="App">
                <h1>Hello, React!123</h1>
                <LightsStar foodList={this.state.foodList}/>
            </div>
        )
    }
}
