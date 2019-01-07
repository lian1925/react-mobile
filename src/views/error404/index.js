import React, { PureComponent } from "react";
import "./index.less";
import { Button } from "antd";
export default class Error404 extends PureComponent {
  state = {
    height: window.innerHeight - 115
  };
  gotoHomePage = () => {
    this.props.history.push("/");
  };
  render() {
    const { height } = this.state;
    return (
      <div className="error-container" style={{ height }}>
        <div className="content">
          <img src="" alt="" />
          <div className="text">
            <h1>404</h1>
            <p>抱歉，您访问的页面不存在</p>
            <Button onClick={this.gotoHomePage}>返回首页</Button>
          </div>
        </div>
      </div>
    );
  }
}
