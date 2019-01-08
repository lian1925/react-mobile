import React, { Component } from "react";
import { Menu, Icon, Button, Layout } from "antd";
import { Link } from "react-router-dom";

import { log } from "util/log";
import "./index.less";
const { SubMenu } = Menu;
const { Sider } = Layout;

export default class index extends Component {
  render() {
    let { collapsed, menu_obj } = this.props;
    log(this.props);

    const menu = (
      <div>
        <Menu
          defaultSelectedKeys={[]}
          defaultOpenKeys={[`英语`]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {(menu_obj || []).map((item, index) => (
            <SubMenu
              key={`${item.title}`}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              }
            >
              {(item.children || []).map((subItem, subIndex) => (
                <Menu.Item key={`${subItem.title}-${subIndex}`}>
                  <Link to={subItem.route}>
                    <span>{subItem.title}</span>
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    );
    const sider = (
      <Sider
        collapsed={collapsed}
        trigger={null}
        collapsible
        className="menu-container"
      >
        <div className="icon-container">
          <img src="" alt="" />
        </div>

        {menu}
      </Sider>
    );
    return <div className="menu-layout">{sider}</div>;
  }
}
