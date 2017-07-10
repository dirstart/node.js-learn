import React from "react";
import "./hello.css";
class Hello extends React.Component{
    constructor(props){
        super(props);
        // 这个是因为构造器中访问不到this,需要调用super()才能顺利访问this
        this.propTypes = {
            text:React.PropTypes.string
        }
    }
    render(){
        return <div className="hello">
                    hello <span>{this.props.text}</span>
                </div>
    }
}
module.exports = Hello;