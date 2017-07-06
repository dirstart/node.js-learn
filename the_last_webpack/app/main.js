var React = require("react");
var ReactDOM = require("react-dom");

import Index from "./views/index.jsx"; //引入index
ReactDOM.render(
        <div>
            <Index></Index>　　//插入index视图
        </div>
        ,document.querySelector(".content")
);