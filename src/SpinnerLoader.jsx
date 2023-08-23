import { Component } from "react";
import loader from './loader.gif'

export default class SpinnerLoader extends Component{
    render(){
        return(
            <div className="text-center">
            <img src={loader} style={{height:"50px"}} alt="loading"/>
            </div>
        )
    }
}