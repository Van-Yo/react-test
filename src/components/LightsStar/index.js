import React, { Component } from 'react'
import Item from './item'

export default class LightsStar extends Component {
    constructor(){
        super()
        this.state = {
            lightStatus : false,
            value : ''
        }
    }
    handerLightClick = () => {
        this.setState({
            lightStatus : !this.state.lightStatus
        })
    }
    handerValueChange = (e) => {
        this.setState({
            value : e.currentTarget.value
        })
    }
    handerDataClick = () => {
        console.log(this.state.value)
    }
    render() {
        return (
            <div>
                <div onClick={this.handerLightClick}>
                    {this.state.lightStatus ? '点赞💙' : '取消💘'}
                </div>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handerValueChange}/>
                </div>
                <div>
                    <button onClick={this.handerDataClick}>点击输出</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.foodList.map(item => {
                                return (
                                    <Item name={item.name} key={item.id}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
