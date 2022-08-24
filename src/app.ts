import React, {Component} from "react";
import "./app.less";

const App: React.FC<{
  children: any;
}> = (props) => {
  // props.children 是将要会渲染的页面
  return props.children;
}

export default App;
