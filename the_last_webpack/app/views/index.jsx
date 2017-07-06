import React from 'react';
import Hello from "../component/hello.jsx"; //引入hello组件

class Index extends React.Component{
    render(){
        return <div className="index_container">
                    <Hello text="world"></Hello>
                </div>
    }
}

module.exports = Index;