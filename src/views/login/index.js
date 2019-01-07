import React, { Component } from "react";
import { message, Button, Icon } from "antd";
import { get, post } from "util/fetch";
import "./index.less";
import { log } from "util/log";
import { setStore, getStore, removeStore } from "util/store";

export default class index extends Component {
  state = {
    user: "lian",
    password: "english#",
    buttonDisable: false
  };
  handleChange = (e, type) => {
    let { user, password, buttonDisable } = this.state;
    // this.state[type] ß= e.target.value;
    this.setState({
      [type]: e.target.value
    });
  };
  handleKeyDown = e => {
    if (e.keyCode == 13) {
      this.login();
    }
  };
  Interceptor = () => {
    let { user, password } = this.state;

    if (user.length === 0) {
      message.info("请输入账号");
      return false;
    }
    if (password === 0) {
      message.info("请输入密码");
      return false;
    }
    return true;
  };
  login = e => {
    // alert(2);
    if (!this.Interceptor()) {
      return;
    }
    this.setState({
      buttonDisable: true
    });
    let { user, password } = this.state;
    post("/api/admin/login", { user, password })
      .then(res => {
        log(res);
        setStore("token", res.data.data.token);
        setStore("user", user);
        message.success(res.data.returnMsg);
        this.props.history.push("/simple-english");
      })
      .catch(err => {
        log(err);
        message.warn(err.errMsg);
      })
      .finally(() => {
        this.setState({
          buttonDisable: false
        });
      });
  };
  render() {
    const { user, password, buttonDisable } = this.state;
    return (
      <div className="login-container">
        <div className="form-box">
          <div className="title-box">
            <div className="title">用户登录 </div>
          </div>
          <input
            className="input-user"
            type="text"
            placeholder="账号"
            value={user}
            onChange={e => this.handleChange(e, "user")}
          />
          <input
            className="input-password"
            type="password"
            placeholder="密码"
            value={password}
            onChange={e => this.handleChange(e, "password")}
            onKeyDown={this.handleKeyDown}
          />

          <Button loading={buttonDisable} onClick={this.login}>
            登录
          </Button>
        </div>
      </div>
    );
  }
}
