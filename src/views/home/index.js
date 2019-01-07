import React, { Component } from "react";
import { setStore, getStore, removeStore } from "util/store";
import SubMenu from "co/submenu";
import {
  Layout,
  Button,
  Icon,
  Menu,
  Dropdown,
  Modal,
  message,
  Avatar
} from "antd";
import {
  HashRouter as Router,
  Switch,
  Link,
  Route,
  withRouter
} from "react-router-dom";
import { log } from "util/log";
import error404 from "@/views/error404";

const { Header, Footer, Sider, Content } = Layout;
const { confirm } = Modal;
import "./index.less";
import { routes, menu_obj, bread } from "./data";

// index;
export default class index extends Component {
  state = {
    collapsed: false,
    breadArray: []
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged = () => {
    let props = this.props.location.pathname;
    let flag = routes.find(item => item.path === props);
    if (!flag || props === "/") {
      this.setState({
        breadArray: []
      });
      return;
    }
    let urlArray = props.split("/");
    let part1 = menu_obj.find(item =>
      item.children.find(j => j.route === `/${urlArray[1]}`)
    );
    let part2 = routes.find(item => item.path === `/${urlArray[1]}`);

    let breadArray = [];
    breadArray.push(part1);
    breadArray.push(part2);
    if (urlArray.length === 3) {
      let part3 = bread[urlArray[2]];
      breadArray.push(part3);
    }
    this.setState({
      breadArray
    });
  };
  componentDidMount() {
    let token = getStore("token");
    if (!token) {
      this.props.history.push("/login");
    }
    this.onRouteChanged();
  }

  handleLogout = () => {
    log("handleLogout");
    let self = this;
    confirm({
      title: "你是否要退出登录?",
      okText: "确认",
      cancelText: "取消",
      onOk() {
        removeStore("token");
        message.success("退出成功");
        self.props.history.push("/login");
        log("OK");
      },
      onCancel() {
        message.success("已取消");
      }
    });
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { collapsed, breadArray } = this.state;
    const router = (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={`route-${index}`}
            exact={route.exact}
            path={route.path}
            component={route.page}
          />
        ))}
        <Route component={error404} />
      </Switch>
    );
    log(router);
    const menu = (
      <Menu>
        <Menu.Item onClick={this.handleLogout}>
          <div>退出登录</div>
        </Menu.Item>
      </Menu>
    );
    const dropdown = (
      <Dropdown overlay={menu}>
        <div className=" dropdown-box">
          {/* <img src="" alt="" /> */}
          <Avatar size={40} shape="square" icon="user" />
          <Icon type="down" />
        </div>
      </Dropdown>
    );
    const header = (
      <Header className="header">
        <div>
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggleCollapsed}
          />
          <span>数据共享平台</span>
        </div>
        {dropdown}
      </Header>
    );
    const breadcrumb =
      breadArray.length === 0 ? null : (
        <div className="breadcrumb">
          <Icon type="home" />
          {breadArray.map((item, index) => {
            if (breadArray.length === index + 1) {
              return <span key={index}>{item.title}</span>;
            } else {
              if (item.path) {
                return (
                  <span key={index}>
                    <Link to={item.path}>{item.title} </Link> /{" "}
                  </span>
                );
              }
              return <span key={index}>{item.title} / </span>;
            }
          })}
        </div>
      );
    return (
      <Layout className="home-container">
        <SubMenu collapsed={collapsed} menu_obj={menu_obj} />
        <Layout>
          {header}

          <Content className="content-container">
            {breadcrumb}
            {router}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
