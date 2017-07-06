import React from "react";
class Hello extends React.Component{
    constructor(props){
        super(props);
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